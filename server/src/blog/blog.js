const express = require('express');
const moment = require('moment-timezone');
const multer = require('multer');
const upload = multer({dest: 'tmp_uploads/'});
const router = express.Router();
const fs =require('fs')
const db = require(__dirname + '/../db_connect');

// 文章列表(用params)
// router.get('/blog/:page?', (req, res)=>{
//     console.log("456")
//     const perPage = 8;
//     let totalRows, totalPages
//     let page = req.params.page ? parseInt(req.params.page) : 1;

//     const t_sql = "SELECT COUNT(1) num FROM `blog`";
//     db.queryAsync(t_sql)
//         .then(result=>{
//             totalRows = result[0].num; //總筆數
//             totalPages = Math.ceil(totalRows/perPage); //總頁數
            
//             if(page<1) page=1;
//             if(page>totalPages) page=totalPages;
    
//             const sql = `SELECT * FROM \`blog\` ORDER BY id DESC LIMIT ${(page-1)*perPage}, ${perPage}`;
    
//             return db.queryAsync(sql);
//         })
//         .then(result=>{
//                         // const fm = "YYYY-MM-DD";
//             // result.forEach((row, idx)=>{
//             //     row.birthday = moment(row.birthday).format(fm)
//             // })


//             res.json({
//                 totalRows,
//                 totalPages,
//                 page,
//                 rows: result
//             })
//         })
// })
router.get('/blog', (req, res)=>{
    console.log('')
    const perPage = 8
    let where = []
    if (req.query.category) where.push(`\`categoryName\` ='${req.query.category}'`)
    if (req.query.brand) where.push(`\`tagName\` ='${req.query.tag}'`)
    // if (req.query.price) where.push(`\`itemPrice\` > '${req.query.price.split(",")[0]}' AND \`itemPrice\` < '${req.query.price.split(",")[1]}'`)
    // if(where.length>0){where = 'AND '+where.join(' AND ')}else{where=''}
    

    let totalRows, totalPages
    let page = req.query.page ? parseInt(req.query.page) : 1

    const t_sql = "SELECT COUNT(1) num FROM `blog`";
    db.queryAsync(t_sql)
        .then(result=>{
            totalRows = result[0].num; //總筆數
            totalPages = Math.ceil(totalRows/perPage); //總頁數
            
            if(page<1) page=1;
            if(page>totalPages) page=totalPages;
    
            const sql = `SELECT * FROM \`blog\` ORDER BY id DESC LIMIT ${(page-1)*perPage}, ${perPage}`;
    
            return db.queryAsync(sql);
        })
.then(result=>{
           if (result.length>0) {
                res.json({
                    'status': 200,
                    'msg': '請求成功',
                    totalRows,
                    totalPages,
                    page,
                    result
                })
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


router.get('/add', (req, res)=>{
     res.send('123');
})

router.post('/add', upload.single('av'), (req, res)=>{
    const output ={
        success: false,
        error:'',
        status: 0,
        body: req.body,
    }


    const sql = "INSERT INTO `blog`(`categoryName`, `blogTitle`, `blogContent`, `tagName1`,`tagName2`, `blogImages`) VALUES(?, ?, ?, ?, ?, ?)";

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
        req.body.categoryName,
        req.body.blogTitle,
        req.body.blogContent,
        req.body.tagName1,
        req.body.tagName2,
        req.file.originalname
        ])

    .then(r=>{
        output.result = r;
        output.success = true;
        console.log('result:', r);
         res.json(output);
    })
    .catch(error=>{
        console.log(error);
        return res.json(output);
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



router.get('/edit/:id', (req, res)=>{
    console.log('123')
    const id = req.params.id;
    const sql = `SELECT * FROM \`blog\` WHERE id=${id}`;
    db.queryAsync(sql)
        .then(result=>{
            console.log(result)
            return res.json(result)
        })
        .catch(error=>{
            res.redirect(req.baseUrl);
        })
    //res.render('address-book/edit');
});

router.post('/edit/:id', upload.single('av'), (req, res)=>{
    const sql = `UPDATE \`blog\` SET \`blogTitle\`=?,\`categoryName\`=?,\`blogContent\`=?,\`tagName1\`=?,\`tagName2\`=?,\`blogImages\`=? WHERE id=?`;

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
    db.queryAsync(sql , [
        req.body.blogTitle,
        req.body.categoryName,
        req.body.blogContent,
        req.body.tagName1,
        req.body.tagName2,
        req.file.originalname,
        req.params.id
    ])    

    .then(r=>{
        console.log('修改資料更新成功')
        return res.json(req.body)
        // res.redirect(req.baseUrl + '/list')
    })
    .catch(err=>{
        console.log('修改資料更新失敗')
        return res.json(err)
    })
})
//CRUD

/*

/list
/list/:page?

/insert -get
/insert -post

/edit/:sid -get
/edit/:sid -post

/del -get

*/

router.get('/admin1/:name?/:age?', (req, res)=>{
    res.json(req.params);

})

module.exports = router;

