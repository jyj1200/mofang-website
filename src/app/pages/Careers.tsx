import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';
import { PageEnding } from '../components/PageEnding';
import { SEOHead } from '../components/SEOHead';

export function Careers() {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="招聘职位 - 墨方智能科技"
        description="墨方智能科技招聘信息，欢迎热爱设计与创新的人才加入我们的团队，共同创造优秀的工业设计与文创产品。"
        keywords="招聘,工业设计师,文创设计师,机械设计,产品设计,中山招聘"
        path="/careers"
      />
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-r from-[#0066CC] to-[#00B894]">
        <div className="text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Briefcase size={64} className="mx-auto mb-6" />
            <h1 className="mb-4 text-white">招聘职位</h1>
            <p className="text-xl">
              加入墨方智能科技，共创设计未来
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="mb-6">职位信息</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-12">
              我们正在寻找充满热情的设计与工程人才。如果你热爱设计，追求创新，欢迎加入我们的团队。
            </p>

            {/* Empty State */}
            <div className="bg-[#F5F5F7] rounded-xl p-16 min-h-[400px] flex flex-col items-center justify-center">
              <div className="text-gray-400 mb-6">
                <Briefcase size={80} strokeWidth={1} />
              </div>
              <h3 className="text-gray-500 mb-4">暂无招聘职位</h3>
              <p className="text-gray-400 mb-8 max-w-md">
                我们会不定期发布招聘信息，请关注本页面或通过以下方式联系我们了解更多机会。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:hr@mofangtech.com"
                  className="bg-[#0066CC] hover:bg-[#0052A3] text-white px-8 py-3 rounded-lg transition-colors"
                >
                  发送简历至 hr@mofangtech.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">为什么选择我们</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              在墨方智能科技，你将获得专业成长与创新实践的双重机会
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl text-center"
            >
              <div className="text-4xl mb-4">🎓</div>
              <h4 className="mb-3">专业成长</h4>
              <p className="text-gray-600 text-sm">
                与顶尖院校背景的团队成员共事，在实际项目中快速提升专业能力
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl text-center"
            >
              <div className="text-4xl mb-4">💡</div>
              <h4 className="mb-3">创新环境</h4>
              <p className="text-gray-600 text-sm">
                鼓励创新思维，提供从概念到落地的完整实践机会
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl text-center"
            >
              <div className="text-4xl mb-4">🤝</div>
              <h4 className="mb-3">多元协作</h4>
              <p className="text-gray-600 text-sm">
                跨学科团队协作，拓展视野，掌握工业设计与文创设计的全流程
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <PageEnding variant="default" />
    </div>
  );
}