import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Heart, ArrowRight } from 'lucide-react';

export const Home: React.FC<{ onNavigate: (tab: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80&w=2000" 
            alt="Warm sunset"
            className="w-full h-full object-cover opacity-60 dark:opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-beige-100/50 to-beige-100 dark:via-slate-900/50 dark:to-slate-900" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 rounded-full bg-sage-100 text-sage-700 text-sm font-bold mb-6"
          >
            기독교장례문화선교재단
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-sage-900 dark:text-beige-100 leading-tight mb-6"
          >
            당신의 마지막 길,<br />
            우리가 따뜻하게 동행합니다
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-sage-700 dark:text-sage-300 mb-10 max-w-2xl mx-auto"
          >
            외롭게 떠나는 이가 없는 세상, <br />
            존엄한 죽음이 보장되는 사회를 위해 시민들과 함께 걷습니다.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button 
              onClick={() => onNavigate('support')}
              className="bg-sage-500 hover:bg-sage-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
            >
              장례 지원 신청 <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => onNavigate('accompany')}
              className="bg-white hover:bg-beige-50 text-sage-700 px-8 py-4 rounded-full font-bold text-lg shadow-md hover:shadow-lg transition-all border border-sage-200"
            >
              후원하기
            </button>
          </motion.div>
        </div>
      </section>


      {/* Quick Actions */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="bg-sage-50 dark:bg-sage-900/30 rounded-[3rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-md">
            <h2 className="text-3xl font-bold text-sage-900 dark:text-beige-100 mb-4">도움이 필요하신가요?</h2>
            <p className="text-sage-700 dark:text-sage-300">
              무연고 사망자 공영장례 지원부터 저소득층 장례 상담까지, <br />
              어려운 순간에 가장 먼저 달려가겠습니다.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button className="flex flex-col items-center gap-2 bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-sm hover:shadow-md transition-all w-40 border border-sage-100 dark:border-slate-700">
              <Phone className="text-sage-500" size={28} />
              <div className="text-center">
                <span className="text-sm font-bold block">긴급 상담</span>
                <span className="text-xs text-sage-600 font-medium">02-362-4488</span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="rounded-[2rem] overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=1000" 
            alt="Hands holding"
            className="w-full h-[400px] object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-sage-900 dark:text-beige-100">"누구도 외롭게 떠나지 않도록"</h2>
          <p className="text-lg text-sage-700 dark:text-sage-300 leading-relaxed">
            기독교장례문화선교재단은 가족이 없거나, 가난하다는 이유로 마지막 길조차 보장받받지 못하는 우리 이웃들을 위해 존재합니다. 
            시민들의 정성 어린 후원과 자원봉사자들의 따뜻한 손길이 모여 존엄한 배웅을 실천하고 있습니다.
          </p>
          <div className="pt-4">
            <button 
              onClick={() => onNavigate('accompany')}
              className="text-sage-600 font-bold flex items-center gap-2 hover:gap-4 transition-all"
            >
              우리의 활동 더 보기 <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const Users = ({ size }: { size: number }) => <Heart size={size} />; // Placeholder for Users icon if not imported correctly
