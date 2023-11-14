/** @type {import('next').NextConfig} */

// const withTM = require("next-transpile-modules")(["ui"]);

const nextConfig = {
    transpilePackages: ['ui'],
    images:{
        remotePatterns:[
            {
              protocol: 'https',
              hostname: 'https://pixabay.com/ko/illustrations/%EA%B7%80%EC%97%AC%EC%9A%B4-%EB%8F%99%EB%AC%BC-%EC%98%81%EC%83%81-%EC%B4%88%EC%83%81%ED%99%94-7973191/',
              port: '',
              pathname: '/**',
            }
          ]
      }    
}

module.exports = nextConfig
