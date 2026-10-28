/**
 * Shared contract between the pre-paint correction script in the root layout and the
 * client toggle. One source of truth for the cookie name, attribute and default.
 */

export type ColorScheme = 'light' | 'dark'

// Same cookie name the monorepo build used, so a visitor's saved choice carries over.
export const COLOR_SCHEME_COOKIE = 'atta-color-scheme'
export const COLOR_SCHEME_ATTRIBUTE = 'data-theme'
// Light paper is the reference look (redesign brief); dark stays one toggle away.
export const DEFAULT_SCHEME: ColorScheme = 'light'

/** 1 year — same as shadcn's default theme persistence. */
export const COLOR_SCHEME_COOKIE_MAX_AGE = 60 * 60 * 24 * 365

/**
 * Runs before first paint (synchronous, first in `<head>`). The page is static, so the
 * server always renders `data-theme` with {@link DEFAULT_SCHEME}; this corrects it from
 * the cookie before anything paints. Both schemes' variables live in `globals.css`, so
 * flipping the attribute is the entire correction.
 */
export const COLOR_SCHEME_SCRIPT = `(function(){try{var m=document.cookie.match(/(?:^|; )${COLOR_SCHEME_COOKIE}=([^;]*)/);var v=m?decodeURIComponent(m[1]):null;if(v==='light'||v==='dark'){document.documentElement.setAttribute('${COLOR_SCHEME_ATTRIBUTE}',v);}}catch(e){}})();`
