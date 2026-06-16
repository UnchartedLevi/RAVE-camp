import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Camera, Play, X } from 'lucide-react';
import { galleryItems, type GalleryMediaItem } from './galleryData';

const animationMs = 680;
const autoAdvanceMs = 5200;

function shuffleGalleryItems(items: GalleryMediaItem[]) {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }

  return shuffled;
}

export function Gallery() {
  const items = useMemo(() => shuffleGalleryItems(galleryItems), []);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [lightboxItem, setLightboxItem] = useState<GalleryMediaItem | null>(null);
  const [portraitItems, setPortraitItems] = useState<Record<string, boolean>>({});
  const animationTimer = useRef<number | null>(null);

  const unlockAnimation = useCallback(() => {
    if (animationTimer.current) {
      window.clearTimeout(animationTimer.current);
    }

    animationTimer.current = window.setTimeout(() => {
      setIsAnimating(false);
      animationTimer.current = null;
    }, animationMs);
  }, []);

  const moveToIndex = useCallback(
    (targetIndex: number) => {
      if (isAnimating || items.length < 2) return;

      const nextIndex = (targetIndex + items.length) % items.length;
      if (nextIndex === activeIndex) return;

      setIsAnimating(true);
      setActiveIndex(nextIndex);
      unlockAnimation();
    },
    [activeIndex, isAnimating, items.length, unlockAnimation]
  );

  const move = useCallback(
    (direction: 1 | -1) => {
      moveToIndex(activeIndex + direction);
    },
    [activeIndex, moveToIndex]
  );

  useEffect(() => {
    return () => {
      if (animationTimer.current) {
        window.clearTimeout(animationTimer.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (lightboxItem) {
        if (event.key === 'Escape') {
          setLightboxItem(null);
        }
        return;
      }

      if (event.key === 'ArrowRight') {
        move(1);
      }

      if (event.key === 'ArrowLeft') {
        move(-1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxItem, move]);

  useEffect(() => {
    if (lightboxItem || isAnimating || items.length < 2) {
      return;
    }

    const interval = window.setInterval(() => {
      move(1);
    }, autoAdvanceMs);

    return () => window.clearInterval(interval);
  }, [isAnimating, items.length, lightboxItem, move]);

  const visibleItems = [-2, -1, 0, 1, 2].map((offset) => {
    const index = (activeIndex + offset + items.length) % items.length;
    return { item: items[index], offset, index };
  });

  if (items.length === 0) {
    return null;
  }

  return (
    <section id="gallery" className="relative -mx-4 sm:-mx-6 md:-mx-8 overflow-hidden bg-white py-24 text-slate-950 sm:py-28 lg:py-36">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />

      <div className="relative z-10 mx-auto w-full px-2 sm:px-3 lg:px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-5xl text-center lg:mb-16"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-bold text-purple-700">
            <Camera className="h-4 w-4" />
            Gallery
          </div>
          <h2 className="mb-5 text-5xl font-black tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            Camp{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Highlights
            </span>
          </h2>
          <p className="text-lg leading-relaxed text-slate-600 sm:text-xl">
            Swipe through the arrivals, sessions, friendships, and focused moments that shaped R.A.V.E. Camp.
          </p>
        </motion.div>

        <div
          className="relative mx-auto h-[360px] w-full overflow-hidden sm:h-[430px] lg:h-[560px]"
          aria-roledescription="carousel"
          aria-label="RAVE Camp gallery carousel"
          onTouchStart={(event) => {
            const touch = event.touches[0];
            if (touch) {
              event.currentTarget.dataset.startX = String(touch.clientX);
            }
          }}
          onTouchEnd={(event) => {
            const startX = Number(event.currentTarget.dataset.startX);
            const touch = event.changedTouches[0];
            if (!touch || Number.isNaN(startX)) return;

            const distance = touch.clientX - startX;
            if (Math.abs(distance) > 48) {
              move(distance < 0 ? 1 : -1);
            }
          }}
        >
          <AnimatePresence initial={false}>
            {visibleItems.map(({ item, offset, index }) => (
              <CarouselCard
                key={item.src}
                item={item}
                offset={offset}
                isActive={offset === 0}
                isPortrait={portraitItems[item.src] ?? false}
                onClick={() => (offset === 0 ? setLightboxItem(item) : moveToIndex(index))}
                onImageLoad={(isPortrait) => {
                  setPortraitItems((current) =>
                    current[item.src] === isPortrait ? current : { ...current, [item.src]: isPortrait }
                  );
                }}
                ariaHidden={offset !== 0}
                activePosition={index + 1}
                totalItems={items.length}
              />
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => move(-1)}
            disabled={isAnimating}
            aria-label="Show previous gallery item"
            className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-lg shadow-slate-900/10 transition duration-300 hover:-translate-y-0.5 hover:border-purple-200 hover:text-purple-700 hover:shadow-purple-500/15 active:translate-y-0 active:scale-95 disabled:pointer-events-none disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={() => move(1)}
            disabled={isAnimating}
            aria-label="Show next gallery item"
            className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-lg shadow-slate-900/10 transition duration-300 hover:-translate-y-0.5 hover:border-purple-200 hover:text-purple-700 hover:shadow-purple-500/15 active:translate-y-0 active:scale-95 disabled:pointer-events-none disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {lightboxItem && (
          <GalleryLightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

function CarouselCard({
  item,
  offset,
  isActive,
  isPortrait,
  onClick,
  onImageLoad,
  ariaHidden,
  activePosition,
  totalItems,
}: {
  item: GalleryMediaItem;
  offset: number;
  isActive: boolean;
  isPortrait: boolean;
  onClick: () => void;
  onImageLoad: (isPortrait: boolean) => void;
  ariaHidden: boolean;
  activePosition: number;
  totalItems: number;
}) {
  const absOffset = Math.abs(offset);
  const zIndex = 50 - absOffset * 10;
  const opacity = absOffset === 2 ? 0.34 : absOffset === 1 ? 0.76 : 1;
  const scale = absOffset === 0 ? 1 : absOffset === 1 ? 0.84 : 0.68;
  const rotate = offset * -2.5;
  const shadow =
    absOffset === 0
      ? '0 34px 80px rgba(15, 23, 42, 0.28)'
      : absOffset === 1
        ? '0 22px 56px rgba(15, 23, 42, 0.18)'
        : '0 14px 34px rgba(15, 23, 42, 0.10)';

  return (
    <motion.button
      type="button"
      initial={{
        opacity: 0,
        scale: 0.64,
        x: `calc(-50% + ${offset} * clamp(132px, 20vw, 310px))`,
        y: 48,
        rotate,
      }}
      animate={{
        opacity,
        scale,
        rotate,
        x: `calc(-50% + ${offset} * clamp(132px, 20vw, 310px))`,
        y: absOffset === 0 ? 0 : absOffset === 1 ? 20 : 38,
        boxShadow: shadow,
      }}
      exit={{ opacity: 0, scale: 0.58, transition: { duration: 0.35 } }}
      transition={{
        type: 'spring',
        stiffness: 120,
        damping: 22,
        mass: 0.9,
      }}
      onClick={onClick}
      aria-hidden={ariaHidden}
      aria-label={`${isActive ? 'Open' : 'Preview'} ${item.label}, gallery item ${activePosition} of ${totalItems}`}
      tabIndex={isActive ? 0 : -1}
      className={`absolute left-1/2 top-3 h-[300px] overflow-hidden rounded-[2rem] border border-white bg-white text-left outline-none will-change-transform focus:ring-4 focus:ring-purple-500/30 sm:h-[360px] lg:h-[455px] ${
        isPortrait
          ? 'w-[68vw] max-w-[520px] sm:w-[46vw] lg:w-[34vw]'
          : 'w-[82vw] max-w-[980px] sm:w-[66vw] lg:w-[60vw]'
      } ${
        absOffset === 2 ? 'hidden lg:block' : ''
      } ${absOffset === 1 ? 'block' : ''}`}
      style={{ zIndex }}
    >
      {item.type === 'video' ? (
        <video
          src={item.src}
          className="h-full w-full object-cover"
          preload="metadata"
          muted
          playsInline
        />
      ) : (
        <img
          src={item.src}
          alt={item.alt}
          loading={isActive ? 'eager' : 'lazy'}
          onLoad={(event) => {
            const image = event.currentTarget;
            onImageLoad(image.naturalHeight > image.naturalWidth);
          }}
          className="h-full w-full object-cover object-center"
        />
      )}

      {item.type === 'video' && (
        <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-purple-700 shadow-xl backdrop-blur">
          <Play className="ml-1 h-7 w-7 fill-current" />
        </div>
      )}
    </motion.button>
  );
}

function GalleryLightbox({ item, onClose }: { item: GalleryMediaItem; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label={item.label}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close gallery preview"
        className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-950 shadow-xl transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        <X className="h-5 w-5" />
      </button>

      <motion.div
        initial={{ scale: 0.94, y: 18 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.94, y: 18 }}
        transition={{ duration: 0.22 }}
        className="relative max-h-[88vh] w-full max-w-6xl overflow-hidden rounded-[2rem] bg-black shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        {item.type === 'video' ? (
          <video src={item.src} className="max-h-[88vh] w-full bg-black object-contain" controls autoPlay />
        ) : (
          <img src={item.src} alt={item.alt} className="max-h-[88vh] w-full object-contain" />
        )}
      </motion.div>
    </motion.div>
  );
}
