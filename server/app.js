const express = require("express");
const WXBizDataCrypt = require("./aes/WXBizDataCrypt");

const app = express();

app.get("/aes", function(req, res) {
  const { appId, sessionKey, encryptedData, iv } = req.query;

  console.log(appId);
  console.log(sessionKey);
  console.log(encryptedData);
  console.log(iv);

  const pc = new WXBizDataCrypt(appId, sessionKey);
  const data = pc.decryptData(encryptedData, iv);
  console.log(data);
  res.end(JSON.stringify(data));
});

var server = app.listen(8081, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("应用实例，访问地址为 http://%s:%s", host, port);
});
