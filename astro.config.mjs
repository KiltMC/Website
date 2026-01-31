// @ts-check
import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide'

// https://astro.build/config
export default defineConfig({
    site: 'https://kilt.bluspring.xyz',
    integrations: [
        starlight({
            favicon: './favicon.png',
            plugins: [starlightThemeRapide()],
            title: 'Kilt Docs',
            customCss: [
                './src/styles/overrides.css',
                './src/styles/colors.css',
                '@fontsource/google-sans-flex'
            ],
            social: [
                {
                    icon: 'discord',
                    label: 'Discord',
                    href: 'https://discord.gg/enGK2TymYJ'
                },
                {
                    icon: 'github',
                    label: 'GitHub',
                    href: 'https://github.com/KiltMC/Website'
                }
            ],
            sidebar: [
                {
                    label: 'Welcome',
                    autogenerate: {directory: 'welcome'},
                },
                {
                    label: 'Guides',
                    autogenerate: {directory: 'guides'},
                },
                {
                    label: 'Frequently Asked Questions',
                    autogenerate: {directory: 'faq'},
                },
                {
                    label: 'Technical',
                    autogenerate: {directory: 'technical'},
                },
                {
                    label: 'Mod List',
                    slug: 'mods',
                },
            ],
        }),
    ],
});
