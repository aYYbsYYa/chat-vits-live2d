/* ----

# Last Update: 2021.5.4

本代码为奇趣保罗原创，并遵守 GPL 2.0 开源协议。欢迎访问我的博客：https://paugram.com

本代码为阳阳-aYYbsYYa二开，并遵守 GPL 2.0 开源协议。欢迎访问我的博客：https://ayya.top

# Last Update: 2023.9.10

---- */
console.log('\n' + ' %c Chat-Vits-Live2d   %c https://ayya.top ' + '\n', 'color: #fadfa3; background: #030307; padding:5px 0;', 'background: #fadfa3; padding:5px 0;');



var 引流 = [
  "https://space.bilibili.com/542156438",
  "https://www.bilibili.com/video/BV1hP41167Fv",
]

const initConfig = {
  mode: "fixed",
  hidden: true,
  content: {
    link: 引流[Math.floor(Math.random() * 引流.length)],
    welcome: ["Hi!"],
    touch: "",
    skin: ["诶，想看看其他团员吗？", "嘿嘿嘿~"],
    custom: [
      { "selector": ".comment-form", "text": "Content Tooltip" },
      { "selector": ".home-social a:last-child", "text": "Blog Tooltip" },
      { "selector": ".list .postname", "type": "read" },
      { "selector": ".post-content a, .page-content a, .post a", "type": "link" }
    ],
  },
  night: "toggleNightMode()",
  model: [
    "https://cdn.jsdelivr.net/gh/aYYbsYYa/chat-vits-live2d/Modle/Hutao/hutao.model3.json",           //B站：根瘤菌rkzj
    "https://cdn.jsdelivr.net/gh/aYYbsYYa/chat-vits-live2d/Modle/Xiao/xiao.model3.json",             //B站：动力薄荷
    
    "https://cdn.jsdelivr.net/gh/aYYbsYYa/chat-vits-live2d/Modle/Diana/Diana.model3.json",
    "https://cdn.jsdelivr.net/gh/aYYbsYYa/chat-vits-live2d/Modle/Ava/Ava.model3.json",
	
  ],
  tips: true,
  onModelLoad: onModelLoad
}

function 加载aYYbsYYa() {
  pio_reference = new Paul_Pio(initConfig)

  pio_alignment = "left"

  // Then apply style
  pio_refresh_style()
}

function onModelLoad(model) {
  const container = document.getElementById("pio-container")
  const canvas = document.getElementById("pio")
  const modelNmae = model.internalModel.settings.name
  const coreModel = model.internalModel.coreModel
  const motionManager = model.internalModel.motionManager

  let touchList = [
    {
      text: "点击展示文本1",
      motion: "Idle"
    },
    {
      text: "点击展示文本2",
      motion: "Idle"
    }
  ]

  function playAction(action) {
    action.text && pio_reference.modules.render(action.text)
    action.motion && pio_reference.model.motion(action.motion)

    if (action.from && action.to) {
      Object.keys(action.from).forEach(id => {
        const hidePartIndex = coreModel._partIds.indexOf(id)
        TweenLite.to(coreModel._partOpacities, 0.6, { [hidePartIndex]: action.from[id] });
        // coreModel._partOpacities[hidePartIndex] = action.from[id]
      })

      motionManager.once("motionFinish", (data) => {
        Object.keys(action.to).forEach(id => {
          const hidePartIndex = coreModel._partIds.indexOf(id)
          TweenLite.to(coreModel._partOpacities, 0.6, { [hidePartIndex]: action.to[id] });
          // coreModel._partOpacities[hidePartIndex] = action.to[id]
        })
      })
    }
  }

  canvas.onclick = function () {
    if (motionManager.state.currentGroup !== "Idle") return

    const action = pio_reference.modules.rand(touchList)
    playAction(action)
  }
    //console.log(modelNmae);
    window.ModelName=modelNmae;
  if (modelNmae === "Diana") {
    container.dataset.model = "Diana"
    initConfig.content.skin[1] = ["我是吃货担当 嘉然 Diana~"]
    playAction({ motion: "Tap抱阿草-左手" })

    touchList = [
      {
        text: "嘉心糖屁用没有",
        motion: "Tap生气 -领结"
      },
      {
        text: "有人急了，但我不说是谁~",
        motion: "Tap= =  左蝴蝶结"
      },
      {
        text: "呜呜...呜呜呜....",
        motion: "Tap哭 -眼角"
      },
      {
        text: "想然然了没有呀~",
        motion: "Tap害羞-中间刘海"
      },
      {
        text: "阿草好软呀~",
        motion: "Tap抱阿草-左手"
      },
      {
        text: "不要再戳啦！好痒！",
        motion: "Tap摇头- 身体"
      },
      {
        text: "嗷呜~~~",
        motion: "Tap耳朵-发卡"
      },
      {
        text: "zzZ。。。",
        motion: "Leave"
      },
      {
        text: "哇！好吃的！",
        motion: "Tap右头发"
      },
    ]

  } else if (modelNmae === "Ava") {
    container.dataset.model = "Ava"
    initConfig.content.skin[1] = ["我是<s>拉胯</s>Gamer担当 向晚 AvA~"]
    playAction({
      motion: "Tap左眼",
      from: {
        "Part15": 1
      },
      to: {
        "Part15": 0
      }
    })

    touchList = [
      {
        text: "水母 水母~ 只是普通的生物",
        motion: "Tap右手"
      },
      {
        text: "可爱的鸽子鸽子~我喜欢你~",
        motion: "Tap胸口项链",
        from: {
          "Part12": 1
        },
        to: {
          "Part12": 0
        }
      },
      {
        text: "好...好兄弟之间喜欢很正常啦",
        motion: "Tap中间刘海",
        from: {
          "Part12": 1
        },
        to: {
          "Part12": 0
        }
      },
      {
        text: "啊啊啊！怎么推流辣",
        motion: "Tap右眼",
        from: {
          "Part16": 1
        },
        to: {
          "Part16": 0
        }
      },
      {
        text: "你怎么老摸我，我的身体是不是可有魅力",
        motion: "Tap嘴"
      },
      {
        text: "AAAAAAAAAAvvvvAAA 向晚！",
        motion: "Tap左眼",
        from: {
          "Part15": 1
        },
        to: {
          "Part15": 0
        }
      }
    ]
    canvas.width = model.width * 1.2
    const hideParts = [
      "Part5", // 晕
      "neko", // 喵喵拳
      "game", // 左手游戏手柄
      "Part15", // 墨镜
      "Part21", // 右手小臂
      "Part22", // 左手垂下
      "Part", // 双手抱拳
      "Part16", // 惊讶特效
      "Part12" // 小心心
    ]
    const hidePartsIndex = hideParts.map(id => coreModel._partIds.indexOf(id))
    hidePartsIndex.forEach(idx => {
      coreModel._partOpacities[idx] = 0
    })
  }
}

function toggleNightMode(){
	if($("body").hasClass("dark")){
		$("body").removeClass("dark");
		$("html").css("background-color","");
	}else{
		$("body").addClass("dark");
		$("html").css("background-color","rgb(51, 51, 51)");
	}
	//$("body").toggleClass("dark")
}

var pio_reference
window.onload = 加载aYYbsYYa
