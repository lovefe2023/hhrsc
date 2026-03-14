import { Link } from 'react-router-dom';

export default function Cart() {
  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      {/* Header */}
      <header className="shrink-0 sticky top-0 z-10 flex items-center bg-white dark:bg-slate-900 p-4 border-b border-slate-200 dark:border-slate-800 justify-between">
        <Link to="/" className="text-slate-900 dark:text-slate-100 flex size-10 shrink-0 items-center justify-start">
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <h1 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight flex-1 text-center">购物车 (3)</h1>
        <div className="flex w-10 items-center justify-end">
          <button className="text-primary text-sm font-semibold">编辑</button>
        </div>
      </header>

      {/* Cart Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Store Section 1 */}
        <section className="mt-2 bg-white dark:bg-slate-900">
          <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-50 dark:border-slate-800">
            <input defaultChecked className="rounded border-slate-300 text-primary focus:ring-primary h-5 w-5" type="checkbox" />
            <span className="material-symbols-outlined text-slate-500">store</span>
            <h2 className="text-slate-900 dark:text-slate-100 text-sm font-bold">H5 官方旗舰店</h2>
            <span className="material-symbols-outlined text-slate-400 text-sm">chevron_right</span>
          </div>

          {/* Product Item 1 */}
          <div className="flex gap-3 px-4 py-4 border-b border-slate-50 dark:border-slate-800 last:border-0">
            <div className="flex items-center">
              <input defaultChecked className="rounded border-slate-300 text-primary focus:ring-primary h-5 w-5" type="checkbox" />
            </div>
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-24 shrink-0 bg-slate-100" data-alt="Minimalist white ceramic watch on plain background" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBhy3d_gHry2LesF1hWVHzsyTA_-ZdoVbmHRyUsYHERFzucv-wr3tw4BbjWjXgmHo7QKjDnBZz3H6nVaWi_a4kAVoEc_g1qgkjA8atFwdiuTgVpvgnOaPqwxdUfbqjjRk8igTA3PdwK6JjdkixBj30NHSPXsuSe__gC5TtHRlbq262UOTDUOrIzuPYDqjGL1BYw44hj45MBk9e95Mj7Jms7Ez-yaf-ENFRSkbXoeOGXg9goSNvxRIVHFbiQNavz_EulSO8UgsUIu2A")' }}></div>
            <div className="flex flex-1 flex-col justify-between min-w-0">
              <div>
                <p className="text-slate-900 dark:text-slate-100 text-sm font-medium line-clamp-2">高级陶瓷智能手表 - Series 7 限定版</p>
                <div className="mt-1 inline-flex items-center rounded bg-slate-100 dark:bg-slate-800 px-2 py-0.5">
                  <span className="text-slate-500 dark:text-slate-400 text-xs">颜色: 极地白; 尺寸: 44mm</span>
                  <span className="material-symbols-outlined text-xs ml-1">expand_more</span>
                </div>
              </div>
              <div className="flex items-end justify-between mt-2">
                <p className="text-primary text-lg font-bold">¥2,499.00</p>
                <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden h-8">
                  <button className="px-2 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300">-</button>
                  <input className="w-10 text-center text-sm border-x border-slate-200 dark:border-slate-700 bg-transparent focus:outline-none" type="number" defaultValue="1" />
                  <button className="px-2 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300">+</button>
                </div>
              </div>
            </div>
          </div>

          {/* Product Item 2 */}
          <div className="flex gap-3 px-4 py-4 border-b border-slate-50 dark:border-slate-800 last:border-0">
            <div className="flex items-center">
              <input defaultChecked className="rounded border-slate-300 text-primary focus:ring-primary h-5 w-5" type="checkbox" />
            </div>
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-24 shrink-0 bg-slate-100" data-alt="High quality wireless noise cancelling headphones" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA7-LR3i23TT0d5T0Uae0J1DZIUT18yght5gLpZwDzB7jjN0cdkWEcIhfFCml8wxW5oeBMkXe176UF0BZe-EtssZvmhPCJpedLvOnu6Q93Q2-i8MnJkVHiwhkP4DcjeG9-k6roj43DOrpG0jsADs4Kc14_zlp7zaRfOaemRrmDQZxiELPJPX98qbWZnMrNDTbYlBkA7_AVa8a_N1dlkmExXOtJFY_xQoMjr5hW4Wrc9ovPA6tZ1ikNoVcT_rvQWcUsUoh5lp1A_0PA")' }}></div>
            <div className="flex flex-1 flex-col justify-between min-w-0">
              <div>
                <p className="text-slate-900 dark:text-slate-100 text-sm font-medium line-clamp-2">Studio Pro 无线耳机 - 深沉重低音</p>
                <div className="mt-1 inline-flex items-center rounded bg-slate-100 dark:bg-slate-800 px-2 py-0.5">
                  <span className="text-slate-500 dark:text-slate-400 text-xs">颜色: 午夜黑</span>
                  <span className="material-symbols-outlined text-xs ml-1">expand_more</span>
                </div>
              </div>
              <div className="flex items-end justify-between mt-2">
                <p className="text-primary text-lg font-bold">¥1,299.00</p>
                <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden h-8">
                  <button className="px-2 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300">-</button>
                  <input className="w-10 text-center text-sm border-x border-slate-200 dark:border-slate-700 bg-transparent focus:outline-none" type="number" defaultValue="1" />
                  <button className="px-2 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300">+</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Store Section 2 */}
        <section className="mt-2 bg-white dark:bg-slate-900">
          <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-50 dark:border-slate-800">
            <input className="rounded border-slate-300 text-primary focus:ring-primary h-5 w-5" type="checkbox" />
            <span className="material-symbols-outlined text-slate-500">store</span>
            <h2 className="text-slate-900 dark:text-slate-100 text-sm font-bold">全球科技速递</h2>
            <span className="material-symbols-outlined text-slate-400 text-sm">chevron_right</span>
          </div>

          <div className="flex gap-3 px-4 py-4">
            <div className="flex items-center">
              <input className="rounded border-slate-300 text-primary focus:ring-primary h-5 w-5" type="checkbox" />
            </div>
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-24 shrink-0 bg-slate-100" data-alt="Leather strap analog classic wrist watch" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCObpn4CK34XDg9s6IuUyiU4Bp00aD8lveqIMAGsY7AdqX3py6UzpXbsB530m0B4c30FqVcPb91if_SzzH0tJOx5nFQz1ZV7Svmzq4pWChn3-HQBHn49STH2M5pZ2pJHJzJTN6gnbhxxnUWlBYmb233QcyzjH88hy_lkXQIudzJbyb5d706vmB7ziCZOzpUpgxCIE6L7Cncj1mDuWTXj7hMM1oM_tbmBN5JC6LDN8RluZlkctNI4-6T07UtR4Vn1-C2JuBad-jJm4c")' }}></div>
            <div className="flex flex-1 flex-col justify-between min-w-0">
              <div className="flex justify-between items-start gap-2">
                <p className="text-slate-900 dark:text-slate-100 text-sm font-medium line-clamp-2 flex-1">经典皮带指针男士手表</p>
                <button className="text-slate-400 hover:text-red-500 shrink-0">
                  <span className="material-symbols-outlined text-xl">delete</span>
                </button>
              </div>
              <div className="mt-1 inline-flex items-center self-start rounded bg-slate-100 dark:bg-slate-800 px-2 py-0.5">
                <span className="text-slate-500 dark:text-slate-400 text-xs">表带: 棕色皮革</span>
              </div>
              <div className="flex items-end justify-between mt-2">
                <p className="text-primary text-lg font-bold">¥450.00</p>
                <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden h-8">
                  <button className="px-2 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300">-</button>
                  <input className="w-10 text-center text-sm border-x border-slate-200 dark:border-slate-700 bg-transparent focus:outline-none" type="number" defaultValue="1" />
                  <button className="px-2 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300">+</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recommendations / Empty Space */}
        <div className="p-8 text-center text-slate-400">
          <p className="text-xs">已经到底了</p>
        </div>
      </main>

      {/* Checkout Bottom Bar */}
      <div className="shrink-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-4 py-3 flex items-center justify-between z-20 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <div className="flex items-center gap-2">
          <input className="rounded border-slate-300 text-primary focus:ring-primary h-5 w-5" type="checkbox" />
          <span className="text-slate-600 dark:text-slate-400 text-sm">全选</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-xs text-slate-500">合计:</p>
            <p className="text-primary text-lg font-bold leading-none">¥3,798.00</p>
          </div>
          <Link to="/checkout" className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-primary/30 transition-all active:scale-95 text-center">
            去结算
          </Link>
        </div>
      </div>
    </div>
  );
}
