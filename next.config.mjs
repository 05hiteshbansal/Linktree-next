/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            hostname: 'avatars.githubusercontent.com'
        },
        {
          hostname: 'i.pravatar.cc'
        },
        {
          hostname:"lh3.googleusercontent.com"
        }
        ],
      },
};

export default nextConfig;
