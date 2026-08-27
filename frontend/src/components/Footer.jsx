import React from 'react'

export default function Footer(){
  return (
    <footer className="w-full bg-surface-container py-8 mt-12 shadow-[inset_0_8px_16px_-8px_#D1CDC1]">
      <div className="max-w-[var(--container-max)] mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
          <div className="text-center md:text-left">
            <p className="font-display text-xl text-primary">Sruthi</p>
            <p className="text-sm text-on-surface-variant">Explore the Soul of Carnatic Music</p>
          </div>
          <div className="flex gap-6">
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">music_note</span></a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">library_music</span></a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">share</span></a>
          </div>
        </div>
        <div className="flex flex-wrap justify-center md:justify-start gap-4 text-on-surface-variant text-sm pt-4 border-t border-outline">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Support</a>
          <span>© 2024 Sruthi Platform. Built with Raga & Precision.</span>
        </div>
      </div>
    </footer>
  )
}
