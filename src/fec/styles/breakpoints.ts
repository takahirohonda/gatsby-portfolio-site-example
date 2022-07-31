enum BREAKPOINT_NAME {
  SM = 'SM',
  MD = 'MD',
  LG = 'LG',
  XL = 'XL',
  XXL = 'XXL',
}

type BreakpointProps = {
  [key in BREAKPOINT_NAME]: number
}

// Using the same break point as https://tailwindcss.com/docs/responsive-design
export const BREAKPOINT: BreakpointProps = {
  [BREAKPOINT_NAME.SM]: 640,
  [BREAKPOINT_NAME.MD]: 768,
  [BREAKPOINT_NAME.LG]: 1024,
  [BREAKPOINT_NAME.XL]: 1280,
  [BREAKPOINT_NAME.XXL]: 1536,
}
