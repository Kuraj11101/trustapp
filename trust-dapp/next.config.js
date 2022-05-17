/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // env: {
  //   'MYSQL_HOST': '127.0.0.1',
  //   'MYSQL_PORT': '3306',
  //   'MYSQL_DATABASE': {trustdb},
  //   'MYSQL_USER': {root},
  //   'MYSQL_PASSWORD': {},

  // }
//   webpack: (config, { isServer }) => {
//     // Fixes npm packages that depend on `fs` module
//     if (!isServer) {
//       config.node = {
//         fs: 'empty'
//       }
//     }

//     return config
//   }
}

module.exports = (phase, { defaultConfig }) => {
  return {
    ...defaultConfig,

    webpack: (config) => {
      config.resolve = {
        ...config.resolve,
        fallback: {
       //   "child_process": false,
          "fs": false,
          "path": false,
          "os": false,
        }
      }
      return config
    },
  }
}


//module.exports = nextConfig
