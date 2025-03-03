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
	productionBrowserSourceMaps: false,
	trailingSlash: true,
	reactStrictMode: false,
	compress: true,
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
				type: "filesystem",
				buildDependencies: {
					config: [__filename],
				},
			};
		}
		return config;
	},
};

module.exports = nextConfig;
