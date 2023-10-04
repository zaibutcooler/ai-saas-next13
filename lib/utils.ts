import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
}
