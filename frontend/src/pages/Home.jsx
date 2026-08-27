import React from 'react'

export default function Home({ onNavigate }){
  return (
    <div className="w-full">
      <section className="relative w-full min-h-[420px] flex items-center pt-12 pb-10 px-6 bg-gradient-to-br from-surface to-surface-container shadow-neu">
        <div className="max-w-[var(--container-max)] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-6">
            <h1 className="font-display text-4xl text-on-surface">Explore the Soul of <span className="text-primary block mt-2">Carnatic Music</span></h1>
            <p className="text-lg text-on-surface-variant max-w-md">Learn. Compose. Play.</p>
            <div>
              <button onClick={() => onNavigate('learn')} className="px-8 py-2 rounded-full bg-surface font-semibold text-primary shadow-neu active:shadow-neu-inset transition-shadow duration-300 flex items-center gap-2">
                Get Started
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
          <div className="relative w-full aspect-square md:aspect-video lg:aspect-square flex justify-center items-center p-4">
            <div className="w-full h-full max-w-md rounded-2xl overflow-hidden p-4 bg-surface shadow-neu relative">
              <div className="absolute inset-4 rounded-xl overflow-hidden shadow-neu-inset">
                <img className="w-full h-full object-cover rounded-xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvoPOZHT6tb33A50mOnorVEMyVLBpr7zJE3O8LLi_01HIz8siGUxJO73awp4lHClYcwBnPHHdbXDWo0YGSKl52XwV1yO4zN_5YfYQDk69_sZkprf_hNnDDap39JzrMOeqjTXp5bxAFfxHRP49MjOBGu6_e0G-C17j1aMSDTB4O-4HlazLtQxYToMmLNQpH-U7BmNNjHdnInJA21wgu8iPKDz8wRdnd5VDvybVsVHYvYiM5zHqdkM8o_A" alt="Veena" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[var(--container-max)] mx-auto w-full px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 -mt-8">
        <button onClick={() => onNavigate('learn')} className="rounded-2xl p-6 bg-surface shadow-neu hover:-translate-y-1 transition-transform duration-300 flex flex-col items-center text-center gap-4">
          <div className="w-16 h-16 rounded-full bg-surface shadow-neu-inset flex items-center justify-center mb-2">
            <span className="material-symbols-outlined text-primary text-2xl">school</span>
          </div>
          <h3 className="text-lg font-semibold text-on-surface">Learn</h3>
          <p className="text-sm text-on-surface-variant">Master Carnatic Music Step by Step</p>
        </button>
        <button onClick={() => onNavigate('compose')} className="rounded-2xl p-6 bg-surface shadow-neu hover:-translate-y-1 transition-transform duration-300 flex flex-col items-center text-center gap-4 border border-white/20 relative">
          <div className="absolute inset-0 bg-primary/5 rounded-2xl pointer-events-none"></div>
          <div className="w-20 h-20 rounded-full bg-surface shadow-neu flex items-center justify-center mb-2 relative z-10">
            <span className="material-symbols-outlined text-secondary text-3xl">graphic_eq</span>
          </div>
          <h3 className="text-2xl font-bold text-on-surface">Compose</h3>
          <p className="text-base text-on-surface-variant">Create & Customize Carnatic Music</p>
        </button>
        <button onClick={() => onNavigate('instruments')} className="rounded-2xl p-6 bg-surface shadow-neu hover:-translate-y-1 transition-transform duration-300 flex flex-col items-center text-center gap-4">
          <div className="w-16 h-16 rounded-full bg-surface shadow-neu-inset flex items-center justify-center mb-2">
            <span className="material-symbols-outlined text-tertiary text-2xl">album</span>
          </div>
          <h3 className="text-lg font-semibold text-on-surface">Instruments</h3>
          <p className="text-sm text-on-surface-variant">Play Traditional Instruments</p>
        </button>
      </section>
    </div>
  )
}
