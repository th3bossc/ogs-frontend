"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export interface TrackCardProps {
    icon: string,
    title: string,
    link: string,
};

const TrackCard = ({
    icon,
    title,
    link
}: TrackCardProps) => {
    const border = "border border-[rgba(255,255,255,27%)] border-[1px] rounded-[15px]";
    const className = `w-full max-w-[600px] h-full min-h-[300px] m-4 flex flex-col items-center justify-center gap-2 ${border}`;
    return (
        <motion.div
            className={className}
            style={{
                background: 'linear-gradient(228.4deg, rgba(54,49,49,0.31) 48.57%, rgba(130,130,130,0.31) 57.92%, rgba(54,49,49,0.31) 65.03%)',
            }}
            whileHover={{
                background:
                    'linear-gradient(228.4deg, rgba(54,49,49,0.31) 38.57%, rgba(130,130,130,0.31) 47.92%, rgba(54,49,49,0.31) 55.03%)',
                scale: 1.01,
                borderRadius: 0,
                transition: { duration: 0.3 },
            }}

            whileTap={{
                scale: 0.99,
                borderRadius: '30px',
                background:
                    'linear-gradient(228.4deg, rgba(54,49,49,0.31) 33.57%, rgba(130,130,130,0.31) 42.92%, rgba(54,49,49,0.31) 50.03%)',
            }}
        >
            <Link href={link} className='h-full w-full flex items-center justify-center'>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <img src={icon} alt={title} className='w-1/2 h-1/2 object-contain' />
                    <span className='font-medium text-xl lg:text-2xl'>{title}</span>
                </div>
            </Link>
        </motion.div>
    )
}

export default TrackCard;