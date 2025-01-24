import { Outfit } from 'next/font/google';
import localFont from 'next/font/local';

const outfit = Outfit({ subsets: ['latin'], weight: ['400', '700'] });

const supplyBold = localFont({
    src: [
        {
            path: './supply/Supply-UltraLight.otf',
            weight: '200',
            style: 'ultralight',
        },
        {
            path: './supply/Supply-Light.otf',
            weight: '300',
            style: 'light',
        },
        {
            path: './supply/Supply-Regular.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: './supply/Supply-Medium.otf',
            weight: '500',
            style: 'medium',
        },
        {
            path: './supply/Supply-Bold.otf',
            weight: '700',
            style: 'bold',
        }
    ],
    variable: '--font-supply-bold', // Optional: For custom CSS variables
})

const vegawanty = localFont({
    src: [
        {
            path: './vegawanty/Vegawanty.ttf',
            style: 'normal',
        }
    ],
    variable: '--font-vegawanty',
})

export {
    outfit,
    supplyBold,
    vegawanty
}