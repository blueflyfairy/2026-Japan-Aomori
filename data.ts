
import { DayPlan, Category, ShoppingCategory } from './types';

export const ITINERARY: DayPlan[] = [
  {
    date: '1/24',
    weekday: 'SAT',
    dayLabel: 'D1',
    weather: 'Sunny',
    temp: '4°C / -2°C',
    imageUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1000&auto=format&fit=crop', // 飛機/機場意象
    events: [
      {
        id: 'd1-1',
        time: '15:30',
        title: '松山機場集合',
        description: '記得把水果刀、食物剪都托運，行動電源必須放在隨身行李。',
        category: Category.Activity,
        tags: ['集合', '行李檢查']
      },
      {
        id: 'd1-2',
        time: '16:50',
        title: 'NH854 航班起飛',
        flightNo: 'NH854',
        description: '16:50-20:40 TSA-HND，波音 787-8。',
        guideNote: '想看富士山去程選「左邊」，回程選「右邊」。',
        category: Category.Transport,
        tags: ['全日空', '富士山']
      },
      {
        id: 'd1-3',
        time: '20:40',
        title: '抵達羽田機場',
        description: '下機後辦理入關。',
        guideNote: '【任務】請芬娟幫爸媽一起填 VJW (Visit Japan Web)。',
        category: Category.Activity,
        refLink: 'https://vjw-lp.digital.go.jp/',
        tags: ['入境', 'VJW']
      },
      {
        id: 'd1-4',
        time: '21:00',
        title: '入住 Villa Fontaine',
        category: Category.Hotel,
        hotelInfo: {
          name: 'Villa Fontaine Grand Haneda',
          address: '羽田機場第3航廈直通',
          checkIn: '21:00'
        },
        description: '需要溫泉券的人請舉手。',
        guideNote: '【重要】護照全部放在「純」這裡，隔天買 JR Pass 要用，買好再還給大家。',
        tags: ['住宿', '收護照']
      },
      {
        id: 'd1-5',
        time: '21:30',
        title: '機場晚餐',
        description: '領房卡後自由覓食。推薦：荒 (Ara) 牛舌 (T2 4F)、雞だし屋 (T3 4F)、銀座おのでら (T1 2F)。',
        category: Category.Food,
        tags: ['晚餐']
      },
      {
        id: 'd1-6',
        time: '23:00',
        title: '申請入境旅平險',
        description: '隔日生效。',
        guideNote: '【任務】請芬娟幫爸媽一起申請。',
        category: Category.Activity,
        refLink: 'https://www.instagram.com/reels/DBxwhR_xEbo/',
        tags: ['保險']
      }
    ]
  },
  {
    date: '1/25',
    weekday: 'SUN',
    dayLabel: 'D2',
    weather: 'Snowy',
    temp: '1°C / -4°C',
    imageUrl: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=1000&auto=format&fit=crop', // 青森港灣氛圍 (雪/城市/水邊)
    events: [
      {
        id: 'd2-1',
        time: '08:30',
        title: '分工：買 JR Pass',
        description: '前往 T3 2樓 JR 旅行服務中心 (6:45-20:00) 購買東北・南北海道鐵路周遊券。',
        guideNote: '【純負責】順便預約大件行李空間，記得放上所有 JR 想預定的車次。',
        category: Category.Activity,
        mapsLink: 'https://maps.app.goo.gl/PNQMbTYPnLjTrDMx8',
        refLink: 'https://www.jreast.co.jp/zh-CHT/multi/pass/tohokuhokkaido.html',
        tags: ['票券', '純負責']
      },
      {
        id: 'd2-2',
        time: '09:00',
        title: '分工：帶小孩晃晃',
        description: 'T3 5F 展望台看飛機起降、TOKYO POP TOWN、TIAT Sky Road (模擬器)。',
        guideNote: '【爸媽芬娟麟】帶薯餅、湯圓去放電。',
        category: Category.Activity,
        refLink: 'https://tokyo-haneda.com/zh-CHT/service/facilities/kids_space.html',
        tags: ['育兒', '展望台']
      },
      {
        id: 'd2-3',
        time: '11:00',
        title: '羽田機場午餐',
        description: '五代目花山烏龍麵 (T3 4F) 或 鰻魚四代目菊川 (T3 4F)。搭車前可以買燒肉冠軍捲。',
        guideNote: '【任務】10:30 請一個人先去排花山烏龍麵 (6大2小)。',
        category: Category.Food,
        tags: ['美食', '排隊']
      },
      {
        id: 'd2-4',
        time: '12:30',
        title: 'JR 東京站 至 JR 新青森',
        description: '13:44 Hayabusa 61號 (東京發) -> 16:54 (新青森著)。20番月台。',
        guideNote: '備用車次：13:20 Hayabusa 23號 (22番月台) 或 12:20 Hayabusa 21號。',
        category: Category.Transport,
        tags: ['新幹線', 'Hayabusa']
      },
      {
        id: 'd2-5',
        time: '17:00',
        title: '海の食堂 大福丸',
        description: '青森港海鮮美食。現場有津輕三味線表演。',
        guideNote: '【已預約】編號 SD6535909 (05060309021)。必點新鮮帆立貝！海鮮拼盤很划算。',
        category: Category.Food,
        mapsLink: 'https://maps.app.goo.gl/z6Cpq7GjyzhzH4po6',
        tags: ['美食', '已預約', '三味線']
      },
      {
        id: 'd2-6',
        time: '18:20',
        title: '販賣機蘋果汁',
        description: '青森車站 acute 販賣機。推薦王林口味。',
        category: Category.Food,
        tags: ['必喝']
      },
      {
        id: 'd2-7',
        time: '18:30',
        title: '入住 ReLabo Spa',
        category: Category.Hotel,
        hotelInfo: {
          name: 'ReLabo Medical & Spa Aomori',
          address: '青森站前',
          checkIn: '18:30'
        },
        description: '6F Lounge 有蘋果汁/氣泡酒無限暢飲 (15:00-24:00)。17:00-19:00 加碼糖質ZERO啤酒。',
        guideNote: '【任務】C.I. 時，詢問是否有瑜伽可以預約 (20:00 月光舒緩 / 08:00 晨間喚能)。',
        refLink: 'https://relabo-spa.com/',
        tags: ['溫泉', 'Lounge']
      },
      {
        id: 'd2-8',
        time: '19:00',
        title: 'Lovina 逛街 / 買水果',
        description: '營業至 20:00。可逛好日山莊、ABC Mart (買雪靴)、無印良品。',
        guideNote: '推薦去 THE AOMORI MARKET 超市買水果回飯店吃。',
        category: Category.Shopping,
        mapsLink: 'https://maps.app.goo.gl/AApcLBPzT4CSjepH6',
        tags: ['採買', '雪靴']
      }
    ]
  },
  {
    date: '1/26',
    weekday: 'MON',
    dayLabel: 'D3',
    weather: 'Snowy',
    temp: '0°C / -5°C',
    imageUrl: 'https://images.unsplash.com/photo-1518978556637-25c796b79782?q=80&w=1000&auto=format&fit=crop', // 樹冰/雪怪/雪山特寫
    events: [
      {
        id: 'd3-1',
        time: '07:30',
        title: '早餐',
        description: '在飯店房間吃前一天買的，或去星巴克 / 飯店 Lounge 喝果昔。',
        category: Category.Food,
        mapsLink: 'https://maps.app.goo.gl/ZJrF9c4BjgojpNL57',
        tags: ['早餐']
      },
      {
        id: 'd3-2',
        time: '09:00',
        title: '包車集合',
        description: '車站 Lovina 前集合。司機會舉牌。',
        guideNote: '【任務】九點請確認纜車運行狀態。',
        category: Category.Transport,
        refLink: 'https://hakkoda-ropeway.jp/',
        tags: ['包車']
      },
      {
        id: 'd3-3',
        time: '10:30',
        title: '八甲田山樹冰纜車',
        description: '山麓站食堂 10:00-15:00。往返 2,200 日圓 / 單程 1,400 日圓。',
        guideNote: '三大樹冰之一。山上體感溫度極低，請確保小孩裝備充足。',
        category: Category.Activity,
        mapsLink: 'https://maps.app.goo.gl/NP3Hf9NAbSnhTciq9',
        tags: ['樹冰', '必去']
      },
      {
        id: 'd3-4',
        time: '13:30',
        title: '返回青森 / 廣田神社',
        description: '包車返回。若天氣不好雪備：青森縣立美術館 或 廣田神社。',
        category: Category.Transport,
        tags: ['交通']
      },
      {
        id: 'd3-5',
        time: '14:30',
        title: '廣田神社',
        description: '日本唯一「病厄除守護」神社。有蘋果水手舍、睡魔燈籠、蘋果籤。',
        category: Category.Activity,
        mapsLink: 'https://maps.app.goo.gl/BUTTz9Vsgx3RJFVP8',
        tags: ['神社', '蘋果籤']
      },
      {
        id: 'd3-6',
        time: '16:00',
        title: '睡魔之家 WARASSE',
        description: '欣賞 4 座大型睡魔燈籠，體驗祭典舞蹈「跳人」。',
        category: Category.Activity,
        mapsLink: 'https://maps.app.goo.gl/KGerPstg4nA5zJAJ8',
        tags: ['文化']
      },
      {
        id: 'd3-7',
        time: '17:00',
        title: 'A-FACTORY',
        description: '青森伴手禮一站購足。有蘋果氣泡酒、蘋果派。',
        category: Category.Shopping,
        mapsLink: 'https://maps.app.goo.gl/8BwvrsuE2JeSvjTa8',
        tags: ['伴手禮']
      },
      {
        id: 'd3-8',
        time: '18:00',
        title: '八甲田丸紀念船',
        description: '參觀青函連絡船博物館 (昭和時代青森市集復原模型)。',
        category: Category.Activity,
        mapsLink: 'https://maps.app.goo.gl/yD3Mx6LnPppmeCEHA',
        tags: ['歷史']
      },
      {
        id: 'd3-9',
        time: '19:00',
        title: '青森市區晚餐',
        description: '推薦：鮨処あすか (ASUKA)、燒肉南大門、Osanai 食堂。',
        category: Category.Food,
        mapsLink: 'https://maps.app.goo.gl/1dA9rw4uT59VcG9W6',
        tags: ['晚餐']
      }
    ]
  },
  {
    date: '1/27',
    weekday: 'TUE',
    dayLabel: 'D4',
    weather: 'Snowy',
    temp: '1°C / -4°C',
    imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1000&auto=format&fit=crop', // 飯店大廳/室內落地窗/雪景 (星野奧入瀨大廳氛圍)
    events: [
      {
        id: 'd4-1',
        time: '08:30',
        title: '古川市場 (青森魚菜中心)',
        description: '體驗 NOKKEDOM (のっけ丼) 自製海鮮丼。',
        guideNote: '【攻略】先買餐券 -> 去 3 號北都商店拿白飯 -> 自由挑選喜歡的海鮮。',
        category: Category.Food,
        refLink: 'https://nokkedon.jp/',
        tags: ['必吃', '海鮮丼']
      },
      {
        id: 'd4-2',
        time: '09:30',
        title: '青森縣觀光物產館 ASPAM',
        description: '步行約 700 公尺。推薦 PamPam 蘋果派。',
        category: Category.Activity,
        mapsLink: 'https://maps.app.goo.gl/c4UpD6SfL1Roowbh6',
        tags: ['蘋果派']
      },
      {
        id: 'd4-3',
        time: '11:00',
        title: '飯店 Check Out',
        description: '行李先打包好。',
        category: Category.Hotel,
        tags: ['退房']
      },
      {
        id: 'd4-4',
        time: '12:00',
        title: '青森 前往 新青森',
        description: '12:14 JR 奧羽本線 (4番月台) -> 12:19 抵達新青森。',
        category: Category.Transport,
        tags: ['JR']
      },
      {
        id: 'd4-5',
        time: '12:30',
        title: '新青森 至 八戶',
        description: '12:39 Hayabusa 20號 (12番月台) -> 13:06 抵達八戶。',
        guideNote: '備用車次：13:16 Hayabusa 22號 (14番月台)。',
        category: Category.Transport,
        tags: ['新幹線']
      },
      {
        id: 'd4-6',
        time: '13:15',
        title: '八戶站採買',
        description: '記得採買食物，宵夜或肚子餓墊胃用 (泡麵、零食)。',
        category: Category.Shopping,
        tags: ['採買']
      },
      {
        id: 'd4-7',
        time: '13:50',
        title: '奧入瀨飯店接駁車',
        description: '八戶站西口上車。Reservation ID: 4090543。',
        category: Category.Transport,
        tags: ['接駁']
      },
      {
        id: 'd4-8',
        time: '15:00',
        title: '入住 奧入瀨溪流飯店',
        category: Category.Hotel,
        hotelInfo: {
          name: '星野集團 奧入瀨溪流飯店',
          address: '奧入瀨溪流畔',
          checkIn: '15:00'
        },
        description: '大廳享用迎賓蘋果汁/酒。入住溪流和室，大面落地窗欣賞美景。',
        guideNote: '【任務】Check-in 時詢問：\n1. 調整 1/28 冰瀑秀至 17:30\n2. 追加 1/28 早上巴士觀光 (09:55) 四個位置。',
        refLink: 'https://hoshinoresorts.com/zh_tw/hotels/oirasekeiryu/',
        tags: ['星野', '頂級']
      },
      {
        id: 'd4-9',
        time: '16:35',
        title: '雪鞋漫步 (娟)',
        description: '16:35-17:15。Reservation ID: 4226230 (1位)。',
        category: Category.Activity,
        tags: ['活動', '娟']
      },
      {
        id: 'd4-10',
        time: '17:30',
        title: '冰瀑燈光秀 (芬)',
        description: '17:30-18:30。Reservation ID: 4226202 (1位)。',
        category: Category.Activity,
        tags: ['活動', '芬']
      },
      {
        id: 'd4-11',
        time: '19:20',
        title: '青森蘋果廚房 晚餐',
        description: 'Reservation ID: 4087045。',
        guideNote: '必吃：現烤蘋果派、現烤扇貝、蘋果汁評比 (津輕/王林/富士)。',
        category: Category.Food,
        tags: ['晚餐', '蘋果餐']
      },
      {
        id: 'd4-12',
        time: '20:50',
        title: '冰瀑之湯 / 休息',
        description: '露天溫泉欣賞冰瀑美景。6:00 AM - 12:00 PM。',
        category: Category.Activity,
        tags: ['溫泉']
      }
    ]
  },
  {
    date: '1/28',
    weekday: 'WED',
    dayLabel: 'D5',
    weather: 'Very Snowy',
    temp: '-2°C / -7°C',
    imageUrl: 'https://images.unsplash.com/photo-1519965099307-8e6e5896a605?q=80&w=1000&auto=format&fit=crop', // 雪上樂園/親子玩雪/滑雪
    events: [
      {
        id: 'd5-1',
        time: '07:30',
        title: '飯店早餐',
        description: 'Reservation ID: 4090489。6:30-10:00 (LO 9:30)。',
        category: Category.Food,
        tags: ['早餐']
      },
      {
        id: 'd5-2',
        time: '09:55',
        title: '奧入瀨溪流巴士觀光',
        description: '09:55-10:40。Reservation ID: 4227031 (僅4位，待追加)。',
        category: Category.Activity,
        tags: ['觀光']
      },
      {
        id: 'd5-3',
        time: '10:50',
        title: '十和田湖繞行巴士',
        description: '10:50-12:30。Reservation ID: 4225136 (全員，3300/人)。',
        category: Category.Activity,
        tags: ['觀光', '全員']
      },
      {
        id: 'd5-4',
        time: '12:45',
        title: '前往滑雪場',
        description: '接駁巴士 12:45-12:50 (回程 15:00)。',
        category: Category.Transport,
        tags: ['接駁']
      },
      {
        id: 'd5-5',
        time: '13:00',
        title: '纜車 / 雪上公園',
        description: '適合小孩玩雪盆。門票(含纜車)大人小學每人 2000 日圓。',
        category: Category.Activity,
        tags: ['玩雪', '親子']
      },
      {
        id: 'd5-6',
        time: '14:10',
        title: '滑雪場午餐',
        description: '食事処有拉麵、咖喱飯、豚丼。',
        category: Category.Food,
        tags: ['午餐']
      },
      {
        id: 'd5-7',
        time: '18:45',
        title: '冰瀑燈光秀 (全員)',
        description: 'Reservation ID: 4225899。約 1 小時。費用 1,500 JPY/人。',
        category: Category.Activity,
        tags: ['活動', '絕景']
      },
      {
        id: 'd5-8',
        time: '19:20',
        title: '蘋果廚房 晚餐',
        description: 'Reservation ID: 4090493。',
        category: Category.Food,
        tags: ['晚餐']
      }
    ]
  },
  {
    date: '1/29',
    weekday: 'THU',
    dayLabel: 'D6',
    weather: 'Snowy',
    temp: '2°C / -2°C',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Date_Masamune_statue_in_Aoba_Castle_20191122.jpg/1200px-Date_Masamune_statue_in_Aoba_Castle_20191122.jpg', // 仙台 伊達政宗騎馬像 (Wikimedia 高畫質穩定源)
    events: [
      {
        id: 'd6-1',
        time: '08:00',
        title: '飯店早餐',
        description: 'Reservation ID: 4224018。',
        category: Category.Food,
        tags: ['早餐']
      },
      {
        id: 'd6-2',
        time: '12:00',
        title: 'Check Out',
        description: '享受退房前的時光。',
        category: Category.Hotel,
        tags: ['退房']
      },
      {
        id: 'd6-3',
        time: '12:15',
        title: '包車至八戶',
        category: Category.Transport,
        tags: ['包車']
      },
      {
        id: 'd6-4',
        time: '13:40',
        title: 'JR 八戶 至 仙台',
        description: '13:40 Hayabusa 22號 (12番月台) -> 14:56 抵達仙台。',
        category: Category.Transport,
        tags: ['新幹線']
      },
      {
        id: 'd6-5',
        time: '15:15',
        title: '仙台牛舌午餐',
        description: '仙台車站 3F 牛舌通。推薦：善治郎、伊達の牛たん本舗。',
        guideNote: '不吃牛的爸媽也有炸豬排飯、海鮮丼、壽司可選。',
        category: Category.Food,
        mapsLink: 'https://maps.app.goo.gl/Q1MHv4ByKYCQ6tz28',
        tags: ['美食', '牛舌']
      },
      {
        id: 'd6-6',
        time: '16:30',
        title: '入住 御宿 野乃 仙台',
        category: Category.Hotel,
        hotelInfo: {
          name: 'Onyado Nono Sendai',
          address: '廣瀨通站東2出口步行1分鐘',
          checkIn: '15:00'
        },
        description: '全館榻榻米，進門需脫鞋。14F 有天然溫泉。',
        refLink: 'https://www.hotespa.net/hotels/nono_sendai/',
        tags: ['溫泉', '榻榻米']
      },
      {
        id: 'd6-7',
        time: '18:00',
        title: '鯛吉 (薄皮鯛魚燒)',
        description: '名掛丁本店。距離飯店 350m。',
        category: Category.Food,
        mapsLink: 'https://maps.app.goo.gl/KNgFMftkeanFXs9E6',
        tags: ['點心']
      },
      {
        id: 'd6-8',
        time: '18:30',
        title: '阿部蒲鉾店 本店',
        description: '必吃：炸葫蘆魚板 (ひょうたん揚げ)。外層麵衣酥脆，內層魚板Q彈。',
        category: Category.Food,
        mapsLink: 'https://maps.app.goo.gl/NWUNqzH4v5AHQQ3d9',
        tags: ['點心']
      },
      {
        id: 'd6-9',
        time: '19:00',
        title: '仙台仔虎 燒肉晚餐',
        description: '米澤牛燒肉。已預約 19:30 (Res: IR0513789744)。',
        guideNote: '預約人數 6 人 (6大0小)。',
        category: Category.Food,
        mapsLink: 'https://maps.app.goo.gl/pMzQLrhLUmgUnaz78',
        tags: ['燒肉', '已預約']
      },
      {
        id: 'd6-10',
        time: '21:30',
        title: '夜鳴拉麵',
        description: '飯店免費宵夜。',
        category: Category.Food,
        tags: ['宵夜']
      },
      {
        id: 'd6-11',
        time: '22:00',
        title: '居酒屋 (Option)',
        description: '推薦：晩酌と晩御飯 ちょうつがひ。',
        category: Category.Food,
        mapsLink: 'https://maps.app.goo.gl/tCHaRt6W6wY7is14A',
        tags: ['居酒屋']
      }
    ]
  },
  {
    date: '1/30',
    weekday: 'FRI',
    dayLabel: 'D7',
    weather: 'Cloudy',
    temp: '5°C / 0°C',
    imageUrl: 'https://images.unsplash.com/photo-1552560230-222a7f05359a?q=80&w=1000&auto=format&fit=crop', // 東京/現代建築/購物/銀座氛圍
    events: [
      {
        id: 'd7-1',
        time: '07:30',
        title: '飯店早餐',
        description: '在地特色自助餐：海鮮丼吃到飽 (自製)、現炸天婦羅、仙台牛舌、毛豆麻糬。',
        category: Category.Food,
        tags: ['豐盛', '海鮮丼']
      },
      {
        id: 'd7-2',
        time: '09:00',
        title: '麥當勞',
        description: '買鬆餅堡、期間限定商品。',
        category: Category.Food,
        mapsLink: 'https://maps.app.goo.gl/o8cKcYxKgNS9tZrA9',
        tags: ['早餐']
      },
      {
        id: 'd7-3',
        time: '09:15',
        title: '買 Loople 一日券',
        description: '前往三井花園飯店附近購買。',
        guideNote: '【芬芬娟娟】負責購買。',
        category: Category.Activity,
        mapsLink: 'https://maps.app.goo.gl/dKPAVStTdGF7fzot5',
        tags: ['票券']
      },
      {
        id: 'd7-4',
        time: '09:20',
        title: 'Check Out',
        description: '行李先去仙台車站寄放。',
        category: Category.Hotel,
        tags: ['退房']
      },
      {
        id: 'd7-5',
        time: '09:30',
        title: '仙台朝市',
        description: '推薦：斎藤惣菜店 (可樂餅)、うみのおきて (牡蠣拉麵)。',
        category: Category.Activity,
        mapsLink: 'https://maps.app.goo.gl/DGRNHFsNi2nLDjWGA',
        tags: ['朝市', '美食']
      },
      {
        id: 'd7-6',
        time: '10:30',
        title: '仙台站前購物',
        description: 'Loft (2-4F 文具/雜貨), Parco2 (茅乃舍), Yodobashi (電器/扭蛋/石井體育)。',
        guideNote: '善用車站二樓空橋移動。Loft 6樓有宜得利。',
        category: Category.Shopping,
        mapsLink: 'https://maps.app.goo.gl/8aQQj3GaZzgLgMCS8',
        tags: ['買爆', 'Loft']
      },
      {
        id: 'd7-7',
        time: '13:00',
        title: '午餐：司 牛舌',
        description: '烤牛舌專門店 司 西口名掛丁店。',
        category: Category.Food,
        mapsLink: 'https://maps.app.goo.gl/ywC27FfkTm7JobVN7',
        tags: ['美食']
      },
      {
        id: 'd7-8',
        time: '14:00',
        title: 'JR 仙台 至 東京',
        description: '14:31 Hayabusa 20號 (13番月台) -> 16:04 抵達東京。',
        category: Category.Transport,
        tags: ['新幹線']
      },
      {
        id: 'd7-9',
        time: '17:00',
        title: '入住 Villa Fontaine',
        category: Category.Hotel,
        description: '再次入住羽田機場飯店。',
        tags: ['住宿']
      },
      {
        id: 'd7-10',
        time: '17:10',
        title: '羽田花園 / 晚餐',
        description: '逛 KOKUYO DOORS, 松本清。晚餐推薦：五代目花山烏龍麵, 人形町今半, 銀座天一。',
        category: Category.Shopping,
        tags: ['逛街', '晚餐']
      }
    ]
  },
  {
    date: '1/31',
    weekday: 'SAT',
    dayLabel: 'D8',
    weather: 'Sunny',
    temp: '8°C / 3°C',
    imageUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1000&auto=format&fit=crop', // 飛機/機場
    events: [
      {
        id: 'd8-1',
        time: '08:30',
        title: '早餐',
        description: '星巴克或便利商店。',
        category: Category.Food,
        tags: ['早餐']
      },
      {
        id: 'd8-2',
        time: '10:00',
        title: 'Check Out',
        description: '再次檢查：水果刀、食物剪是否已托運。',
        category: Category.Hotel,
        tags: ['退房']
      },
      {
        id: 'd8-3',
        time: '10:00',
        title: '買燒肉卷 (外帶)',
        description: '燒肉冠軍 (T3 4F 江戶小路)。',
        category: Category.Food,
        tags: ['午餐']
      },
      {
        id: 'd8-4',
        time: '10:40',
        title: '登機托運 / 安檢',
        category: Category.Activity,
        tags: ['登機']
      },
      {
        id: 'd8-5',
        time: '11:30',
        title: '免稅店採買',
        description: '推薦：SNOWS 起司、LeTao 紅茶巧克力、砂糖樹冬季限定口味。',
        category: Category.Shopping,
        tags: ['伴手禮']
      },
      {
        id: 'd8-6',
        time: '12:40',
        title: 'NH853 航班起飛',
        flightNo: 'NH853',
        description: '12:40 HND -> 15:50 TSA。回程右側看富士山。',
        category: Category.Transport,
        tags: ['回程']
      }
    ]
  }
];

export const SHOPPING_LIST: ShoppingCategory[] = [
  {
    title: '便利商店',
    icon: '🏪',
    items: [
      { id: 'cvs-1', name: '砂糖樹餅乾', note: '7-Eleven 限定' },
      { id: 'cvs-2', name: '哈根達斯', note: '7-Eleven' },
      { id: 'cvs-3', name: '下酒小菜章魚腳', note: '7-Eleven' },
      { id: 'cvs-4', name: '草莓三明治', note: '7-Eleven' },
      { id: 'cvs-5', name: '草莓奶昔', note: '7-Eleven' },
      { id: 'cvs-6', name: '薯條餅乾', note: '7-Eleven' },
      { id: 'cvs-7', name: 'Godiva 杜拜巧克力', note: '7-Eleven' },
      { id: 'cvs-8', name: '生火腿 Cream Cheese', note: 'Lawson' }
    ]
  },
  {
    title: '藥妝 & 雜貨',
    icon: '💊',
    items: [
      { id: 'drug-1', name: '小林製藥 命之母' },
      { id: 'drug-2', name: '資生堂 護手霜' },
      { id: 'var-1', name: '止滑膠 (襪子用)', note: 'Daiso' },
      { id: 'var-2', name: '藍牙追蹤器', note: 'Daiso' },
      { id: 'var-3', name: '番茄糊', note: '日本超市' },
      { id: 'var-4', name: '敲木魚 (有緣就遇得到)', note: '扭蛋?' }
    ]
  },
  {
    title: '仙台必買',
    icon: '🍡',
    items: [
      { id: 'sd-1', name: 'Maison Cœlacanthe 最中', note: 'kazunori ikeda' },
      { id: 'sd-2', name: '枝豆麻糬 / 枝豆奶昔', note: 'ずんだ茶寮' },
      { id: 'sd-3', name: '炸葫蘆魚板', note: '阿部蒲鉾店' }
    ]
  },
  {
    title: '青森必買',
    icon: '🍎',
    items: [
      { id: 'ao-1', name: '3-4種蘋果派', note: '青森車站 赤色林檎' },
      { id: 'ao-2', name: '病厄除御守', note: '廣田神社' },
      { id: 'ao-3', name: '蘋果神社周邊', note: '廣田神社' },
      { id: 'ao-4', name: '青森蘋果乾' }
    ]
  },
  {
    title: '羽田機場 (伴手禮/美食)',
    icon: '✈️',
    items: [
      { id: 'hnd-1', name: 'LeTao 紅茶巧克力伯爵餅乾' },
      { id: 'hnd-2', name: '砂糖樹 (冬季限定/發酵奶油)' },
      { id: 'hnd-3', name: 'SNOWS 半熟感起司', note: '第三航廈' },
      { id: 'hnd-4', name: '燒肉冠軍飯捲', note: 'T3 江戶小路' },
      { id: 'hnd-5', name: '五代目花山烏龍麵', note: 'T3 4F' },
      { id: 'hnd-6', name: '鰻魚飯 四代目菊川', note: 'T3 4F' },
      { id: 'hnd-7', name: 'せたが屋 拉麵', note: 'T3 4F' },
      { id: 'hnd-8', name: 'かつ仙 炸豬排', note: 'T3 4F' },
      { id: 'hnd-9', name: '丸山製茶' },
      { id: 'hnd-10', name: '京都 茶寮翠泉' }
    ]
  },
  {
    title: '連鎖餐飲',
    icon: '🍔',
    items: [
      { id: 'chn-1', name: '伯爵奶油茶那堤', note: 'Starbucks' },
      { id: 'chn-2', name: '黑胡椒大蒜雞塊', note: 'McDonald\'s' },
      { id: 'chn-3', name: '巧克力奶油派/鹹焦糖杏仁派', note: 'McDonald\'s' }
    ]
  }
];
