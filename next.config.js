const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? '/yashveer-bika.github.io/' : '',
  images: {
    unoptimized: true,
  },
}