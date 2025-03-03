/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Disable source maps in production to reduce file size
  productionBrowserSourceMaps: false,
  // Add trailing slash to improve compatibility
  trailingSlash: true,
  // Disable React strict mode for production
  reactStrictMode: false,
  // Enable compression
  compress: true,
  // Optimize fonts
  optimizeFonts: true,
  // Increase build performance
  swcMinify: true,
  // Reduce bundle size by excluding certain packages from the client bundle
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', 'framer-motion', '@radix-ui/react-dropdown-menu']
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.cache = {
        type: 'filesystem',  // Activează cache-ul pe disc
        buildDependencies: {
          config: [__filename], // Reîncarcă cache-ul dacă se modifică fișierul de configurare
        },
      };
    }
    return config;
  },
};

module.exports = nextConfig;
