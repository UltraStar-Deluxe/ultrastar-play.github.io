import createMDX from '@next/mdx'
import rehypeSlug from 'rehype-slug'

// https://nextjs.org/docs/pages/building-your-application/configuring/mdx
const withMDX = createMDX({
    extension: /\.mdx?$/,
    options: {
        // If you use remark-gfm, you'll need to use next.config.mjs
        // as the package is ESM only
        // https://github.com/remarkjs/remark-gfm#install
        remarkPlugins: [],
        rehypePlugins: [
            rehypeSlug
        ],
        // If you use `MDXProvider`, uncomment the following line.
        providerImportSource: "@mdx-js/react",
    },
});


/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    images: {
        loader: 'akamai',
        path: '/',
    },
    output: 'export',
};

export default withMDX(nextConfig);