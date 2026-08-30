import React from 'react'
import Icon from '../components/Icon'

export default function Home({ onNavigate }){
  return (
    <div className="w-full">
      <section className="relative w-full min-h-[460px] flex items-center pt-16 pb-14 px-6 bg-gradient-to-br from-[#f4efe9] via-[#f0eae4] to-[#ebe2d9] shadow-[inset_0_-12px_18px_-16px_rgba(117,102,88,0.12)]">
        <div className="max-w-[var(--container-max)] w-full mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
          <div className="flex flex-col gap-6">
            <h1 className="font-display text-[4rem] md:text-[5rem] leading-[0.94] tracking-[-0.06em] text-[#1f1a18]">
              Explore the Soul of
              <span className="mt-2 block text-primary">Carnatic Music</span>
            </h1>
            <p className="text-[1.3rem] text-[#5b524d] tracking-[0.02em]">Learn. Compose. Play.</p>

            <div>
              <button
                onClick={() => onNavigate('learn')}
                className="group inline-flex items-center gap-4 rounded-full bg-[#f7f3ef] px-5 py-3.5 pr-4 text-[1.05rem] font-semibold text-[#241f1d] shadow-neu hover:-translate-y-0.5 hover:shadow-[10px_10px_24px_rgba(171,162,151,0.24),-8px_-8px_16px_rgba(255,255,255,0.95)] active:shadow-neu-inset"
              >
                <span>Get Started</span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#d9b16d] text-[#1b1715] shadow-[inset_0_2px_4px_rgba(255,255,255,0.5),0_6px_12px_rgba(168,124,68,0.28)] group-hover:translate-x-1 transition-transform duration-200">
                  <Icon name="arrow-forward" className="h-4 w-4" />
                </span>
              </button>
            </div>
          </div>

          <div className="relative w-full aspect-square md:aspect-video lg:aspect-square flex justify-center items-center p-3">
            <div className="w-full h-full max-w-[420px] rounded-[2rem] overflow-hidden p-4 bg-[#f3efe9] shadow-neu relative">
              <div className="absolute inset-4 rounded-[1.5rem] overflow-hidden shadow-neu-inset">
                <img className="w-full h-full object-cover rounded-[1.5rem]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvoPOZHT6tb33A50mOnorVEMyVLBpr7zJE3O8LLi_01HIz8siGUxJO73awp4lHClYcwBnPHHdbXDWo0YGSKl52XwV1yO4zN_5YfYQDk69_sZkprf_hNnDDap39JzrMOeqjTXp5bxAFfxHRP49MjOBGu6_e0G-C17j1aMSDTB4O-4HlazLtQxYToMmLNQpH-U7BmNNjHdnInJA21wgu8iPKDz8wRdnd5VDvybVsVHYvYiM5zHqdkM8o_A" alt="Veena" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[var(--container-max)] mx-auto w-full px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 -mt-10">
        <button onClick={() => onNavigate('learn')} className="group rounded-[1.75rem] p-6 bg-[#f6f1ec] shadow-neu hover:-translate-y-1.5 transition-transform duration-300 flex flex-col items-center text-center gap-4 border border-white/20">
          <div className="w-16 h-16 rounded-full bg-[#efe7df] shadow-neu-inset flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
            <Icon name="school" className="h-7 w-7 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-[#1f1a18]">Learn</h3>
          <p className="text-sm text-[#5e5650]">Master Carnatic Music Step by Step</p>
        </button>

        <button onClick={() => onNavigate('compose')} className="group rounded-[1.75rem] p-6 bg-[#f7f0ea] shadow-neu hover:-translate-y-1.5 transition-transform duration-300 flex flex-col items-center text-center gap-4 border border-[#dbc7a0]/60 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(169,124,68,0.12),transparent_60%)] pointer-events-none"></div>
          <div className="relative z-10 w-20 h-20 rounded-full bg-[#f0e3cc] shadow-neu flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
            <Icon name="graphic-eq" className="h-8 w-8 text-[#8a6a3d]" />
          </div>
          <h3 className="relative z-10 text-2xl font-bold text-[#1f1a18]">Compose</h3>
          <p className="relative z-10 text-base text-[#5e5650]">Create & Customize Carnatic Music</p>
        </button>

        <button onClick={() => onNavigate('instruments')} className="group rounded-[1.75rem] p-6 bg-[#f6f1ec] shadow-neu hover:-translate-y-1.5 transition-transform duration-300 flex flex-col items-center text-center gap-4 border border-white/20">
          <div className="w-16 h-16 rounded-full bg-[#efe7df] shadow-neu-inset flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
            <Icon name="album" className="h-7 w-7 text-[#7d685b]" />
          </div>
          <h3 className="text-xl font-semibold text-[#1f1a18]">Instruments</h3>
          <p className="text-sm text-[#5e5650]">Play Traditional Instruments</p>
        </button>
      </section>
    </div>
  )
}
