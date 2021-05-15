//載入 express 套件
const express = require("express");
// 建立 Application 物件
const app = express();
// 網址的組成 http://主機名稱/路徑?要求字串
// 要求字串 : 欄位名稱=資料&欄位名稱=資料
// 處理路徑/
app.get("/", function (req, res) {
    //res.send("<h3>Hello Express</h3>test html");
    res.sendFile(__dirname + "/public/index.html");
})
// 處理路徑 /getData?keyword=使用者輸入的關鍵字
app.get("/getData", function (req, res) {
    let keyword = req.query.keyword;
    
    let data = [
        {
            name: "iPhone",
            price: 40000
        },
        {
            name: "Mac",
            price: 50000
        },
        {
            name: "Ipad",
            price: 60000
        }
    ];
    data = data.filter(function(item){
        return item.name.toLowerCase() == keyword.toLowerCase();
    })
    res.send(data);
    
})
// 啟動開發用伺服器在 localhost:3000
app.listen(3000, function () {
    console.log("Server Started");
})