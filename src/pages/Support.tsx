import React from 'react';
import { motion } from 'framer-motion';
import { Phone, CheckCircle2, FileText, Heart, Info } from 'lucide-react';

export const Support: React.FC = () => {
  const steps = [
    { title: '상담 신청', desc: '전화 또는 온라인으로 상황을 알려주세요.', icon: Phone },
    { title: '대상 확인', desc: '공영장례 지원 대상 여부를 확인합니다.', icon: CheckCircle2 },
    { title: '장례 진행', desc: '존엄한 배웅을 위한 모든 절차를 지원합니다.', icon: Heart },
    { title: '사후 관리', desc: '행정 절차 및 안치 지원을 마무리합니다.', icon: FileText },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-20">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-sage-950 dark:text-beige-50">장례 지원 안내</h1>
        <p className="text-sage-900 dark:text-beige-100 max-w-2xl mx-auto font-medium">
          가족이 없거나 경제적 어려움으로 장례를 치르기 힘든 분들을 위해 <br />
          기독교장례문화선교재단이 마지막 길을 함께합니다.
        </p>
      </header>

      {/* Infographic Steps */}
      <section className="relative">
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-sage-100 -translate-y-1/2 z-0" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] text-center shadow-sm border border-sage-50 dark:border-slate-700"
            >
              <div className="w-16 h-16 bg-sage-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <step.icon size={32} />
              </div>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-sage-900 dark:text-beige-100 leading-relaxed font-medium">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Eligibility & Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-sage-100 text-sage-600 rounded-full flex items-center justify-center shrink-0">
              <Info size={20} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">지원 대상</h3>
              <ul className="space-y-2 text-sage-900 dark:text-beige-100 list-disc pl-5 font-medium">
                <li>무연고 사망자 (연고자가 없거나 알 수 없는 경우)</li>
                <li>연고자가 있으나 시신 인수를 거부/기피하는 경우</li>
                <li>기초생활수급자 등 경제적 어려움으로 장례가 불가능한 경우</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-sage-100 text-sage-600 rounded-full flex items-center justify-center shrink-0">
              <Heart size={20} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">지원 내용</h3>
              <ul className="space-y-2 text-sage-900 dark:text-beige-100 list-disc pl-5 font-medium">
                <li>장례식장 빈소 마련 및 예배 및 제례 지원</li>
                <li>운구, 화장, 안치 등 장례 전 과정 지원</li>
                <li>장례지도사 및 추모 자원봉사자 파견</li>
                <li>부고 알림 및 온라인 추모 공간 제공</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-sage-900 rounded-[3rem] p-10 text-white space-y-8">
          <h3 className="text-2xl font-bold">긴급 장례 상담</h3>
          <p className="text-sage-300 leading-relaxed">
            갑작스러운 이별 앞에 당황하지 마세요. <br />
            24시간 상담 센터가 여러분의 곁을 지킵니다.
          </p>
          <div className="space-y-4">
            <a 
              href="tel:02-362-4488" 
              className="flex items-center justify-center gap-3 bg-white text-sage-900 py-5 rounded-2xl font-bold text-xl hover:bg-beige-50 transition-all"
            >
              <Phone size={24} /> 02-362-4488
            </a>
            <button className="w-full flex items-center justify-center gap-3 bg-sage-800 text-white py-5 rounded-2xl font-bold hover:bg-sage-700 transition-all border border-sage-700">
              카카오톡 1:1 상담하기
            </button>
          </div>
          <p className="text-xs text-sage-400 text-center">
            * 야간 및 공휴일에도 긴급 상담이 가능합니다.
          </p>
        </div>
      </div>
    </div>
  );
};
