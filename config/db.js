const settings = {
    //cookieSecret: 'myblog',
    db: 'test2',
    //host: 'localhost',
    dbUrl: 'mongodb://localhost:27017/test2'
    //dbUrl: 'mongodb://159.75.0.42:27017/test2'
};
const MongoClient = require('mongodb').MongoClient;
//const ObjectId = require('mongodb').ObjectId;
const url = settings.dbUrl;


//1.插入单条数据
exports.insertOne = function (collectionName, json) {
    return MongoClient.connect(url).then(db => {
        return  db.collection(collectionName).insertOne(json).finally(()=> {
            db.close();
        })
    }).catch(err => {
        console.log(err,'数据库连接失败')
    });
};


// // 2.插入多条数据
exports.insertMany = function(collectionName,json){
    return MongoClient.connect(url).then(db => {
        return  db.collection(collectionName).insertMany(json).finally(()=> {
            db.close();
        })
    }).catch(err => {
        console.log('数据库连接失败')
    });
};

 // 3. 删除一条数据
exports.deleteOne = function(collectionName,json){
    return MongoClient.connect(url).then(db => {
        return  db.collection(collectionName).deleteOne(json).finally(()=> {
            db.close();
        })
    }).catch(err => {
        console.log('数据库连接失败')
    });
};
// 4. 查询数据
exports.findOne = function(collectionName,json,callback){
    MongoClient.connect(url).then(db => {
        return db.collection(collectionName).find(json).toArray((err, result) => {
            callback(err,result)
        })
    }).catch(err => {
        console.log('数据库连接失败')
    });
};

 // 5. 更新一条数据
exports.update = function(collectionName,json){
    return MongoClient.connect(url).then(db => {
        return  db.collection(collectionName).updateOne(json.name,json.target).finally(()=> {
            db.close();
        })
    }).catch(err => {
        console.log('数据库连接失败')
    });
};
// // 4. 删除多条数据
// exports.deleteMany = function(collectionName,json,callback){
//     _connectDB(function(err,db){
//         db.collection(collectionName).deleteMany(json).then(callback.fulfilled).catch(callback.rejected(err));
//         db.close();
//     })
// };
//
// 5. 查找多条数据
// exports.findMany = function(collectionName,json,callback){
//     _connectDB(function(err,db){
//         db.collection(collectionName).find(json.data).sort(json.sort).skip(json.skip).limit(json.limit).toArray(function (err, result) {
//             if (err) throw err;
//             console.log(result);
//             db.close();
//         }).then(callback.fulfilled).catch(callback.rejected);
//     })
// };

// exports.findTagArr = function(collectionName, json, callback){
//     _connectDB(function(err, db){
//         db.collection(collectionName).distinct(json.field, (err, result) => {
//             if(err == null){
//                 let tagArr = result;
//                 let res = {};
//                 tagArr.forEach((item, index)=>{
//                     db.collection(collectionName).find({tag: item}).toArray((err2, tagEssay) => {
//                         if(err2 == null){
//                             res[item] = tagEssay;
//                             if(index == tagArr.length-1){
//                                 callback(1, res);
//                             }
//                         }else{
//                             callback(0, {err: 'error'})
//                         }
//                     })
//                 })
//             }else{
//                 callback(0, {err: 'error'});
//             }
//             db.close();
//         })
//     })
// };
