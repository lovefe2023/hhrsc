import { Link } from 'react-router-dom';

export default function Products() {
  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-background-light dark:bg-background-dark">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center p-4 justify-between gap-4">
          <Link to="/" className="text-slate-900 dark:text-slate-100 flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <div className="flex-1">
            <label className="flex flex-col w-full h-10">
              <div className="flex w-full flex-1 items-stretch rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <div className="text-slate-500 flex items-center justify-center pl-4">
                  <span className="material-symbols-outlined text-[20px]">search</span>
                </div>
                <input className="flex w-full min-w-0 flex-1 border-none bg-transparent focus:ring-0 text-sm placeholder:text-slate-400 outline-none" placeholder="搜索心仪商品" type="text" />
              </div>
            </label>
          </div>
          <Link to="/cart" className="flex items-center justify-center">
            <span className="material-symbols-outlined text-slate-900 dark:text-slate-100">shopping_cart</span>
          </Link>
        </div>
        <div className="flex gap-2 px-4 pb-3 overflow-x-auto hide-scrollbar">
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-1 rounded-lg bg-primary/10 text-primary px-3 text-sm font-semibold">
            综合排序
            <span className="material-symbols-outlined text-[18px]">keyboard_arrow_down</span>
          </button>
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 text-sm font-medium">
            分类
            <span className="material-symbols-outlined text-[18px]">filter_list</span>
          </button>
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 text-sm font-medium">
            销量
          </button>
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 text-sm font-medium">
            价格
            <span className="material-symbols-outlined text-[18px]">swap_vert</span>
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 pb-24">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider">全部商品 (248)</h3>
          <span className="material-symbols-outlined text-slate-400">grid_view</span>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <Link to="/product/1" className="flex bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 p-2 gap-3">
            <div className="w-32 h-32 shrink-0 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCqvIU9MA5CPYmmUHmSiHOpeYzTc0_jUjKjE_oyvV04jrp04g57h1qAeUxVxgMr2e3U74JiL-B7AmVV2pyH_hNVlfS3uN-H_lNsW9JjKyYgmxYK40l4cMrNP3gi9pjgE9qHLZqGhpeUhTbN7nhd7W9TpYMIUvzpTEAK553Hgp2q9TFFZ3UraqpZ_fFFs_5gs-pCf-FZCYLZyYgQ8ytuvKFDxurE0LxDUrX958jX9wF5f64c00ra66NQ83u-h4UnUxheNJmNOaPvGO8')" }}></div>
              <div className="absolute top-1 left-1 bg-primary text-white text-[10px] px-1.5 py-0.5 rounded font-bold uppercase">新品</div>
            </div>
            <div className="flex flex-col justify-between flex-1 py-1">
              <div>
                <h4 className="text-slate-900 dark:text-slate-100 font-bold text-base leading-snug line-clamp-2">旗舰新款 5G 智能手机 256GB 远峰蓝</h4>
                <p className="text-slate-500 text-xs mt-1">骁龙8 Gen 3 | 120Hz 高刷</p>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-primary text-xs font-bold">¥</span>
                    <span className="text-primary text-xl font-bold">5,999</span>
                  </div>
                  <p className="text-slate-400 text-[11px]">月销 2000+</p>
                </div>
                <Link to="/cart" className="bg-primary text-white size-8 flex items-center justify-center rounded-full shadow-lg shadow-primary/30" onClick={(e) => e.stopPropagation()}>
                  <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                </Link>
              </div>
            </div>
          </Link>

          <Link to="/product/2" className="flex bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 p-2 gap-3">
            <div className="w-32 h-32 shrink-0 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBR9iCLbpJbzwOv6ekOsoPxUWEVNdVocilMKsfS3S3-r3t9mHacOaCM8dS3juN30jar4cEDgr7OOSd3t08SY8A3WxSISObM6JWwHDa9a1jd82E9DG8fnmRgvqRDYlMXrvtAUE4zDc0_kAyPkojxGU1acqrm_exbf_h9KM0TJ7FmatY4-TPYUFt9Xybd6gbvygRn-scOkTJEeszW_JKxjnZ-R3vUQk7kfIgUkFd9xpRTNIhz_ap7JY6bz4mFsatYNk-m40ZXIoUvIeg')" }}></div>
            </div>
            <div className="flex flex-col justify-between flex-1 py-1">
              <div>
                <h4 className="text-slate-900 dark:text-slate-100 font-bold text-base leading-snug line-clamp-2">主动降噪蓝牙耳机 游戏低延迟 长续航</h4>
                <p className="text-slate-500 text-xs mt-1">智能降噪 | 40h续航</p>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-primary text-xs font-bold">¥</span>
                    <span className="text-primary text-xl font-bold">899</span>
                  </div>
                  <p className="text-slate-400 text-[11px]">月销 5800+</p>
                </div>
                <Link to="/cart" className="bg-primary text-white size-8 flex items-center justify-center rounded-full shadow-lg shadow-primary/30" onClick={(e) => e.stopPropagation()}>
                  <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                </Link>
              </div>
            </div>
          </Link>

          <Link to="/product/3" className="flex bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 p-2 gap-3">
            <div className="w-32 h-32 shrink-0 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDPoFqvQQsfryn3brZ2aMip-5lOzR5kspjZmU3pvBoIPJTmJETl_lTnNbc3Vvo6i1tHGjlDNNXm3V2JsS-QzKYoIIctgpbv8nWwybsRZXhAbruDZqbc4LhnUFJTfYpI1Qlb_dX_8OWDeBrTP4pADu3x5iAtfJsqvWmBMX-zkZLxE4toyn0HFfu2Qu2gUT7Fu-wbUjGVy1zBru8h7KDdZOwd79rWC4GPD-v8xjwBmarlXdFQ4ox0z-zNCc92CkaUuxHJHuFK36H3esY')" }}></div>
              <div className="absolute top-1 left-1 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded font-bold uppercase">限时抢购</div>
            </div>
            <div className="flex flex-col justify-between flex-1 py-1">
              <div>
                <h4 className="text-slate-900 dark:text-slate-100 font-bold text-base leading-snug line-clamp-2">简约极简风格 智能运动手表 44mm</h4>
                <p className="text-slate-500 text-xs mt-1">血氧监测 | 防水等级IP68</p>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-primary text-xs font-bold">¥</span>
                    <span className="text-primary text-xl font-bold">1,299</span>
                  </div>
                  <p className="text-slate-400 text-[11px]">月销 1200+</p>
                </div>
                <Link to="/cart" className="bg-primary text-white size-8 flex items-center justify-center rounded-full shadow-lg shadow-primary/30" onClick={(e) => e.stopPropagation()}>
                  <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                </Link>
              </div>
            </div>
          </Link>

          <Link to="/product/4" className="flex bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 p-2 gap-3">
            <div className="w-32 h-32 shrink-0 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDD-qdRGrHZ8OhzTGhJVfy-0Fesrcg655Zg55zUNTykqllij-a5mrlweBK9fOT-E9kRfaYmuOsQ8rQfIY1BQ_z2gWi-5DqH0N_QsxR1h6oN5Tmj40lvId_c8c5ICRBx4L_BhT5haNpPCwcLGbN8HJz_xCSnac2O0YkVBwIpHW7eFtbE_Hp_ruJE564BbXvdndGqzjAvsvx90BcZItKc2IsbPPKlrHVrk08MVvQeq0b17cRa7i0GheANYFLr9bE1bAm_aDxLqQ8vJX0')" }}></div>
            </div>
            <div className="flex flex-col justify-between flex-1 py-1">
              <div>
                <h4 className="text-slate-900 dark:text-slate-100 font-bold text-base leading-snug line-clamp-2">轻便缓震 跑步运动鞋 专业竞速男款</h4>
                <p className="text-slate-500 text-xs mt-1">透气网面 | 爆米花大底</p>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-primary text-xs font-bold">¥</span>
                    <span className="text-primary text-xl font-bold">349</span>
                  </div>
                  <p className="text-slate-400 text-[11px]">月销 1.5w+</p>
                </div>
                <Link to="/cart" className="bg-primary text-white size-8 flex items-center justify-center rounded-full shadow-lg shadow-primary/30" onClick={(e) => e.stopPropagation()}>
                  <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                </Link>
              </div>
            </div>
          </Link>

          <Link to="/product/5" className="flex bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 p-2 gap-3">
            <div className="w-32 h-32 shrink-0 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDxT0cmqlaJmjGV5rnQMbiwwmlvOvFKJPvb7S075UBIFuXjFbh4bBoyG5nU4nyPQzTRWqiOLuAB51AkdNTBKCxgafbf51ZhjbtGxlXGRvoPVnqNz2DtplzlSlLhnQ_Obmtva1mlplQIRrU41xbW_gKIAdFNVM10vptBWLRs13btbnQ58zRqvI0M1TYj1ktLXsaIfNwjHExAluc1MkwJTMNrI6usYsCMJGJHxlHFBUjPzzXNRciIKemCnQbsPHYmoPIUnVKIFuPC7aA')" }}></div>
            </div>
            <div className="flex flex-col justify-between flex-1 py-1">
              <div>
                <h4 className="text-slate-900 dark:text-slate-100 font-bold text-base leading-snug line-clamp-2">超薄便携 14英寸生产力笔记本电脑 16G/512G</h4>
                <p className="text-slate-500 text-xs mt-1">2K全面屏 | 全金属机身</p>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-primary text-xs font-bold">¥</span>
                    <span className="text-primary text-xl font-bold">4,299</span>
                  </div>
                  <p className="text-slate-400 text-[11px]">月销 450+</p>
                </div>
                <Link to="/cart" className="bg-primary text-white size-8 flex items-center justify-center rounded-full shadow-lg shadow-primary/30" onClick={(e) => e.stopPropagation()}>
                  <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                </Link>
              </div>
            </div>
          </Link>
        </div>

        <div className="py-8 text-center">
          <p className="text-slate-400 text-sm">到底啦，看看别的吧 ~</p>
        </div>
      </main>
    </div>
  );
}
