/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "utfs.io",
            "lh3.googleusercontent.com", 
            "media.licdn.com", 
            "e7.pngegg.com",
            "avatars.githubusercontent.com",
        ],
    },
    // webpack: (config) => {
    //     config.module.rules.push({
    //         test: /\.mjs$/,
    //         include: /node_modules/,
    //         type: "javascript/auto",
    //     });
        
    //     return config;
    // },
};

export default nextConfig;
