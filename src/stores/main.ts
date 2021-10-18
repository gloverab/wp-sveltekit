import { writable } from 'svelte/store'

export const showMobileMenu = writable(false)
export const hideMenuIcon = writable(false)
export const numDrawersOut = writable(0)
export const windowHeight = writable(undefined as number)