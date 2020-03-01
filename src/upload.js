const multer = require('multer');
const extMap = {
    "image/jpeg" :　".jpg",
    "image/png" :　".png",
    "image/gif" :　".gif",
};

/*
    這樣的作法就不用先暫存在搬移檔案，比較方便
*/


const storage = multer.diskStorage({
    //destination = 要存放的檔案位置
    destination: (req,file,cb)=>{
        cb(null,__dirname + '/../public/images/classImg')
    },
    //filename = 檔案名稱
    filename: (req,file,cb)=>{
        //先用拿到的file.mimetype比對物件extMap有沒有符合條件
        //有符合條件才給予新檔名，否則就給錯誤
        let ext = extMap[file.mimetype];
        if(ext){
            const date = new Date().getTime()
            cb(null,date + ext);
        } else {
            cb(new Error('不符合格式'))
        }
    }
})

// !!extMap[file.mimetype] 相當於 extMap[file.mimetype] ? true : false
//一樣是去判斷檔案類型符不符合要求的格式
const fileFilter = (req,file,cb)=> cb(null,!!extMap[file.mimetype]);

const upload = multer({
    storage,
    fileFilter
});

module.exports = upload;