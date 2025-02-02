const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

const BUILD_DIR = path.resolve(__dirname, "..", "build");
const PUBLIC_DIR = path.resolve(__dirname, ".", "public");
const STATIC_DIR = path.resolve(__dirname, "..", "static");

module.exports = (env, { mode = "development" }) => {
  const config = {
    mode,
    entry: {
      app: "./src/index.tsx",
    },
    devtool: "",
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|tsx|ts)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
              plugins: [
                "@babel/plugin-external-helpers",
                "babel-plugin-styled-components",
                "@babel/plugin-proposal-class-properties",
                "@babel/plugin-proposal-object-rest-spread",
              ],
            },
          },
        },

        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.svg$/,
          use: ["@svgr/webpack"],
        },

        {
          test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
          type: "asset/resource",
          generator: {
            filename: "assets/img/[hash][ext]",
          },
        },
        // --- FONTS
        {
          test: /\.(woff2?|eot|ttf|otf)$/i,
          exclude: /node_modules/,
          type: "asset/resource",
          generator: {
            filename: "assets/fonts/[hash][ext]",
          },
        },
      ],
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "index.js",
      libraryTarget: "umd",
      publicPath: "/dist/",
      umdNamedDefine: true,
    },
    optimization: {
      mangleWasmImports: true,
      mergeDuplicateChunks: true,
      minimize: true,
      nodeEnv: "production",
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": '"production"',
      }),
    ],
  };

  /**
   * If in development mode adjust the config accordingly
   */
  if (mode === "development") {
    config.devtool = "source-map";
    config.output = {
      filename: "[name]/index.js",
      publicPath: "/",
    };
    config.module.rules.push({
      loader: "source-map-loader",
      test: /\.js$/,
      exclude: /node_modules/,
      enforce: "pre",
    });
    config.plugins = [
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": '"development"',
      }),

      new HtmlWebpackPlugin({
        template: path.join(PUBLIC_DIR, "index.html"),
        filename: "index.html",
      }),

      new FaviconsWebpackPlugin({
        logo: path.resolve(PUBLIC_DIR, "favicon.svg"),
        prefix: "/favicons/",
        outputPath: path.resolve(BUILD_DIR, "favicons"),
        mode: "webapp",
        // Injecting into all HTML Files or separately (for an every instance of HtmlWebpackPlugin)
        // inject: true,
        inject: (htmlPlugin) => path.basename(htmlPlugin.options.filename) === "index.html",
        favicons: {
          icons: {
            appleIcon: false, // Apple touch icons.
            appleStartup: false, // Apple startup images.
            android: false, // Android homescreen icon.
            favicons: true, // Regular favicons.
            coast: false, // Opera Coast icon.
            firefox: false, // Firefox OS icons.
            windows: false, // Windows 8 tile icons.
            yandex: false, // Yandex browser icon.
          },
        },
        cache: false, // Disallow caching the assets across webpack builds.
      }),

      new webpack.HotModuleReplacementPlugin(),
    ];
    config.devServer = {
      historyApiFallback: true,
      port: 3000,
      open: true,
      hot: true,
      compress: true,
      // Stats configuration is now separate
      devMiddleware: {
        writeToDisk: true,
      },

      static: [
        // Required to use favicons located in a separate directory as assets
        // Should use with historyApiFallback, to avoid of 404 for routes
        {
          directory: path.join(BUILD_DIR, "favicons"),
        },
      ],
    };

    config.optimization = {
      mangleWasmImports: true,
      mergeDuplicateChunks: true,
      minimize: false,
      nodeEnv: "development",
    };
  }
  return config;
};
