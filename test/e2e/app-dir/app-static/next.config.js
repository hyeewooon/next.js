/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    logging: 'verbose',
    incrementalCacheHandlerPath: process.env.CUSTOM_CACHE_HANDLER,
  },

  rewrites: async () => {
    return {
      // beforeFiles: [ { source: '/assets/:path*', destination: '/:path*' } ],
      afterFiles: [
        {
          source: '/rewritten-to-dashboard',
          destination: '/dashboard',
        },
        {
          source: '/rewritten-use-search-params',
          destination: '/hooks/use-search-params',
        },
        {
          source: '/rewritten-use-pathname',
          destination: '/hooks/use-pathname/slug',
        },
      ],
    }
  },
}
