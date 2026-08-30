import React from 'react'
import Icon from './Icon'

export default function Header({ onNavigate, active }){
  const nav = [
    {key:'home', label:'Home'},
    {key:'learn', label:'Learn'},
    {key:'compose', label:'Compose'},
    {key:'instruments', label:'Instruments'}
  ]

  return (
    <header className="fixed top-0 w-full z-50 h-20 bg-[#f3efe9]/80 backdrop-blur-lg border-b border-[#d7d0c6]">
      <div className="max-w-[var(--container-max)] mx-auto px-8 h-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f4f1ec] shadow-neu text-[10px] font-bold text-primary border border-white/50">N</div>
          <span className="font-display text-[2rem] leading-none text-primary tracking-tight">Sruthi</span>
        </div>

        <nav className="hidden lg:flex items-center gap-2 rounded-full bg-[#f5f1ed] px-2 py-2 shadow-neu">
          {nav.map(n => (
            <button
              key={n.key}
              onClick={() => onNavigate(n.key)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                active === n.key
                  ? 'bg-[#f1e4d1] text-primary shadow-neu-inset'
                  : 'text-[#5d524d] hover:text-primary hover:bg-white/40'
              }`}
            >
              {n.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <input
              placeholder="Search ragas..."
              className="w-52 rounded-full border border-[#e7dfd7] bg-[#f5f1ed]/80 px-4 py-2 pr-11 text-sm text-[#433b39] placeholder:text-[#7d716c] shadow-neu-inset focus:outline-none"
            />
            <span className="absolute right-3 top-2.5 text-[#7d716c]">
              <Icon name="search" className="h-4 w-4" />
            </span>
          </div>
          <div className="flex items-center gap-3 pl-4 border-l border-[#d8d0c8]">
            <img alt="Profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJ4ihAJbTxNLYvfya7B5WoiswhudNvO4pLjZDo36ZRYnemxvHAodVOCJJRkK5zbL9VYfrzPe_ULOreHXCo_I4VpiCy-klU0m8WzmL9tJnD0ybPGVXg8eKwlBVRYEc42olY2va0TX2KzyTJlevaESK_4sBRVDMIjzTwYbxa_rga3g7n6O7u3r9iV2KY2TQOBg4Zd0FR1JmcKfilaIQWnnnNCV0Zn_peHUN5FnB92G0v-TDDwPGJK0vPeQ" className="h-10 w-10 rounded-full object-cover shadow-neu border border-white/60" />
          </div>
        </div>
      </div>
    </header>
  )
}
