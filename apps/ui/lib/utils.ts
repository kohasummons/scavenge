import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const truncateAddress = (address: string, length = 4) => {
    if (!address || typeof address !== "string") {
        return "";
    }

    const prefix = address.slice(0, length + 2); // Include '0x' prefix
    const suffix = address.slice(-length);
    return `${prefix}...${suffix}`;
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
