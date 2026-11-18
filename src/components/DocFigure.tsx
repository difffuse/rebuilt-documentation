import React, {useEffect, useState} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import figures from './figures.json';

type Mark = {x:number;y:number;w:number;h:number;label:string};
type Figure = {file:string;alt:string;caption:string;width:number;height:number;viewBox?:string;marks:Mark[]};
export default function DocFigure({name}:{name:string}) {
  const f = (figures as Record<string,Figure>)[name];
  const src = useBaseUrl(`/img/screenshots/${f.file}`);
  const [expanded,setExpanded] = useState(false);
  useEffect(()=>{
    if (!expanded) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const close=(event:KeyboardEvent)=>{
      if(event.key==='Escape')setExpanded(false);
      if(event.key==='Tab'){event.preventDefault(); (document.querySelector('.figure-close') as HTMLButtonElement)?.focus();}
    };
    document.addEventListener('keydown',close);
    return ()=>{document.removeEventListener('keydown',close);document.body.style.overflow=previousOverflow;previousFocus?.focus();};
  },[expanded]);
  const picture = <svg viewBox={f.viewBox || `0 0 ${f.width} ${f.height}`} role="img" aria-label={f.alt}>
    <image href={src} width={f.width} height={f.height}/>
    {f.marks.map((m,i)=><g key={m.label} aria-hidden="true">
      <rect x={m.x} y={m.y} width={m.w} height={m.h} rx="12" fill="none" stroke="#f8c65a" strokeWidth="7"/>
      <circle cx={m.x+6} cy={m.y+6} r="24" fill="#f8c65a" stroke="#292929" strokeWidth="3"/>
      <text x={m.x+6} y={m.y+15} textAnchor="middle" fill="#222" fontSize="27" fontWeight="700" fontFamily="system-ui">{i+1}</text>
    </g>)}
  </svg>;
  const narrow = f.viewBox && Number(f.viewBox.split(" ")[2]) < 1000;
  return <figure className="doc-figure" style={narrow ? {maxWidth:520} : undefined}>
    <button className="doc-figure-open" onClick={()=>setExpanded(true)} aria-label={`Enlarge: ${f.alt}`}>{picture}</button>
    <figcaption>{f.caption}</figcaption>
    {f.marks.length>0 && <ol className="figure-key">{f.marks.map(m=><li key={m.label}>{m.label}</li>)}</ol>}
    {expanded && <div className="figure-lightbox" role="dialog" aria-modal="true" aria-label={f.alt} onClick={()=>setExpanded(false)}>
      <button className="figure-close" autoFocus onClick={()=>setExpanded(false)} aria-label="Close enlarged screenshot">×</button>
      <div className="figure-lightbox-image">{picture}</div>
      <p>{f.caption} · Click anywhere or press Esc to close.</p>
    </div>}
  </figure>;
}
