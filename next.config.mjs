/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/inicio",
        permanent: false,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.converteai.net",
        port: "",
        pathname: "/7bfc45fe-b0d2-4dbf-901b-e6f2e94ab583/players/**",
      },
    ],
  },
};

// https://images.converteai.net/7bfc45fe-b0d2-4dbf-901b-e6f2e94ab583/players/65d6aa6297098c0007bd4f4c/thumbnail.jpg

export default nextConfig;
