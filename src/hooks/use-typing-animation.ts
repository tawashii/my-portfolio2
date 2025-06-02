"use client";

import { useState, useEffect } from "react";

/**
 * タイピングアニメーションのカスタムフック
 * @param texts - 順番に表示するテキストの配列
 * @param speed - タイピング速度（ミリ秒）
 * @param deleteSpeed - 削除速度（ミリ秒）
 * @param pause - 各テキスト表示後の停止時間（ミリ秒）
 */
export function useTypingAnimation(
  texts: string[],
  speed: number = 100,
  deleteSpeed: number = 50,
  pause: number = 2000
) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    if (texts.length === 0) return;

    const timeout = setTimeout(() => {
      if (isWaiting) {
        setIsWaiting(false);
        setIsDeleting(true);
        return;
      }

      const fullText = texts[currentTextIndex];

      if (!isDeleting) {
        // タイピング中
        if (currentText.length < fullText.length) {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        } else {
          // タイピング完了、一時停止
          setIsWaiting(true);
        }
      } else {
        // 削除中
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          // 削除完了、次のテキストへ
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isWaiting ? pause : isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [
    currentText,
    currentTextIndex,
    isDeleting,
    isWaiting,
    texts,
    speed,
    deleteSpeed,
    pause,
  ]);

  return {
    displayText: currentText,
    isTyping: !isDeleting && !isWaiting,
    isDeleting,
    currentIndex: currentTextIndex,
  };
}
