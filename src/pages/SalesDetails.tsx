import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function SalesDetails() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'personal' | 'team'>('personal');

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-white dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      {/* Header */}
      <div className="sticky top-0 z-10 flex items-center bg-white dark:bg-background-dark p-4 border-b border-slate-100 dark:border-slate-800 justify-between">
        <button onClick={() => navigate(-1)} className="text-slate-900 dark:text-slate-100 flex size-10 shrink-0 items-center justify-start cursor-pointer">
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>
        <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">个人销售额</h2>
      </div>

      {/* Sales Summary Section */}
      <div className="flex flex-wrap gap-3 p-4">
        <div className="flex min-w-[140px] flex-1 flex-col gap-1 rounded-lg p-5 bg-primary/5 border border-primary/10">
          <p className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-wider">累计销售额</p>
          <p className="text-primary tracking-tight text-2xl font-bold leading-tight">¥12,850.00</p>
          <div className="flex items-center gap-1 mt-1">
            <span className="material-symbols-outlined text-green-500 text-sm">trending_up</span>
            <p className="text-green-600 text-xs font-bold leading-normal">+15.2%</p>
          </div>
        </div>
        <div className="flex min-w-[140px] flex-1 flex-col gap-1 rounded-lg p-5 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
          <p className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-wider">本月新增</p>
          <p className="text-slate-900 dark:text-slate-100 tracking-tight text-2xl font-bold leading-tight">¥2,340.00</p>
          <div className="flex items-center gap-1 mt-1">
            <span className="material-symbols-outlined text-green-500 text-sm">trending_up</span>
            <p className="text-green-600 text-xs font-bold leading-normal">+8.4%</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4">
        <div className="flex border-b border-slate-100 dark:border-slate-800 justify-between">
          <button 
            onClick={() => setActiveTab('personal')}
            className={`flex flex-col items-center justify-center pb-3 pt-4 flex-1 transition-all ${activeTab === 'personal' ? 'border-b-[3px] border-primary text-primary' : 'border-b-[3px] border-transparent text-slate-400 dark:text-slate-500'}`}
          >
            <p className="text-sm font-bold leading-normal tracking-wide">个人购买</p>
          </button>
          <button 
            onClick={() => setActiveTab('team')}
            className={`flex flex-col items-center justify-center pb-3 pt-4 flex-1 transition-all ${activeTab === 'team' ? 'border-b-[3px] border-primary text-primary' : 'border-b-[3px] border-transparent text-slate-400 dark:text-slate-500'}`}
          >
            <p className="text-sm font-bold leading-normal tracking-wide">团队购买</p>
          </button>
        </div>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-24">
        <h3 className="text-slate-900 dark:text-slate-100 text-base font-bold leading-tight pt-2">最近订单</h3>

        {/* Product Card 1 (Personal) */}
        <div className="flex gap-4 p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800 shadow-sm">
          <div className="size-20 shrink-0 rounded-lg bg-slate-100 overflow-hidden">
            <img className="w-full h-full object-cover" alt="Minimalist white wristwatch on plain background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgOr7r4XIFO7Z9Dnu6wkvHDmoB3H9hko2G5EwJQuixExxBd2Lsl6qCrQyOzsABKmue7A5_OC64w_o1sH4amBc6PlSS_L1-SAZGJ_3DGnCXTeAcfs56LR7nZT4kP9H_tURRwubmJLNM1TH7elJTh2IoPNI4J6RWRfPUuOjZPRn06EwmUDQE24GsP-mCoLJ1551sUglsV-8Jps3zpAHHCMT-78NjfoxAIjKsu54_Te9jl7EC2meFWlNPnoBCHr2vovSLpKAfQPIOfh0" />
          </div>
          <div className="flex flex-col justify-between flex-1 py-0.5">
            <div>
              <h4 className="text-slate-900 dark:text-slate-100 text-sm font-bold line-clamp-1">智能极简系列腕表 - 曜石黑</h4>
              <p className="text-slate-400 text-xs mt-1">购买日期: 2023-11-20</p>
            </div>
            <div className="flex justify-between items-end">
              <p className="text-primary text-base font-bold">¥599.00</p>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500">已完成</span>
            </div>
          </div>
        </div>

        {/* Product Card 2 (Team) */}
        <div className="flex gap-4 p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800 shadow-sm border-l-4 border-l-primary/30">
          <div className="size-20 shrink-0 rounded-lg bg-slate-100 overflow-hidden">
            <img className="w-full h-full object-cover" alt="Professional wireless headphones studio shot" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRF9yRny-pPNV81YZb186kuBQMs5Uu5-d4w6R3u5JTnp37YpFbC7c-ITkxJ6rgPWU2cT_A23XMyK2P8DwzECPc2MlRWHxG1CQEifNOWDoRgtfP_nc7Gcu-5OIjpbf_FQa7CvOndVrlfCpf4RXoXflSYlERhakH8eBPXKMk5k81hSs2JbQMTm0rKgiLvAyKFjPPzW_fJ3FEqJifXoAu4lJlao94sA759blwrr-QnM84TMVyW13oRobS7qc7ClfRy5-nZ3jOqoLu5_w" />
          </div>
          <div className="flex flex-col justify-between flex-1 py-0.5">
            <div>
              <div className="flex justify-between items-start">
                <h4 className="text-slate-900 dark:text-slate-100 text-sm font-bold line-clamp-1">无线降噪蓝牙耳机 PRO</h4>
                <span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded">团队订单</span>
              </div>
              <p className="text-slate-400 text-xs mt-1">购买日期: 2023-11-18</p>
              <p className="text-slate-600 dark:text-slate-400 text-xs mt-0.5 font-medium italic">买家: 李华</p>
            </div>
            <div className="flex justify-between items-end">
              <p className="text-primary text-base font-bold">¥1,280.00</p>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500">已到账</span>
            </div>
          </div>
        </div>

        {/* Product Card 3 (Personal) */}
        <div className="flex gap-4 p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800 shadow-sm">
          <div className="size-20 shrink-0 rounded-lg bg-slate-100 overflow-hidden">
            <img className="w-full h-full object-cover" alt="Bright red athletic running shoe" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwGSLRYaI2XcVIyxH9V6mfqzgSa-N2iqdWR22dJN1Vbbp8gXnCZHC0IwRxbmvRrNKlOZBzUc4AtKtenuAu6qchkt3aE02A5yxChdrh89UbT5V5k4U8w19QxxkZEtEsCDJhKkJTr7RY9L8Ur8-igeLOc5_YrE_Ay_8Zu-OzKMQwIbbL3R1N6wke00787nvCu8uSg-UczvbT2eYIv_ifYj5ctsKRyAKnUC_IB8ecKL0E0OSy0Ghq8DsztFLGLt3Zu77AIlKhKT7ARHA" />
          </div>
          <div className="flex flex-col justify-between flex-1 py-0.5">
            <div>
              <h4 className="text-slate-900 dark:text-slate-100 text-sm font-bold line-clamp-1">极速系列轻便跑鞋 - 烈焰红</h4>
              <p className="text-slate-400 text-xs mt-1">购买日期: 2023-11-15</p>
            </div>
            <div className="flex justify-between items-end">
              <p className="text-primary text-base font-bold">¥439.00</p>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500">已完成</span>
            </div>
          </div>
        </div>

        {/* Product Card 4 (Team) */}
        <div className="flex gap-4 p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800 shadow-sm border-l-4 border-l-primary/30">
          <div className="size-20 shrink-0 rounded-lg bg-slate-100 overflow-hidden">
            <img className="w-full h-full object-cover" alt="Stylish designer sunglasses on white background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlcZTdN3-UBMKEP2bpTowuXn-AIC-6zvas2qjWJapMz3h5STQxmz8AL8Obaa2Fv-DG5UfzUazsg02mCwChO7t-dgTqlVs56SpFoKmPjJE6Bf9Pi_6nA9ABo66cVnJxsloIhAIiWeBRiZBKmgOdOP1Rga6AWRyvOwGLcEJfv-DnTfM66dU8nC2FuiXcCkcFwMEbY0f2CHFIdTp9yLDVPUXtT53ImYNV5vSyr1eWbC4Ct0T-T4W13NVzSVdiuRKgPueOHvIZF0Dbjnc" />
          </div>
          <div className="flex flex-col justify-between flex-1 py-0.5">
            <div>
              <div className="flex justify-between items-start">
                <h4 className="text-slate-900 dark:text-slate-100 text-sm font-bold line-clamp-1">复古系列偏光太阳镜</h4>
                <span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded">团队订单</span>
              </div>
              <p className="text-slate-400 text-xs mt-1">购买日期: 2023-11-12</p>
              <p className="text-slate-600 dark:text-slate-400 text-xs mt-0.5 font-medium italic">买家: 王小明</p>
            </div>
            <div className="flex justify-between items-end">
              <p className="text-primary text-base font-bold">¥258.00</p>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500">待结算</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
