import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      fontFamily: { worksans: ['Work Sans', 'sans-serif'] },
      colors: {
        'Dark-blue': '#0A083A',
        'Granite-Gray': '#6C6B6B',
        magenta: '#FF3C78'
      }
    }
  },
  plugins: []
}
export default config
