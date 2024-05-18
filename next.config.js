const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['res.cloudinary.com', 'media.dev.to']
  }
}

const isProd = process.env.NODE_ENV = 'production';

const nextConfig = {
  basePath: isProd ? "/developer-portfolio" : "",
  output: "export",  // <=== enables static exports
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;