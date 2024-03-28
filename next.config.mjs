/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            hostname: 'avatars.githubusercontent.com'
        },
        {
          hostname: 'i.pravatar.cc'
        }
        ],
      },
};

export default nextConfig;
