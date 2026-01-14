
export enum Category {
  Transport = '交通',
  Food = '美食',
  Hotel = '住宿',
  Activity = '活動',
  Shopping = '購物',
  Other = '其他'
}

export interface TravelEvent {
  id: string;
  time: string;
  title: string;
  description?: string;
  category: Category;
  tags?: string[];
  mapsLink?: string;
  refLink?: string;
  guideNote?: string; // 對應 PDF 的備註與分工
  flightNo?: string;
  hotelInfo?: {
    name: string;
    address: string;
    checkIn: string;
  };
}

export interface DayPlan {
  date: string;
  weekday: string;
  dayLabel: string;
  weather: string;
  temp: string;
  imageUrl?: string; // 新增風景圖欄位
  events: TravelEvent[];
}

export interface Expense {
  id: string;
  item: string;
  amount: number;
  payer: string;
}

export interface ShoppingItem {
  id: string;
  name: string;
  note?: string;
  isBought?: boolean;
}

export interface ShoppingCategory {
  title: string;
  icon: string;
  items: ShoppingItem[];
}
