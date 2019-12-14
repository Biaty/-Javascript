> ### AJAX  => 前后端数据交互的技术  12.14

    Asynchronous(异步) Javascript(js) And(和) XML(可扩展标记语言)
    异步的js 和 xml

- 目的:从后台拿数据

- 优点:可以局部刷新,减轻服务器压力,提升用户体验

- 难点:
    - 如何操作数据(各种数据类型的应用)
    - 拿到数据之后作什么,如何处理
- 对比
    - 传统的请求

    ``` 
        // 会刷新了页面
        action:请求的地址
        method:请求的方式(get,post...)
        name="user",name="pw":字段
            -> user=xxmz&pw=1234
    ```
> #### ajax 的交互模型
    - 创建一个XMLHttpRequest对象  
    - 填写请求方式，和请求地址，是否异步
    - 发送请求
    - 监听数据响应
    - 接收到数据

> #### 写一个ajax
    1. 创建一个电话
    2. 输入号码
    3. 按绿色键拨打
    4. 等待
    5. 通话
    ```
        user.onblur = function(){
            // 发起ajax 请求 (打电话模式)
            let xhr = new XMLHttpRequest;    // 创建一个电话
            xhr.open('get','/get?user='+this.value,true)    // 输入号码
            xhr.send();            // 按绿色按钮拨打
            xhr.onload = function(){
                console.log(JSON.parse(xhr.responseText))   // 通话
                <!--                     
                    let d = JSON.parse(xhr.responseText);    //后台返回的数据
                    if(d.code === 0){
                        user.style.border = '1px solid red';
                    }else if(d.code === 1){
                        user.style.border = '1px solid green';
                    } 
                -->
            }
            console.log()   //主线程
        }   
    ```
- 工作中请求方式
    ```
        $.ajax({})
        fetch('')
        axios.get('')
        wx.request('')
        jsonp_fetch('')
    ```
- `get写法`
    ```
    user.onblur = function(){
        let xhr = new HTMLhttpRequset()
        xhr.open('get','/get?user='+this.value,ture)
        xhr.send('user'+this.value)
        xhr.onload = function(){
            console.log(xhr.responseText)
        }
    }
    ```

- `post写法`
    ```
        user.onblur = function(){
            let xhr = new HTMLhttpRequset()
            xhr.open('post','/post',true)                  // 是否异步
            xhr.setquestHeader('Content-Type','application/x-www-form-urlencoded')
            xhr.send('user'+this.value)
            xhr.onload = function(){
                console.log(xhr.responseText)
            }
        }
    ```

- `fetch 写法`
    ```
    fetch('/get?user='+user.value+'&pw='+pw.value).then(d=>d.json()).then(d=>{
        console.log(d);
    })
    ```
- `真实数据中的ajax`  
    真实数据发开中 封装ajax 看不见send
    结构
    ```
        $.ajax({
            method:'post',
            url:'http://www.baidu.com/s',
            data:{
                wd : 'zhufeng'
            },       
            dataType:'jsonp',
            success:function(data){
                console.log(data)
                data.foreach(item=>{
                    let $li = $('<li>'+ietm.q+'</li>');
                    $('#ul').append($li);
                })
            }
        })
    ```
> #### get post  
    后台文档会写清楚是 get 还是 post

- `get`  
    - 通过`url`方式进行请求
    - 速度`快`,三步就能请求到
    - 被浏览器`缓存` 相对不安全  
        在请求的时候会显示在地址栏或者历史记录里面查到
    - 请求`体积有限` (会根据浏览器的标准来限制), 传大的东西传不了
    - %+ 两位
    - `中文需要转码` encodeRL('方')   中文 -> 码
        - 输入的内容是中文的时候，在IE下会出现错误请求和返回
        - 原因: 是因为IE的低版本在解析中文的时候解析会有问题。
        - 解决方案 :
            - 把中文转成URI编码
                ```
                encodeURI('续') -> %E7%BB%AD
                encodeURIComponent
                ```
            - URI编码转中文  
                ```
                decodeURI('%E7%BB%AD') -> 续
                decodeURIComponent('%E7%BB%AD')
                ```
    - 在低版本IE下有缓存问题(/get?user=liucheng)  
        - 第一次和第二次请求的url是一致的那么第二次会走第一次的缓存  
        - 解决:
            - 第一种:不用get 用 post
            - 第二种:每次url都不一致  
                    ```
                    /get?user=liucheng&random=3213321321
                    /get?user=liucheng&random=3213325748
                    ```

- `post`
    - 不走url,请求方式走`浏览器`发送,速度相对于get要慢
    - 比get`慢`,跟用户相关的信息,发送体积比较大的文件,`至少6步`才能成功发送请求
    - 理论上`体积无限大`
    - 不会被浏览器缓存 相对安全
    - 通过`send`  数据放在send中
        ```
            xhr.open('post','post')     // 把传后端的数据放在send中
            xhr.send('user='+this.value)

            xhr.setquestHeader('Content-Type','application/x-www-form-urlencoded')
        ```
    - 必须添加请求头
        ```
        xhr.setRequestHearder('content-type','application/x-www-form-urlencoded');
        ```
> #### get写法 的缓存  
          
    ```
    user.onblur = function(){
        var xhr = new XMLHttpRequest;
        xhr.open('get','/get?user='+encodeURI(this.value)+'&myNizp='+Date.now(),true);
        xhr.send();
        xhr.onload = function(){
            console.log(xhr.responseText);
        }
    }
    ```
> #### Ajax 的 url

    url:
        http://localhost:80/3_ajax.html?page=1#hash=xy;
- `协议`  =>  http://
    - http://    =>   超文本传输协议
    - https://   =>   比http更加安全
    - file://    =>   本地文件传输传输协议
    - htp        =>   文件传输协议

- `域名`   =>  localhost  
    IP的别名
    - localhost
    - 14.215.177.39
    - baidu

- `端口`    =>   80  
    放在域名冒号后面的
    - 服务器默认端口为80

- `文件路径` =>  3_ajax.html  
    接口


- `查询信息`  =>  ?page=1 & id = 0 & wd=
    - 一个参数与另一个擦书用&符分割

- `hash`信息  =>   hash=xy

> #### ajax 常用属性和事件
- `onerror`         // 请求失败
- `onload`          // 请求成功
- `onprogress`      // 上传
- `onreadystatechange`    // 监听状态的变化 存储函数 ready

- `readstate`       // 状态进行到了哪一步, 0-4 一共5步, 状态为4的时候请求完成 0监听不到

- `reponseText`     // 后端返回的数据
- `responseXML`     // xml 的 document对象
- `status`          // HTTP状态码 比如:200 404

> #### ajax封装 属性
- `datatype:'json'`  // 要请求的数据格式   json xml
- `url:''`
- `data:{}`
- `success`          // 成功
- `method:get`       // 请求方式  get post
- `timeout:0`        // 设置超时时间
- `ontimeout:function(){}`  // 超时之后干嘛
- `fail:function(){}`//失败之后干嘛

- `created:function(){}`    //当ajax请求的时候
- `unmount:function(){}`    // 当ajax请求完毕




> ### 服务器
> #### 如何启动服务器
- 点击服务器文件(hello world) (条件不能是中文)
- `安装依赖`  
    看看有没有node_modules 文件 ,有就不用管 ,没有要安装依赖文件
    - 第一种方式: shift + 鼠标右击  选择在此处打开终端
    - 第二种方式: 把服务器文件拖到vscode中,点击终端
        - npm install 安装依赖
- `运行服务器`
    1. 输入npm run install 或者输入 node app
    2. 按tab键 (自动补齐)
- `打开方式`  
    浏览器输入 localhost/xx.html
        - 默认打开的是 index.html
        - 不能直接运行文件 ,不能在本地打开,要用localhost 的方式打开

