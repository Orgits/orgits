import { Inter_Tight } from 'next/font/google'
import localFont from 'next/font/local'

export const interTight = Inter_Tight({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--thm-body-font',
    display: 'swap',
    preload: true,
})

export const gilroy = localFont({
    src: [
        { path: '../public/assets/fonts/gilroy/Gilroy-Regular.woff2', weight: '400', style: 'normal' },
        { path: '../public/assets/fonts/gilroy/Gilroy-Medium.woff2', weight: '500', style: 'normal' },
        { path: '../public/assets/fonts/gilroy/Gilroy-SemiBold.woff2', weight: '600', style: 'normal' },
        { path: '../public/assets/fonts/gilroy/Gilroy-Bold.woff2', weight: '700', style: 'normal' },
    ],
    variable: '--thm-heading-font',
    display: 'swap',
    preload: true,
})