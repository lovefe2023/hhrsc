import { Link } from 'react-router-dom';

export default function Category() {
  return (
    <div className="flex flex-col h-full overflow-hidden bg-background-light dark:bg-background-dark">
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 py-3 shrink-0">
        <div className="flex items-center gap-3">
          <div className="flex-1 flex gap-2 items-center">
            <label className="flex-1 flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg px-3 h-10 border border-transparent focus-within:border-primary transition-all">
              <span className="material-symbols-outlined text-slate-400 text-[20px]">search</span>
              <input className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-slate-500 dark:placeholder:text-slate-400 outline-none" placeholder="搜索商品或品牌" type="text" />
            </label>
            <button className="bg-primary text-white text-sm px-4 h-10 rounded-lg font-medium whitespace-nowrap">搜索</button>
          </div>
        </div>
      </header>
      <main className="flex flex-1 overflow-hidden">
        <aside className="w-24 bg-slate-50 dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 overflow-y-auto hide-scrollbar">
          <nav className="flex flex-col">
            <a href="#" className="flex flex-col items-center justify-center py-5 gap-1 border-l-4 border-primary bg-white dark:bg-slate-900 text-primary">
              <span className="text-sm font-bold">数码电子</span>
            </a>
            <a href="#" className="flex flex-col items-center justify-center py-5 gap-1 border-l-4 border-transparent text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
              <span className="text-sm font-medium">潮流服饰</span>
            </a>
            <a href="#" className="flex flex-col items-center justify-center py-5 gap-1 border-l-4 border-transparent text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
              <span className="text-sm font-medium">家居生活</span>
            </a>
            <a href="#" className="flex flex-col items-center justify-center py-5 gap-1 border-l-4 border-transparent text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
              <span className="text-sm font-medium">美妆个护</span>
            </a>
            <a href="#" className="flex flex-col items-center justify-center py-5 gap-1 border-l-4 border-transparent text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
              <span className="text-sm font-medium">美食酒饮</span>
            </a>
            <a href="#" className="flex flex-col items-center justify-center py-5 gap-1 border-l-4 border-transparent text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
              <span className="text-sm font-medium">运动户外</span>
            </a>
            <a href="#" className="flex flex-col items-center justify-center py-5 gap-1 border-l-4 border-transparent text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
              <span className="text-sm font-medium">母婴玩具</span>
            </a>
            <a href="#" className="flex flex-col items-center justify-center py-5 gap-1 border-l-4 border-transparent text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
              <span className="text-sm font-medium">医药保健</span>
            </a>
          </nav>
        </aside>
        <section className="flex-1 bg-white dark:bg-slate-900 overflow-y-auto p-4">
          <div className="mb-6">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-slate-900 dark:text-slate-100">热门分类</h4>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: 'smartphone', label: '手机通讯' },
                  { icon: 'laptop_mac', label: '电脑办公' },
                  { icon: 'headphones', label: '影音娱乐' },
                  { icon: 'watch', label: '智能穿戴' },
                  { icon: 'videogame_asset', label: '游戏电竞' },
                  { icon: 'camera', label: '摄影摄像' },
                ].map((item, i) => (
                  <Link to="/products" key={i} className="flex flex-col items-center text-center gap-2">
                    <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center text-primary shadow-sm border border-slate-100 dark:border-slate-800">
                      <span className="material-symbols-outlined text-[32px]">{item.icon}</span>
                    </div>
                    <span className="text-xs font-medium text-slate-700 dark:text-slate-300">{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="mb-8">
              <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-4">电脑及周边</h4>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: 'monitor', label: '显示器' },
                  { icon: 'keyboard', label: '键盘' },
                  { icon: 'print', label: '打印机' },
                ].map((item, i) => (
                  <Link to="/products" key={i} className="flex flex-col items-center text-center gap-2">
                    <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 shadow-sm border border-slate-100 dark:border-slate-800">
                      <span className="material-symbols-outlined text-[32px]">{item.icon}</span>
                    </div>
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400">{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
