import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex-1 overflow-y-auto bg-white dark:bg-slate-950 pb-20">
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center p-4 justify-between gap-3">
          <div className="flex-1">
            <div className="flex items-center h-10 w-full bg-slate-100 dark:bg-slate-800 rounded-full pl-4 pr-1 gap-2">
              <span className="material-symbols-outlined text-slate-500 text-xl">search</span>
              <input 
                className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder-slate-500 outline-none" 
                placeholder="搜索优质商品..." 
                type="text"
              />
              <button className="bg-primary text-white text-xs font-bold h-8 px-5 rounded-full whitespace-nowrap">搜索</button>
            </div>
          </div>
        </div>
      </header>

      <div className="px-4 py-4">
        <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden shadow-sm group">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCU5-LjOmCWQmVv2mieQahlaxXeEk3acXwdwg7Hk5HkN4_pluo3-yOgsu9DmBpSpgbFX2NUfok6_cZT8_JF8xIW91nK2lNSYetr0Pnv-hEku9dH-9qiiTTveBKZe54IhAdS0Jw74IhtSqhO1VzOznKVUyyy79BI3Nm0zjFkVMNafgJMuAA7XHHCBFNAKE0vhYUT6ny2zLHVbSE2bizUcDgUs2coRPyDo-NNeHfnva-jMYJAoioOge3YhKY2Bbuv_7-19zqIfKrmuMI')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-center px-6">
            <span className="text-primary font-bold text-xs tracking-wider uppercase mb-1">季节限定优惠</span>
            <h2 className="text-white text-xl font-bold leading-tight">夏季系列低至 5 折</h2>
            <button className="mt-3 w-fit bg-primary text-white text-xs font-bold py-2 px-4 rounded-lg">立即选购</button>
          </div>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            <span className="size-1.5 rounded-full bg-white"></span>
            <span className="size-1.5 rounded-full bg-white/40"></span>
            <span className="size-1.5 rounded-full bg-white/40"></span>
          </div>
        </div>
      </div>

      <div className="grid gap-4 px-4 py-4 grid-cols-3">
        <Link to="/partner" className="flex flex-col items-center gap-2">
          <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-2xl">handshake</span>
          </div>
          <span className="text-xs font-semibold">合伙人</span>
        </Link>
        <Link to="/team" className="flex flex-col items-center gap-2">
          <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-2xl">group</span>
          </div>
          <span className="text-xs font-semibold">我的团队</span>
        </Link>
        <Link to="/sales" className="flex flex-col items-center gap-2">
          <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-2xl">payments</span>
          </div>
          <span className="text-xs font-semibold">收益中心</span>
        </Link>
      </div>

      <div className="flex gap-6 overflow-x-auto px-4 py-4 hide-scrollbar">
        {[
          { icon: 'devices', label: '数码电子' },
          { icon: 'apparel', label: '时尚服饰' },
          { icon: 'chair', label: '家居生活' },
          { icon: 'fitness_center', label: '运动户外' },
          { icon: 'face_5', label: '美妆护肤' },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-1.5 min-w-[56px]">
            <div className="size-14 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
              <span className="material-symbols-outlined">{item.icon}</span>
            </div>
            <span className="text-[11px] text-slate-600 dark:text-slate-400">{item.label}</span>
          </div>
        ))}
      </div>

      <section className="px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold">热门商品</h3>
          <Link to="/products" className="text-primary text-sm font-semibold flex items-center gap-1">
            查看全部 <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
          </Link>
        </div>
        <div className="flex gap-4 overflow-x-auto hide-scrollbar">
          <Link to="/product/1" className="min-w-[160px] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
            <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBc01oBUr-vyTzxg3lq3doXwBxuAfMBsX2EMjl8jxbkMMQxWQPTMLcgjDy5yJa_fYfNGG-W-jdUP2i7zxpS_v69v7Kgreh8p2u_H53ecweYBj39R8ElWp8haA8aNgTJ3cRu__rpMf930M6q2lvyyoa8aiiplrh223u3SsTjQq3WJ_XA6YYMeW7HaRcjGXLjXXfKh4O-YhXvzBRTO7eeU83xpnJg74tmJLCQZl_Vy5x_T58iPfMxCaegsekGEySeW8_W92GfsXwKiQM')" }}></div>
            <div className="p-3">
              <h4 className="text-sm font-medium line-clamp-1 mb-1">简约设计师腕表</h4>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-primary font-bold">¥899.00</span>
                <span className="text-[10px] text-slate-400 line-through">¥1399.00</span>
              </div>
              <span className="text-[10px] text-slate-500">已售 1.2k</span>
            </div>
          </Link>
          <Link to="/product/2" className="min-w-[160px] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
            <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDKl7ctFx4dEbfVZ8wxMUcaKfLSXmRO0brKMjsocxTC1tHNuQs69usWmQGWh1tO-wkKZH1-2Ev-E7RSTG1MhtElOOvpW_XstTJWXi9KOEz_4E3K_1Icpq7Oy0AYkDKFHiehxSWiXlcMZGS0eG9SafdoWo6U9EthGSprOfzjU5DojQtuF3V2VLrjJYCbv-vBsfz3X63jigZ3_ac2U-0pM1ykr14n4ARujFmAgrhunrYeOK46bkkCFX6prwIMFlD_tQr5Smuf0B5Jhn4')" }}></div>
            <div className="p-3">
              <h4 className="text-sm font-medium line-clamp-1 mb-1">专业无线降噪耳机</h4>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-primary font-bold">¥2099.00</span>
                <span className="text-[10px] text-slate-400 line-through">¥2450.00</span>
              </div>
              <span className="text-[10px] text-slate-500">已售 850</span>
            </div>
          </Link>
        </div>
      </section>

      <section className="px-4 py-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold">为您推荐</h3>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Link to="/product/3" className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
            <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCNFrv3rMiFHXYJCU3JkZI-cDKkWCUL0WpDEDMYeH5chjgVbc65y4KeZzFisqKrohFsYAQ4mcxBPdHbZsqmnDV5K85gOJSt23ZGa8k-BzdoEVEjbl4xNrE8UhPztOuQ35QUCrb3O9OpG8cRL6ey0Qe3zBvXXKFPGvMRVU3PMs3QZ9J-wtLyyuAj4xorMgllxf1-E9TQIqLKYLKRX_0LJkuGlIaaoIbtAVMlftqc5JJRV5OBu7d5SHnpytH7SkZ-G_JIMiAp5v9Sja0')" }}></div>
            <div className="p-3">
              <h4 className="text-sm font-medium line-clamp-2 mb-2">高性能专业跑步鞋</h4>
              <div className="flex items-center justify-between">
                <span className="text-primary font-bold">¥629.90</span>
                <span className="text-[10px] text-slate-500">已售 2.4k</span>
              </div>
            </div>
          </Link>
          <Link to="/product/4" className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
            <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAVgrPZrA9clovxC9HB30cBe1fcpscg8FjZKB5Sj31c4UBPQ-XfEnHv3IiS6XAloigQVmkpzqv2rndLSk7u1N7JvJqlIWkbxVUBEwZGbTb1FIKzowXtw-KlUNRj8Sn-hdDMN3VYWd9gfmxZYhRKPnLqvyw7VI0NzyfxK10hWuMP7UbhCsV1YCN5EYpJ42kRaZTG1qeZwtAXW8w4cTT67LdIBqCqdJPFNOFi6XpIydS8NmuuajSxKfFHU6szjwXEWMRQgiLE84wPVe0')" }}></div>
            <div className="p-3">
              <h4 className="text-sm font-medium line-clamp-2 mb-2">复古拍立得相机 400X</h4>
              <div className="flex items-center justify-between">
                <span className="text-primary font-bold">¥1015.00</span>
                <span className="text-[10px] text-slate-500">已售 512</span>
              </div>
            </div>
          </Link>
          <Link to="/product/5" className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
            <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCYTIz1poC8PfrAs27pHBFZWYyyd2lQoVzTJUPQkyl0e4sOrqGZ0ZVQAG2msY5kp9HMi-KYbf8mvK9t-dq_Ak51600sKLH-g_QmQN5eHWcV50Xyl2GdGgaMJsJ9866_kuPWp7xPp_gTdaj2B1NofbqCsNV1thAFkBYOiJdUHOiNbkDSXK1Yw90ONV0VX5DRJYbWhsWyxg9NquR-8wImZN-ihp92qh5OtotJFBoMkaFtPloora_qjB3_Zr9IlY8xfo_IWnn--BA9i2g')" }}></div>
            <div className="p-3">
              <h4 className="text-sm font-medium line-clamp-2 mb-2">高级防紫外线墨镜</h4>
              <div className="flex items-center justify-between">
                <span className="text-primary font-bold">¥770.00</span>
                <span className="text-[10px] text-slate-500">已售 1.1k</span>
              </div>
            </div>
          </Link>
          <Link to="/product/6" className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
            <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBWviTYu6YyxbmSXldtvcBkI9DVolmi648FXOyn7YKwUM8CJBPEinOY1LOMdVTopUt-n-hSTUwu_K7IVWXSW_h5aOwxVyTcnPQSwNL1twsIDzjSKwtCSU2xwCfS1Sn3s2DB4Hz2vtJjCU3d11D5xlSBEGXtLo2UZc-JkkFUaR0SDoKlX7CC8cGnHuR_00K7CjvxG_o61MNjRqkzwaeP8wlHYaUGhWgRNyKdRsn8D7C6ycL88XKpmRBF_YG7_PZ-vt_tAaXmjlGoLXg')" }}></div>
            <div className="p-3">
              <h4 className="text-sm font-medium line-clamp-2 mb-2">现代简约笔记本支架</h4>
              <div className="flex items-center justify-between">
                <span className="text-primary font-bold">¥315.00</span>
                <span className="text-[10px] text-slate-500">已售 930</span>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
