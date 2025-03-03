/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	eslint: {
	  ignoreDuringBuilds: true,
	},
	images: {
	  unoptimized: true,
	  remotePatterns: [
		{
		  protocol: "https",
		  hostname: "images.unsplash.com",
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
	// Remove unsupported "optimizeFonts" and "swcMinify"
	experimental: {
	  optimizeCss: true,
	  optimizePackageImports: [
		"lucide-react",
		"framer-motion",
		"@radix-ui/react-dropdown-menu",
	  ],
	},
	webpack(config, { isServer }) {
	  if (!isServer) {
		config.cache = {
		  type: "filesystem", // Enable disk cache
		  buildDependencies: {
			config: [__filename], // Rebuild cache if the config file is modified
		  },
		};
	  }
	  return config;
	},
  };
  
  module.exports = nextConfig;
  