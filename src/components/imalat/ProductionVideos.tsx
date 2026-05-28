// components/ProductionVideos.tsx
"use client";

import { useState } from "react";

interface VideoItem {
  src: string;        // video dosya yolu (mp4)
  poster: string;     // kapak görseli
  title?: string;
}

interface ProductionVideosProps {
  videos: VideoItem[];
  totalCount?: number;
}

export default function ProductionVideos({
  videos,
  totalCount = 33,
}: ProductionVideosProps) {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="py-section-gap max-w-container-max mx-auto px-gutter">
      <div className="mb-12">
        <h2 className="font-h2 text-h2 text-on-background mb-4">
          Üretimden Kareler
        </h2>
        <p className="text-on-surface-variant text-body-lg">
          Üretim süreçlerimize dair videolarımızı inceleyin. Koleksiyonumuzdaki{" "}
          {totalCount} videodan seçmeler.
        </p>
        <div className="h-1 w-20 bg-primary mt-6" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {videos.map((video, index) => (
          <div
            key={index}
            onClick={() => setActiveVideo(video.src)}
            className="group relative aspect-video overflow-hidden border border-outline-variant cursor-pointer"
          >
            <img
              alt={video.title ?? `Üretim Videosu ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              src={video.poster}
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-[#D32F2F] flex items-center justify-center text-white shadow-xl transition-transform duration-300 group-hover:scale-110">
                <span className="material-symbols-outlined text-4xl fill-1">
                  play_arrow
                </span>
              </div>
            </div>
            {video.title && (
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <span className="text-white font-bold text-sm">
                  {video.title}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal Player */}
      {activeVideo && (
        <div
          onClick={() => setActiveVideo(null)}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl"
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 text-white"
              aria-label="Kapat"
            >
              <span className="material-symbols-outlined text-4xl">close</span>
            </button>
            <video
              src={activeVideo}
              controls
              autoPlay
              className="w-full aspect-video bg-black"
            />
          </div>
        </div>
      )}
    </section>
  );
}