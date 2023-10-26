import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': "url('/image/hero-texture.png')",
        'menu-about': "url('/image/menu-img-01.png')",
        'menu-project': "url('/image/menu-img-02.png')",
        'menu-blog': "url('/image/menu-img-03.png')",
      },
      colors: {
        'hero-card': '#F6F5F3',
      },
      
    },
  },
  plugins: [],
  darkMode: "class",
}
export default config
