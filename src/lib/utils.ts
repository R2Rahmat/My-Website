import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge class names with support for conditional classes.
 * Uses clsx + tailwind-merge for proper Tailwind merging.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}
