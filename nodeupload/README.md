# Form&ajax$node实现图片上传

### 结构和样式

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    
    <!--
		结构和样式
	-->
    <style>
        form {
            width: 300px;
            height: 400px;
            border: 1px solid #000;
            padding-top: 50px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        input {
            height: 28px;
            margin-top: 40px;
            width: 150px;
        }
        
        #headerImg {
            width: 80px;
            height: 80px;
            border: 1px solid #000;
            border-radius: 50%;
        }
        
        #img {
            border-radius: 50%;
            width: 100%;
            height: 100%;
        }
    </style>
    <h1>form&ajax图片上传</h1>
    <!-- <form action="/fileUpload" method="post" enctype="multipart/form-data"> -->
    <form>
        <div id="headerImg"></div>
        <input type="file" id="file">
        <input type="submit" value="更改头像">
    </form>
    <div id="imgFile"></div>
    
    <!-- 
    	ajax 实现上传图片
		注意俩点设置:
			contentType:false, 设置让浏览器决定 contentType 上传数据类型
			processData:false, 不要序列化上传的数据
    -->
    <script src="http://code.jquery.com/jquery-2.1.1.min.js"></script>
    <script>
        $(function() {
            $('form').submit(function(e) {
                var formData = new FormData();
                if (!$("#file")[0].files[0]) {
                    alert('请选择图片')
                    return false;
                }
                formData.append('file', $("#file")[0].files[0])
                $.ajax({
                    type: 'post',
                    url: '/fileUpload',
                    data: formData,
                    processData: false,
                    contentType: false,
                    success: function(data) {
                        console.log(data)
                        $('#headerImg').append(data)
                    }
                })
                return false;
            })
        })
    </script>
</body>

</html>
```





### form提交

```html
form 提交是同步提交
如果用form 提交文件
	-> 必须是post提交
	-> form 必须设置 enctype = "multipart/form-data"
<form action="/fileUpload" method="post" enctype="multipart/form-data"> 
     <div id="headerImg"></div>
     <input type="file" id="file">
     <input type="submit" value="更改头像">
</form>
```



### ajax提交

```js
    /* 
     * ajax 实现上传图片
     * 注意俩点设置:
     * contentType:false, 设置让浏览器决定 contentType 上传数据类型
     * processData:false, 不要序列化上传的数据
     * 
     */
    <script src="http://code.jquery.com/jquery-2.1.1.min.js"></script>
    <script>
        $(function() {
            $('form').submit(function(e) {
                var formData = new FormData();
                if (!$("#file")[0].files[0]) {
                    alert('请选择图片')
                    return false;
                }
                formData.append('file', $("#file")[0].files[0])
                $.ajax({
                    type: 'post',
                    url: '/fileUpload',
                    data: formData,
                    processData: false,
                    contentType: false,
                    success: function(data) {
                        console.log(data)
                        $('#headerImg').append(data)
                    }
                })
                return false;
            })
        })
    </script>
```

### Node

```js
const express = require('express')
const app = express()
const path = require('path')

// 图片处理包
const formidable = require('formidable')

// 引入 ejs模板插件 并配置
const ejs = require('ejs')
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// 处理静态文件
app.use('/statics', express.static('statics'))

// ejs 模板引擎的演示
// app.get('/', (req, res) => {
//     // res.send('hello world')
//     res.render('index', {
//         data: [1, 2, 3, 4],
//         name: "zs"
//     })
// })

// 处理form 页面请求
app.get('/form', (req, res) => {
    res.render('form')
})

// 处理上传图片接口
app.post('/fileUpload', (req, res) => {
    
    const form = new formidable.IncomingForm();
    // 设置图片存放路径
    form.uploadDir = "./statics/uploads"
    // 设置保留后缀名 默认为false
    form.keepExtensions = true
    form.parse(req, function(err, fields, files) {
        /*
         *	fields 普通字段
         *  files  文件对象
         */
        if (err) {
            console.log(err)
        }
        res.send(`<img id = "img" src="/${files.file.path}" />`)
    });
})

app.listen('3000', (err) => {
    console.log('3000 running.....')
})
```

