import {browser} from "$app/environment";

export function loadObject<T>(uniqueKey: string, defaultValue: T): T {
    if (!browser) {
        return defaultValue
    }

    const hopefullyJson = localStorage.getItem(uniqueKey);
    if (!hopefullyJson) {
        return defaultValue;
    }

    const parsedValue = JSON.parse(hopefullyJson);
    if (typeof parsedValue !== typeof defaultValue) {
        return defaultValue;
    }

    return parsedValue;
}

export function saveObject(uniqueKey: string, value: unknown): void {
    if (!browser) {
        return;
    }

    if (!value) {
        return;
    }

    const json = JSON.stringify(value);
    localStorage.setItem(uniqueKey, json);
}