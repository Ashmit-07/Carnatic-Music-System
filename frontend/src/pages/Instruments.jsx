import React, { useMemo, useState } from 'react'
import Icon from '../components/Icon'

function Fret({ idx, active, onHit }){
  return (
    <button
      onClick={onHit}
      className={`w-3 h-16 rounded-full transition-all relative ${active ? 'bg-primary-container shadow-neu-inset scale-110' : 'bg-surface-container-highest shadow-[-4px_-4px_8px_#FFFFFF,4px_4px_8px_#D1CDC1]'}`}
      aria-label={`Play fret ${idx + 1}`}
    ></button>
  )
}

export default function Instruments(){
  const instruments = [
    { name: 'Veena', icon: 'music-note' },
    { name: 'Violin', icon: 'music-note' },
    { name: 'Flute', icon: 'wind' },
    { name: 'Mridangam', icon: 'drum' }
  ]

  const [selectedInstrument, setSelectedInstrument] = useState('Veena')
  const [isPlaying, setIsPlaying] = useState(false)
  const [recording, setRecording] = useState(false)
  const [fretState, setFretState] = useState(Array(8).fill(false))

  const currentIndex = useMemo(() => instruments.findIndex((item) => item.name === selectedInstrument), [selectedInstrument, instruments])

  function handlePrev(){
    const nextIndex = (currentIndex - 1 + instruments.length) % instruments.length
    setSelectedInstrument(instruments[nextIndex].name)
    setIsPlaying(false)
  }

  function handleNext(){
    const nextIndex = (currentIndex + 1) % instruments.length
    setSelectedInstrument(instruments[nextIndex].name)
    setIsPlaying(false)
  }

  function triggerFret(index){
    setFretState((prev) => {
      const next = [...prev]
      next[index] = true
      return next
    })
    setTimeout(() => {
      setFretState((prev) => {
        const next = [...prev]
        next[index] = false
        return next
      })
    }, 250)
  }

  return (
    <div className="max-w-[var(--container-max)] mx-auto px-8 w-full py-12">
      <div className="text-center mb-8">
        <h1 className="font-display text-4xl text-primary">Sacred Instruments</h1>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">Experience the tactile resonance of Carnatic music. Select an instrument to explore its structure, tonal qualities, and interactive fretboard.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
        {instruments.map((instrument) => {
          const isActive = selectedInstrument === instrument.name
          return (
            <button key={instrument.name} onClick={() => setSelectedInstrument(instrument.name)} className={`relative group flex flex-col items-center justify-center p-6 rounded-xl ${isActive ? 'bg-surface-container shadow-neu-inset' : 'bg-surface shadow-neu hover:shadow-neu-inset'}`}>
              <div className={`w-16 h-16 rounded-full mb-2 flex items-center justify-center ${isActive ? 'bg-primary-container shadow-neu' : 'bg-surface-container-high'}`}>
                <Icon name={instrument.icon} className={`h-7 w-7 ${isActive ? 'text-on-primary-container' : 'text-on-surface-variant'}`} />
              </div>
              <span className={`font-semibold ${isActive ? 'text-primary' : ''}`}>{instrument.name}</span>
              {isActive && <span className="text-xs text-on-surface-variant mt-1 uppercase tracking-widest">Active</span>}
            </button>
          )
        })}
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 bg-surface-container rounded-2xl p-8 shadow-neu">
          <div className="relative w-full h-[420px] bg-surface rounded-xl shadow-[inset_8px_8px_16px_#D1CDC1,inset_-8px_-8px_16px_#FFFFFF] overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-contain bg-center opacity-80" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAvoPOZHT6tb33A50mOnorVEMyVLBpr7zJE3O8LLi_01HIz8siGUxJO73awp4lHClYcwBnPHHdbXDWo0YGSKl52XwV1yO4zN_5YfYQDk69_sZkprf_hNnDDap39JzrMOeqjTXp5bxAFfxHRP49MjOBGu6_e0G-C17j1aMSDTB4O-4HlazLtQxYToMmLNQpH-U7BmNNjHdnInJA21wgu8iPKDz8wRdnd5VDvybVsVHYvYiM5zHqdkM8o_A')"}}></div>
            <div className="absolute w-[80%] h-[120px] top-1/2 -translate-y-1/2 flex items-center justify-between px-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <Fret key={i} idx={i} active={fretState[i]} onHit={() => triggerFret(i)} />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-96 flex flex-col gap-6">
          <div className="bg-surface rounded-2xl p-6 shadow-neu">
            <h2 className="text-xl font-semibold text-on-surface">Session Controls</h2>
            <p className="text-sm text-on-surface-variant">
              {recording ? 'Recording live interaction...' : isPlaying ? `Now playing ${selectedInstrument} demo` : 'Record your interactions or play pre-recorded classic melodies to observe fret placement.'}
            </p>
            <div className="flex items-center justify-center gap-4 py-4">
              <button onClick={handlePrev} className="w-12 h-12 rounded-full bg-surface shadow-neu flex items-center justify-center"><Icon name="skip-previous" className="h-5 w-5" /></button>
              <button onClick={() => setIsPlaying((value) => !value)} className={`w-20 h-20 rounded-full ${isPlaying ? 'bg-primary text-on-primary' : 'bg-primary text-on-primary'} shadow-neu`}>
                <Icon name={isPlaying ? 'pause' : 'play-arrow'} className="h-8 w-8" />
              </button>
              <button onClick={handleNext} className="w-12 h-12 rounded-full bg-surface shadow-neu flex items-center justify-center"><Icon name="skip-next" className="h-5 w-5" /></button>
            </div>
            <div className="flex gap-2 justify-center mt-2">
              <button onClick={() => setRecording((value) => !value)} className={`px-3 py-2 rounded-full text-xs uppercase tracking-wide ${recording ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface-variant'} shadow-neu`}>
                {recording ? 'Stop' : 'Record'}
              </button>
            </div>
            <div className="w-full h-4 bg-surface-container rounded-full relative mt-4">
              <div className="absolute left-0 top-0 h-full w-1/3 bg-primary-container rounded-full"></div>
            </div>
          </div>

          <div className="bg-surface rounded-2xl p-4 shadow-neu">
            <p className="text-sm text-on-surface-variant">Hamsadhvani</p>
            <div className="flex gap-2 mt-2">
              <span className="px-2 py-1 bg-surface shadow-[inset_2px_2px_4px_#D1CDC1,inset_-2px_-2px_4px_#FFFFFF] rounded">S</span>
              <span className="px-2 py-1 bg-surface rounded">R2</span>
              <span className="px-2 py-1 bg-surface rounded">G3</span>
              <span className="px-2 py-1 bg-surface rounded">P</span>
              <span className="px-2 py-1 bg-surface rounded">N3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
