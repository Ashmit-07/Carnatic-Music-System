import React, { useState, useEffect } from 'react'

const API_BASE = 'http://127.0.0.1:5000'

export default function Compose(){
  const [bpm, setBpm] = useState(90)
  const [isPlaying, setPlaying] = useState(false)
  const [sequence, setSequence] = useState(['S','R','G','M'])
  const [compositions, setCompositions] = useState([])

  useEffect(()=>{
    // load saved compositions
    fetch(`${API_BASE}/api/compositions`).then(r=>r.json()).then(data=>setCompositions(data || []))
  },[])

  function togglePlay(){
    setPlaying(p=>!p)
  }

  function saveComposition(){
    const payload = { name: `Composition ${new Date().toLocaleString()}`, content: sequence.join(' ')}
    fetch(`${API_BASE}/api/compositions`, {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(payload)}).then(r=>r.json()).then(n=>{
      setCompositions(prev=>[...prev, n])
      alert('Saved')
    }).catch(()=>alert('Save failed'))
  }

  return (
    <div className="max-w-[var(--container-max)] mx-auto px-8 py-12">
      <div className="w-full bg-surface-container rounded-xl shadow-neu p-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <label className="text-xs uppercase text-on-surface-variant">Raga</label>
            <div className="bg-surface rounded-lg px-4 py-2 shadow-neu">Kalyani</div>
          </div>
          <div className="flex flex-col">
            <label className="text-xs uppercase text-on-surface-variant">Tala</label>
            <div className="bg-surface rounded-lg px-4 py-2 shadow-neu">Adi</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex flex-col text-right">
            <label className="text-xs uppercase text-on-surface-variant">BPM</label>
            <div className="text-primary font-semibold">{bpm}</div>
          </div>
          <input type="range" min="40" max="160" value={bpm} onChange={(e)=>setBpm(e.target.value)} />
          <button className="w-10 h-10 rounded-full bg-surface shadow-neu flex items-center justify-center" onClick={()=>alert('Settings')}> <span className="material-symbols-outlined">settings</span></button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 mt-8">
        <aside className="w-full lg:w-72 flex flex-col gap-6">
          <div className="bg-surface rounded-xl p-4 shadow-neu">
            <h3 className="font-semibold text-on-surface">Instrument</h3>
            <div className="mt-2">
              <button className="bg-surface rounded-lg shadow-neu w-full p-2 flex items-center justify-between">Saraswati Veena <span className="text-primary">✓</span></button>
            </div>
          </div>

          <div className="bg-surface rounded-xl p-4 shadow-neu">
            <h4 className="text-sm text-on-surface-variant">Kalyani Arohana</h4>
            <div className="flex gap-2 mt-2 flex-wrap">
              {['S','R2','G3','M2','P','D2','N3','Ṡ'].map(x=>(<span key={x} className="px-2 py-1 bg-surface rounded shadow-[inset_2px_2px_4px_#D1CDC1]">{x}</span>))}
            </div>
          </div>
        </aside>

        <div className="flex-1 flex flex-col gap-6">
          <div className="bg-surface rounded-xl p-4 shadow-[inset_6px_6px_12px_#D1CDC1,inset_-6px_-6px_12px_#FFFFFF] min-h-[240px]">
            <div className="flex gap-2 flex-wrap">
              {sequence.map((s,i)=>(<div key={i} className="px-3 py-2 bg-surface-container-high rounded shadow-[2px_2px_4px_#D1CDC1]">{s}</div>))}
            </div>
          </div>

          <div className="w-full bg-surface-container rounded-xl shadow-neu p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button onClick={togglePlay} className={`w-12 h-12 rounded-full flex items-center justify-center ${isPlaying? 'bg-primary text-on-primary' : 'bg-surface shadow-neu'}`}>
                <span className="material-symbols-outlined">{isPlaying? 'pause':'play_arrow'}</span>
              </button>
              <div className="w-64 relative h-6 flex items-center">
                <div className="absolute w-full h-2 bg-surface shadow-[inset_1px_1px_2px_#D1CDC1] rounded-full">
                  <div className="h-full bg-secondary-container rounded-full w-[45%]"></div>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="px-3 py-1 bg-surface rounded shadow-neu">Undo</button>
              <button className="px-3 py-1 bg-surface rounded shadow-neu">Redo</button>
              <button className="px-3 py-1 bg-surface rounded shadow-neu text-error" onClick={()=>setSequence([])}>Clear</button>
              <button className="px-3 py-1 bg-surface rounded shadow-neu" onClick={saveComposition}>Save</button>
            </div>
          </div>

          <div className="bg-surface rounded-xl p-4 shadow-neu">
            <h4 className="font-semibold">Saved Compositions</h4>
            <ul className="mt-2">
              {compositions.map(c=> (<li key={c.id} className="text-sm py-1 border-b border-outline">{c.name} — <span className="text-on-surface-variant">{c.content}</span></li>))}
              {compositions.length===0 && <li className="text-sm text-on-surface-variant">No saved compositions</li>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
