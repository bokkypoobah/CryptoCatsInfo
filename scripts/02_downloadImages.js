var fs = require('fs');
const util = require('util');
// npm install node-fetch
const fetch = require('node-fetch');
// const BASTARDDATA = require('./bastardData.js');
const CRYPTOCATSMETADATA = require('./cryptoCatsMetadata.json');

const downloadFile = (async (url, path) => {
  const res = await fetch(url, { timeout: 15000 });
  const fileStream = fs.createWriteStream(path);
  await new Promise((resolve, reject) => {
    res.body.pipe(fileStream);
    res.body.on("error", reject);
    fileStream.on("finish", resolve);
  });
});

// console.log(JSON.stringify(BASTARDDATA.BASTARDDATA["0"]));

async function doit() {
  // console.log("Hello: " + JSON.stringify(CRYPTOCATSMETADATA));
  for (const [tokenId, token] of Object.entries(CRYPTOCATSMETADATA)) {
    const sourceUrl = token.image;
    const filename = "./images/cryptocat_" + tokenId + ".png";
    console.log(tokenId + " " + sourceUrl + " " + filename);
    while (!fs.existsSync(filename)) {
      console.log(filename + " downloading");
      try {
        await downloadFile(sourceUrl, filename);
      } catch (e) {
        console.error("Error downloading: " + sourceUrl);
      }
    // } else {
    //   console.log(filename + " exists");
    }
  }
}
doit();

console.log(process.cwd());
