import React, { useState } from 'react';
import { WindowState } from '../types';
import { cn } from '@blinkdotnew/ui';
import { Settings as SettingsIcon, Monitor, Palette, User, Bell, Shield, Info, Image as ImageIcon, Volume2, Music, Sun, Moon, Sparkles } from 'lucide-react';

const WALLPAPERS = [
  'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=2560',
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2560',
  'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?auto=format&fit=crop&q=80&w=2560',
  'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&q=80&w=2560',
  'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&q=80&w=2560',
  'https://images.unsplash.com/photo-1506318137071-a8e063b4b4bf?auto=format&fit=crop&q=80&w=2560',
  'https://images.unsplash.com/photo-1464802686167-b939a6910659?auto=format&fit=crop&q=80&w=2560',
];

export const Settings: React.FC<{ window: WindowState }> = () => {
  const [activeTab, setActiveTab] = useState('personalization');
  const [theme, setTheme] = useState('glass');
  const [volume, setVolume] = useState(75);
  const [soundEnabled, setVolumeEnabled] = useState(true);
  
  const handleWallpaperChange = (url: string) => {
    // This is just a simulation, in a real app we'd use a global state or context
    const desktopBg = document.querySelector('.bg-cover') as HTMLElement;
    if (desktopBg) {
      desktopBg.style.backgroundImage = `url('${url}')`;
    }
  };

  const SidebarItem = ({ id, icon: Icon, label }: any) => (
    <button
      onClick={() => setActiveTab(id)}
      className={cn(
        "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
        activeTab === id ? "bg-primary/20 text-primary shadow-sm" : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
      )}
    >
      <Icon size={18} />
      {label}
    </button>
  );

  return (
    <div className="flex h-full bg-secondary/30 rounded-b-xl overflow-hidden backdrop-blur-md">
      {/* Sidebar */}
      <div className="w-64 border-r border-white/5 bg-white/5 p-4 flex flex-col gap-1 shrink-0">
        <SidebarItem id="personalization" icon={Palette} label="Personalization" />
        <SidebarItem id="display" icon={Monitor} label="Display" />
        <SidebarItem id="sound" icon={Volume2} label="Sound" />
        <SidebarItem id="account" icon={User} label="Accounts" />
        <SidebarItem id="notifications" icon={Bell} label="Notifications" />
        <SidebarItem id="security" icon={Shield} label="Security" />
        <div className="flex-1" />
        <SidebarItem id="about" icon={Info} label="About OS" />
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-8">
        {activeTab === 'personalization' && (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <Palette className="text-primary" />
              Personalization
            </h2>

            <div className="space-y-4">
               <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">System Theme</h3>
               <div className="grid grid-cols-3 gap-4">
                 {[
                   { id: 'dark', name: 'Deep Dark', icon: Moon },
                   { id: 'light', name: 'Pure Light', icon: Sun },
                   { id: 'glass', name: 'Frosted Glass', icon: Sparkles },
                 ].map((t) => (
                   <button 
                    key={t.id}
                    onClick={() => setTheme(t.id)}
                    className={cn(
                      "flex flex-col items-center gap-3 p-4 rounded-2xl border transition-all",
                      theme === t.id ? "bg-primary/20 border-primary text-primary shadow-lg shadow-primary/10" : "bg-white/5 border-white/10 hover:border-white/20"
                    )}
                   >
                     <t.icon size={24} />
                     <span className="text-xs font-bold">{t.name}</span>
                   </button>
                 ))}
               </div>
            </div>

            <div className="space-y-4">
               <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">Background Wallpaper</h3>
               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 auto-rows-fr">
                 {WALLPAPERS.map((wp, i) => (
                   <button 
                    key={i}
                    onClick={() => handleWallpaperChange(wp)}
                    className="group relative aspect-video rounded-xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all hover:scale-[1.02]"
                   >
                     <img src={wp} alt={`Wallpaper ${i}`} className="w-full h-full object-cover" />
                     <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                        <ImageIcon size={20} className="text-white" />
                     </div>
                   </button>
                 ))}
               </div>
            </div>
          </div>
        )}

        {activeTab === 'display' && (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <Monitor className="text-primary" />
              Display Settings
            </h2>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-6">
               <div className="flex items-center justify-between">
                 <div className="space-y-1">
                    <span className="block font-semibold">Night Light</span>
                    <span className="block text-xs text-muted-foreground">Reduce blue light to help you sleep better</span>
                 </div>
                 <div className="w-12 h-6 bg-white/10 rounded-full relative p-1 cursor-pointer transition-colors" onClick={() => {}}>
                    <div className="w-4 h-4 bg-primary rounded-full translate-x-6" />
                 </div>
               </div>
               
               <div className="space-y-3">
                  <div className="flex justify-between text-sm font-medium">
                    <span>Brightness</span>
                    <span>85%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full relative overflow-hidden">
                    <div className="h-full bg-primary w-[85%] rounded-full shadow-[0_0_10px_rgba(13,162,231,0.5)]" />
                  </div>
               </div>

               <div className="flex items-center justify-between opacity-50">
                 <div className="space-y-1">
                    <span className="block font-semibold">Scale and Layout</span>
                    <span className="block text-xs text-muted-foreground">Adjust display scaling percentage</span>
                 </div>
                 <span className="text-sm font-bold">125% (Recommended)</span>
               </div>
            </div>
          </div>
        )}

        {activeTab === 'sound' && (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <Volume2 className="text-primary" />
              Sound Preferences
            </h2>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-8">
               <div className="space-y-4">
                  <div className="flex justify-between text-sm font-medium">
                    <span className="flex items-center gap-2"><Volume2 size={16} /> Output Volume</span>
                    <span>{volume}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={volume}
                    onChange={(e) => setVolume(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-white/10 rounded-full accent-primary appearance-none cursor-pointer outline-none"
                  />
               </div>

               <div className="space-y-4">
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Alert Sounds</h3>
                  {[
                    { name: 'System Notification', active: true },
                    { name: 'Critical Alert', active: true },
                    { name: 'New Message', active: false },
                    { name: 'Window Actions', active: true },
                  ].map((s, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors">
                       <span className="text-sm font-medium">{s.name}</span>
                       <div className={cn(
                         "w-10 h-5 rounded-full relative p-1 cursor-pointer transition-colors",
                         s.active ? "bg-primary/40" : "bg-white/10"
                       )}>
                          <div className={cn("w-3 h-3 rounded-full transition-all", s.active ? "bg-primary translate-x-5" : "bg-white/40 translate-x-0")} />
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        )}

        {activeTab === 'about' && (
          <div className="space-y-8 animate-fade-in text-center flex flex-col items-center justify-center h-full max-w-sm mx-auto">
             <div className="w-24 h-24 bg-primary/20 rounded-3xl flex items-center justify-center text-primary mb-4 animate-pulse">
               <SettingsIcon size={48} />
             </div>
             <h2 className="text-3xl font-bold tracking-tight">DeskFlow OS</h2>
             <p className="text-sm text-muted-foreground leading-relaxed">
               DeskFlow OS delivers a cutting-edge desktop operating system simulation entirely in your browser.
             </p>
             <div className="w-full h-[1px] bg-white/10 my-6" />
             <div className="grid grid-cols-2 gap-8 w-full text-left">
                <div className="space-y-1">
                   <span className="block text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Version</span>
                   <span className="block text-sm font-medium">1.0.0 (Release)</span>
                </div>
                <div className="space-y-1">
                   <span className="block text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Kernel</span>
                   <span className="block text-sm font-medium">Blink Engine v2</span>
                </div>
             </div>
             <p className="mt-12 text-[10px] opacity-30">
               © 2026 Blink AI. All rights reserved.
             </p>
          </div>
        )}

        {activeTab !== 'personalization' && activeTab !== 'display' && activeTab !== 'sound' && activeTab !== 'about' && (
          <div className="flex flex-col items-center justify-center h-full text-center opacity-50">
             <h2 className="text-xl font-bold mb-2">Section Under Construction</h2>
             <p className="text-sm">We're working hard to bring this feature to DeskFlow OS.</p>
          </div>
        )}
      </div>
    </div>
  );
};
