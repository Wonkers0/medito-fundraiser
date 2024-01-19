/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.handlebars$/,
      use: "handlebars-loader",
    })

    return config
  },
}

module.exports = nextConfig
