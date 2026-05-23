import { motion, useMotionValue, useTransform } from 'motion/react';
import React, { useRef } from 'react';

import blancoImg from '../assets/images/blanco.png';
import anejoImg from '../assets/images/anejo_reposado.png';
import cristalinoImg from '../assets/images/anejo_cristalino.png';

const BOTTLE_IMAGES: Record<string, string> = {
  'blanco': blancoImg,
  'anejo': anejoImg,
  'cristalino-anejo': cristalinoImg,
};

export default function InteractiveBottle({
  id,
  colorHex,
}: {
  id: string;
  name: string;
  colorHex: string;
  hasGoldFlakes?: boolean;
}) {
  const bottleRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const rotateX = useTransform(y, [0, 400], [5, -5]);
  const rotateY = useTransform(x, [0, 400], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!bottleRef.current) return;
    const rect = bottleRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width * 400);
    y.set((e.clientY - rect.top) / rect.height * 400);
  };

  const handleMouseLeave = () => { x.set(200); y.set(200); };

  return (
    <div
      ref={bottleRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-end justify-center h-[820px] w-full max-w-[560px] min-w-[260px] mx-auto cursor-pointer"
      style={{ perspective: 1200 }}
    >
      {/* Ground shadow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-8 rounded-full bg-neutral-900/25 blur-xl pointer-events-none"
      />

      {/* Ambient color glow */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-1/2 h-12 rounded-full opacity-25 blur-2xl pointer-events-none"
        style={{ backgroundColor: colorHex === '#fbfbfb' ? '#c5a880' : colorHex }}
      />

      <motion.div
        className="relative h-full w-full flex items-end justify-center"
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        transition={{ type: 'spring', damping: 20, stiffness: 200 }}
      >
        <img
          src={BOTTLE_IMAGES[id]}
          alt=""
          className="h-full w-auto object-contain select-none pointer-events-none mix-blend-multiply"
          draggable={false}
        />
      </motion.div>
    </div>
  );
}
