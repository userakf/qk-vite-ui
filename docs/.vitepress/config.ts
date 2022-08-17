import { version } from '../../package.json'

const config = {
    lang: 'en-US',
    title: 'VitePress',
    description: 'Vite & Vue powered static site generator.',
    themeConfig: {
        nav:nav(),

        sidebar: {
            '/': sidebarGuide(),
            '/config/': sidebarConfig()
        },

        editLink: {
            pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        },
    }
}

export default config

function nav() {
    return [
        { text: 'Guide', link: '/guide/what-is-vitepress', activeMatch: '/guide/' },
        { text: 'Configs', link: '/config/introduction', activeMatch: '/config/' },
        {
            text: version,
            items: [
                {
                    text: 'Changelog',
                    link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
                },
                {
                    text: 'Contributing',
                    link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md'
                }
            ]
        }
    ]
}

function sidebarGuide() {
    return [
        {
            text: '目录',
            items: [
                { text: '快速开始', link: '/' },
                {
                    text: '通用',
                    items: [
                        { text: 'Button 按钮', link: '/components/button/' },
                    ]
                },
                { text: '导航' },
                { text: '反馈' },
                { text: '数据录入' },
                { text: '数据展示' },
                { text: '布局' },
            ]
        }

    ]
}

function sidebarConfig() {
    return [
        {
            text: 'Config',
            items: [
                { text: 'Introduction', link: '/config/introduction' },
                { text: 'App Configs', link: '/config/app-configs' },
                { text: 'Theme Configs', link: '/config/theme-configs' },
                { text: 'Frontmatter Configs', link: '/config/frontmatter-configs' }
            ]
        }
    ]
}