
import React, { useState, useEffect, useMemo } from 'react';
import { 
  Calendar, 
  Toolbox, 
  Wallet, 
  MapPin, 
  Clock, 
  ExternalLink, 
  ChevronRight, 
  X, 
  CloudSnow, 
  Sun, 
  Cloud,
  Plane, 
  Bed, 
  Utensils, 
  ShoppingBag,
  Plus,
  Trash2,
  Info,
  Navigation,
  CheckCircle2,
  FileText,
  Check
} from 'lucide-react';
import { ITINERARY, SHOPPING_LIST } from './data';
import { Category, TravelEvent, Expense } from './types';

const WeatherIcon: React.FC<{ weather: string; size?: number; className?: string }> = ({ weather, size = 24, className }) => {
  const w = weather.toLowerCase();
  if (w.includes('snow')) return <CloudSnow size={size} className={className} />;
  if (w.includes('sun')) return <Sun size={size} className={className} />;
  if (w.includes('cloud')) return <Cloud size={size} className={className} />;
  return <Cloud size={size} className={className} />;
};

const CategoryIcon: React.FC<{ category: Category }> = ({ category }) => {
  const size = 20;
  switch (category) {
    case Category.Transport: return <Plane size={size} />;
    case Category.Food: return <Utensils size={size} />;
    case Category.Hotel: return <Bed size={size} />;
    case Category.Activity: return <Navigation size={size} />;
    case Category.Shopping: return <ShoppingBag size={size} />;
    default: return <Info size={size} />;
  }
};

const EventModal: React.FC<{ event: TravelEvent; onClose: () => void }> = ({ event, onClose }) => {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/20 backdrop-blur-[2px] cursor-pointer" 
      onClick={onClose}
    >
      <div 
        className="glass w-full max-w-sm rounded-[2.5rem] p-8 relative animate-in fade-in zoom-in duration-300 shadow-2xl overflow-hidden border border-white cursor-default"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/50 flex items-center justify-center hover:bg-white transition-all z-20 text-[#6F4E37] shadow-sm"
          aria-label="關閉"
        >
          <X size={20} />
        </button>

        <div className="flex items-center gap-4 mb-8 z-10 relative">
          <div className="w-16 h-16 bg-[#828B5C] rounded-2xl flex items-center justify-center text-white shadow-lg">
            <CategoryIcon category={event.category} />
          </div>
          <div className="flex-1 pr-6">
            <div className="text-[10px] font-mono font-bold text-[#6F4E37]/40 tracking-widest mb-1">{event.time}</div>
            <h3 className="text-xl font-bold leading-tight text-[#6F4E37]">{event.title}</h3>
          </div>
        </div>

        <div className="space-y-6 z-10 relative text-[#6F4E37]">
          {event.description && (
            <div className="space-y-2">
              <div className="text-[9px] font-bold uppercase tracking-widest opacity-30 flex items-center gap-1">
                <Info size={10} /> 行程摘要
              </div>
              <p className="text-sm leading-relaxed opacity-80 whitespace-pre-line">{event.description}</p>
            </div>
          )}

          {event.guideNote && (
            <div className="p-5 rounded-[1.5rem] bg-[#828B5C]/10 border border-[#828B5C]/20">
              <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#828B5C] mb-2 flex items-center gap-1">
                <CheckCircle2 size={10} /> 筆記 & 分工
              </div>
              <p className="text-sm leading-relaxed font-medium whitespace-pre-line text-[#5D4037]">{event.guideNote}</p>
            </div>
          )}

          {event.hotelInfo && (
            <div className="space-y-3">
              <div className="text-[9px] font-bold uppercase tracking-widest opacity-30">住宿資訊</div>
              <div className="p-4 rounded-2xl bg-white/50 border border-white/80">
                <p className="text-sm font-bold mb-1">{event.hotelInfo.name}</p>
                <p className="text-[11px] opacity-60 leading-tight">{event.hotelInfo.address}</p>
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            {event.tags?.map(tag => (
              <span key={tag} className="px-3 py-1 rounded-full bg-white text-[9px] font-bold tracking-tight border border-[#6F4E37]/10 shadow-sm opacity-60">
                #{tag}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4">
            {event.mapsLink && (
              <a 
                href={event.mapsLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#6F4E37] text-white py-4 rounded-2xl text-[11px] font-bold transition-all active:scale-95 shadow-md"
              >
                <MapPin size={14} /> 一鍵導航
              </a>
            )}
            {event.refLink && (
              <a 
                href={event.refLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white text-[#6F4E37] py-4 rounded-2xl text-[11px] font-bold transition-all active:scale-95 shadow-sm border border-[#6F4E37]/10"
              >
                <ExternalLink size={14} /> 參考網頁
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ScheduleTab: React.FC<{ 
  activeDay: number; 
  setActiveDay: (i: number) => void;
  onEventClick: (e: TravelEvent) => void;
}> = ({ activeDay, setActiveDay, onEventClick }) => {
  const currentPlan = ITINERARY[activeDay];

  return (
    <div className="px-6 pb-28 animate-in fade-in duration-500">
      <div className="flex gap-4 overflow-x-auto no-scrollbar py-6 snap-x -mx-6 px-6">
        {ITINERARY.map((day, idx) => (
          <button 
            key={idx}
            onClick={() => setActiveDay(idx)}
            className={`flex-shrink-0 w-16 h-24 rounded-[2rem] flex flex-col items-center justify-center transition-all duration-300 snap-center ${
              activeDay === idx ? 'bg-[#6F4E37] text-white shadow-xl scale-105' : 'glass opacity-50'
            }`}
          >
            <span className="text-[9px] font-bold opacity-60 mb-1">{day.dayLabel}</span>
            <span className="text-xl font-mono font-bold leading-none">{day.date.split('/')[1]}</span>
            <span className="text-[9px] font-medium opacity-80 mt-1">{day.weekday}</span>
          </button>
        ))}
      </div>

      <div className="relative rounded-[2rem] overflow-hidden mb-5 shadow-sm group h-32">
        {/* 背景圖片 - 改為高度較低的橫幅 (h-32) */}
        {currentPlan.imageUrl && (
           <div className="absolute inset-0 z-0">
             <img 
               src={currentPlan.imageUrl} 
               alt="Landscape" 
               className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
             />
             {/* 左側漸層，確保左邊的文字在任何圖片上都清晰可見 */}
             <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/50 to-transparent" />
           </div>
        )}
        
        <div className="relative z-10 p-6 h-full flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
               <span className="text-[10px] font-black tracking-[0.2em] uppercase text-[#828B5C] bg-white/80 px-2 py-0.5 rounded-full backdrop-blur-sm shadow-sm">
                  {currentPlan.dayLabel}
              </span>
              <span className="text-[10px] font-bold text-[#6F4E37]/70">
                   {currentPlan.weekday}
              </span>
            </div>
            
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-mono font-bold text-[#6F4E37] tracking-tighter drop-shadow-sm">
                {currentPlan.temp.split(' / ')[0]}
              </span>
              <span className="text-[10px] font-medium text-[#6F4E37] bg-white/40 px-1.5 py-0.5 rounded-md backdrop-blur-sm">
                {currentPlan.weather}
              </span>
            </div>
          </div>

          <div className="w-12 h-12 rounded-full bg-white/60 backdrop-blur-md flex items-center justify-center text-[#6F4E37] shadow-sm border border-white/50">
             <WeatherIcon weather={currentPlan.weather} size={24} />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {currentPlan.events.map(event => (
          <div 
            key={event.id}
            onClick={() => onEventClick(event)}
            className="glass rounded-[2.2rem] p-6 flex items-center gap-5 transition-all active:scale-[0.97] hover:bg-white shadow-sm border border-white/60"
          >
            <div className="w-14 h-14 bg-white/80 rounded-2xl flex items-center justify-center text-[#828B5C] flex-shrink-0 shadow-inner">
              <CategoryIcon category={event.category} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-mono font-bold opacity-30 tracking-wider">{event.time}</span>
                <div className="flex gap-1 overflow-hidden">
                  {event.tags?.slice(0, 2).map(t => (
                    <span key={t} className="text-[8px] bg-[#828B5C]/10 text-[#828B5C] px-1.5 py-0.5 rounded-full font-bold whitespace-nowrap">#{t}</span>
                  ))}
                </div>
              </div>
              <h4 className="font-bold text-base truncate pr-2 tracking-tight text-[#6F4E37]">{event.title}</h4>
              {event.guideNote && (
                <p className="text-[10px] text-[#6F4E37]/60 mt-1 truncate">💡 {event.guideNote}</p>
              )}
            </div>
            <ChevronRight size={18} className="opacity-20 flex-shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};

const ToolboxTab = () => {
  const flights = ITINERARY.flatMap(d => d.events.filter(e => e.flightNo));
  const hotels = ITINERARY.flatMap(d => d.events.filter(e => e.hotelInfo));

  return (
    <div className="px-6 pb-32 pt-4 space-y-8 animate-in fade-in duration-500">
      <section>
        <h2 className="text-xs font-bold tracking-[0.2em] opacity-30 mb-5 px-2 uppercase text-[#6F4E37]">航班預約</h2>
        {flights.map(f => (
          <div key={f.id} className="glass rounded-[2rem] p-8 flex items-center justify-between shadow-sm mb-4">
            <div>
              <div className="text-2xl font-bold font-mono tracking-tighter text-[#6F4E37]">{f.flightNo}</div>
              <div className="text-xs opacity-50 font-medium">{f.title}</div>
            </div>
            <div className="bg-[#6F4E37] text-white p-4 rounded-2xl shadow-lg">
              <Plane size={24} />
            </div>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-xs font-bold tracking-[0.2em] opacity-30 mb-5 px-2 uppercase text-[#6F4E37]">住宿清單</h2>
        {hotels.map(h => (
          <div key={h.id} className="glass rounded-[2rem] p-6 shadow-sm border border-white/80 mb-4">
            <h3 className="font-bold text-lg text-[#6F4E37] mb-2">{h.hotelInfo?.name}</h3>
            <p className="text-xs opacity-50 leading-relaxed mb-4">{h.hotelInfo?.address}</p>
            <div className="bg-white/60 px-3 py-2 rounded-full inline-flex items-center gap-2">
              <Clock size={12} className="opacity-30" />
              <span className="text-[10px] font-mono font-bold text-[#6F4E37]">Check-in: {h.hotelInfo?.checkIn}</span>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

const FinanceTab = () => {
  const [expenses, setExpenses] = useState<Expense[]>(() => {
    const saved = localStorage.getItem('snow_trip_expenses');
    return saved ? JSON.parse(saved) : [];
  });
  const [item, setItem] = useState('');
  const [amount, setAmount] = useState('');
  const [payer, setPayer] = useState('純');

  useEffect(() => {
    localStorage.setItem('snow_trip_expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (e: React.FormEvent) => {
    e.preventDefault();
    if (!item || !amount) return;
    setExpenses([{ id: Date.now().toString(), item, amount: Number(amount), payer }, ...expenses]);
    setItem('');
    setAmount('');
  };

  const removeExpense = (id: string) => setExpenses(expenses.filter(e => e.id !== id));
  const total = useMemo(() => expenses.reduce((sum, e) => sum + e.amount, 0), [expenses]);

  return (
    <div className="px-6 pb-32 pt-4 space-y-8 animate-in fade-in duration-500 text-[#6F4E37]">
      <div className="glass rounded-[2.5rem] p-10 text-center bg-white shadow-sm border border-white">
        <div className="text-[10px] font-black tracking-[0.3em] opacity-30 mb-3 uppercase">日幣支出統計</div>
        <div className="text-5xl font-mono font-bold tracking-tighter">¥{total.toLocaleString()}</div>
      </div>

      <form onSubmit={addExpense} className="glass rounded-[2.5rem] p-8 space-y-5 shadow-sm border border-white">
        <input 
          type="text" value={item} onChange={e => setItem(e.target.value)}
          placeholder="消費項目" 
          className="w-full bg-white rounded-2xl p-4 text-sm focus:outline-none border border-transparent focus:border-[#6F4E37]/10 placeholder-[#6F4E37]/30" 
        />
        <div className="flex gap-4">
          <input 
            type="number" value={amount} onChange={e => setAmount(e.target.value)}
            placeholder="金額" 
            className="flex-1 bg-white rounded-2xl p-4 text-sm focus:outline-none border border-transparent focus:border-[#6F4E37]/10" 
          />
          <select 
            value={payer} onChange={e => setPayer(e.target.value)}
            className="bg-white rounded-2xl p-4 text-xs focus:outline-none font-bold text-[#6F4E37]"
          >
            <option>純</option>
            <option>麟</option>
            <option>芬</option>
            <option>娟</option>
            <option>爸</option>
            <option>媽</option>
          </select>
        </div>
        <button className="w-full bg-[#6F4E37] text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 active:scale-95 transition-all shadow-lg">
          <Plus size={20} /> 記錄支出
        </button>
      </form>

      <div className="space-y-4">
        {expenses.map(e => (
          <div key={e.id} className="glass rounded-3xl p-5 flex items-center justify-between shadow-sm border border-white/60">
            <div>
              <div className="text-sm font-bold">{e.item}</div>
              <div className="text-[9px] opacity-40 uppercase font-black">{e.payer}</div>
            </div>
            <div className="flex items-center gap-5">
              <span className="font-mono font-bold text-[#6F4E37]">¥{e.amount.toLocaleString()}</span>
              <button onClick={() => removeExpense(e.id)} className="text-[#6F4E37]/30 hover:text-red-400">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ShoppingTab = () => {
  const [boughtItems, setBoughtItems] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem('snow_trip_shopping_checked');
    return saved ? JSON.parse(saved) : {};
  });

  const toggleItem = (id: string) => {
    const newStatus = { ...boughtItems, [id]: !boughtItems[id] };
    setBoughtItems(newStatus);
    localStorage.setItem('snow_trip_shopping_checked', JSON.stringify(newStatus));
  };

  return (
    <div className="px-6 pb-32 pt-6 space-y-8 animate-in fade-in duration-500">
      <div className="text-center mb-8">
        <h2 className="text-xs font-black tracking-[0.4em] opacity-30 mb-2 uppercase text-[#6F4E37]">必買清單</h2>
        <p className="text-[10px] opacity-50 text-[#6F4E37]">依照購買地點分類</p>
      </div>

      {SHOPPING_LIST.map((category) => (
        <section key={category.title} className="glass rounded-[2.5rem] p-6 shadow-sm border border-white/80">
          <div className="flex items-center gap-3 mb-6 px-2">
            <span className="text-2xl">{category.icon}</span>
            <h3 className="font-bold text-lg text-[#6F4E37]">{category.title}</h3>
          </div>
          
          <div className="space-y-3">
            {category.items.map((item) => {
              const isChecked = boughtItems[item.id] || false;
              return (
                <div 
                  key={item.id}
                  onClick={() => toggleItem(item.id)}
                  className={`relative p-4 rounded-2xl transition-all duration-300 cursor-pointer border ${
                    isChecked 
                      ? 'bg-[#828B5C]/5 border-transparent opacity-50' 
                      : 'bg-white/50 border-white hover:bg-white'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all mt-0.5 flex-shrink-0 ${
                      isChecked 
                        ? 'bg-[#828B5C] border-[#828B5C]' 
                        : 'border-[#6F4E37]/20 bg-white'
                    }`}>
                      {isChecked && <Check size={12} className="text-white" strokeWidth={3} />}
                    </div>
                    <div className="flex-1">
                      <h4 className={`text-sm font-bold text-[#6F4E37] transition-all ${isChecked ? 'line-through opacity-50' : ''}`}>
                        {item.name}
                      </h4>
                      {item.note && (
                        <p className="text-[10px] text-[#6F4E37]/60 mt-1 font-medium">
                          {item.note}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState<'schedule' | 'shopping' | 'toolbox' | 'finance'>('schedule');
  const [activeDay, setActiveDay] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState<TravelEvent | null>(null);

  return (
    <div className="min-h-screen max-w-md mx-auto relative overflow-x-hidden pb-4">
      <div className="h-14 w-full" />
      <header className="px-8 mb-6 relative z-10 flex justify-between items-end">
        <div>
          <div className="text-[10px] font-black text-[#828B5C] tracking-[0.4em] uppercase mb-1">Family Trip</div>
          <h1 className="text-3xl font-black tracking-tight text-[#6F4E37]">2026 青森仙台</h1>
        </div>
        <div className="bg-white/80 p-2 rounded-xl border border-white shadow-sm">
          <CloudSnow size={18} className="text-[#6F4E37]" />
        </div>
      </header>

      <main className="relative z-10">
        {activeTab === 'schedule' && (
          <ScheduleTab 
            activeDay={activeDay} 
            setActiveDay={setActiveDay} 
            onEventClick={setSelectedEvent} 
          />
        )}
        {activeTab === 'shopping' && <ShoppingTab />}
        {activeTab === 'toolbox' && <ToolboxTab />}
        {activeTab === 'finance' && <FinanceTab />}
      </main>

      {selectedEvent && (
        <EventModal 
          event={selectedEvent} 
          onClose={() => setSelectedEvent(null)} 
        />
      )}

      <div className="fixed bottom-8 left-0 right-0 px-6 z-50 pointer-events-none">
        <nav className="max-w-xs mx-auto glass rounded-[3rem] h-20 px-6 flex items-center justify-between shadow-2xl border border-white pointer-events-auto backdrop-blur-3xl">
          <button onClick={() => setActiveTab('schedule')} className={`flex flex-col items-center gap-1.5 transition-all ${activeTab === 'schedule' ? 'text-[#6F4E37] scale-110' : 'opacity-20'}`}>
            <Calendar size={20} strokeWidth={activeTab === 'schedule' ? 3 : 2} />
            <span className="text-[8px] font-black tracking-widest uppercase">行程</span>
          </button>
          <button onClick={() => setActiveTab('shopping')} className={`flex flex-col items-center gap-1.5 transition-all ${activeTab === 'shopping' ? 'text-[#6F4E37] scale-110' : 'opacity-20'}`}>
            <ShoppingBag size={20} strokeWidth={activeTab === 'shopping' ? 3 : 2} />
            <span className="text-[8px] font-black tracking-widest uppercase">必買</span>
          </button>
          <button onClick={() => setActiveTab('toolbox')} className={`flex flex-col items-center gap-1.5 transition-all ${activeTab === 'toolbox' ? 'text-[#6F4E37] scale-110' : 'opacity-20'}`}>
            <FileText size={20} strokeWidth={activeTab === 'toolbox' ? 3 : 2} />
            <span className="text-[8px] font-black tracking-widest uppercase">資訊</span>
          </button>
          <button onClick={() => setActiveTab('finance')} className={`flex flex-col items-center gap-1.5 transition-all ${activeTab === 'finance' ? 'text-[#6F4E37] scale-110' : 'opacity-20'}`}>
            <Wallet size={20} strokeWidth={activeTab === 'finance' ? 3 : 2} />
            <span className="text-[8px] font-black tracking-widest uppercase">記帳</span>
          </button>
        </nav>
      </div>
    </div>
  );
}
