module.exports = {
  //@babel/preset-env - transforma js versão mais nova, em js que o browser entenda (arrow function, class, spread...)
  //@babel/preset-react  - transforma feature do react em js que o browser entenda (jsx...)
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: ['@babel/plugin-proposal-class-properties']
};
