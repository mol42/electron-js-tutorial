const fs = require("fs");

const { dialog } = require('electron')

console.log(dialog.showOpenDialog({ properties: ['openFile', 'multiSelections'] }))

fs.open("www/index.html", "r", (err, fd) => {
  if (err) throw err;
  fs.fstat(fd, (err, stat) => {
    if (err) throw err;
    // use stat
    console.log(stat);
    // always close the file descriptor!
    fs.close(fd, (err) => {
      if (err) throw err;
    });
  });
});