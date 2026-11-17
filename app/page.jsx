'use client';
import React, { useState } from 'react';
import { Mic, MicOff, Gift, MessageSquare, Users, Crown, Wallet, Sparkles, LogIn, ArrowRight } from 'lucide-react';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [inRoom, setInRoom] = useState(false);
  const [currentRoom, setCurrentRoom] = useState(null);
  const [micMuted, setMicMuted] = useState(true);
  const [coins, setCoins] = useState(5280);

  const rooms = [
    "بيت العز الملكي",
    "سهرة رايقة مع الحبايب",
    "ديوانية الأصدقاء الفخمة",
    "قعدة طرب وشات السهرة"
  ].map((name, i) => ({
    id: i + 1,
    name,
    host: `الملك ${i + 1}`,
    listeners: Math.floor(Math.random() * 50) + 12,
    seatsCount: 15
  }));

  // معالجة تسجيل الدخول
  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim()) {
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#07020d] text-white font-sans pb-10 select-none">
      
      {/* 1. مرحلة تسجيل الدخول والترحيب */}
      {!isLoggedIn ? (
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-gradient-to-br from-purple-950/80 via-slate-900 to-slate-950 border border-amber-500/40 p-6 rounded-3xl shadow-2xl text-center backdrop-blur-md">
            <div className="flex justify-center mb-3">
              <Crown className="text-amber-400 w-12 h-12 animate-bounce" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent mb-1">
              ⋆ 𝑨𝑴𝑰𝑹⋆ تطبيق الأمير
            </h1>
            <p className="text-xs text-purple-300/80 mb-6">منصة السهرات والغرف الصوتية الملكية (15 مقعد)</p>
            
            <form onSubmit={handleLogin} className="space-y-4 text-right">
              <div>
                <label className="block text-xs font-semibold text-amber-300 mb-1">اسم المستخدم أو اللقب</label>
                <input 
                  type="text" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="اكتب اسمك هنا..."
                  required
                  className="w-full bg-purple-950/50 border border-amber-500/30 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-400"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold py-3.5 rounded-xl shadow-lg hover:opacity-95 transition flex items-center justify-center gap-2 text-sm"
              >
                <LogIn className="w-4 h-4" /> دخول المنصة الملكية
              </button>
            </form>
          </div>
        </div>
      ) : (
        /* 2.
