// Helper to import all assets from a directory using Webpack's require.context
export const importAllImages = (requireContext) => {
  return requireContext.keys().map((key) => {
    const src = requireContext(key);
    const fileName = key
      .replace(/^\.\//, '')
      .replace(/\.(png|jpe?g|webp|gif|svg)$/i, '')
      .replace(/[-_]/g, ' ');
    return { src, fileName };
  });
};


