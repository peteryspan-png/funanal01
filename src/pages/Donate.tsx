import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Gift } from 'lucide-react';

export const Donate: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-20">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-beige-50">후원하기</h1>
        <p className="text-beige-100 max-w-2xl mx-auto font-medium">
          여러분의 따뜻한 마음이 모여 누군가의 마지막 길이 외롭지 않게 됩니다. <br />
          존엄한 배웅을 위한 여정에 함께해주세요.
        </p>
      </header>

      <div className="max-w-2xl mx-auto">
        {/* Individual Donation */}
        <motion.div 
          whileHover={{ y: -8 }}
          className="bg-sage-900/50 p-10 rounded-[3rem] shadow-sm border border-sage-800/50 space-y-8"
        >
          <div className="w-16 h-16 bg-sage-800 text-beige-100 rounded-2xl flex items-center justify-center border border-sage-700">
            <Users size={32} />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-beige-50">후원 계좌</h2>
            <div className="bg-sage-800/50 p-6 rounded-2xl border border-sage-700 text-center">
              <p className="text-xl font-bold text-beige-50 mb-2">국민 782701.04.140438</p>
              <p className="text-sage-300 font-medium">기독교 장례 문화선교 재단</p>
            </div>
            <p className="text-beige-100 leading-relaxed mt-6 font-medium">
              보내주신 후원금은 무연고 사망자와 저소득 소외계층의 <br />
              존엄한 마지막 길을 배웅하는 데 소중히 사용됩니다.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Donation Impact */}
      <section className="bg-sage-900/30 rounded-[3rem] p-12 text-center space-y-8 border border-sage-800/30">
        <h2 className="text-2xl font-bold text-beige-50">후원금은 이렇게 사용됩니다</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { label: '장례 물품 지원', desc: '수의, 관, 예배 및 제례 지원 등 필수 장례 물품 구입', icon: Gift },
            { label: '공영장례 운영', desc: '빈소 대관 및 장례 절차 전반 운영비', icon: Heart },
            { label: '인식 개선 활동', desc: '무연고 사망자 문제 해결을 위한 정책 제안', icon: Users },
          ].map((item, i) => (
            <div key={i} className="space-y-4">
              <div className="w-12 h-12 bg-sage-800 text-beige-100 rounded-full flex items-center justify-center mx-auto shadow-sm border border-sage-700">
                <item.icon size={24} />
              </div>
              <h4 className="font-bold text-beige-50">{item.label}</h4>
              <p className="text-sm text-beige-100 font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Transparency */}
      <div className="text-center space-y-4">
        <p className="text-sm text-sage-500">
          기독교장례문화선교재단은 기부금 영수증 발행이 가능한 지정기부금 단체입니다. <br />
          모든 후원금은 투명하게 공개되며 연말정산 시 세액공제 혜택을 받으실 수 있습니다.
        </p>
      </div>
    </div>
  );
};
