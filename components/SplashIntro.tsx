"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  onDone: () => void;
};

export default function SplashIntro({ onDone }: Props) {
  const grupoText = "GRUPO";
  const acmnText = "ACMN";

  const [grupo, setGrupo] = useState("");
  const [acmn, setAcmn] = useState("");
  const [barVisible, setBarVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const unlockedRef = useRef(false);

  // Desbloqueia áudio (browser exige interação)
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
      a.volume = 0.08 + Math.random() * 0.08;
      a.play().catch(() => {});
    } catch {}
  }

  useEffect(() => {
    let i = 0;
    let j = 0;
    let t1: number | undefined;
    let t2: number | undefined;
    let t3: number | undefined;
    let t4: number | undefined;

    const typeGrupo = () => {
      if (i < grupoText.length) {
        setGrupo((prev) => prev + grupoText.charAt(i));
        playType();
        i++;
        t1 = window.setTimeout(typeGrupo, 120);
      } else {
        setBarVisible(true);
        t2 = window.setTimeout(typeACMN, 300);
      }
    };

    const typeACMN = () => {
      if (j < acmnText.length) {
        setAcmn((prev) => prev + acmnText.charAt(j));
        playType();
        j++;
        t3 = window.setTimeout(typeACMN, 150);
      } else {
        t4 = window.setTimeout(() => {
          setFadeOut(true);
          window.setTimeout(() => onDone(), 900);
        }, 900);
      }
    };

    typeGrupo();

    return () => {
      if (t1) window.clearTimeout(t1);
      if (t2) window.clearTimeout(t2);
      if (t3) window.clearTimeout(t3);
      if (t4) window.clearTimeout(t4);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={
        "fixed inset-0 z-[9999] flex items-center justify-center bg-[#f4f4f4] " +
        (fadeOut ? "animate-[fadeOut_.9s_forwards]" : "")
      }
      aria-label="Abertura Grupo ACMN"
    >
      <style>{`
        @keyframes fadeOut {
          to { opacity: 0; transform: scale(1.05); }
        }
      `}</style>

      <div className="flex items-center text-[42px] md:text-[56px] tracking-[.35em] text-[#0d1321] font-sans">
        <div className="font-light mr-5">{grupo}</div>
        <div
          className={
            "w-[2px] h-[52px] bg-[#c5c5c5] mr-5 transition-opacity duration-300 " +
            (barVisible ? "opacity-100" : "opacity-0")
          }
        />
        <div className="font-bold">{acmn}</div>
      </div>

      <audio ref={audioRef} preload="auto">
        <source src="/sounds/type.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}