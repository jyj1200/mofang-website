import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Users, Package, Filter, Download, Search, Calendar, Mail, Phone, Building2, Loader2, RefreshCcw } from 'lucide-react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

interface Inquiry {
  id: string;
  type: 'industrial' | 'cultural';
  name: string;
  company?: string;
  phone: string;
  email?: string;
  submittedAt: string;
  [key: string]: any;
}

export function AdminDashboard() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'industrial' | 'cultural'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);

  // Load all inquiries
  const loadInquiries = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-3f503f37/admin/inquiries`,
        {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setInquiries(data.inquiries || []);
      } else {
        console.error('Failed to load inquiries');
      }
    } catch (error) {
      console.error('Error loading inquiries:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadInquiries();
  }, []);

  // Filter and search
  const filteredInquiries = inquiries.filter(inquiry => {
    const matchesFilter = filter === 'all' || inquiry.type === filter;
    const matchesSearch = searchTerm === '' || 
      inquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (inquiry.company && inquiry.company.toLowerCase().includes(searchTerm.toLowerCase())) ||
      inquiry.phone.includes(searchTerm);
    return matchesFilter && matchesSearch;
  });

  // Export to CSV
  const exportToCSV = () => {
    const headers = ['提交时间', '类型', '姓名', '公司', '电话', '邮箱', '咨询ID'];
    const rows = filteredInquiries.map(inquiry => [
      new Date(inquiry.submittedAt).toLocaleString('zh-CN'),
      inquiry.type === 'industrial' ? '工业设计' : '文创产品',
      inquiry.name,
      inquiry.company || '',
      inquiry.phone,
      inquiry.email || '',
      inquiry.id,
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `客户咨询数据_${new Date().toLocaleDateString('zh-CN')}.csv`;
    link.click();
  };

  // Statistics
  const stats = {
    total: inquiries.length,
    industrial: inquiries.filter(i => i.type === 'industrial').length,
    cultural: inquiries.filter(i => i.type === 'cultural').length,
    today: inquiries.filter(i => {
      const today = new Date().toDateString();
      return new Date(i.submittedAt).toDateString() === today;
    }).length,
  };

  return (
    <div className="min-h-screen bg-[#F5F5F7] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#2C2C2C] mb-2">客户咨询管理后台</h1>
          <p className="text-gray-600">查看和管理所有客户提交的咨询信息</p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-[#0066CC]/10 rounded-lg flex items-center justify-center">
                <Users size={24} className="text-[#0066CC]" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[#2C2C2C] mb-1">{stats.total}</h3>
            <p className="text-sm text-gray-600">总咨询数</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-[#00B894]/10 rounded-lg flex items-center justify-center">
                <Package size={24} className="text-[#00B894]" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[#2C2C2C] mb-1">{stats.industrial}</h3>
            <p className="text-sm text-gray-600">工业设计</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-[#FF7A30]/10 rounded-lg flex items-center justify-center">
                <Package size={24} className="text-[#FF7A30]" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[#2C2C2C] mb-1">{stats.cultural}</h3>
            <p className="text-sm text-gray-600">文创产品</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-[#0066CC]/10 rounded-lg flex items-center justify-center">
                <Calendar size={24} className="text-[#0066CC]" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[#2C2C2C] mb-1">{stats.today}</h3>
            <p className="text-sm text-gray-600">今日新增</p>
          </motion.div>
        </div>

        {/* Filters and Actions */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="搜索姓名、公司或电话..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                />
              </div>
            </div>

            {/* Filter */}
            <div className="flex gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  filter === 'all'
                    ? 'bg-[#0066CC] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                全部
              </button>
              <button
                onClick={() => setFilter('industrial')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  filter === 'industrial'
                    ? 'bg-[#00B894] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                工业设计
              </button>
              <button
                onClick={() => setFilter('cultural')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  filter === 'cultural'
                    ? 'bg-[#FF7A30] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                文创产品
              </button>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <button
                onClick={loadInquiries}
                className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
              >
                <RefreshCcw size={18} />
                刷新
              </button>
              <button
                onClick={exportToCSV}
                className="px-4 py-2 bg-[#0066CC] text-white rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                <Download size={18} />
                导出
              </button>
            </div>
          </div>
        </div>

        {/* Inquiries List */}
        {loading ? (
          <div className="bg-white p-12 rounded-xl shadow-md text-center">
            <Loader2 className="mx-auto mb-4 animate-spin text-[#0066CC]" size={48} />
            <p className="text-gray-600">加载中...</p>
          </div>
        ) : filteredInquiries.length === 0 ? (
          <div className="bg-white p-12 rounded-xl shadow-md text-center">
            <Users className="mx-auto mb-4 text-gray-400" size={48} />
            <p className="text-gray-600">暂无咨询记录</p>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#F5F5F7]">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                      提交时间
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                      类型
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                      姓名
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                      公司
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                      联系方式
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                      操作
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredInquiries.map((inquiry, index) => (
                    <motion.tr
                      key={inquiry.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="hover:bg-[#F5F5F7] transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {new Date(inquiry.submittedAt).toLocaleString('zh-CN')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full ${
                            inquiry.type === 'industrial'
                              ? 'bg-[#00B894]/10 text-[#00B894]'
                              : 'bg-[#FF7A30]/10 text-[#FF7A30]'
                          }`}
                        >
                          {inquiry.type === 'industrial' ? '工业设计' : '文创产品'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {inquiry.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {inquiry.company || '-'}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-1">
                            <Phone size={14} />
                            {inquiry.phone}
                          </div>
                          {inquiry.email && (
                            <div className="flex items-center gap-1">
                              <Mail size={14} />
                              {inquiry.email}
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button
                          onClick={() => setSelectedInquiry(inquiry)}
                          className="text-[#0066CC] hover:text-[#0052A3] font-medium"
                        >
                          查看详情
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Detail Modal */}
        {selectedInquiry && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedInquiry(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-xl font-bold text-[#2C2C2C]">咨询详情</h3>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-600">咨询类型</label>
                    <p className="text-[#2C2C2C] font-medium">
                      {selectedInquiry.type === 'industrial' ? '工业设计' : '文创产品'}
                    </p>
                  </div>
                  
                  <div>
                    <label className="text-sm text-gray-600">提交时间</label>
                    <p className="text-[#2C2C2C] font-medium">
                      {new Date(selectedInquiry.submittedAt).toLocaleString('zh-CN')}
                    </p>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-bold text-[#2C2C2C] mb-3">客户信息</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-gray-600">姓名</label>
                        <p className="text-[#2C2C2C]">{selectedInquiry.name}</p>
                      </div>
                      {selectedInquiry.company && (
                        <div>
                          <label className="text-sm text-gray-600">公司/机构</label>
                          <p className="text-[#2C2C2C]">{selectedInquiry.company}</p>
                        </div>
                      )}
                      <div>
                        <label className="text-sm text-gray-600">联系电话</label>
                        <p className="text-[#2C2C2C]">{selectedInquiry.phone}</p>
                      </div>
                      {selectedInquiry.email && (
                        <div>
                          <label className="text-sm text-gray-600">电子邮箱</label>
                          <p className="text-[#2C2C2C]">{selectedInquiry.email}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {selectedInquiry.type === 'industrial' && (
                    <div className="border-t pt-4">
                      <h4 className="font-bold text-[#2C2C2C] mb-3">项目信息</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {selectedInquiry.industry && (
                          <div>
                            <label className="text-sm text-gray-600">所属行业</label>
                            <p className="text-[#2C2C2C]">{selectedInquiry.industry}</p>
                          </div>
                        )}
                        <div>
                          <label className="text-sm text-gray-600">产品类型</label>
                          <p className="text-[#2C2C2C]">{selectedInquiry.productType}</p>
                        </div>
                        {selectedInquiry.projectStage && (
                          <div>
                            <label className="text-sm text-gray-600">项目阶段</label>
                            <p className="text-[#2C2C2C]">{selectedInquiry.projectStage}</p>
                          </div>
                        )}
                        {selectedInquiry.timeline && (
                          <div>
                            <label className="text-sm text-gray-600">项目周期</label>
                            <p className="text-[#2C2C2C]">{selectedInquiry.timeline}</p>
                          </div>
                        )}
                        {selectedInquiry.budget && (
                          <div>
                            <label className="text-sm text-gray-600">预算范围</label>
                            <p className="text-[#2C2C2C]">{selectedInquiry.budget}</p>
                          </div>
                        )}
                      </div>
                      {selectedInquiry.requirements && (
                        <div className="mt-4">
                          <label className="text-sm text-gray-600">需求详情</label>
                          <p className="text-[#2C2C2C] whitespace-pre-wrap bg-[#F5F5F7] p-4 rounded-lg mt-2">
                            {selectedInquiry.requirements}
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {selectedInquiry.type === 'cultural' && (
                    <div className="border-t pt-4">
                      <h4 className="font-bold text-[#2C2C2C] mb-3">产品信息</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm text-gray-600">产品类型</label>
                          <p className="text-[#2C2C2C]">{selectedInquiry.productType}</p>
                        </div>
                        {selectedInquiry.quantity && (
                          <div>
                            <label className="text-sm text-gray-600">定制数量</label>
                            <p className="text-[#2C2C2C]">{selectedInquiry.quantity}</p>
                          </div>
                        )}
                        {selectedInquiry.budget && (
                          <div>
                            <label className="text-sm text-gray-600">预算范围</label>
                            <p className="text-[#2C2C2C]">{selectedInquiry.budget}</p>
                          </div>
                        )}
                        {selectedInquiry.material && (
                          <div>
                            <label className="text-sm text-gray-600">材质要求</label>
                            <p className="text-[#2C2C2C]">{selectedInquiry.material}</p>
                          </div>
                        )}
                        {selectedInquiry.deadline && (
                          <div>
                            <label className="text-sm text-gray-600">交付时间</label>
                            <p className="text-[#2C2C2C]">{selectedInquiry.deadline}</p>
                          </div>
                        )}
                      </div>
                      {selectedInquiry.description && (
                        <div className="mt-4">
                          <label className="text-sm text-gray-600">设计需求</label>
                          <p className="text-[#2C2C2C] whitespace-pre-wrap bg-[#F5F5F7] p-4 rounded-lg mt-2">
                            {selectedInquiry.description}
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="border-t pt-4">
                    <label className="text-sm text-gray-600">咨询ID</label>
                    <p className="text-[#2C2C2C] font-mono text-xs">{selectedInquiry.id}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-gray-200 flex gap-3">
                <button
                  onClick={() => setSelectedInquiry(null)}
                  className="flex-1 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  关闭
                </button>
                <a
                  href={`mailto:${selectedInquiry.email || 'mofangtech@qq.com'}?subject=关于您的咨询 - ${selectedInquiry.id}`}
                  className="flex-1 px-4 py-2 bg-[#0066CC] text-white rounded-lg hover:opacity-90 transition-opacity text-center"
                >
                  发送邮件
                </a>
                <a
                  href={`tel:${selectedInquiry.phone}`}
                  className="flex-1 px-4 py-2 bg-[#00B894] text-white rounded-lg hover:opacity-90 transition-opacity text-center"
                >
                  拨打电话
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}