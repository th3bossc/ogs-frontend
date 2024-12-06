import { Outfit } from 'next/font/google';
import localFont from 'next/font/local';

const outfit = Outfit({ subsets: ['latin'], weight: ['400', '700'] });

const supplyBold = localFont({
    src: [
        {
            path: './Supply-UltraLight.otf',
            weight: '200',
            style: 'ultralight',
        },
        {
            path: './Supply-Light.otf',
            weight: '300',
            style: 'light',
        },
        {
            path: './Supply-Regular.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: './Supply-Medium.otf',
            weight: '500',
            style: 'medium',
        },
        {
            path: './Supply-Bold.otf',
            weight: '700',
            style: 'bold',
        }
    ],
    variable: '--font-supply-bold', // Optional: For custom CSS variables
})

export {
    outfit,
    supplyBold,
}