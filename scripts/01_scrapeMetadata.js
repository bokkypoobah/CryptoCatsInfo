var fs = require('fs');
const util = require('util');

async function doIt() {
  const tokens = {};
  for (let tokenId = 0; tokenId < 625; tokenId++) {
    const url = "https://metadata.thetwentysix.io/cryptocats/" + tokenId;
    const data = await fetch(url).then(response => response.json());
    tokens[tokenId] = data;
  }
  // console.log(JSON.stringify(tokens, null, 2));

  const filename = "cryptoCatsMetadata.json";
  fs.writeFile(filename, JSON.stringify(tokens, null, 2), (err) => {
    if (err) return console.error(err);
    // console.log("File successfully written !");
  });
}

doIt();
