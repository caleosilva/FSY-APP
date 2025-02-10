/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true, // <- Desativa a otimização de imagens
    }
};

export default nextConfig;
