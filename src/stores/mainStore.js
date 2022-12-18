import { writable } from "svelte/store";

export const stateStore = writable({ modal: false, categories: [] })