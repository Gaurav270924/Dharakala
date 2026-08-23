import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from '@/hooks/useScroll';

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [hidden, setHidden] = useState(true);
  const [mode, setMode] = useState('default');
  const isTouch = useMediaQuery('(hover: none), (pointer: coarse)');

  useEffect(() => {
    if (isTouch) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (hidden) setHidden(false);
      dot.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;

      const target = e.target;
      const interactive = target.closest('a, button, [data-cursor="hover"], [data-cursor="view"]');
      if (interactive) {
        const type = interactive.getAttribute('data-cursor');
        if (type === 'view') setMode('view');
        else setMode('hover');
      } else {
        setMode('default');
      }
    };

    const onLeave = () => setHidden(true);
    const onEnter = () => setHidden(false);

    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      const size = mode === 'view' ? 72 : mode === 'hover' ? 64 : 36;
      ring.style.transform = `translate(${rx - size / 2}px, ${ry - size / 2}px)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      cancelAnimationFrame(raf);
    };
  }, [isTouch, hidden, mode]);

  if (isTouch) return null;

  return (
    <>
      <div ref={dotRef} className={`cursor-dot ${hidden ? 'cursor-hidden' : ''}`} aria-hidden="true" />
      <div
        ref={ringRef}
        className={`cursor-ring ${hidden ? 'cursor-hidden' : ''} ${mode === 'hover' ? 'is-hover' : ''} ${mode === 'view' ? 'is-view' : ''}`}
        aria-hidden="true"
      >
        <span className="cursor-label">View</span>
      </div>
    </>
  );
}
