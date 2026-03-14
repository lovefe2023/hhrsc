import { useNavigate } from 'react-router-dom';

export default function TeamSales() {
  const navigate = useNavigate();

  // Mock data for team sales
  const teamSales = [
    {
      id: 1,
      memberName: '张三',
      memberAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCov-1IBDjVasO4ATENK1JG1phJT6MQjLfN8KjmD6bxQjPkZnGpakbEr34-uj2nSPxjsyv8-DU01ght5qvmiZ-o1Y14DJCupPcMUZeml3BEJaA7K2YIF1Z756jKtVklHiMG5H2ake1L1gA56328p5jn9veOZZpA0oKjb9nycdwfZxCxnzIv23sM3um9cMmcTXH9ZFzToIBhL9ZSbkjbqyeUHZD6P7OG0tb-DR_bIMBk4usNGpCV1Izr_rr8zVkiBTpPw4Dm0sxDcIA',
      productName: '高级护肤套装',
      productImage: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&q=80',
      amount: 1299.00,
      commission: 129.90,
      date: '2026-03-14 10:30',
      status: '已完成'
    },
    {
      id: 2,
      memberName: '李四',
      memberAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&q=80',
      productName: '智能运动手表',
      productImage: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',
      amount: 899.00,
      commission: 89.90,
      date: '2026-03-13 15:45',
      status: '已完成'
    },
    {
      id: 3,
      memberName: '王五',
      memberAvatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&q=80',
      productName: '无线降噪耳机',
      productImage: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
      amount: 1599.00,
      commission: 159.90,
      date: '2026-03-12 09:15',
      status: '待结算'
    },
    {
      id: 4,
      memberName: '赵六',
      memberAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&q=80',
      productName: '便携式咖啡机',
      productImage: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=500&q=80',
      amount: 499.00,
      commission: 49.90,
      date: '2026-03-11 14:20',
      status: '已完成'
    }
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
      {/* 顶部导航 */}
      <nav className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="material-symbols-outlined cursor-pointer text-slate-600 dark:text-slate-300">arrow_back</button>
          <h1 className="text-lg font-bold">团队销售额</h1>
        </div>
        <div className="w-10"></div> {/* 占位符 */}
      </nav>

      <main className="max-w-md mx-auto pb-8 flex-1 w-full">
        {/* 统计卡片 */}
        <div className="p-4">
          <div className="bg-gradient-to-br from-primary to-blue-600 rounded-xl p-6 text-white shadow-lg shadow-primary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <span className="material-symbols-outlined text-8xl -rotate-12">monitoring</span>
            </div>
            <div className="relative z-10">
              <p className="text-white/80 text-sm font-medium mb-1">团队总销售额 (元)</p>
              <p className="text-3xl font-bold tracking-tight">¥84,320.00</p>
              <div className="mt-4 grid grid-cols-2 gap-4 border-t border-white/20 pt-4">
                <div>
                  <p className="text-white/70 text-xs mb-1">本月新增</p>
                  <p className="text-lg font-bold">¥12,450.00</p>
                </div>
                <div>
                  <p className="text-white/70 text-xs mb-1">预计提成</p>
                  <p className="text-lg font-bold">¥1,245.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 销售记录列表 */}
        <div className="px-4 mt-2">
          <h2 className="text-lg font-bold mb-4">成员购买记录</h2>
          
          <div className="space-y-4">
            {teamSales.map((sale) => (
              <div key={sale.id} className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm">
                {/* 成员信息 & 状态 */}
                <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <img src={sale.memberAvatar} alt={sale.memberName} className="w-6 h-6 rounded-full object-cover" />
                    <span className="text-sm font-medium">{sale.memberName}</span>
                  </div>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                    sale.status === '已完成' 
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                      : 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'
                  }`}>
                    {sale.status}
                  </span>
                </div>
                
                {/* 商品信息 */}
                <div className="flex gap-3">
                  <img src={sale.productImage} alt={sale.productName} className="w-16 h-16 rounded-lg object-cover bg-slate-100" />
                  <div className="flex-1 flex flex-col justify-between">
                    <p className="text-sm font-bold line-clamp-2">{sale.productName}</p>
                    <div className="flex items-end justify-between mt-2">
                      <div>
                        <p className="text-xs text-slate-500 mb-0.5">订单金额: <span className="text-slate-900 dark:text-slate-100 font-semibold">¥{sale.amount.toFixed(2)}</span></p>
                        <p className="text-xs text-primary font-medium">预估提成: ¥{sale.commission.toFixed(2)}</p>
                      </div>
                      <p className="text-[10px] text-slate-400">{sale.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* 加载更多 */}
          <button className="w-full mt-6 py-3 text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            加载更多记录
          </button>
        </div>
      </main>
    </div>
  );
}
