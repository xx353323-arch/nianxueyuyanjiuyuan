import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function YanXueYuInstitute() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide">年学语研究院</h1>
          <nav className="space-x-6 text-sm">
            <a className="hover:text-blue-600" href="#about">研究院概况</a>
            <a className="hover:text-blue-600" href="#research">研究方向</a>
            <a className="hover:text-blue-600" href="#team">研究团队</a>
            <a className="hover:text-blue-600" href="#contact">联系我们</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-6"
          >
            面向未来的语言与教育研究平台
          </motion.h2>
          <p className="max-w-3xl mx-auto text-lg mb-8">
            年学语研究院致力于语言教育、核心素养与学习科学的交叉研究，
            推动理论创新与教育实践深度融合。
          </p>
          <Button size="lg" className="rounded-2xl">了解更多</Button>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-20">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-semibold mb-10 text-center"
        >
          研究院概况
        </motion.h3>
        <p className="max-w-4xl mx-auto leading-relaxed text-center">
          年学语研究院聚焦基础教育与高等教育中的语言发展问题，
          以学科融合为路径，构建面向真实课堂与真实学习情境的研究体系。
          研究成果服务于教师专业发展、课程改革与学生核心能力提升。
        </p>
      </section>

      {/* Research Directions */}
      <section id="research" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-semibold mb-12 text-center">研究方向</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "语言习得与核心素养",
              "课程与教学策略研究",
              "教育评价与学习支持系统",
            ].map((item, idx) => (
              <Card key={idx} className="rounded-2xl shadow-md">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-2">{item}</h4>
                  <p className="text-sm text-gray-600">
                    围绕该方向开展系统研究，形成可推广的理论模型与实践范式。
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-semibold mb-12 text-center">研究团队</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            "语言教育研究员",
            "课程与教学专家",
            "教育评估与数据分析专家",
          ].map((role, idx) => (
            <Card key={idx} className="rounded-2xl">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-200" />
                <h4 className="font-semibold">{role}</h4>
                <p className="text-sm text-gray-600 mt-2">
                  长期从事相关领域研究与一线实践。
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gray-100 py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold mb-6">联系我们</h3>
          <p className="mb-6">欢迎学术交流、项目合作与成果转化咨询。</p>
          <p className="text-sm">邮箱：info@nianyuxue.org</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} 年学语研究院 · 版权所有
        </div>
      </footer>
    </div>
  );
}
