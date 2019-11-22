let databaseCredentialForSequelize = require('./credential');
module.exports = {
    apiDesp: {
        '/social-media/register': '这个Api是为了给你学习如何进行新建用户的。' +
            '并且这个Api并没有要求提供短信/邮箱认证，你可以在别的Api中学习这些实际操作。' +
            '另外这个Api会把用户注册完毕之后的信息（包括密码）全部返还给你，' +
            '这个在实际工作中应该避免。正常来说返回一个已登陆token就好。',
        '/social-media/login': '这是一个登陆Api，只要账号（手机或者用户名）和密码匹配了之后，就会返回登陆成功的字样。如果你无法登陆，可以进行重新注册。后台是允许您多次重复进行注册的，毕竟只是供学习开发使用。登陆之后会给你返还一个登陆token，并且也会在cookie中给你增加access token。在实际操作中，你应该尽量使用cookie的，而尽量避免使用data中的token。后续在你每次发送请求的时候，都应该考虑附带上token给后端Api作为登陆凭证。如果你把data中的token保存到了localStorage或其它本机位置，你都应该在用户退出的时候进行清理。',
        '/social-media/unread-notification-number': '这个Api会返回用户的未读消息数量。这个Api所返回的数字是随机生成的，而且每次都会不一样。在实际工作中，您的后端开发会将一个正确的未读消息数量发送给你您。',
        '/social-media/top-searched-list':  '这个Api返回一个列表，包含了热搜榜单的话题。',
        '/social-media/top-searched':  '这个Api返回一个热搜主题。这个返回是随机的，所以每次都不同。',
        '/social-media/all-notifications': '这个Api返回用户的所有提示信息，包括了系统信息和其它用户的私信。这里面的内容是随机生成的。内容是纯文字，不会出现图片等信息。',
        '/social-media/user-posts': '这个Api返还全部用户发送过的帖子。这些帖子都是随机生成的，且每一次都不一样。'
    },
    staticResponseEntry: {
        contributors: ['ZhenhaoMa', 'chenmeimei', 'xiaolizi'],
        officialWebsite: 'https://www.com',
        environment: ['node.js', 'express'],
        version: 'v1.0',
        lastUpdatedAt: '2019-11-20'
    },
    mySql: {
        development: databaseCredentialForSequelize,
        test: databaseCredentialForSequelize,
        production: databaseCredentialForSequelize
    },
    jwt: {
        secret: 'asdpiopo32542t5poidgspdgfhs43653524u3h245ph6yop354hp7h456ph6poi4h6p34h5p6i'
    },
    app: {
        socialMedia: {
            trending: {
                topSearched: [
                    '英特尔因产品感到抱歉',
                    '中国女排感动中国',
                    '元旦放假一天',
                    '安卓被曝严重漏洞',
                    '蔚来李斌回应',
                    '意142名女性遭杀',
                    '牛津词典年度词汇',
                    '星辰大海演员计划',
                    '盖茨答白岩松提问',
                    '今天国际儿童日'
                ]
            },
            user: {
                notification: [
                    {
                        sendFrom: '系统',
                        message: '系统消息是指网站管理者以信息广播形式向目标用户发布的公开的消息、公告、通知、提示等。具有群发性，高可达性等消息特性。',
                        avatar: 'http://b-ssl.duitang.com/uploads/item/201708/11/20170811093746_w3EKU.jpeg'
                    },
                    {
                        sendFrom: '系统',
                        message: '你的账号处于高风险状态， 请重新设置密码!!',
                        avatar: 'http://b-ssl.duitang.com/uploads/item/201507/13/20150713184446_HQnEt.jpeg'
                    },
                    {
                        sendFrom: 'Paypal',
                        message: 'PayPal announced today it has agreed to acquire Honey Science Corporation, the makers of a deal-finding browser add-on and mobile application, for $4 billion, mostly cash. ',
                        avatar: 'http://b-ssl.duitang.com/uploads/item/201609/09/20160909231644_PAHFG.jpeg'
                    },
                    {
                        sendFrom: 'Honey',
                        message: 'Nearly everyone has heard of honey, but most do not know exactly what honey is, or how it is made.',
                        avatar: 'http://b-ssl.duitang.com/uploads/item/201510/09/20151009130714_JWvHd.jpeg'
                    },
                    {
                        sendFrom: 'Wiki',
                        message: 'Is Honey Vegan? Why Bees Need It More Than We Do...',
                        avatar: 'http://b-ssl.duitang.com/uploads/item/201510/09/20151009130714_JWvHd.jpeg'
                    }
                ]
            }
        },
        charactersAndLink: {
            en: [
                'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
                'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
            ],
            cn: [
                '的','一','是','了','我','不','人','在','他','有','这','个','上','们','来','到','时','大','地','为','子','中','你','说','生','国','年','着','就','那','和','要','她','出','也','得','里','后','自','以','会','家','可','下','而','过','天','去','能','对','小','多','然','于','心','学','么','之','都','好','看','起','发','当','没','成','只','如','事','把','还','用','第','样','道','想','作','种','开','美','总','从','无','情','己','面','最','女','但','现','前','些','所','同','日','手','又','行','意','动','方','期','它','头','经','长','儿','回','位','分','爱','老','因','很','给','名','法','间','斯','知','世','什','两','次','使','身','者','被','高','已','亲','其','进','此','话','常','与','活','正','感','\u3000','\u3000','见','明','问','力','理','尔','点','文','几','定','本','公','特','做','外','孩','相','西','果','走','将','月','十','实','向','声','车','全','信','重','三','机','工','物','气','每','并','别','真','打','太','新','比','才','便','夫','再','书','部','水','像','眼','等','体','却','加','电','主','界','门','利','海','受','听','表','德','少','克','代','员','许','稜','先','口','由','死','安','写','性','马','光','白','或','住','难','望','教','命','花','结','乐','色','\u3000','\u3000','更','拉','东','神','记','处','让','母','父','应','直','字','场','平','报','友','关','放','至','张','认','接','告','入','笑','内','英','军','候','民','岁','往','何','度','山','觉','路','带','万','男','边','风','解','叫','任','金','快','原','吃','妈','变','通','师','立','象','数','四','失','满','战','远','格','士','音','轻','目','条','呢','病','始','达','深','完','今','提','求','清','王','化','空','业','思','切','怎','非','找','片','罗','钱','紶','吗','语','元','喜','曾','离','飞','科','言','干','流','欢','约','各','即','指','合','反','题','必','该','论','交','终','林','请','医','晚','制','球','决','窢','传','画','保','读','运','及','则','房','早','院','量','苦','火','布','品','近','坐','产','答','星','精','视','五','连','司','巴','\u3000','\u3000','奇','管','类','未','朋','且','婚','台','夜','青','北','队','久','乎','越','观','落','尽','形','影','红','爸','百','令','周','吧','识','步','希','亚','术','留','市','半','热','送','兴','造','谈','容','极','随','演','收','首','根','讲','整','式','取','照','办','强','石','古','华','諣','拿','计','您','装','似','足','双','妻','尼','转','诉','米','称','丽','客','南','领','节','衣','站','黑','刻','统','断','福','城','故','历','惊','脸','选','包','紧','争','另','建','维','绝','树','系','伤','示','愿','持','千','史','谁','准','联','妇','纪','基','买','志','静','阿','诗','独','复','痛','消','社','算','\u3000','\u3000','算','义','竟','确','酒','需','单','治','卡','幸','兰','念','举','仅','钟','怕','共','毛','句','息','功','官','待','究','跟','穿','室','易','游','程','号','居','考','突','皮','哪','费','倒','价','图','具','刚','脑','永','歌','响','商','礼','细','专','黄','块','脚','味','灵','改','据','般','破','引','食','仍','存','众','注','笔','甚','某','沉','血','备','习','校','默','务','土','微','娘','须','试','怀','料','调','广','蜖','苏','显','赛','查','密','议','底','列','富','梦','错','座','参','八','除','跑','亮','假','印','设','线','温','虽','掉','京','初','养','香','停','际','致','阳','纸','李','纳','验','助','激','够','严','证','帝','饭','忘','趣','支','\u3000','\u3000','春','集','丈','木','研','班','普','导','顿','睡','展','跳','获','艺','六','波','察','群','皇','段','急','庭','创','区','奥','器','谢','弟','店','否','害','草','排','背','止','组','州','朝','封','睛','板','角','况','曲','馆','育','忙','质','河','续','哥','呼','若','推','境','遇','雨','标','姐','充','围','案','伦','护','冷','警','贝','著','雪','索','剧','啊','船','险','烟','依','斗','值','帮','汉','慢','佛','肯','闻','唱','沙','局','伯','族','低','玩','资','屋','击','速','顾','泪','洲','团','圣','旁','堂','兵','七','露','园','牛','哭','旅','街','劳','型','烈','姑','陈','莫','鱼','异','抱','宝','权','鲁','简','态','级','票','怪','寻','杀','律','胜','份','汽','右','洋','范','床','舞','秘','午','登','楼','贵','吸','责','例','追','较','职','属','渐','左','录','丝','牙','党','继','托','赶','章','智','冲','叶','胡','吉','卖','坚','喝','肉','遗','救','修','松','临','藏','担','戏','善','卫','药','悲','敢','靠','伊','村','戴','词','森','耳','差','短','祖','云','规','窗','散','迷','油','旧','适','乡','架','恩','投','弹','铁','博','雷','府','压','超','负','勒','杂','醒','洗','采','毫','嘴','毕','九','冰','既','状','乱','景','席','珍','童','顶','派','素','脱','农','疑','练','野','按','犯','拍','征','坏','骨','余','承','置','臓','彩','灯','巨','琴','免','环','姆','暗','换','技','翻','束','增','忍','餐','洛','塞','缺','忆','判','欧','层','付','阵','玛','批','岛','项','狗','休','懂','武','革','良','恶','恋','委','拥','娜','妙','探','呀','营','退','摇','弄','桌','熟','诺','宣','银','势','奖','宫','忽','套','康','供','优','课','鸟','喊','降','夏','困','刘','罪','亡','鞋','健','模','败','伴','守','挥','鲜','财','孤','枪','禁','恐','伙','杰','迹','妹','藸','遍','盖','副','坦','牌','江','顺','秋','萨','菜','划','授','归','浪','听','凡','预','奶','雄','升','碃','编','典','袋','莱','含','盛','济','蒙','棋','端','腿','招','释','介','烧','误'
            ],
            int: [
                '1','2','3','4','5','6','7','8','9'
            ],
            video: [
                // https://www.metatube.com/
                'https://cl.buscafs.com/www.metatube.com/public/uploads/videos/112450_mp4.mp4',
                'https://cl.buscafs.com/www.metatube.com/public/uploads/videos/160282_mp4.mp4',
                'https://cl.buscafs.com/www.metatube.com/public/uploads/videos/53842_mp4.mp4',
                'https://cl.buscafs.com/www.metatube.com/public/uploads/videos/45495_mp4.mp4',
                'https://cl.buscafs.com/www.metatube.com/public/uploads/videos/127180_mp4.mp4',
                'https://cl.buscafs.com/www.metatube.com/public/uploads/videos/34233_mp4.mp4',
                'https://cl.buscafs.com/www.metatube.com/public/uploads/videos/3824_mp4.mp4'
            ],
            pic: [
                'http://images2.fanpop.com/image/photos/10600000/Sexy-Lady-Gaga-Wallpaper-lady-gaga-10606097-1920-1440.jpg',
                'https://cn.bing.com/th?id=OIP.N3Lhk8RNtsc8H7rp04pYZgHaJ4&pid=Api&rs=1',
                'https://cn.bing.com/th?id=OIP.n_px3i0G4jrSSMqvbdc0wgHaJ3&pid=Api&rs=1',
                'http://orangegrill.com/wp-content/uploads/2014/03/LucentVisionStudio-8388_1.jpg',
                'https://cn.bing.com/th?id=OIP.1rwhL2XTEceHgPniuWvvUwHaE8&pid=Api&rs=1',
                'https://cn.bing.com/th?id=OIP.XSKS4evy7aFzZkAes0lKWAHaE7&pid=Api&rs=1',
                'https://placeinpuglia.com/wp-content/uploads/2016/06/Food-4-1920x1221.jpg',
                'https://cn.bing.com/th?id=OIP.2IlchSvf6Ve_b8OrpJLlngHaN3&pid=Api&rs=1',
                'http://www.highwallpaper.com/wp-content/uploads/Beautiful-Evening-and-Sea-1366x768.jpg',
                'https://feeds.croatia.hr/epic-week/wp-content/uploads/2017/04/11.jpg',
                'https://cn.bing.com/th?id=OIP.9Q9xRJPCCoduaMr-ChbXpQHaEc&pid=Api&rs=1',
                'https://oddstuffmagazine.com/wp-content/uploads/2015/01/Another-one-from-my-drive-down-the-Pacific-Coast-Highway.jpg',
                'http://www.hotelroomsearch.net/im/hotels/it/beautiful-venice-8.jpg',
                'https://aboutkazakhstan.com/blog/wp-content/uploads/2010/11/charyn-canyon-kazakhstan-wallpaper-5.jpg',
                'https://s1.it.atcdn.net/wp-content/uploads/2015/02/HaliLandscape2.jpg',
                'https://tailandfur.com/wp-content/uploads/2014/09/beautiful-and-cute-animals-wallpaper-36.jpg',
                'https://fanart.tv/fanart/movies/109491/movieposter/beautiful-creatures-52f1468418925.jpg',
                'https://www.hawtcelebs.com/wp-content/uploads/2018/03/adelaide-kane-at-beautiful-people-show-at-paris-fashion-week-03-06-2018-6.jpg',
                'https://cn.bing.com/th?id=OIP.y2e5plqPyIHB47l-vSx1RgHaEK&pid=Api&rs=1',
                'https://www.hdwallpaper.nu/wp-content/uploads/2015/10/beyonce_wallpaper_067.jpg',
                'http://beautifullifestudios.com/media/blog/cover/249/Engagement-Photography-Toronto-Vancouver-Beautiful-Life-Studios.jpg',
                'https://blog.hdwallsource.com/wp-content/uploads/2016/02/lily-james-actress-wallpaper-49980-51665-hd-wallpapers.jpg',
                'https://cn.bing.com/th?id=OIP.jAfi_S7K4FXWsTc1eKG9ngHaEo&pid=Api&rs=1',
                'http://kollywood7.com/actress/uploads/vrushali-gosavi-beautiful-look-168.jpg',
                'https://sunnyharbour.org.uk/wp-content/uploads/2018/02/DSC02397-copy.jpg',
                'https://images.pexels.com/photos/1103904/pexels-photo-1103904.jpeg?cs=srgb&dl=animal-pet-cute-1103904.jpg&fm=jpg',
                'http://www.cutenessoverflow.com/wp-content/uploads/2015/05/cat-tongue-out-21.jpg',
                'https://cn.bing.com/th?id=OIP.a130MIOieKu4c2dPYV8PVgHaFj&pid=Api&rs=1',
                'http://pixfeeds.com/images/17/442620/1200-177081753-american-shorthair-calico-cat.jpg',
                'https://images.pexels.com/photos/794590/pexels-photo-794590.jpeg?cs=srgb&dl=animal-pet-eyes-794590.jpg&fm=jpg',
                'http://www.petpaw.com.au/wp-content/uploads/2014/09/Smart-Looking-Basque-Shepherd-Dog-1030x1030.jpg',
                'https://media.buzzle.com/media/images-en/photos/mammals/dogs/1200-16191438-hungry-labrador-dog.jpg',
                'http://www.needlesandknowhow.com/wp-content/uploads/2013/11/frontview.jpg',
                'https://thefunnyplace.org/wp-content/uploads/2013/10/Brad-pitt-quotes-and-sayings.jpg',
                'https://images.wallpapersden.com/image/download/cara-delevingne-funny-shoot-for-burberry-holiday-2017_61155_7680x4320.jpg',
                'https://samurairestaurant.com/wp-content/uploads/2016/03/hibachi_chateaubriand.jpg',
                'http://aharrisphotography.com/wp-content/uploads/2016/10/Orlando-Food-Photographer-3.jpg'
            ]
        }
    }
};
