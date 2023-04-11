function range(start, end, increment = 1) {
  const count = Math.floor((end - start + increment) / increment);
  return Array(count).fill(0).map((_, idx) => start + idx * increment);
}

const minFontSize = 5;
const maxFontSize = 100;

const minSpacingPixel = 0;
const maxSpacingPixel = 1000;
const spacingPixelIncrement = 5;

const vhs = ['10vh', '20vh', '30vh', '40vh', '50vh', '60vh', '70vh', '80vh', '90vh', '100vh'];
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sx: '350px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',

      mobile: '992px',
      laptop: '1024px',
      desktop: '1280px',
    },

    extend: {
      colors: {
        black: '#000000',
        white: '#ffffff',
      },
    },

    fontSize: {
      ...range(minFontSize, maxFontSize).reduce((merged, f) => ({ ...merged, [f]: `${f}px` }), {}),
    },

    spacing: {
      ...range(minSpacingPixel, maxSpacingPixel, spacingPixelIncrement)
        .reduce((merged, f) => ({ ...merged, [f]: `${f}px` }), {}),
    },

    maxWidth: {
      ...range(minSpacingPixel, maxSpacingPixel, spacingPixelIncrement)
        .reduce((merged, f) => ({ ...merged, [f]: `${f}px` }), {}),
    },

    minWidth: {
      ...range(minSpacingPixel, maxSpacingPixel, spacingPixelIncrement)
        .reduce((merged, f) => ({ ...merged, [f]: `${f}px` }), {}),
    },

    maxHeight: {
      ...range(minSpacingPixel, maxSpacingPixel, spacingPixelIncrement)
        .reduce((merged, f) => ({ ...merged, [f]: `${f}px` }), {}),
      ...vhs.reduce((merged, vh) => ({ ...merged, [vh]: vh }), {}),
    },

    minHeight: {
      ...range(minSpacingPixel, maxSpacingPixel, spacingPixelIncrement)
        .reduce((merged, f) => ({ ...merged, [f]: `${f}px` }), {}),
      ...vhs.reduce((merged, vh) => ({ ...merged, [vh]: vh }), {}),
    },
  },

  plugins: [],
};
