import React from 'react'

export default function Learn({ onNavigate }){
  return (
    <div className="max-w-[var(--container-max)] mx-auto px-8 py-12">
      <div className="mb-8">
        <h1 className="font-display text-4xl text-primary">Your Path to Mastery</h1>
        <p className="text-lg text-on-surface-variant max-w-2xl">Return to your practice, measure your progress, and unlock new dimensions of Carnatic music.</p>
      </div>

      <div className="bg-surface-container rounded-xl p-6 shadow-neu relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="relative w-48 h-48 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full shadow-neu-inset"></div>
            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle className="text-surface-variant" cx="50" cy="50" r="45" strokeWidth="6" fill="none"></circle>
              <circle className="text-primary transition-all" cx="50" cy="50" r="45" strokeWidth="6" strokeDasharray="283" strokeDashoffset="70" stroke="currentColor" fill="none"></circle>
            </svg>
            <div className="absolute inset-4 rounded-full bg-surface shadow-neu flex items-center justify-center flex-col">
              <span className="text-3xl text-primary font-display">75%</span>
              <span className="text-xs text-on-surface-variant uppercase mt-1">Complete</span>
            </div>
          </div>

          <div className="flex-grow">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container/20 text-on-primary-container text-xs"> <span className="material-symbols-outlined text-sm">play_circle</span> Continue Learning</span>
            <h2 className="text-2xl mt-4">Introduction to Mayamalavagowla</h2>
            <p className="text-on-surface-variant mt-2">Master the foundational morning raga. This lesson covers the Arohana and Avarohana, key Gamakas, and simple Janta Varisais to build vocal dexterity.</p>
            <div className="w-full max-w-md bg-surface-container rounded-full h-3 mt-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 h-full bg-primary/20 rounded-full w-3/4"></div>
              <div className="absolute top-0 left-3/4 w-3 h-3 bg-primary rounded-full -ml-1.5 z-10"></div>
            </div>
            <button onClick={() => onNavigate('compose')} className="mt-4 px-8 py-2 rounded-full bg-surface text-primary shadow-neu">Resume Lesson <span className="material-symbols-outlined">arrow_forward</span></button>
          </div>

          <div className="hidden lg:block w-64 h-48 rounded-xl bg-cover bg-center shadow-neu" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBhJldrVU_MRL1eU7BnqGYi8JuE9Bna3QYCYCu1yfIqNWnmvg1XTlwOikfdTW36OeedTEaAB-mBNG0f5d7EkQpOuxXCLsBbPch0AdlY272QeS78JIbUo557zg8IvTFItUgD64hVpFXMzbjjylv1Pe91VglV5knIVxPTN3kdyqAZJ3hlJCzWcJxIQNcee1TXCG6RDBL0fRFlNmCN8RMaEKQRmpG0X3YvhBZwSNCbaLTItNJ5FmT-tVNByw')"}}></div>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <article className="bg-surface rounded-xl p-4 shadow-neu">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center shadow-neu"> <span className="material-symbols-outlined">queue_music</span></div>
            <div className="relative w-16 h-16 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full shadow-[inset_2px_2px_4px_#D1CDC1]"></div>
              <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" strokeWidth="6" fill="none" stroke="currentColor" className="text-surface-variant"></circle>
                <circle cx="50" cy="50" r="40" strokeWidth="6" fill="none" stroke="currentColor" className="text-primary" strokeDasharray="251" strokeDashoffset="150.6"></circle>
              </svg>
              <span className="text-xs font-semibold">40%</span>
            </div>
          </div>
          <h4 className="font-semibold">Swaras</h4>
          <p className="text-sm text-on-surface-variant">Master the fundamental notes: Sa, Ri, Ga, Ma, Pa, Da, Ni. Develop perfect pitch and interval recognition.</p>
        </article>

        <article className="bg-surface rounded-xl p-4 shadow-neu">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center shadow-neu"> <span className="material-symbols-outlined">graphic_eq</span></div>
            <div className="relative w-16 h-16 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full shadow-[inset_2px_2px_4px_#D1CDC1]"></div>
              <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" strokeWidth="6" fill="none" stroke="currentColor" className="text-surface-variant"></circle>
                <circle cx="50" cy="50" r="40" strokeWidth="6" fill="none" stroke="currentColor" className="text-primary" strokeDasharray="251" strokeDashoffset="213.3"></circle>
              </svg>
              <span className="text-xs font-semibold">15%</span>
            </div>
          </div>
          <h4 className="font-semibold">Ragas</h4>
          <p className="text-sm text-on-surface-variant">Explore melodic scales and their emotional landscapes. Learn identifying phrases and characteristic gamakas.</p>
        </article>

        <article className="bg-surface rounded-xl p-4 shadow-neu">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center shadow-neu"> <span className="material-symbols-outlined">hourglass_empty</span></div>
            <div className="relative w-16 h-16 flex items-center justify-center opacity-50">
              <div className="absolute inset-0 rounded-full shadow-[inset_2px_2px_4px_#D1CDC1]"></div>
              <span className="text-xs font-semibold">0%</span>
            </div>
          </div>
          <h4 className="font-semibold opacity-70">Talas</h4>
          <p className="text-sm text-on-surface-variant opacity-70">Master rhythmic cycles. Learn Adi, Rupaka, and Misra Chapu talas through specialized hand gesture exercises.</p>
        </article>
      </div>
    </div>
  )
}
