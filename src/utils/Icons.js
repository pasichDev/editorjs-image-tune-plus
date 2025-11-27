export const Icons = {
  reset: `
<svg width="16" height="16" viewBox="0 0 16 16">
  <path d="M4 4l8 8M12 4l-8 8"
        stroke="currentColor"
        stroke-width="1.4"
        stroke-linecap="round"/>
</svg>
`,

  width: {
    100: `
<svg width="16" height="16" viewBox="0 0 16 16">
  <text x="8" y="6.7" font-size="7" fill="currentColor" text-anchor="middle">W</text>
  <text x="8" y="13" font-size="5" fill="currentColor" text-anchor="middle">100%</text>
</svg>
`,
    80: `
<svg width="16" height="16" viewBox="0 0 16 16">
  <text x="8" y="6.7" font-size="7" fill="currentColor" text-anchor="middle">W</text>
  <text x="8" y="13" font-size="5" fill="currentColor" text-anchor="middle">80%</text>
</svg>
`,
    60: `
<svg width="16" height="16" viewBox="0 0 16 16">
  <text x="8" y="6.7" font-size="7" fill="currentColor" text-anchor="middle">W</text>
  <text x="8" y="13" font-size="5" fill="currentColor" text-anchor="middle">60%</text>
</svg>
`,
    50: `
<svg width="16" height="16" viewBox="0 0 16 16">
  <text x="8" y="6.7" font-size="7" fill="currentColor" text-anchor="middle">W</text>
  <text x="8" y="13" font-size="5" fill="currentColor" text-anchor="middle">50%</text>
</svg>
`
  },

  ratio: {
    null: `
<svg width="16" height="16" viewBox="0 0 16 16">
  <rect x="3" y="4" width="10" height="8" rx="1.5"
        stroke="currentColor"
        stroke-width="1.4"
        fill="none"/>
</svg>
`,
    '16:9': `
<svg width="16" height="16" viewBox="0 0 16 16">
  <text x="8" y="11" font-size="7" text-anchor="middle" fill="currentColor">16:9</text>
</svg>
`,
    '4:3': `
<svg width="16" height="16" viewBox="0 0 16 16">
  <text x="8" y="11" font-size="7" text-anchor="middle" fill="currentColor">4:3</text>
</svg>
`,
    '1:1': `
<svg width="16" height="16" viewBox="0 0 16 16">
  <text x="8" y="11" font-size="7" text-anchor="middle" fill="currentColor">1:1</text>
</svg>
`
  },

  align: {
    left: `
<svg width="16" height="16" viewBox="0 0 16 16">
  <line x1="3" y1="4" x2="10" y2="4"
        stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
  <line x1="3" y1="8" x2="12" y2="8"
        stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
  <line x1="3" y1="12" x2="8"  y2="12"
        stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
</svg>
`,
    center: `
<svg width="16" height="16" viewBox="0 0 16 16">
  <line x1="4" y1="4" x2="12" y2="4"
        stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
  <line x1="5" y1="8" x2="11" y2="8"
        stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
  <line x1="6" y1="12" x2="10" y2="12"
        stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
</svg>
`,
    right: `
<svg width="16" height="16" viewBox="0 0 16 16">
  <line x1="6" y1="4" x2="13" y2="4"
        stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
  <line x1="5" y1="8" x2="13" y2="8"
        stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
  <line x1="7" y1="12" x2="13" y2="12"
        stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
</svg>
`
  },

  rounded: {
    0: `
<svg width="16" height="16" viewBox="0 0 16 16">
  <rect x="3" y="3" width="10" height="10"
        rx="0"
        stroke="currentColor"
        stroke-width="1.4"
        fill="none"/>
  <path d="M3 5 L3 3 L5 3"
        stroke="currentColor"
        stroke-width="1.4"
        stroke-linecap="round"/>
  <path d="M13 5 L13 3 L11 3"
        stroke="currentColor"
        stroke-width="1.4"
        stroke-linecap="round"/>
  <path d="M3 11 L3 13 L5 13"
        stroke="currentColor"
        stroke-width="1.4"
        stroke-linecap="round"/>
  <path d="M13 11 L13 13 L11 13"
        stroke="currentColor"
        stroke-width="1.4"
        stroke-linecap="round"/>
</svg>
`,
    8: `
<svg width="16" height="16" viewBox="0 0 16 16">
  <rect x="3" y="3" width="10" height="10" rx="2"
        stroke="currentColor"
        stroke-width="1.4"
        fill="none"/>
</svg>
`,
    16: `
<svg width="16" height="16" viewBox="0 0 16 16">
  <rect x="3" y="3" width="10" height="10" rx="4"
        stroke="currentColor"
        stroke-width="1.4"
        fill="none"/>
</svg>
`,
    24: `
<svg width="16" height="16" viewBox="0 0 16 16">
  <rect x="3" y="3" width="10" height="10" rx="6"
        stroke="currentColor"
        stroke-width="1.4"
        fill="none"/>
</svg>
`
  }
}
