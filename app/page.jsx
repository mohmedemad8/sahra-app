'use client';
import React, { useState } from 'react';
import { Mic, MicOff, Gift, MessageSquare, Users, Crown, Settings, Wallet, Award, Shield, Flame, Sparkles } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('rooms');
  const [inRoom, setInRoom] = useState(false);
  const [currentRoom, setCurrentRoom] = useState(null);
  const [micMuted, setMicMuted] = useState(true);
  const [coins, setCoins] = useState(5280);

  const rooms = [
    بيت العز,
    سهرة رايقة مع الحبايب,
    ديوانية الأصدقاء الملكية,
    قعدة طرب وشات
  ].map((name, i) => ({
    id: i + 1,
    name,
    host: `الملك ${i + 1}`,
    listeners: Math.floor(Math.random() * 50) + 12,
    seatsCount: 15
  }));

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans pb-20">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-950 via-slate-900 to-slate-950 border-b border-purple-900/40 p-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <Crown className="text-amber-400 w-6 h-6 animate-pulse" />
          <span className="text-lg font-bold bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
            ⋆ 𝑨𝑴𝑰𝑹⋆
          </span>
        </div>
        <div className="flex items-center gap-3 bg-purple-900/40 px-3 py-1.5 rounded-full border border-purple-500/30">
          <Wallet className="w-4 h-4 text-amber-400" />
          <span className="text-sm font-semibold text-amber-300">{coins}</span>
        </div>
      </header>

      {/* Main Content */}
      {!inRoom ? (
        <main className="p-4 max-w-md mx-auto">
          <div className="mb-6 bg-gradient-to-br from-purple-900/60 to-slate-900 p-5 rounded-2xl border border-purple-500/30 text-center shadow-lg">
            <Sparkles className="w-8 h-8 text-amber-400 mx-auto mb-2" />
            <h1 className="text-xl font-bold text-amber-200 mb-1">تطبيق الأمير – AL AMEER</h1>
            <p className="text-xs text-purple-300 mb-4">منصة السهرات والغرف الصوتية التفاعلية بـ 15 مقعد</p>
            <button 
              onClick={() => { setInRoom(true); setCurrentRoom(rooms[0]); }}
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold py-3 rounded-xl shadow-md hover:opacity-95 transition"
            >
              دخول الغرفة الملكية الآن
            </button>
          </div>

          <h2 className="text-sm font-bold text-purple-300 mb-3 flex items-center gap-2">
            <Users className="w-4 h-4" /> الغرف النشطة حالياً
          </h2>

          <div className="space-y-3">
            {rooms.map((room) => (
              <div 
                key={room.id}
                onClick={() => { setInRoom(true); setCurrentRoom(room); }}
                className="bg-slate-900/90 border border-purple-900/40 p-4 rounded-xl flex justify-between items-center cursor-pointer hover:border-amber-500/50 transition"
              >
                <div>
                  <h3 className="font-bold text-white text-sm">{room.name}</h3>
                  <p className="text-xs text-slate-400 mt-1">المضيف: {room.host} • 15 مقعد صوتي</p>
                </div>
                <div className="bg-purple-950/80 px-3 py-1 rounded-full text-xs text-amber-300 border border-purple-800">
                  {room.listeners} مستمع
                </div>
              </div>
            ))}
          </div>
        </main>
      ) : (
        /* Room View (15 Seats) */
        <div className="p-4 max-w-md mx-auto">
          <div className="bg-slate-900 border border-purple-900/60 p-4 rounded-2xl mb-4 text-center relative">
            <button 
              onClick={() => setInRoom(false)}
              className="absolute top-3 left-3 text-xs bg-red-950/80 text-red-300 px-3 py-1 rounded-full border border-red-800"
            >
              مغادرة الغرفة
            </button>
            <h2 className="text-base font-bold text-amber-200 mb-1">{currentRoom?.name}</h2>
            <p className="text-xs text-purple-300">غرفة صوتية ملكية (15 مقعد)</p>
          </div>

          {/* 15 Seats Grid */}
          <div className="grid grid-cols-5 gap-3 mb-6">
            {Array.from({ length: 15 }).map((_, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-purple-950 border-2 border-amber-500/60 flex items-center justify-center relative shadow-inner">
                  <Users className="w-5 h-5 text-purple-300" />
                  {idx === 0 && <Crown className="w-3 h-3 text-amber-400 absolute -top-1 -right-1" />}
                </div>
                <span className="text-[10px] text-slate-400 mt-1">مقعد {idx + 1}</span>
              </div>
            ))}
          </div>

          {/* Room Controls */}
          <div className="flex justify-around items-center bg-slate-900/90 border border-purple-900/40 p-3 rounded-2xl">
            <button 
              onClick={() => setMicMuted(!micMuted)}
              className={`p-3 rounded-full ${micMuted ? 'bg-red-950/80 text-red-400 border border-red-800' : 'bg-green-950/80 text-green-400 border border-green-800'}`}
            >
              {micMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
            </button>
            <button className="p-3 bg-purple-950/80 text-amber-300 rounded-full border border-purple-800">
              <Gift className="w-5 h-5" />
            </button>
            <button className="p-3 bg-purple-950/80 text-purple-300 rounded-full border border-purple-800">
              <MessageSquare className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
