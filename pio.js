/* ----

# Last Update: 2021.5.4

本代码为奇趣保罗原创，并遵守 GPL 2.0 开源协议。欢迎访问我的博客：https://paugram.com

本代码为阳阳-aYYbsYYa二开，并遵守 GPL 2.0 开源协议。欢迎访问我的博客：https://ayya.top

# Last Update: 2023.9.10

---- */


//vits模型跟随live2d模型自动切换
// 创建Online_vitsMap
const Online_vitsMap = new Map();
// 创建Local_vitsMap
const Local_vitsMap = new Map();

//模型map指向添加
Online_vitsMap.set('Hutao', '胡桃'),Local_vitsMap.set('Hutao', '119');
Online_vitsMap.set('Xiao', '魈'),Local_vitsMap.set('Xiao', '101');

var Paul_Pio = function (prop) {
    var that = this;

    var current = {
        idol: 0,
        menu: document.querySelector(".pio-container .pio-action"),
        canvas: document.getElementById("pio"),
        body: document.querySelector(".pio-container"),
        root: document.location.protocol + '//' + document.location.hostname + '/'
    };

    /* - 方法 */
    var modules = {
        // 更换模型
        idol: function () {
            current.idol < (prop.model.length - 1) ? current.idol++ : current.idol = 0;
            console.log(current.idol);
        
// 获取需要更改的图标元素
const homeIcon = document.querySelector('.pio-home');
const closeIcon = document.querySelector('.pio-close');
const skinIcon = document.querySelector('.pio-skin');
const infoIcon = document.querySelector('.pio-info');
const nightIcon = document.querySelector('.pio-night');

function checkImageLoad(imagePath, successCallback, errorCallback) {
  var img = new Image();
  
  img.onload = function() {
    successCallback();
  };
  
  img.onerror = function() {
    errorCallback();
  };
  
  img.src = imagePath;
}

// 指定图片路径
var imagePath = GitUrl+'/icon/'+current.idol+'/home.png';
// 更改图标路径
let newHomeIconPath;
let newCloseIconPath;
let newSkinIconPath;
let newInfoIconPath;
let newNightIconPath;

function applyIconStyles() {
  homeIcon.style.backgroundImage = newHomeIconPath;
  closeIcon.style.backgroundImage = newCloseIconPath;
  skinIcon.style.backgroundImage = newSkinIconPath;
  infoIcon.style.backgroundImage = newInfoIconPath;
  nightIcon.style.backgroundImage = newNightIconPath;
}

function loadIcons() {
  checkImageLoad(imagePath,
    function() {
      // 更改图标路径
      newHomeIconPath = 'url("'+GitUrl+'/icon/'+current.idol+'/home.png")';
      newCloseIconPath = 'url("'+GitUrl+'/icon/'+current.idol+'/close.png")';
      newSkinIconPath = 'url("'+GitUrl+'/icon/'+current.idol+'/skin.png")';
      newInfoIconPath = 'url("'+GitUrl+'/icon/'+current.idol+'/info.png")';
      newNightIconPath = 'url("'+GitUrl+'/icon/'+current.idol+'/night.png")';

      applyIconStyles();
    },
    function() {
      // 更改图标路径
      newHomeIconPath = 'url("'+GitUrl+'/icon/0/home.png")';
      newCloseIconPath = 'url("'+GitUrl+'/icon/0/close.png")';
      newSkinIconPath = 'url("'+GitUrl+'/icon/0/skin.png")';
      newInfoIconPath = 'url("'+GitUrl+'/icon/0/info.png")';
      newNightIconPath = 'url("'+GitUrl+'/icon/0/night.png")';

      applyIconStyles();
    }
  );
}
// 调用加载图标的函数
loadIcons();

            return current.idol;
        },
        // 创建内容
        create: function (tag, prop) {
            var e = document.createElement(tag);
            if (prop.class) e.className = prop.class;
            return e;
        },
        // 随机内容
        rand: function (arr) {
            return arr[Math.floor(Math.random() * arr.length + 1) - 1];
        },
        // 创建对话框方法
        render: function (text) {
            if (text.constructor === Array) {
                dialog.innerHTML = modules.rand(text);
            }
            else if (text.constructor === String) {
                dialog.innerHTML = text;
            }
            else {
                dialog.innerHTML = "输入内容出现问题了 X_X";
            }

            dialog.classList.add("active");

            clearTimeout(this.t);
            this.t = setTimeout(function () {
                dialog.classList.remove("active");
            }, 3000);
        },
        // 移除方法
        destroy: function () {
            that.initHidden();
            localStorage.setItem("posterGirl", 0);
        },
        // 是否为移动设备
        isMobile: function () {
            var ua = window.navigator.userAgent.toLowerCase();
            ua = ua.indexOf("mobile") || ua.indexOf("android") || ua.indexOf("ios");

           
        }
    };
    this.modules = modules;
    this.destroy = modules.destroy;

    var elements = {
        home: modules.create("span", { class: "pio-home" }),
        skin: modules.create("span", { class: "pio-skin" }),
        info: modules.create("span", { class: "pio-info" }),
        night: modules.create("span", { class: "pio-night" }),
        close: modules.create("span", { class: "pio-close" }),

        show: modules.create("div", { class: "pio-show" }),
		
		from: modules.create("div", { class: "pio-from" }),
		submit: modules.create("span", { class: "pio-submit" }),
		input: modules.create("input", { class: "pio-input" }),
    };

    var dialog = modules.create("div", { class: "pio-dialog" });
    current.body.appendChild(dialog);
    current.body.appendChild(elements.show);
	current.body.appendChild(elements.from);
	
	elements.from.appendChild(elements.input);
	elements.from.appendChild(elements.submit);
	
	$(".pio-submit").text("发送");
	$(".pio-input").attr("placeholder","要和我聊什么呀？");
	
	$(".pio-submit").click(function(){
		getChat();
	});
	

    /* - 提示操作 */
    var action = {
        
        // 欢迎
        welcome: function () {
            if (document.referrer !== "" && document.referrer.indexOf(current.root) === -1) {
                var referrer = document.createElement('a');
                referrer.href = document.referrer;
                prop.content.referer ? modules.render(prop.content.referer.replace(/%t/, "“" + referrer.hostname + "”")) : modules.render("欢迎来自 “" + referrer.hostname + "” 的朋友！");
            }
            else if (prop.tips) {
                var text, hour = new Date().getHours();

                if (hour > 22 || hour <= 5) {
                    text = '你是夜猫子呀？这么晚还不睡觉，明天起的来嘛';
                }
                else if (hour > 5 && hour <= 8) {
                    text = '早上好！';
                }
                else if (hour > 8 && hour <= 11) {
                    text = '上午好！工作顺利嘛，不要久坐，多起来走动走动哦！';
                }
                else if (hour > 11 && hour <= 14) {
                    text = '中午了，工作了一个上午，现在是午餐时间！';
                }
                else if (hour > 14 && hour <= 17) {
                    text = '午后很容易犯困呢，今天的运动目标完成了吗？';
                }
                else if (hour > 17 && hour <= 19) {
                    text = '傍晚了！窗外夕阳的景色很美丽呢，最美不过夕阳红~';
                }
                else if (hour > 19 && hour <= 21) {
                    text = '晚上好，今天过得怎么样？';
                }
                else if (hour > 21 && hour <= 23) {
                    text = '已经这么晚了呀，早点休息吧，晚安~';
                }
                else {
                    text = "阳阳.说：这个是无法被触发的吧，哈哈";
                }

                modules.render(text);
            }
            else {
                modules.render(prop.content.welcome || "欢迎来到本站！");
            }
        },
        // 触摸
        touch: function () {
            current.canvas.onclick = function () {
                modules.render(prop.content.touch || ["你在干什么？", "再摸我就报警了！", "HENTAI!", "不可以这样欺负我啦！"]);
            };
        },
        // 右侧按钮
        buttons: function () {
            // 返回首页
            elements.home.onclick = function () {
                location.href = current.root;
            };
            elements.home.onmouseover = function () {
                modules.render(prop.content.home || "点击这里回到首页！");
            };
            current.menu.appendChild(elements.home);

            // 更换模型
            elements.skin.onclick = function () {
                that.model = loadlive2d("pio", prop.model[modules.idol()], model => {
                    prop.onModelLoad && prop.onModelLoad(model)
                    prop.content.skin && prop.content.skin[1] ? modules.render(prop.content.skin[1]) : modules.render("新衣服真漂亮~");
                });
            };
            elements.skin.onmouseover = function () {
                prop.content.skin && prop.content.skin[0] ? modules.render(prop.content.skin[0]) : modules.render("想看看我的新衣服吗？");
            };
            if (prop.model.length > 1) current.menu.appendChild(elements.skin);

            // 聊天框
            elements.info.onclick = function () {
                //window.open(prop.content.link || "https://cbbkk.com");
				if($('.pio-from').is(':hidden')){//如果当前隐藏
					$('.pio-from').show();//点击显示
					$('#pio-container').css("bottom","0");
				}else{//否则
					$('.pio-from').hide();//点击隐藏
					$('#pio-container').css("bottom","-23px");
				}
            };
            elements.info.onmouseover = function () {
                modules.render("想要跟我聊聊天吗？");
            };
            current.menu.appendChild(elements.info);

            // 夜间模式
            if (prop.night) {
                elements.night.onclick = function () {
                    eval(prop.night);
                };
                elements.night.onmouseover = function () {
                    modules.render("夜间点击这里可以保护眼睛呢");
                };
                current.menu.appendChild(elements.night);
            }

            // 关闭看板娘
            elements.close.onclick = function () {
				$(".pio-from").hide();
                modules.destroy();
            };
            elements.close.onmouseover = function () {
                modules.render(prop.content.close || "QWQ 下次再见吧~");
            };
            current.menu.appendChild(elements.close);
        },
        custom: function () {
            prop.content.custom.forEach(function (t) {
                if (!t.type) t.type = "default";
                var e = document.querySelectorAll(t.selector);

                if (e.length) {
                    for (var j = 0; j < e.length; j++) {
                        if (t.type === "read") {
                            e[j].onmouseover = function () {
                                modules.render("想阅读 %t 吗？".replace(/%t/, "“" + this.innerText + "”"));
                            }
                        }
                        else if (t.type === "link") {
                            e[j].onmouseover = function () {
                                modules.render("想了解一下 %t 吗？".replace(/%t/, "“" + this.innerText + "”"));
                            }
                        }
                        else if (t.text) {
                            e[j].onmouseover = function () {
                                modules.render(t.text);
                            }
                        }
                    }
                }
            });
        }
    };

    /* - 运行 */
    var begin = {
        static: function () {
            current.body.classList.add("static");
        },
        fixed: function () {
            action.touch(); action.buttons();
        },
        draggable: function () {
            action.touch(); action.buttons();

            var body = current.body;
            body.onmousedown = function (downEvent) {
                var location = {
                    x: downEvent.clientX - this.offsetLeft,
                    y: downEvent.clientY - this.offsetTop
                };

                function move(moveEvent) {
                    body.classList.add("active");
                    body.classList.remove("right");
                    body.style.left = (moveEvent.clientX - location.x) + 'px';
                    body.style.top = (moveEvent.clientY - location.y) + 'px';
                    body.style.bottom = "auto";
                }

                document.addEventListener("mousemove", move);
                document.addEventListener("mouseup", function () {
                    body.classList.remove("active");
                    document.removeEventListener("mousemove", move);
                });
            };
        }
    };

    // 运行
    this.init = function (onlyText) {
        if (!(prop.hidden && modules.isMobile())) {
            if (!onlyText) {
                action.welcome();
                that.model = loadlive2d("pio", prop.model[0], model => {
                    prop.onModelLoad && prop.onModelLoad(model)
                });
            }

            switch (prop.mode) {
                case "static": begin.static(); break;
                case "fixed": begin.fixed(); break;
                case "draggable": begin.draggable(); break;
            }

            if (prop.content.custom) action.custom();
        }
    };

    // 隐藏状态
    this.initHidden = function () {
        current.body.classList.add("hidden");
        dialog.classList.remove("active");

        elements.show.onclick = function () {
            current.body.classList.remove("hidden");
            localStorage.setItem("posterGirl", 1);
			$(".pio-from").show();
            that.init();
        }
    }

    localStorage.getItem("posterGirl") == 0 ? this.initHidden() : this.init();
};

var sk = [
  "让我想想呢~",
  "okay等我下下哦~",
  "嘿嘿，阳阳努力思考中..."
]

var mz = [
  "请告诉我你的想法亚~",
  "主人，你没有打字哦~",
  "嘿嘿，你想骗我，你都没输入..."
]

function getChat() {
    $(".pio-dialog").addClass("active");
    var msg = $(".pio-input").val();
    var rand;
    var rValue;
    if (msg === "") {
      rand = Math.floor(Math.random() * mz.length);
      rValue = mz[rand];
      $(".pio-dialog").text(rValue);
    } else {
      rand = Math.floor(Math.random() * sk.length);
      rValue = sk[rand];
      $(".pio-dialog").text(rValue);
      $(".pio-input").val("");
      
      
      $.ajax({
        //url: "https://v.api.aa1.cn/api/api-xiaoai/talk.php",      //小爱接口
        url: "./liaotian.php",                               //青云课免费接口
        type: "GET",
        data: {
          msg: msg,
        },
        success: function(res) {
            
            console.log(res);
            //获取当前vits模型id
            var Online_vitsId=Online_vitsMap.get(window.ModelName) || '胡桃';
            var Local_vitsId=Local_vitsMap.get(window.ModelName) || '119';
            
            
              var vits = document.createElement('audio');
              
              var primaryUrl = 'https://genshinvoice.top/api?speaker=' + Online_vitsId + '&text=' + res + '&format=wav&length=1&noise=0.5&noisew=0.9&sdp_ratio=0.2';
              
              var backupUrl = '/';      //支持添加vits备用接口  这里填写备用接口的api

              vits.addEventListener('error', function() {
                 // 备用接口
                 vits.setAttribute('src', backupUrl);
                 vits.load();
                 vits.play();
              });

              vits.setAttribute('src', primaryUrl);
              vits.load();
              vits.play();
            
            
            $(".pio-dialog").text(res);
        
            },
            error: function(err) {
                // 播放备用音频文件
                       var fallbackAudio = new Audio(GitUrl+"/live2d/Audio/下雨的时候….mp3");
                       fallbackAudio.play();
              $(".pio-dialog").text("哎呀，好像出现什么问题了呢，主人等下再试试吧！");
            }
            });
            
            
        }
}
