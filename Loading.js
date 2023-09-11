/* ----

本代码为阳阳-aYYbsYYa二开，并遵守 GPL 2.0 开源协议。欢迎访问我的博客：https://ayya.top

# Last Update: 2023.9.10

---- */

//全局链接，若本地部署，这里则填写你的地址
window.GitUrl = "https://cdn.jsdelivr.net/gh/aYYbsYYa/chat-vits-live2d@main";

if(window.innerWidth >= 770){       //判断pc端加载
    
      var top_url='${ctxsta}';
    (function() {
        ///document.write('');
 
        //动态加载css
        function dynamicLoadCss(url) {
            var head = document.getElementsByTagName('head')[0];
            var link = document.createElement('link');
            link.type = 'text/css';
            link.rel = 'stylesheet';
            link.href = url;
            head.appendChild(link);
        }
        var cssFiles = [
            GitUrl+"/pio.css",
        ];
        var cssTags = new Array(cssFiles.length);
        for (var k = 0, len = cssTags.length; k < len; k++) {
            dynamicLoadCss(cssFiles[k]);
        }
        // 加载所有js文件
 
        function dynamicLoadJs(url) {
            var scri ='<script src='+url+' type="text/javascript"><'+'/'+'script>';
            //console.log(scri);return;
            document.write(scri);
        }
 
        var jsFiles = [
            GitUrl+"/jquery364.min.js",
            GitUrl+"/TweenLite.js",
            GitUrl+"/live2dcubismcore.min.js",
            GitUrl+"/pixi.min.js",
            GitUrl+"/cubism4.min.js",
            GitUrl+"/pio.js",
            GitUrl+"/pio_sdk4.js",
            GitUrl+"/load.js",
        ];
        var scriptTags = new Array(jsFiles.length);
        for (var i = 0, len = jsFiles.length; i < len; i++) {
            dynamicLoadJs(jsFiles[i]);
        }
    })();

/*
<link type="text/css" rel="stylesheet" href="./live2d/pio.css">
<script src="./live2d/jquery364.min.js" type="text/javascript"></script>
<script src="./live2d/TweenLite.js" type="text/javascript"></script>
<script src="./live2d/live2dcubismcore.min.js" type="text/javascript"></script>
<script src="./live2d/pixi.min.js" type="text/javascript"></script>
<script src="./live2d/cubism4.min.js" type="text/javascript"></script>
<script src="./live2d/pio.js" type="text/javascript"></script>
<script src="./live2d/pio_sdk4.js" type="text/javascript"></script>
<script src="./live2d/load.js" type="text/javascript"></script>
*/

}
