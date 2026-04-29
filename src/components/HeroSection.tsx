import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const images = [
  'https://cdn.poehali.dev/projects/31c74743-67b1-431a-93f3-84668bf51177/files/f05ca862-e7a1-461f-b929-30accdebc190.jpg',
  'https://cdn.poehali.dev/projects/31c74743-67b1-431a-93f3-84668bf51177/files/5c2a7faf-a87a-4baa-912b-4a7eff23630c.jpg',
  'https://cdn.poehali.dev/projects/31c74743-67b1-431a-93f3-84668bf51177/files/bc81a1b3-8148-41ef-a429-b343e4331fab.jpg',
];

const products = [
  { name: 'Кирпич кислотоупорный', gost: 'ГОСТ 474-90' },
  { name: 'Плитка кислотоупорная', gost: 'ГОСТ 961-89' },
  { name: 'Плитка термокислотоупорная', gost: 'ГОСТ 961-89' },
  { name: 'Насадки керамические', gost: 'ГОСТ 17612' },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-gray-900">
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={src}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000 ease-in-out',
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            )}
          >
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-8 md:px-16">
          <div className="flex max-w-2xl flex-col gap-10">

            <div
              className={cn(
                'transform transition-all duration-1000 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-1 w-12 bg-amber-500" />
                <span className="text-amber-400 text-sm font-medium uppercase tracking-widest">
                  С 2001 года
                </span>
              </div>
              <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl leading-tight">
                Завод<br />
                <span className="text-amber-400">«Стройкерамика»</span>
              </h1>
              <p className="mt-4 text-lg font-light text-white/70 md:text-xl max-w-lg">
                Производство кислотоупорной керамики для промышленности. Сертифицированная продукция — поставки по России и на экспорт.
              </p>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-300 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <p className="text-white/50 text-xs uppercase tracking-widest mb-3">Наша продукция</p>
              <div className="grid grid-cols-2 gap-2">
                {products.map((p) => (
                  <div key={p.name} className="border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-3 rounded">
                    <p className="text-white text-sm font-medium">{p.name}</p>
                    <p className="text-white/40 text-xs mt-0.5">{p.gost}</p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-500 ease-out flex gap-4',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <a
                href="tel:+79605985020"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-semibold px-6 py-3 rounded transition-colors"
              >
                +7 (960) 598-50-20
              </a>
              <a
                href="mailto:tdkiclotoupor@mail.ru"
                className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white px-6 py-3 rounded transition-colors"
              >
                tdkiclotoupor@mail.ru
              </a>
            </div>

          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'h-1 transition-all duration-300',
              currentIndex === index ? 'w-12 bg-amber-400' : 'w-8 bg-white/40 hover:bg-white/60'
            )}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}