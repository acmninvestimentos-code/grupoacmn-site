"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Props = {
  onDone: () => void;
};

export default function SplashIntro({ onDone }: Props) {
  const phrase = "Ajudamos sua empresa a crescer.";
  const [typed, setTyped] = useState("");
  const [fadeOut, setFadeOut] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const unlockedRef = useRef(false);

  // browsers exigem interação pra liberar áudio
  useEffect(() => {
    const unlock = () => {
      if (unlockedRef.current) return;
      unlockedRef.current = true;

      const a = audioRef.current;
      if (!a) return;

      a.volume = 0.12;
      a.play()
        .then(() => {
          a.pause();
          a.currentTime = 0;
        })
        .catch(() => {});

      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
    };

    window.addEventListener("pointerdown", unlock);
    window.addEventListener("keydown", unlock);

    return () => {
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
    };
  }, []);

  function playType() {
    const a = audioRef.current;
    if (!a) return;
    if (!unlockedRef.current) return;

    try {
      a.pause();
      a.currentTime = 0;
      a.volume = 0.06 + Math.random() * 0.06;
      a.play().catch(() => {});
    } catch {}
  }

  useEffect(() => {
    let i = 0;
    let t1: number | undefined;
    let t2: number | undefined;

    const type = () => {
      if (i < phrase.length) {
        setTyped((prev) => prev + phrase.charAt(i));
        playType();
        i++;
        t1 = window.setTimeout(type, 35);
      } else {
        // segura um pouco e faz fade
        t2 = window.setTimeout(() => {
          setFadeOut(true);
          window.setTimeout(() => onDone(), 700);
        }, 650);
      }
    };

    // pequena pausa pra logo entrar
    window.setTimeout(type, 350);

    return () => {
      if (t1) window.clearTimeout(t1);
      if (t2) window.clearTimeout(t2);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={
        "fixed inset-0 z-[9999] flex items-center justify-center bg-[#f6f7fb] " +
        (fadeOut ? "animate-[fadeOut_.7s_forwards]" : "")
      }
      aria-label="Abertura Grupo ACMN"
    >
      <style>{`
        @keyframes fadeOut {
          to { opacity: 0; transform: scale(1.02); }
        }
        @keyframes softIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>

      <div className="flex flex-col items-center gap-6 px-6 text-center">
        <div className="animate-[softIn_.6s_ease-out_forwards]">
          <Image
            src="/logo.png"
            alt="Grupo ACMN"
            width={520}
            height={160}
            priority
            className="h-auto w-[240px] md:w-[360px]"
          />
        </div>

        <div className="text-sm text-neutral-600 md:text-base">
          <span className="tracking-wide">{typed}</span>
          <span className="ml-1 inline-block h-4 w-[2px] bg-neutral-400 align-middle animate-[blink_1s_infinite]" />
        </div>
      </div>

      {/* opcional: se existir, toca */}
      <audio ref={audioRef} preload="auto">
        <source src="/sounds/type.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}