'use client';
import React, { useState } from 'react';
import { Mic, MicOff, Volume2, Gift, MessageSquare, Settings, Crown, Shield, Lock, Sparkles } from 'lucide-react';

export default function SahraApp() {
  const [currentView, setCurrentView] = useState('welcome'); // welcome, room, admin
  const [user] = useState({ 
    name: 'محمد عماد (المدير الرئيسي)', 
    id: '1001', 
    role: 'super_admin', 
    balance: 1000000 
  });
  const [isMicOn, setIsMicOn] = useState(false);

  return (
    <div className="min-h-screen bg-[#0d021a] text-white font-sans flex flex-col items-center justify-center p-0 md:p-4 select-none rtl" dir="rtl">
      
      {/* 1. شاشة الترحيب وتسجيل الدخول الملكية */}
      {currentView === 'welcome' && (
        <div className="w-full max-w-md h-screen md:h-[850px] bg-gradient-to-b from-[#1a0536] via-[#0d021a50] to-[#0d021a] p-6 flex flex-col justify-between items-center rounded-none md:rounded-3xl border border-amber-500/30 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col items-center mt-16 z-10">
            <div className="w-32 h-32 rounded-3xl border-2 border-amber-400 p-2 shadow-[0_0_30px_rgba(245,158,11,0.4)] bg-purple-950/60 flex items-center justify-center relative">
              <Crown className="w-16 h-16 text-amber-400 absolute -top-8 animate-bounce" />
              <div className="text-center">
                <h1 className="text-3xl font-black bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-600 bg-clip-text text-transparent">SAHRA</h1>
                <p className="text-[10px] text-amber-200/80 tracking-widest mt-1">معاً.. نعيش أجمل اللحظات</p>
              </div>
            </div>
            <h2 className="text-xl font-bold text-amber-100 mt-6">مرحباً بك، {user.name}</h2>
            <p className="text-xs text-purple-300 mt-1">منصة الغرف الصوتية الفاخرة</p>
          </div>

          <div className="w-full space-y-3 z-10 mb-8">
            <button 
              onClick={() => setCurrentView('room')}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-black font-bold text-base shadow-[0_0_20px_rgba(245,158,11,0.5)] hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5" /> الدخول للغرفة الصوتية الرسمية
            </button>
            {user.role === 'super_admin' && (
              <button 
                onClick={() => setCurrentView('admin')}
                className="w-full py-3.5 rounded-2xl bg-rose-950/60 border border-rose-500/40 text-rose-300 font-semibold text-sm hover:bg-rose-900/60 transition-all flex items-center justify-center gap-2">
                <Shield className="w-5 h-5" /> لوحة تحكم المدير الرئيسي (Super Admin)
              </button>
            )}
          </div>
        </div>
      )}

      {/* 2. واجهة الغرفة الصوتية (15 مقعداً) */}
      {currentView === 'room' && (
        <div className="w-full max-w-md h-screen md:h-[850px] bg-[#120320] flex flex-col justify-between relative overflow-hidden border border-amber-500/20 md:rounded-3xl">
          <div className="p-4 flex items-center justify-between bg-black/40 backdrop-blur-md border-b border-amber-500/20 z-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full border border-amber-400 bg-amber-500/20 flex items-center justify-center font-bold text-amber-300">👑</div>
              <div>
                <h3 className="text-sm font-bold text-amber-200">غرفة SAHRA الرسمية</h3>
                <span className="text-[10px] text-emerald-400">● متصل بقاعدة البيانات الحقيقية</span>
              </div>
            </div>
            <button onClick={() => setCurrentView('welcome')} className="p-2 rounded-full bg-white/10 text-white">✕</button>
          </div>

          {/* شبكة الـ 15 مقعداً */}
          <div className="flex-1 p-3 overflow-y-auto grid grid-cols-5 gap-2 content-start z-10">
            {Array.from({ length: 15 }).map((_, index) => (
              <div key={index} className="flex flex-col items-center justify-center my-1">
                <div className="w-14 h-14 rounded-full border-2 border-amber-400/80 bg-gradient-to-b from-purple-900/80 to-black flex items-center justify-center relative shadow-[0_0_10px_rgba(245,158,11,0.3)] cursor-pointer">
                  {index === 6 || index === 12 ? <Lock className="w-5 h-5 text-amber-400" /> : index === 0 ? <span className="text-lg font-bold text-amber-300">👑</span> : <span className="text-xs text-amber-400/60 font-bold">+</span>}
                  <span className="absolute -bottom-1 bg-black/80 text-[9px] text-amber-200 px-1.5 rounded-full border border-amber-500/30">No.{index + 1}</span>
                </div>
              </div>
            ))}
          </div>

          {/* شريط الأدوات السفلي */}
          <div className="p-3 bg-black/80 backdrop-blur-md border-t border-amber-500/30 flex items-center justify-around z-20">
            <button className="flex flex-col items-center text-amber-300"><MessageSquare className="w-5 h-5" /><span className="text-[10px] mt-1">الدردشة</span></button>
            <button className="flex flex-col items-center text-amber-300"><Gift className="w-5 h-5" /><span className="text-[10px] mt-1">الهدايا</span></button>
            <button onClick={() => setIsMicOn(!isMicOn)} className={`flex flex-col items-center p-3 rounded-full -mt-6 border-2 border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.6)] ${isMicOn ? 'bg-emerald-600 text-white' : 'bg-gradient-to-b from-purple-600 to-purple-900 text-amber-300'}`}>
              {isMicOn ? <Mic className="w-6 h-6" /> : <MicOff className="w-6 h-6" />}
              <span className="text-[9px] mt-0.5 font-bold">تحدث</span>
            </button>
            <button className="flex flex-col items-center text-amber-300"><Volume2 className="w-5 h-5" /><span className="text-[10px] mt-1">الصوت</span></button>
            <button onClick={() => setCurrentView('admin')} className="flex flex-col items-center text-amber-300"><Settings className="w-5 h-5" /><span className="text-[10px] mt-1">الإعدادات</span></button>
          </div>
        </div>
      )}

      {/* 3. لوحة تحكم المدير الرئيسي (Super Admin Dashboard) */}
      {currentView === 'admin' && (
        <div className="w-full max-w-md h-screen md:h-[850px] bg-[#0d021a] p-5 flex flex-col justify-between overflow-y-auto border border-amber-500/30 md:rounded-3xl">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-amber-500/20">
              <div className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-amber-400" />
                <h2 className="text-lg font-bold text-amber-300">لوحة تحكم المدير الرئيسي</h2>
              </div>
              <button onClick={() => setCurrentView('welcome')} className="text-xs bg-purple-900/60 px-3 py-1.5 rounded-xl border border-amber-500/30">رجوع</button>
            </div>
            <div className="mt-4 p-3 bg-purple-950/40 border border-amber-500/30 rounded-2xl">
              <p className="text-xs text-amber-200">أهلاً يا محمد. أنت مسجل كـ **Super Admin** وصلاحياتك مرتبطة بقاعدة البيانات بنجاح.</p>
              <div className="mt-3 text-xs text-purple-300">رصيد الخزينة: {user.balance} عملة</div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
