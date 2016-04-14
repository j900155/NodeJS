var file = "./sqliteDemo.db";                                                            //載入資料庫

var sqlite3 = require("sqlite3").verbose();                                              //載入 sqlite3

var db = new sqlite3.Database(file);                                                     //新增一個sqlite3的資料庫sqliteDemo.db

db.serialize(function() {
  db.run("CREATE TABLE IF NOT EXISTS  TABLENAME (name TEXT,remark TEXT)");               //如果表格TABLENAME不存在，就新增TABLENAME

  var sqlInsert = "INSERT INTO TABLENAME(name,remark) VALUES (?,?)";                     //新增資料
  db.run(sqlInsert,["A","aaa"]);
  db.run(sqlInsert,["B","bbb"]);
  db.run(sqlInsert,["C","ccc"]);
  db.run(sqlInsert,["D","ddd"]);

  var sqlSelect = "SELECT rowid AS id, name,remark FROM TABLENAME";                      //查詢資料
  db.each(sqlSelect, function(err, row) {
    console.log(row.id + ": " + row.name + ":" + row.remark);                            //印出TABLENAME的id,NAME,REMARK
  });

  var sqlUpdate="update TABLENAME set remark=? where name=?" ;                           //更新資料
  db.run(sqlUpdate,["J","D"]);                                                           //找出NAME="D"的欄位將REMARK="J"

  var sqlUpdateSelect = "SELECT rowid AS id, name,remark FROM TABLENAME where name=?";   //查詢更新後的資料
  db.each(sqlUpdateSelect,"J", function(err, row) {
    console.log(row.id + ":" + row.name + ":" + row.remark);                             //印出NAME="D"的id,NAME,REMARK
  });

  var sqlDelete = "delete from TABLENAME";                                               //刪除資料
  db.run(sqlDelete);

});

db.close();                                                                             //結束連接
