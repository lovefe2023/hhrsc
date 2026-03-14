import { Link } from 'react-router-dom';

export default function Partner() {
  return (
    <div className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark pb-24">
      <div className="flex items-center bg-white dark:bg-slate-900 p-4 sticky top-0 z-10 border-b border-slate-200 dark:border-slate-800 justify-between">
        <div className="text-slate-900 dark:text-slate-100 flex size-10 shrink-0 items-center justify-start">
          <Link to="/" className="material-symbols-outlined cursor-pointer">arrow_back</Link>
        </div>
        <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight flex-1 text-center">合伙人中心</h2>
        <div className="flex w-10 items-center justify-end">
          <button className="flex cursor-pointer items-center justify-center text-slate-900 dark:text-slate-100">
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="flex flex-col items-stretch justify-start rounded-xl shadow-lg bg-gradient-to-br from-primary to-blue-700 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 p-4 opacity-20">
            <span className="material-symbols-outlined text-6xl">workspace_premium</span>
          </div>
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="size-12 rounded-full border-2 border-white/50 bg-white/20 flex items-center justify-center overflow-hidden">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCov-1IBDjVasO4ATENK1JG1phJT6MQjLfN8KjmD6bxQjPkZnGpakbEr34-uj2nSPxjsyv8-DU01ght5qvmiZ-o1Y14DJCupPcMUZeml3BEJaA7K2YIF1Z756jKtVklHiMG5H2ake1L1gA56328p5jn9veOZZpA0oKjb9nycdwfZxCxnzIv23sM3um9cMmcTXH9ZFzToIBhL9ZSbkjbqyeUHZD6P7OG0tb-DR_bIMBk4usNGpCV1Izr_rr8zVkiBTpPw4Dm0sxDcIA" alt="User avatar" />
              </div>
              <div>
                <p className="text-white/80 text-xs font-normal">合伙人 ID: 88291</p>
                <p className="text-xl font-bold leading-tight tracking-tight">金牌合伙人</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <Link to="/sales/details" className="bg-white/10 rounded-lg p-3 backdrop-blur-sm border border-white/10 block hover:bg-white/20 transition-colors">
                <p className="text-white/70 text-xs mb-1">个人销售额</p>
                <p className="text-lg font-bold">¥12,450.00</p>
                <p className="text-green-300 text-[10px] font-medium">本月 +12%</p>
              </Link>
              <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm border border-white/10">
                <p className="text-white/70 text-xs mb-1">推荐人数</p>
                <p className="text-lg font-bold">48 位成员</p>
                <p className="text-green-300 text-[10px] font-medium">新增 +3</p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div>
                <p className="text-white/70 text-xs uppercase tracking-wider font-semibold">当前等级进度</p>
                <div className="w-32 h-1.5 bg-white/20 rounded-full mt-2 overflow-hidden">
                  <div className="w-3/4 h-full bg-white rounded-full"></div>
                </div>
              </div>
              <button className="flex cursor-pointer items-center justify-center rounded-lg h-9 px-4 bg-white text-primary text-sm font-bold shadow-sm">
                查看权益
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 mb-4">
        <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">预计分红</p>
            <p className="text-2xl font-bold text-primary mt-1">¥2,180.50</p>
          </div>
          <div className="bg-primary/10 p-3 rounded-full">
            <span className="material-symbols-outlined text-primary">account_balance_wallet</span>
          </div>
        </div>
      </div>

      <div className="px-4 mb-6">
        <div className="relative rounded-xl overflow-hidden group cursor-pointer">
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
          <div className="absolute inset-0 flex flex-col justify-center p-6 text-white">
            <h3 className="text-xl font-bold">升级合伙人等级</h3>
            <p className="text-sm opacity-90 mt-1 max-w-[200px]">解锁更高佣金比例和专属礼包。</p>
            <div className="mt-4 flex items-center gap-2 text-sm font-bold bg-white text-slate-900 w-fit px-4 py-2 rounded-lg">
              购买礼包
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </div>
          </div>
          <img className="w-full h-32 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHwSoYAFveQQaNFatLxrBXGb_XxSvILzcmG2MViK0wBVUoYQ-t5z2DJRLVQU8q2vqSCoFFsScxzpLcNKsQ_Je1XdzwegEt31dQBQ8o4XYfF5_YGYLH_U82fsne7fRnDsNhj8E5n206VRUsw7FwmaD4G_v5fm_bVUZEvj1fOslWP9lnjkTUBJbxK51R8qONlHiv5l7cVPOTi2dxshQTNdH-EkqS7UGO6BPIUrhfleUoebyoESMZqniorDLyItXp78TdZLus4GzuZ9w" alt="Gift Pack" />
        </div>
      </div>

      <div className="px-4 mb-6">
        <div className="bg-gradient-to-r from-[#ff7a18] to-[#ffb347] rounded-xl p-5 flex items-center justify-between shadow-md">
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-full bg-white/20 flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-3xl">person_add</span>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold leading-tight">邀请合伙人</h3>
              <p className="text-white/90 text-xs mt-1">邀请好友加入，享二级返佣加成</p>
            </div>
          </div>
          <Link to="/partner/invite" className="bg-white text-[#ff7a18] px-4 py-2 rounded-full text-sm font-bold shadow-sm whitespace-nowrap active:opacity-90 transition-opacity">
            立即邀请
          </Link>
        </div>
      </div>

      <div className="px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold">团队统计</h2>
          <Link to="/team" className="text-primary text-sm font-medium">查看历史</Link>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-4">
            <div className="size-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400">
              <span className="material-symbols-outlined">groups</span>
            </div>
            <div className="flex-1">
              <p className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-wider">团队总数</p>
              <p className="text-xl font-bold">324</p>
            </div>
            <div className="text-right">
              <p className="text-green-500 text-sm font-bold">+12</p>
              <p className="text-slate-400 text-[10px]">总成员数</p>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-4">
            <div className="size-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400">
              <span className="material-symbols-outlined">person_add</span>
            </div>
            <div className="flex-1">
              <p className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-wider">新增合伙人</p>
              <p className="text-xl font-bold">8</p>
            </div>
            <div className="text-right">
              <p className="text-primary text-sm font-bold">今日</p>
              <p className="text-slate-400 text-[10px]">待激活: 2</p>
            </div>
          </div>
          <Link to="/team-sales" className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-4 hover:border-primary/50 transition-colors cursor-pointer">
            <div className="size-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400">
              <span className="material-symbols-outlined">monitoring</span>
            </div>
            <div className="flex-1">
              <p className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-wider">团队销售额</p>
              <p className="text-xl font-bold">¥84,320</p>
            </div>
            <div className="text-right">
              <p className="text-green-500 text-sm font-bold">↑ 24%</p>
              <p className="text-slate-400 text-[10px]">月增长率</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
