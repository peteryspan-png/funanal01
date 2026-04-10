import React from 'react';
import { Heart, Users, Info, Sun, Moon, Type } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import { cn } from '../lib/utils';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab }) => {
  const { isDark, toggleDark, increaseFont, decreaseFont } = useTheme();

  const menuItems = [
    { id: 'home', label: '홈', icon: Heart },
    { id: 'support', label: '장례 지원', icon: Info },
    { id: 'accompany', label: '후원하기', icon: Users },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Accessibility Bar */}
      <div className="bg-sage-600 text-white py-1 px-4 flex justify-end items-center gap-4 text-xs font-medium">
        <div className="flex items-center gap-2">
          <Type size={14} />
          <button onClick={decreaseFont} className="hover:underline">가-</button>
          <button onClick={increaseFont} className="hover:underline">가+</button>
        </div>
        <button onClick={toggleDark} className="flex items-center gap-1 hover:underline">
          {isDark ? <Sun size={14} /> : <Moon size={14} />}
          {isDark ? '라이트 모드' : '다크 모드'}
        </button>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass shadow-sm px-4 md:px-8 py-4 flex justify-between items-center">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => setActiveTab('home')}
        >
          <div className="w-10 h-10 bg-sage-500 rounded-full flex items-center justify-center text-white">
            <Heart size={24} fill="currentColor" />
          </div>
          <span className="text-xl font-bold tracking-tight text-sage-950 dark:text-beige-50">
            기독교장례문화선교재단
          </span>
        </div>

        <div className="hidden md:flex gap-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "relative py-2 text-sm font-bold transition-colors",
                activeTab === item.id 
                  ? "text-sage-950 dark:text-beige-50" 
                  : "text-slate-700 hover:text-sage-950 dark:text-slate-400 dark:hover:text-beige-50"
              )}
            >
              {item.label}
              {activeTab === item.id && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-sage-500"
                />
              )}
            </button>
          ))}
        </div>

        <button 
          onClick={() => setActiveTab('accompany')}
          className="bg-sage-500 hover:bg-sage-600 text-white px-5 py-2 rounded-full text-sm font-bold transition-all shadow-md hover:shadow-lg"
        >
          후원하기
        </button>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-sage-900 text-beige-100 py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">기독교장례문화선교재단</h3>
            <p className="text-sm text-beige-100 leading-relaxed font-medium">
              우리는 모든 사람이 존엄하게 삶을 마무리할 수 있는 사회를 꿈꿉니다.<br />
              무연고 사망자와 저소득 시민의 마지막 길을 함께합니다.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">연락처</h4>
            <p className="text-sm text-beige-100 font-medium">
              전화: 02-362-4488<br />
              이메일: t023624488@gmail.com
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">함께하기</h4>
            <div className="flex gap-4">
              <button className="text-beige-100 hover:text-white transition-colors font-medium">인스타그램</button>
              <button className="text-beige-100 hover:text-white transition-colors font-medium">페이스북</button>
              <button className="text-beige-100 hover:text-white transition-colors font-medium">블로그</button>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-sage-800 text-center text-xs text-sage-500">
          © 2026 기독교장례문화선교재단. All rights reserved.
        </div>
      </footer>
    </div>
  );
};
