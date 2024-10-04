import path from 'path';
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import CompressionWebpackPlugin from 'compression-webpack-plugin';

export default {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    path: path.resolve('dist'),
    filename: 'index.js',
    library: {
      type: 'umd',
      name: 'upliftui',
    },
    globalObject: 'this',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env'],
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][ext]',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new CompressionWebpackPlugin({
      test: /\.(js|css)$/,
      algorithm: 'brotliCompress',
      compressionOptions: { level: 11 },
    }),
  ],
  performance: {
    maxAssetSize: 512000,  // Increase size limit to 500KB
    maxEntrypointSize: 512000,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minimize: true,
  }
};