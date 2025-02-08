import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const truncateAddress = (address: string, length = 4) => {
  if (!address || typeof address !== "string") {
    return "";
  }

  const prefix = address.slice(0, length + 2); // Include '0x' prefix
  const suffix = address.slice(-length);
  return `${prefix}...${suffix}`;
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatTimeAgo(timestamp: number): string {
  const now = Date.now();
  const seconds = Math.floor((now - timestamp) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  } else if (hours > 0) {
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  } else if (minutes > 0) {
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  } else {
    return "just now";
  }
}
