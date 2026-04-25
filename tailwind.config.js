module.exports = {
  content: [
    './_layouts/**/*.html',
    './_includes/**/*.html',
    './**/*.html',
    '!./_site/**',
    '!./node_modules/**',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
