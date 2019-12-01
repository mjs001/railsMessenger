const { environment } = require("@rails/webpacker");
const webpack = require("@rails/webpacker");
module.exports = environment;

environment.plugins.prepend(
  "Provde",
  new webpack.ProvidePlugin({
    $: "jquery/src/jquery",
    jQuery: "jquery/src/jquery"
  })
);
module.exports = environment;
