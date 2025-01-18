import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const menu = [
  {id: 1, name: 'Home', path: '/'},
  {id: 2, name: 'search', path: '/search'},
]
