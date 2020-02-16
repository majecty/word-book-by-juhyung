module.exports = function setupBabel(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"]
  };
};
