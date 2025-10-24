module.exports = function override(config) {
  config.plugins = config.plugins.filter(
    (p) => p.constructor.name !== "ESLintWebpackPlugin"
  );
  return config;
};
