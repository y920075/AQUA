const express = require('express');
const moment = require('moment-timezone');
const multer = require('multer');
const upload = multer({dest: 'tmp_uploads/'});
const router = express.Router();
const fs =require('fs')
const db = require(__dirname + '/../db_connect');


//取得文章資料
router.get('/blog/', (req, res)=>{
    // console.log(req.query)
    let data = {
        'status': 200,
        'msg': '請求成功',
        newpost:[],
        result:[],
        menber_blog:[]
    }

    const searchType = req.query.blogInfoData ? `WHERE \`categoryName\`= "${req.query.blogInfoData}"`: '';

    const perPage = 50
    // let where = []

    let totalRows, totalPages
    let page = req.query.page ? parseInt(req.query.page) : 1
    data.page = page
    const t_sql = "SELECT * FROM \`blog\`";
    db.queryAsync(t_sql)
        .then(result=>{
            totalRows = result[0].num; //總筆數
            totalPages = Math.ceil(totalRows/perPage); //總頁數
            
            if(page<1) page=1;
            if(page>totalPages) page=totalPages;
    
            const sql = `SELECT * FROM \`blog\` ORDER BY id DESC LIMIT ${(page-1)*perPage}, ${perPage}`;
            data.totalRows = totalRows
            data.totalPages = totalPages
            return db.queryAsync(sql);

            // const menber_blogsql =`SELECT * FROM \`blog\` INNER JOIN \`my_member\` ON \`blog\`.\`menberId\` = \`my_member\`.\`memberId\`;
            // return db.queryAsync(menber_blogsql);
        })

.then(result=> {
    const categoryName_sql=  `SELECT * FROM \`blog\`  ${searchType} ORDER BY \`id\` DESC , \`blogTitle\` DESC `;
    return db.queryAsync(categoryName_sql)
    
})
// .then(result=> {
//     data.menber_blog = result
//     const menber_blogsql = `SELECT \`blog\`.*,\`my_member\`.* FROM \`blog\` INNER JOIN \`my_member\` ON \`blog\`.\`menberId\` = \`my_member\`.\`memberId\``;
//     return db.queryAsync(menber_blogsql);
//     console.log(menber_blogsql)
// })  

.then(result=> {
    data.result = result
    const newpostsql = `SELECT \`blog\`.\`menberId\`,\`blog\`.\`id\`,\`blog\`.\`blogId\`,\`blog\`.\`blogTitle\`,\`blog\`.\`categoryName\`,\`blog\`.\`blogContent\`,\`blog\`.\`tagName1\`,\`blog\`.\`tagName2\`,\`blog\`.\`blogImages\`,\`blog\`.\`blogLike\`,\`my_member\`.\`memberId\`,\`my_member\`.\`avatar\`,\`blog\`.\`memberImg\` FROM \`blog\` LEFT JOIN \`my_member\` ON \`blog\`.\`menberId\` = \`my_member\`.\`memberId\` ORDER BY \`blog\`.\`id\` DESC`;
    // `SELECT  FROM \`blog\` ORDER BY id DESC LIMIT ${(page-1)*perPage}, ${perPage}`
    return db.queryAsync(newpostsql);
    
})
.then(result=>{
    data.newpost = result
           if (result.length>0) {
                res.json(data)
            } else{
                res.status(404).json({
                    'status': 404,
                    'msg': '查無符合條件'
                })
           }
        })
        .catch(err=>{
            console.log(err)
            return res.status(500).json(err)
        })
})

//取得測欄會員資料

//取得評論資料
router.get('/blog/comments', (_req, res)=>{
    let data = {
        'status': 200,
        'msg': '請求成功',
        result:[]
    }

    const blogComments_sql = `SELECT * FROM \`blog_comments\``;
    return db.queryAsync(blogComments_sql)

    .then(result=>{
        data.result = result
            if (result.length>0) {
                    res.json(data)
                } else{
                    res.status(404).json({
                        'status': 404,
                        'msg': '查無符合條件'
                    })
                }
    })
    .catch(err=>{
        console.log(err)
        return res.status(500).json(err)
    })
})
//新增按讚、收藏
// router.post('/blog/like', upload.none(), (req, res)=>{
//     console.log(req.body)
//     const sql =`UPDATE \`blog\` SET \`blogLike\`= \`blogLike\`+ ${req.body.blogLike}=? WHERE id=?`
    
//     db.queryAsync(sql, [
//         req.body.blogLike,
//         req.body.id
//         ])

//     .then(result=>{
//         // comments.status = 202;
//         // comments.commentsData = r;
//         // comments.success = true;
//         console.log('新增資料寫入成功')
//         return res.json(result)
//     })
//     .catch(err=>{
//          console.log(err)
//     })

// })


//新增評論資料
router.post('/blog/addComments', upload.none(), (req, res)=>{
    res.json(req.body)
    // 先檢查輸入
    req.session.mId = "M20030099"
    req.body.mImg = "avatar2.jpg"

    const comments = {
        success:false,
        error:'',
        status:0,
        body:req.body,
    };

    const sql ='INSERT INTO \`blog_comments\` (\`mId`\, \`content\`, \`blogId\`, \`mImg`\) VALUES (?, ?, ?, ?)'

    db.queryAsync(sql, [
        req.session.mId,
        req.body.content,   
        req.body.sendId,    
        req.body.mImg
        ])

    .then(r=>{
        comments.status = 202;
        comments.commentsData = r;
        comments.success = true;
        console.log('新增資料寫入成功')
        return res.json(comments)
    })
    .catch(err=>{
        //  res.render(err)
    })

    
})

//新增文章
router.post('/add', upload.single('addImg'), (req, res)=>{
    // console.log(req.body)
    req.session.menberId = "M20030099"
    req.body.memberImg = "avatar2.jpg"

    const output ={
        success: false,
        error:'',
        status: 0,
        body: req.body,
    }


    const sql = `INSERT INTO \`blog\`( \`menberId\`, \`blogTitle\`,\`categoryName\`, \`blogContent\`, \`tagName1\`,\`tagName2\`, \`blogImages\`, \`memberImg\`) VALUES(?, ?, ?, ?, ?, ?, ?, ?)`;


    if(req.file && req.file.originalname){
        switch (req.file.mimetype){
            case "image/jpeg":
            case "image/png":
            case "image/gif":
                fs.rename(req.file.path,'./public/images/blogImg/'+req.file.originalname,error=>{
                    if(error){
                        output.success = false;
                        output.msg = "無法搬動檔案";
                    }else{
                        output.success = true;
                        output.url = './public/images/blogImg/'+req.file.originalname;
                        output.msg = '';
                    }
                })
                break;
            default:
                fs.unlink(req.file.path, error=>{
                    output.msg = "不能接受這種檔案格式"
                    res.json(output);
                });
        }
    }else{
        res.send("66666666");
    }

    db.queryAsync(sql , [
        req.session.menberId,
        req.body.blogTitle,
        req.body.categoryName,
        req.body.blogContent,
        req.body.tagName1,
        req.body.tagName2,
        req.file.originalname,
        req.body.memberImg 
        ])

    .then(r=>{
        output.result = r;
        output.success = true;
        console.log('result:', r);
         res.json(output);
    })
    .catch(error=>{
        return res.json(output);
    })
})

//更新文章
router.post('/edit', upload.single('addImg'), (req, res)=>{
    const sql = `UPDATE \`blog\` SET \`blogTitle\`=?,\`categoryName\`=?,\`blogContent\`=?,\`tagName1\`=?,\`tagName2\`=?,\`blogImages\`=? WHERE id=?`;
    console.log(req.body)
    const output ={
        success: false,
        error:'',
        status: 0,
        body: req.body,
    }

    if(req.file && req.file.originalname){
        switch (req.file.mimetype){
            case "image/jpeg":
            case "image/png":
            case "image/gif":
                fs.rename(req.file.path,'./public/images/blogImg/'+req.file.originalname,error=>{
                    if(error){
                        output.success = false;
                        output.msg = "無法搬動檔案";
                    }else{
                        output.success = true;
                        output.url = './public/images/blogImg/'+req.file.originalname;
                        output.msg = '';
                    }
                })
                break;
            default:
                fs.unlink(req.file.path, error=>{
                    output.msg = "不能接受這種檔案格式"
                    res.json(output);
                });
        }
    }else{
        res.send("66666666");
    }
    const abc=[
        req.body.blogTitle,
        req.body.categoryName,
        req.body.blogContent,
        req.body.tagName1,
        req.body.tagName2,
        req.file.originalname,
        req.body.id
    ]
    db.queryAsync(sql , abc)
console.log(abc)
    .then(r=>{
        console.log('修改資料更新成功')
        console.log(r)
        return res.json(req.body)
        // res.redirect(req.baseUrl + '/list')
    })
    .catch(err=>{
        console.log('修改資料更新失敗')
        return res.json(err)
    })
})



router.post('/del/:id', (req, res)=>{
    const sql = "DELETE FROM `blog` WHERE `id`=?";
    db.queryAsync(sql, [req.params.id])
    .then(r=>{
        console.log(r);
        res.json(r);
    })
})





router.get('/admin1/:name?/:age?', (req, res)=>{
    res.json(req.params);

})

module.exports = router;