import { get, writable } from "svelte/store";
import { page } from '$app/stores';

// export const isCategoryPage = (pageId) => get(page).url.pathname.includes('/category/'+pageId);
export const stateStore = writable({ modal: false, categories: [], currentCategory: '' })