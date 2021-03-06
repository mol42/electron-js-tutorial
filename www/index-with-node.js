// renderer process tarafında NodeJS entegrasyonu
// açtığımız zaman require yardımıc ile NodeJS ile
// varsayılan gelen kütüphanelere erişebiliyoruz
// hatta node_modules altında gelen kütüphanelere de
// erişebiliyoruz !
const fs = require("fs");

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