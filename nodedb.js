var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/comic'
MongoClient.connect(url,function(err,db){
    if(err) throw err;
    console.log('数据库已创建')
    var dbase = db.db('comic')
    dbase.createCollection('site',function(err,res){
        if(err) throw err
        console.log('创建集合！')
        db.close
    })
})