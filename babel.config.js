module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    env: {
      production: {
        plugins: ["react-native-reanimated/plugin", "react-native-paper/babel"],
      },
    },
  };
};
