import { Link } from 'react-router-dom';

export default function ProductDetails() {
  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-background-light dark:bg-background-dark">
      <nav className="sticky top-0 z-50 flex items-center bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-3 border-b border-slate-200 dark:border-slate-800 relative">
        <Link to="/products" className="flex size-10 items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <h2 className="text-lg font-bold tracking-tight absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">商品详情</h2>
      </nav>

      <main className="flex-1 overflow-y-auto">
        <div className="relative w-full aspect-square bg-white dark:bg-slate-900 overflow-hidden">
          <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar h-full">
            <div className="snap-center shrink-0 w-full h-full bg-center bg-cover" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDi_fGePaQpF1_r82oHtsQX9RUJwcYzKEkeKU12nBQXue1q3xeXt92BEiPax_xLqsCfPnvS0LO-Ot20dEYv44bYUwlIImDGXbeTPdv0IHltOEvcJOQHaY_9JkZTlcJjj9UpEPykHMqBIZe0hi64Lzoqv4xQr8CUwPsCZobchRLho6xfFnmxrOL_RitiIA0w0f1_hSbaz3mbxPakwK4sX3ckdFtDGHrS7Wp_TjS2HARCn7PCY-8w_61CiZSA-PiB1Yp7Ze2HSZnYw-4')" }}></div>
            <div className="snap-center shrink-0 w-full h-full bg-center bg-cover" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDVNmx3pQNLW4lMQlDzsEpp8hg8Rt70cfAnznnQ7McgPyNzlwaR01-ZuEebLpLIv8y40cUI6NmVSc-NjuFr76Ca1aktslSdKF5LZVp7BGcc-QS7qOagqg9Cxx-wUTHwwWetmQY0mtMAYvcoUm_IPbrDMQEkSEDzWxPQsxuaM5u3_ZugZGWF-Xep1I5qgFr0x5WqACMBZ1JP6OQYMatj_kDJ45pziccGUlFSJf0PDyKFdMWS9cip5aYnOoJBNPfbAI8MpQGFmvBhIuM')" }}></div>
            <div className="snap-center shrink-0 w-full h-full bg-center bg-cover" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCwYptXMJmqCzW7Yg6IepOn4Si9OKpC8M3dCAPYX6hEKuik9hFfGoXHblJiLjjv3dGZ6QCnI5e7KY9fdEKnY6WoSpxVbT5extf1slxPladyXFOwqrdxMvA8PVqbueEutkIJ9ajNQ1ASXmkAFwwlV1KFn4hYKoLXHrF1MX_XHHNdu0NNO_W16ngU5FbPJoZaJlTKIT6PQ5iHyC8lJpPkZdBlyAFa0o9sM65_quJBuDzY-EVmh42_i-SVVxBnweGXYQi3l-R7kbW3jt4')" }}></div>
          </div>
          <div className="absolute bottom-4 right-4 bg-black/40 text-white px-3 py-1 rounded-full text-xs backdrop-blur-sm">
            1 / 3
          </div>
        </div>

        <section className="p-4 bg-white dark:bg-slate-900 mb-2">
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-baseline gap-1">
              <span className="text-primary text-3xl font-bold">¥</span>
              <span className="text-primary text-4xl font-bold">2,999</span>
              <span className="text-slate-400 dark:text-slate-500 line-through ml-2 text-sm">¥3,599</span>
            </div>
            <button className="flex flex-col items-center text-slate-500 dark:text-slate-400">
              <span className="material-symbols-outlined text-primary">ios_share</span>
              <span className="text-[10px] mt-0.5">生成海报</span>
            </button>
          </div>
          <h1 className="text-xl font-bold leading-snug mb-3">新款旗舰智能穿戴 - 极简主义设计，全天候健康监测，超长续航动力</h1>
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span>快递: 免运费</span>
            <span>月销: 1,200+</span>
            <span>发货地: 上海</span>
          </div>
        </section>

        <section className="p-4 bg-white dark:bg-slate-900 mb-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 shrink-0">优惠</span>
            <div className="flex gap-2">
              <span className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded-sm border border-primary/20">满1000减100</span>
              <span className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded-sm border border-primary/20">新用户首单立减</span>
            </div>
          </div>
          <span className="material-symbols-outlined text-slate-400">chevron_right</span>
        </section>

        <section className="p-4 bg-white dark:bg-slate-900 mb-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 shrink-0">选择</span>
            <p className="text-sm truncate">已选：星光色, 45mm, 1件</p>
          </div>
          <span className="material-symbols-outlined text-slate-400">keyboard_arrow_down</span>
        </section>

        <section className="p-4 bg-white dark:bg-slate-900 mb-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-xs text-slate-600 dark:text-slate-300">
              <span className="material-symbols-outlined text-primary text-sm">verified</span>
              <span>正品保障</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-slate-600 dark:text-slate-300">
              <span className="material-symbols-outlined text-primary text-sm">local_shipping</span>
              <span>极速退款</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-slate-600 dark:text-slate-300">
              <span className="material-symbols-outlined text-primary text-sm">7mp</span>
              <span>七天无理由</span>
            </div>
          </div>
        </section>

        <div className="flex items-center justify-center p-4 bg-transparent">
          <div className="h-[1px] w-12 bg-slate-300 dark:bg-slate-700"></div>
          <span className="px-4 text-xs font-bold text-slate-500 uppercase tracking-widest">商品详情</span>
          <div className="h-[1px] w-12 bg-slate-300 dark:bg-slate-700"></div>
        </div>

        <section className="bg-white dark:bg-slate-900 mb-10 pb-10">
          <div className="p-4 space-y-4">
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              采用尖端科技打造，这款智能设备不仅是时间的守护者，更是您个人健康的智能管家。轻量化机身设计，佩戴舒适如若无物。
            </p>
            <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDh3S0XbTw2dZKH8q5d2j99WOd-jLUtYu90-lTxteUxujCl6fueAkoJkC1JwXstYFHGgHUKAhSeE5qIScPzGre_tfqUqQdB00tUiq1fCp8vS48aHm5QIIllWRV3dtAISFI1OIu8mbiJPNwJZIfFShHinWEQKL2l1rW6vW2xvHcELzcFg2yyUD2OxM8Vin9vTcNAPdBjjg2sJabqenaDKQ13z6Fm8DrIX4jsoCCEoIrrkcxXRWD2fayPn1LtQFk9GX9XR5Q1K_EfXwA')" }}></div>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              无论是高强度的体能训练，还是深夜的深度睡眠，内置的高精度传感器都能准确记录每一项数据，并生成专业的分析报告。
            </p>
            <div className="w-full aspect-video rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBdT1zKtOVB9VjWJKCa1gBS8jwE5jDIApBjhLWXpaXJwbXyRWFvuY4LNhrrF4nX8t-hG9dXHkB8lZ5n7_AEm4sxB1cNqh0rGewKuhzocgBp09gif4hO8rTvIACKXKbIBZr3RhroUNAJuYOCQBqjPZrGm86LhkfznMZedoL9ke5IfybUhNqm-W1glsInU8Kho45niJxT_XphZjtXPIvqcTcdaiDfZ-qdj8Y5tyhGIzjrR7_ShYVt3jSMZ7lNUpT6gBm1z-ZOa-kGLJk')" }}></div>
          </div>
        </section>
      </main>

      <div className="shrink-0 z-40 px-4 py-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 flex items-center gap-3">
        <div className="flex-1 flex gap-3">
          <button className="flex-1 h-12 bg-primary/10 text-primary font-bold rounded-full text-base transition-colors hover:bg-primary/20">加入购物车</button>
          <Link to="/cart" className="flex-1 h-12 flex items-center justify-center bg-primary text-white font-bold rounded-full text-base shadow-lg shadow-primary/20 transition-transform active:scale-95">立即购买</Link>
        </div>
      </div>
    </div>
  );
}
