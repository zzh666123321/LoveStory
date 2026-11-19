/* ==========================================================================
   content.js —— 全站唯一内容配置文件
   --------------------------------------------------------------------------
   想改文案、换照片、调日期？只改这一个文件就够了，不用碰 HTML / CSS。
   每个字段后面都写了说明，照着改即可。
   ========================================================================== */

window.SITE_CONFIG = {

  /* ---------------- 1. 基本信息 ---------------- */
  couple: {
    // 两个人的称呼（会出现在导航、页脚、信中署名等位置）
    nameA: "子涵",
    nameB: "小玉",

    // 在一起的日期。格式必须是 YYYY-MM-DD，只改数字即可。
    // 2024-11-20 在一起，2026-11-20 就是两周年。
    startDate: "2024-11-20",

    // 纪念日标题里的年份显示（纯展示用）
    yearStart: "2024",
    yearNow: "2026",

    // 相恋周年数，用于文案中的「N 周年」
    anniversaryYears: 2
  },

  /* ---------------- 2. 首屏 Hero ---------------- */
  hero: {
    eyebrow: "2024.11.20  —  2026.11.20",
    // title 里的 {two} 会被替换成高亮的「两年」，可自由改写整句
    title: "我们，{two}了",
    titleHighlight: "两年",
    subtitle: "730 个日夜，把「我」慢慢写成了「我们」",
    scrollHint: "往下看我们的故事"
  },

  /* ---------------- 3. 关于我们（照片 + 文案） ---------------- */
  about: {
    sectionTitle: "关于我们",
    sectionSub: "About Us",
    // 这一段是整站最长的一段文字，写你们的故事
    paragraphs: [
      "两年，说长不长，说短也不短。足够让一个人的习惯变成两个人的默契，足够把「你要吃什么」从一句客套变成一句日常。",
      "我们一起走过的路，很多都没有留下照片。但那些傍晚的风、路边摊的灯、突然下起的雨，都还在记忆里亮着。",
      "这个小小的网站，是为了把散落的瞬间收起来。以后再打开，希望我们还能认出当时的样子。"
    ],
    // 左侧或右侧配的那张照片（路径同样指向 assets/images/ 下的文件）
    photo: "assets/images/FirstQianshou.jpg",
    photoCaption: "2024 年冬 · 我们在一起拍的第一张牵手合照",
    // 段落末尾那行带短线的小字（不想要就留空 ""）
    sign: "一个想被记住的开始"
  },

  /* ---------------- 4. 数字统计（首页下方三个数字） ---------------- */
  // value 可以是数字，也可以是文字；label 是下面的说明
  stats: [
    { value: "730", label: "一起走过的日子", suffix: "天" },
    { value: "∞", label: "想和你去的远方", suffix: "" },
    { value: "1", label: "把「我」变成「我们」", suffix: "次" }
  ],

  /* ---------------- 5. 时间轴 ----------------
     每一项：date 显示在左边的小标签，title 是事件标题，desc 是描述。
     想加就复制一段，想删就整段删掉，顺序即从上到下。
  ------------------------------------------------------------------ */
  timeline: [
    {
      date: "2024.11.20",
      title: "在一起的日子",
      desc: "前一天晚上，在你学校的教室门口等你忙好工作（我的党支部领导女友），然后在教学楼前聊的很晚。现在还能体会到当时激动的心情。这是故事的开始,也是我们一起走过的第一天。"
    },
     {
      date: "2024.11.23",
      title: "一起去宁园玩",
      desc: "在红桥区，去逛宁园。你还跟我提起过，当时没有在门口给你买气球（以后你想要什么都买！）"
    },
    {
      date: "2024.11.26",
      title: "一起去吃海底捞",
      desc: "那天吃完海底捞，出来就看见了天津的第一场雪，我们的运气实在太好了。"
    },
    {
      date: "2024.12.20",
      title: "在一起一个月",
      desc: "一起去五大道吃饭，然后美美拍照。（我当时的摄影技术，真是一言难尽哈哈哈！）"
    },
    {
      date: "2024.12.31",
      title: "一起跨的第一个年",
      desc: "那天我们自己做了火锅，然后去看了名侦探柯南·跨年场，一起在樱花雨中迎接新年。（你戴眼睛的样子非常有智慧）"
    },
    {
      date: "2025.2.28",
      title: "在一起的一百天",
      desc: "自驾去了滨海，逛了国家海洋博物馆，吃到了你念念不忘的烤肉，还有超级漂亮的Hello Kitty蛋糕。"
    },
    {
      date: "2025.4.3-4.9",
      title: "一起从天津自驾去青岛",
      desc: "途径了淄博，吃到了淄博烧烤，逛了琉璃博物馆、八大局。到青岛的时候看到海了，但也冻的不行，最后一天双双发烧。在夜晚的五四广场，拍到了你很满意的照片！欧耶。那次看到的海没有那么满意，下次再去！"
    },
    {
      date: "2025.4.25",
      title: "给你补过生日",
      desc: "本来在青岛最后一天是你生日，但因为发烧没能好好庆祝。回到天津后，到La Fleur去吃西餐，给你补过了生日，吃了三丽鸥的旋转木马蛋糕。"
    },
    {
      date: "2025.5.4",
      title: "再过一个生日",
      desc: "去南开大悦城的海底捞买手店，买了你很喜欢的花花。拍了很多美美的照片。"
    },
    {
      date: "2025.5.10-11",
      title: "说走就走的旅行，去保定！",
      desc: "去了保定直隶总督府，吃到了超级好吃的安家罩饼，牛肉汤绝了。"
    },
    {
      date: "2025.5.20",
      title: "一起过520",
      desc: "吃了淮扬菜玉玲珑，大黄鱼还有焰火牛肉，太绝了！一起看了电影《水饺皇后》"
    },
    {
      date: "2025.6.2",
      title: "自驾沧州",
      desc: "沧州一日游，吃了火锅鸡，逛了沧州博物馆，看到了铁狮子，坐了游乐场的旋转木马。"
    },
    {
      date: "2025.6.8",
      title: "在一起两百天",
      // desc: ""
    },
    {
      date: "2025.6.28",
      title: "你给我过生日",
      desc: "给我过的生日，我实在是太感动了。刮刮乐、酷狗蛋糕、布置的房间还有买的每一件礼物，都太喜欢了！爱你宝宝！"
    },
    {
      date: "2025.8.2-7",
      title: "河北、河南旅行",
      desc: "你放完暑假，去邢台找你。然后去了开封、新乡胖东来、邯郸。太喜欢跟你一起旅游、出去看看这个世界了。"
    },
    {
      date: "2025.11.9-10",
      title: "陪我去吉林长春参加选调生面试",
      desc: "也算是去过东北了，短暂的两天，但很开心。"
    },
    {
      date: "2025.11.20",
      title: "在一起一周年",
      desc: "一周年快乐！我们一起去吃了王品牛排，战斧牛排实在太好吃了！"
    },
    {
      date: "2025.12.29-2026.1.3",
      title: "一起去东北跨年",
      desc: "去了长春，去莲花山上滑雪，去南河那看跨年烟花秀；去延吉，吃了好吃的脊骨土豆汤，喝了小狮同学，还有饭团卷；去了图们口岸，看到了对面的朝鲜群众，非常新鲜；去了珲春，第一次吃帝王蟹！太美味了！"
    },
    {
      date: "2026.2.7-2.8",
      title: "寒假送你回邢台",
      desc: "过寒假了舍不得你，开车跟你一起回邢台了，请我吃永盛魁，太有牌面了！两人一个大包厢，吃到了你家乡的美食。"
    },
    {
      date: "2026.5.3-5.7",
      title: "你来广州了",
      desc: "跟我爸一起吃了饭，我全家人都很喜欢你！太漂亮太有礼貌的小姑娘了，谁都爱嘿嘿！在广州塔附近的王品牛排给你过生日，可以看到广州塔的美景太绝了！一起逛了逛广州！"
    },
    {
      date: "2026.6.3-6.5",
      title: "去北京、济南旅游",
      desc: "一起去北京故宫，吃到了北京烤鸭，逛了什刹海，吃了南门铜锅涮肉。去逛了环球影城，里面美的真像梦一样，你也是！意犹未尽，去济南动物园看了你一直心心念念的撒宽，小象呆萌呆萌的。逛了趵突泉，不愧为天下第一泉，水太清澈了！"
    },
    {
      date: "2026.7.20-7.24",
      title: "你来广州给我过生日",
      desc: "难忘的生日！感动哭了！！！呜呜呜，太谢谢你给我准备的这一切！我会一辈子记得的！"
    },
    {
      date: "2026.7.25",
      title: "一起去北京鸟巢看薛之谦",
      desc: "早上的飞机两个人没醒哈哈哈哈。然后立刻马上看了高铁票，冲去高铁站。虽然过程很坎坷，但是，我们终于一起看到了薛之谦！还记得最开始认识你的时候，你的签名就是“我口袋只剩玫瑰一片，此行又山高路远”。这一路的旅程也让我们听到了现场版的这一句。"
    },
    {
      date: "2026.9.30-10.7",
      title: "国庆假一起去旅游",
      desc: "去了福州、平潭和厦门。看见海的感觉真好！在平潭跟你吹着风自驾的那一刻，感觉理想的生活就是这样了。厦门的鼓浪屿太美了，在你的指导下，我的摄像技术有了巨大的提升，给你拍了很多美照，吃了好多好吃的东西，午饭和晚饭吃的对面的两家，里面的装修让我们怀疑是一个老板哈哈哈哈哈！"
    },
    {
      date: "2026.11.20",
      title: "两周年",
      desc: "两周年快乐，翻看过去的照片，真的很感谢相机的存在，让我们能够记录下这些美好的瞬间。回望过去的两年，真的很感谢你一直在我身边。希望未来的日子里，我们可以一起去更多的地方，吃更多的美食，拍更多的照片！"
    }
  ],

  /* ---------------- 6. 照片墙 ----------------
     src  ：图片路径。默认是 assets/images/ 下的占位图。
            替换方法：把真实照片（jpg/png，建议宽度 1200px 左右）放进
            assets/images/ 文件夹，然后把这里的路径改成你的文件名，
            例如 "assets/images/photo-01.jpg"。
     title：照片标题
     desc ：照片下面的一句话描述
     date ：拍摄时间（可留空 ""）
     tall ：可选，true 表示这张在瀑布流里占更高的位置（建议宽高比 3:4）
  ------------------------------------------------------------------ */
  photos: [
    {
      src: "assets/images/20241119songhua.jpg",
      title: "第一次送你花",
      desc: "你说喜欢漂亮的花花，希望你能喜欢！",
      date: "2024.11.19"
    },
    {
      src: "assets/images/FirstMeet1.jpg",
      title: "第一次正式合照",
      desc: "在一起的第一张正式合照，喜欢你笑起来的样子。",
      date: "2024.11"
    },

 
    {
      src: "assets/images/tuzi.jpg",
      title: "兔子苹果",
      desc: "只要是你想吃的，我都给你做",
      date: "2024.12",
      tall: true
    },
    {
      src: "assets/images/chuse.jpg",
      title: "出色老公的10大标准",
      desc: "哎呀妈呀，这不就是我嘛！（我都记住了，以后朝着这个放心努力！",
      date: "2024.12",
      tall: true
    },
    {
      src: "assets/images/20251201songhua.jpg",
      title: "送你花花",
      desc: "十二月一日，送你花花，祝你每天都开心快乐！",
      date: "2025.12.1"
    },
    {
      src: "assets/images/20251201huhua.jpg",
      title: "合照",
      desc: "我就是护花使者，保护你一辈子！",
      date: "2025.12.1"
    },
    {
      src: "assets/images/xuexiyangzi.jpg",
      title: "学习的样子",
      desc: "你认真学习的样子，真的很迷人！",
      date: "2025.2"
    },
    {
      src: "assets/images/renzhenxuexi.jpg",
      title: "认真学习",
      desc: "被你迷住了！有那种知性美！妥妥的大明星！",
      date: "2025.2"
    },
    {
      src: "assets/images/huakuang.jpg",
      title: "你书法课做的树叶字体相框",
      desc: "这也做的太好了吧！你真是心灵手巧的宝宝！太棒了！我家的艺术家",
      date: "2024.12",
      tall: true
    },
    {
      src: "assets/images/caomeikuanian.jpg",
      title: "我做的晚餐",
      desc: "我做的嘿嘿，不赖吧！这个爱心草莓是不是打动你了！好看又好吃吧",
      date: "2024.12",
      tall: true
    },
    {
      src: "assets/images/huoguokuanian.jpg",
      title: "跨年晚餐",
      desc: "一起吃火锅！太巴适了！依旧爱心草莓，嘿嘿！",
      date: "2024.12",
      tall: true
    },
    {
      src: "assets/images/kuanian.jpg",
      title: "一起跨年",
      desc: "看的名侦探柯南，这一幕好像电影里的一幕，好美",
      date: "2025.1.1",
      tall: true
    },
    {
      src: "assets/images/pailidehezhao.jpg",
      title: "拍立得合照",
      desc: "我们一起拍的照片，每一张都值得珍藏。",
      date: "2025.2"
    },
    {
      src: "assets/images/meizhao.jpg",
      title: "你的美照",
      desc: "哎呦我去，实在太美了呀！",
      date: "2025.2"
    },
    {
      src: "assets/images/meizhao1.jpg",
      title: "你的美照+1",
      desc: "又被美哭了！俏皮！",
      date: "2025.2"
    },
    {
      src: "assets/images/2025qingrenjie.jpg",
      title: "情人节快乐",
      desc: "这个情人节，虽然不在你身边，但是我还是想送你一束花，祝你情人节快乐！",
      date: "2025.2.14"
    },
    {
      src: "assets/images/binhaifaqia.jpg",
      title: "在滨海国家海洋博物馆",
      desc: "这个海洋发卡太适合你了，戴上之后美美哒！",
      date: "2025.2"
    },
    {
      src: "assets/images/202502yibaitian.jpg",
      title: "一百天快乐！",
      desc: "在一起一百天送你的花",
      date: "2025.2.27",
      tall: true
    },
    {
      src: "assets/images/202503hezhao.jpg",
      title: "在滨海合照",
      desc: "很喜欢的一张合影！女明星和她的保镖！",
      date: "2025.03",
      tall: true
    },
    {
      src: "assets/images/202503nvmingxing.jpg",
      title: "女明星单人照！",
      desc: "美到离谱！",
      date: "2025.03",
      tall: true
    },
    {
      src: "assets/images/202504qingdao.jpg",
      title: "女明星写真！",
      desc: "在青岛五四广场，简直神图来着！（拍照技术逐步提升）",
      date: "2025.04",
      tall: true
    },
    {
      src: "assets/images/202505shengri.jpg",
      title: "给你过生日",
      desc: "这个花太美了，你更美！",
      date: "2025.05",
      tall: true
    },
    {
      src: "assets/images/202505hezhao.jpg",
      title: "合个照吧！",
      desc: "我都被你美到惊呆下巴了！",
      date: "2025.05",
      tall: true
    },
    
    {
      src: "assets/images/202505tju.jpg",
      title: "校园音乐节",
      desc: "太幸运了，抢到了门票！",
      date: "2025.05",
      tall: true
    },
    {
      src: "assets/images/202505zhilizongdu.jpg",
      title: "直隶总督府办公桌留影",
      desc: "直隶总督说了，你一定能上岸！",
      date: "2025.05",
      tall: true
    },
    {
      src: "assets/images/202506cangzou.jpg",
      title: "沧州博物馆合照",
      desc: "特别有意境的一张照片，喜欢！",
      date: "2025.05",
      tall: true
    },
    
    {
      src: "assets/images/202506maoyeye.jpg",
      title: "在天津正阳春烤鸭",
      desc: "跟毛爷爷的照片一起合个照吧！",
      date: "2025.06",
      tall: true
    },

    {
      src: "assets/images/202507shengri.jpg",
      title: "你给我过生日",
      desc: "望着满桌礼物，笑的合不拢嘴了哈哈哈哈",
      date: "2025.07",
      tall: true
    },

    {
      src: "assets/images/202507shujia.jpg",
      title: "暑假送你回家",
      desc: "在高铁站分开，暑假一起听网课学习行测。",
      date: "2025.07",
      tall: true
    },
    {
      src: "assets/images/202508lvyou.jpg",
      title: "暑假去找你玩",
      desc: "一起去开封玩！你这手势太有范了，一家之主的威风！",
      date: "2025.08",
      tall: true
    },
    {
      src: "assets/images/202508qinmi.jpg",
      title: "在博物馆合照",
      desc: "咱们是不是有点太亲密了嘿嘿！",
      date: "2025.08",
      tall: true
    },
    
    {
      src: "assets/images/202508labixiaoxin.jpg",
      title: "你给我画眉毛",
      desc: "画成了蜡笔小新，哈哈哈哈哈你自己看看好看不！",
      date: "2025.08",
      tall: true
    },
    {
      src: "assets/images/202509meizhao.jpg",
      title: "武清奥特莱斯合照",
      desc: "你这太有范了！很有当兵的潜质啊，是不是退伍女兵啊！",
      date: "2025.09",
      tall: true
    },
    
    
    {
      src: "assets/images/202510zhaopian.jpg",
      title: "美照！",
      desc: "太酷了！酷Girl，fashion！",
      date: "2025.10",
      tall: true
    },

    {
      src: "assets/images/202511gaodengxie.jpg",
      title: "给你买的第一双高跟鞋",
      desc: "还需要多多练习穿高跟鞋哈哈哈",
      date: "2025.11",
      tall: true
    },

    {
      src: "assets/images/202511yizhounian.jpg",
      title: "在一起一周年",
      desc: "手势1代表一周年，是不是很有特色哈哈哈",
      date: "2025.11.20",
      tall: true
    },   

    {
      src: "assets/images/202511yizhounianhua.jpg",
      title: "一周年花",
      desc: "送你的花，你很喜欢！",
      date: "2025.11",
      tall: true
    },


    {
      src: "assets/images/huaxue.jpg",
      title: "第一次跟你一起滑雪",
      desc: "你简直太聪明了！一学就会，天才来着！",
      date: "2025.12",
      tall: true
    },

    {
      src: "assets/images/diyicihuaxue.jpg",
      title: "在长春莲花山滑雪合影",
      desc: "酷酷的！",
      date: "2025.12",
      tall: true
    },

    {
      src: "assets/images/tumenkouan.jpg",
      title: "图门口岸",
      desc: "在边境线上，对面是朝鲜",
      date: "2026.01",
      tall: true
    },
    
    {
      src: "assets/images/202602songhuijia.jpg",
      title: "送你回家！",
      desc: "吃的永盛魁，太有面了啊！两个人一个包间，豪华的不行！",
      date: "2026.02",
      tall: true
    },
    
    {
      src: "assets/images/202602musongni.jpg",
      title: "目送你回家",
      desc: "你妈开车来接你了，我在车上看着你回去",
      date: "2026.02",
      tall: true
    },

    {
      src: "assets/images/202603xuexi.jpg",
      title: "偷怕你",
      desc: "吃饭还在学习，太刻苦了！",
      date: "2026.03",
      tall: true
    },

    {
      src: "assets/images/202604shitang.jpg",
      title: "食堂吃饭",
      desc: "你们食堂好吃！",
      date: "2026.04",
      tall: true
    },


    {
      src: "assets/images/202605mianshi.jpg",
      title: "偷拍你背书",
      desc: "陪你一起准备面试",
      date: "2026.04",
      tall: true
    },

    {
      src: "assets/images/202605guangzhou.jpg",
      title: "送你花",
      desc: "到广州了，迎接你",
      date: "2026.05",
      tall: true
    },   

    {
      src: "assets/images/202605jianjiazhang.jpg",
      title: "跟我爸一起吃饭",
      desc: "你提着这个大礼盒子，太有面了",
      date: "2026.05",
      tall: true
    },
    
 
    {
      src: "assets/images/202605guoshengri.jpg",
      title: "陪你过生日",
      desc: "在广州塔附件的王品牛排",
      date: "2026.05",
      tall: true
    },     
    
    {
      src: "assets/images/202605shengri.jpg",
      title: "合照",
      desc: "太浪漫了！",
      date: "2026.05",
      tall: true
    }, 


    {
      src: "assets/images/202606gexing.jpg",
      title: "歌星！",
      desc: "这也太有范了。你在宝坻考完直接出发唐山！",
      date: "2026.05",
      tall: true
    }, 

    {
      src: "assets/images/202606qipao.jpg",
      title: "陪你买旗袍",
      desc: "那天逛了一下午，每一件都好看！",
      date: "2026.06",
      tall: true
    }, 


    {
      src: "assets/images/202606qubeijing.jpg",
      title: "第二天马上穿着旗袍去北京",
      desc: "去北京路上",
      date: "2026.06",
      tall: true
    },

    {
      src: "assets/images/202606gugong.jpg",
      title: "故宫合照",
      desc: "旗袍确实美！",
      date: "2026.06",
      tall: true
    }, 

    {
      src: "assets/images/2026gugong1.jpg",
      title: "故宫拍照",
      desc: "奇奇怪怪，可可爱爱！已经看不懂是什么手势了",
      date: "2026.06",
      tall: true
    }, 
    {
      src: "assets/images/2026gugong2.jpg",
      title: "陪你买旗袍",
      desc: "这个旗袍和故宫的景色特别搭",
      date: "2026.06",
      tall: true
    }, 
    {
      src: "assets/images/2026shichahai.jpg",
      title: "什刹海合影",
      desc: "非常悠闲自在的状态！北京小后花园",
      date: "2026.06",
      tall: true
    }, 

    {
      src: "assets/images/2026huanqiu.jpg",
      title: "环球影城",
      desc: "第一个玩的项目，非常不刺激！好玩哈哈哈哈！",
      date: "2026.06",
      tall: true
    }, 

    {
      src: "assets/images/2026huanqiu1.jpg",
      title: "环球影城",
      desc: "排队ing，合个影吧！",
      date: "2026.06",
      tall: true
    }, 
    {
      src: "assets/images/2026huanqiu2.jpg",
      title: "环球影城",
      desc: "跟大黄蜂合个影！",
      date: "2026.06",
      tall: true
    }, 
    {
      src: "assets/images/2026huanqiu3.jpg",
      title: "环球影城",
      desc: "走了走了，环球下次见！",
      date: "2026.06",
      tall: true
    }, 

    {
      src: "assets/images/2026jinandwy.jpg",
      title: "济南动物园",
      desc: "终于看到你喜欢的小象撒宽了",
      date: "2026.06",
      tall: true
    }, 
    {
      src: "assets/images/2026jinanbtq.jpg",
      title: "济南趵突泉",
      desc: "天下第一泉！确实美！",
      date: "2026.06",
      tall: true
    }, 

  
    {
      src: "assets/images/2026biye.jpg",
      title: "毕业合照",
      desc: "拍了一下午学士服照！摄影水平得到你的认可！",
      date: "2026.06",
      tall: true
    }, 

    {
      src: "assets/images/2026woshengri.jpg",
      title: "生日合影",
      desc: "来广州陪我过生日了！开心！吃的云南菜。",
      date: "2026.07.24",
      tall: true
    }, 

    {
      src: "assets/images/2026woshengri2.jpg",
      title: "你为我布置的生日现场",
      desc: "坐在地上感动的说不出来话来了！谢谢你的用心！我会一直记得的！",
      date: "2026.07.24",
      tall: true
    },
    {
      src: "assets/images/2026shengrigift.jpg",
      title: "儿童时期合影",
      desc: "你准备的生日礼物！非常喜欢！仿佛我们从小就在一起！~",
      date: "2026.07.24",
      tall: true
    },
    

    {
      src: "assets/images/2026yanchanghui.jpg",
      title: "演唱会",
      desc: "一起去看薛之谦演唱会",
      date: "2026.07.25",
      tall: true
    }, 

    {
      src: "assets/images/2026yanchanghui1.jpg",
      title: "演唱会合影",
      desc: "坐了一天高铁，有点疲惫哈哈哈哈（怪我没设置闹钟，没赶上飞机/哭",
      date: "2026.07.25",
      tall: true
    }, 

    {
      src: "assets/images/2026yanchanghui2.jpg",
      title: "演唱会",
      desc: "帮你和薛之谦拍一张吧！",
      date: "2026.07.25",
      tall: true
    }, 

    {
      src: "assets/images/2026yanchanghui3.jpg",
      title: "演唱会",
      desc: "一起合个影吧！肯定下次还会一起去看薛之谦演唱会的！七月场抢了三次都抢到了，这就是我们的缘分！",
      date: "2026.07.25",
      tall: true
    }, 

    // {
    //   src: "assets/images/20261001fuzhou.jpg",
    //   title: "国庆旅游·福州",
    //   desc: "福州合影，来有福之州，做有福之人",
    //   date: "2026.10",
    //   tall: true
    // }, 

    {
      src: "assets/images/20261001fuzhou1.jpg",
      title: "国庆旅游·福州",
      desc: "福州合影，来有福之州，做有福之人",
      date: "2026.10",
      tall: true
    }, 

    {
      src: "assets/images/20261002ptd.jpg",
      title: "国庆旅游·平潭岛",
      desc: "平潭岛合影，风好大！",
      date: "2026.10",
      tall: true
    }, 

    {
      src: "assets/images/20261002ptd2.jpg",
      title: "国庆旅游·平潭岛",
      desc: "平潭岛海上风车，边开车边欣赏沿路的海景！",
      date: "2026.10",
      tall: true
    }, 

    {
      src: "assets/images/20261004xiamen.jpg",
      title: "国庆旅游·厦门闽台缘博物馆",
      desc: "打卡。光复台湾！汲取考公能量！",
      date: "2026.10",
      tall: true
    }, 


    {
      src: "assets/images/20261004xiamen1.jpg",
      title: "国庆旅游·厦门",
      desc: "这件特别好看！我一眼就看中了，必须买！",
      date: "2026.10",
      tall: true
    }, 
    
    // {
    //   src: "assets/images/20261004xiamen2.jpg",
    //   title: "国庆旅游·厦门",
    //   desc: "厦门",
    //   date: "2026.10",
    //   tall: true
    // }, 
    
    {
      src: "assets/images/20261004xiamen3.jpg",
      title: "国庆旅游·厦门",
      desc: "笑的可开心了哈哈哈哈！两个笑点很低的人在一块！",
      date: "2026.10",
      tall: true
    }, 


    {
      src: "assets/images/20261004xiamengjc.jpg",
      title: "国庆旅游·厦门",
      desc: "一起坐公交车！很有生活的气息！",
      date: "2026.10",
      tall: true
    }, 
    
    {
      src: "assets/images/20261004xiamengjc1.jpg",
      title: "国庆旅游·厦门",
      desc: "公交车上再来个合影吧！出来玩确实很疲惫",
      date: "2026.10",
      tall: true
    }, 

    {
      src: "assets/images/2026gly.jpg",
      title: "国庆旅游·鼓浪屿",
      desc: "感受感受我拍的神图！马上攒钱买相机",
      date: "2026.10",
      tall: true
    }, 
    {
      src: "assets/images/2026gly1.jpg",
      title: "国庆旅游·鼓浪屿",
      desc: "好漂亮啊！女明星耶",
      date: "2026.10",
      tall: true
    }, 

        {
      src: "assets/images/2026gly2.jpg",
      title: "国庆旅游·鼓浪屿",
      desc: "和女明星合个影！今天的角色是女明星的摄影师",
      date: "2026.10",
      tall: true
    }, 

        {
      src: "assets/images/2026gly3.jpg",
      title: "国庆旅游·鼓浪屿",
      desc: "再来合个影！一起散步在鼓浪屿这座小岛上，真的很舒服！很开心的一天！",
      date: "2026.10",
      tall: true
    }, 
        {
      src: "assets/images/2026gly4.jpg",
      title: "国庆旅游·厦门",
      desc: "在厦门的最后一天，终于出太阳了，海好美呀！可惜只逛了一下午，好可惜！下次还会一起再去厦门的",
      date: "2026.10",
      tall: true
    }, 
        {
      src: "assets/images/2026gly5.jpg",
      title: "国庆旅游·厦门",
      desc: "租了一个电动车在海边开，好舒服！是想象中的二人生活，开着电动车，在海边上逛逛，一起都很好！",
      date: "2026.10",
      tall: true
    }, 
  ],

  /* ---------------- 7. 寄语 / 一封信 ---------------- */
  letter: {
    sectionTitle: "想对你说",
    sectionSub: "A Letter",
    // 每一段一个字符串，会自动分段
    paragraphs: [
      "认识你之前，我以为日子就是一天一天往前过。认识你之后才知道，日子是可以被记住的——因为你把它过成了值得记住的样子。",
      "这两年我们吵过架，也冷战过，有过很多次「怎么又这样」。但每次回头，你都还在，这就够了。",
      "下一个两年，我还是想跟你一起吃很多顿饭、走很多段路、拍很多张超级好看的照片。",
      "两周年快乐，我的小朋友。"
    ],
    signature: "爱你的，子涵",
    // 签名下方的小字（可留空）
    signatureNote: "2026.11.20"
  },

  /* ---------------- 8. 页脚 ---------------- */
  footer: {
    line: "730 天，只是开始。",
    // 页脚右下角的小字
    note: "Made with 心意 · 2026"
  }
};
