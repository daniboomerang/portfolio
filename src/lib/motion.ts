/**
 * Motion tokens for motion/react, which takes numbers rather than CSS variables. They mirror
 * the `--duration-*` and `--ease-editorial` tokens in `globals.css`; change both together.
 * Reduced motion is handled once, by the root `MotionProvider`.
 */

/** Seconds. */
export const duration = {
  fast: 0.15,
  base: 0.25,
  reveal: 0.5,
  drift: 9
} as const

export const ease = {
  editorial: [0.22, 1, 0.36, 1]
} as const

/** Pixels moved by a reveal and by the hero diagram's drift. */
export const distance = {
  reveal: 16,
  drift: 4
} as const
