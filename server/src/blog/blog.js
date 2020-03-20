const express = require('express');
const moment = require('moment-timezone');
const multer = require('multer');
const upload = multer({dest: 'tmp_uploads/'});
const router = express.Router();
const db = require(__dirname + '/../db_connect');

router.get('/blog/:page?', (req, res)=>{
    const perPage = 8;
    let totalRows, totalPages
    let page = req.params.page ? parseInt(req.params.page) : 1;

    const t_sql = "SELECT COUNT(1) num FROM `blog`";
    db.queryAsync(t_sql)
        .then(result=>{
            totalRows = result[0].num; //總筆數
            totalPages = Math.ceil(totalRows/perPage); //總頁數
            
            if(page<1) page=1;
            if(page>totalPages) page=totalPages;
    
            const sql = `SELECT * FROM \`blog\` LIMIT ${(page-1)*perPage}, ${perPage}`;
    
            return db.queryAsync(sql);
        })
        .then(result=>{
                        // const fm = "YYYY-MM-DD";
            // result.forEach((row, idx)=>{
            //     row.birthday = moment(row.birthday).format(fm)
            // })


            res.json({
                totalRows,
                totalPages,
                page,
                rows: result
            })
        })
})


router.get('/add', (req, res)=>{
     res.send('123');
})

router.post('/add', upload.none(), (req, res)=>{
    const output ={
        success: false,
        error:'',
        status: 0,
        body: req.body,
    }


    const sql = "INSERT INTO `blog`(`menberId`, `idd`, `blogId`, `blogCategory`, `blogTitle`, `blogContent`, `blogImages`, `created_at`) VALUES(?, ?, ?, ?, ?, ?, ?, NOW())";

    db.queryAsync(sql , [
        req.body.menberId,
        req.body.idd,
        req.body.blogId,
        req.body.blogCategory,
        req.body.blogTitle,
        req.body.blogContent,
        req.body.blogImages,
    ])

    .then(r=>{
        output.result = r;
        output.success = true;
        console.log('result:', r);
        return res.json(output);
    })
    .catch(error=>{
        console.log(error);
        return res.json(output);
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

