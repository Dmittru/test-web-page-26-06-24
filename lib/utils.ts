import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function calculateUserActivity(activity: number) {
    if (activity <= 25) {
        return 'text-activity-low'
    } else if (activity > 25 && activity <= 50) {
        return 'text-activity-mid'
    } else if (activity > 50 && activity <= 75) {
        return 'text-activity-high'
    } else {
        return 'text-activity-overheat'
    }
}

export function dateRuLangEnds(days: number) {
    if (days >= 11 && days <= 19) {
        return 'дней'
    } else if(days%10 === 1) {
        return 'день'
    } else if (days%10>1 && days%10 <= 4){
        return 'дня'
    } else {
        return 'дней'
    }
}