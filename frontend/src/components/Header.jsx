import React from 'react'

export default function Header({ onNavigate, active }){
  const nav = [
    {key:'home', label:'Home'},
    {key:'learn', label:'Learn'},
    {key:'compose', label:'Compose'},
    {key:'instruments', label:'Instruments'}
  ]
  return (
    <header className="fixed top-0 w-full z-50 h-20 bg-surface/40 backdrop-blur-md">
      <div className="max-w-[var(--container-max)] mx-auto px-8 h-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img alt="Sruthi" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQXm_08P3FJzSxDV8bRrJdeaDNQvnZ8gv0iGrWImDKr_2ea1m2YLKhq-kkx2CgyVsCmMMRkDiFkjFgA0WfKjiE1DjY0nWjj9bwcOoVmeA_E1agWsiXZRKSTi6-EAieQAZ-kSk9oiAo1p52UmGQpaK2wMgdwyovIoFF2hBXQPD3SAHmEkiNUpjsttVvolo-OAMb5MFu8X5rr7DvN1YT9G9T7GXaBHqZ84dJl_uMM9dOWOR88nFkaugXiw" className="h-8 object-contain" />
          <span className="font-display text-2xl text-primary">Sruthi</span>
        </div>
        <nav className="hidden lg:flex items-center gap-8">
          {nav.map(n => (
            <a key={n.key} href="#" onClick={(e)=>{e.preventDefault(); onNavigate(n.key)}} className={`transition-all duration-300 ${active===n.key? 'text-primary font-semibold' : 'text-on-surface-variant'}`}>
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <input placeholder="Search ragas..." className="w-48 rounded-full px-4 py-1 text-sm bg-surface-container shadow-neu-inset focus:ring-0" />
            <span className="material-symbols-outlined absolute right-3 top-1.5 text-on-surface-variant text-sm">search</span>
          </div>
          <div className="flex items-center gap-3 border-l border-outline pl-4">
            <img alt="Profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJ4ihAJbTxNLYvfya7B5WoiswhudNvO4pLjZDo36ZRYnemxvHAodVOCJJRkK5zbL9VYfrzPe_ULOreHXCo_I4VpiCy-klU0m8WzmL9tJnD0ybPGVXg8eKwlBVRYEc42olY2va0TX2KzyTJlevaESK_4sBRVDMIjzTwYbxa_rga3g7n6O7u3r9iV2KY2TQOBg4Zd0FR1JmcKfilaIQWnnnNCV0Zn_peHUN5FnB92G0v-TDDwPGJK0vPeQ" className="w-9 h-9 rounded-full object-cover shadow-neu" />
          </div>
        </div>
      </div>
    </header>
  )
}
