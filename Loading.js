/* ----

本代码为阳阳-aYYbsYYa二开，并遵守 GPL 2.0 开源协议。欢迎访问我的博客：https://ayya.top

# Last Update: 2023.9.10

---- */
if(window.innerWidth >= 770){
    
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
            "./live2d/pio.css",
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
            "./live2d/jquery364.min.js",
            "./live2d/TweenLite.js",
            "./live2d/live2dcubismcore.min.js",
            "./live2d/pixi.min.js",
            "./live2d/cubism4.min.js",
            "./live2d/pio.js",
            "./live2d/pio_sdk4.js",
            "./live2d/load.js",
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