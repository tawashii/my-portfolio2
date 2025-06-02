import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Tailwind CSSクラスを結合するユーティリティ関数
 * clsxとtailwind-mergeを組み合わせて使用
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
