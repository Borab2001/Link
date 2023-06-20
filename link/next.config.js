/** @type {import('next').NextConfig} */
const nextConfig = {
    swcPlugins: [
        ["next-superjson-plugin", {}]
    ]
};
  
 module.exports = nextConfig;