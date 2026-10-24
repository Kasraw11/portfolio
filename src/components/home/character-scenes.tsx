"use client";

import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";
import styles from "./home.module.css";

type CharacterScene = {
  id: string;
  label: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

const SCENE_DURATION = 20_000;
const MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToMotion(onChange: () => void) {
  const preference = window.matchMedia(MOTION_QUERY);
  preference.addEventListener("change", onChange);
  return () => preference.removeEventListener("change", onChange);
}

function getReducedMotion() {
  return window.matchMedia(MOTION_QUERY).matches;
}

function getServerReducedMotion() {
  return true;
}

export function CharacterScenes({
  scenes,
}: {
  scenes: readonly CharacterScene[];
}) {
  const [activeScene, setActiveScene] = useState(0);
  const [paused, setPaused] = useState(false);
  const [loadedScenes, setLoadedScenes] = useState<string[]>([]);
  const reducedMotion = useSyncExternalStore(
    subscribeToMotion,
    getReducedMotion,
    getServerReducedMotion,
  );

  useEffect(() => {
    if (paused || reducedMotion) return;

    let timer: ReturnType<typeof setTimeout> | undefined;
    const schedule = () => {
      clearTimeout(timer);
      if (document.hidden || !loadedScenes.includes(scenes[activeScene].id))
        return;

      timer = setTimeout(() => {
        // Recheck at the boundary in case a preference or tab change is pending.
        if (document.hidden || window.matchMedia(MOTION_QUERY).matches) return;
        // Keep the current illustration visible if another asset cannot load.
        for (let offset = 1; offset < scenes.length; offset++) {
          const nextScene = (activeScene + offset) % scenes.length;
          if (loadedScenes.includes(scenes[nextScene].id)) {
            setActiveScene(nextScene);
            break;
          }
        }
      }, SCENE_DURATION);
    };

    schedule();
    document.addEventListener("visibilitychange", schedule);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("visibilitychange", schedule);
    };
  }, [activeScene, loadedScenes, paused, reducedMotion, scenes]);

  return (
    <div className={styles.characterGallery}>
      <div className={styles.characterStage}>
        {scenes.map((scene, index) => (
          <div
            key={scene.id}
            className={styles.characterScene}
            data-active={index === activeScene}
            data-scene={scene.id}
            aria-hidden={index !== activeScene}
          >
            <Image
              src={scene.src}
              alt={scene.alt}
              width={scene.width}
              height={scene.height}
              sizes="(max-width: 600px) 360px, 460px"
              loading="eager"
              fetchPriority={index === 0 ? "high" : "low"}
              className={styles.character}
              onLoad={(event) => {
                if (event.currentTarget.naturalWidth === 0) return;
                setLoadedScenes((loaded) =>
                  loaded.includes(scene.id) ? loaded : [...loaded, scene.id],
                );
              }}
            />
          </div>
        ))}
      </div>
      <div
        className={styles.sceneControls}
        data-ready={loadedScenes.length > 0}
        role="group"
        aria-label="Character scenes"
      >
        {scenes.map((scene, index) => (
          <button
            key={scene.id}
            type="button"
            className={styles.sceneDot}
            aria-label={`Show ${scene.label.toLowerCase()} scene`}
            aria-pressed={index === activeScene}
            disabled={!loadedScenes.includes(scene.id)}
            title={scene.label}
            onClick={() => {
              setActiveScene(index);
              setPaused(true);
            }}
          >
            <span aria-hidden="true" />
          </button>
        ))}
        <button
          type="button"
          className={styles.scenePlayback}
          aria-label={paused ? "Play scene rotation" : "Pause scene rotation"}
          title={paused ? "Play · every 20 seconds" : "Pause scene rotation"}
          onClick={() => setPaused((value) => !value)}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
          >
            {paused ? (
              <path d="M5 3.5 12 8l-7 4.5z" />
            ) : (
              <path d="M4.5 3.5h2v9h-2zm5 0h2v9h-2z" />
            )}
          </svg>
        </button>
      </div>
    </div>
  );
}
