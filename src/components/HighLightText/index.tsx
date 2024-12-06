import { ReactNode } from "react";
import styles from './styles.module.css';

const HighLightText = ({
    children,
    className,
}: {
    children: ReactNode,
    className?: string,
}) => {
    return (
        <div className={`${styles.text} ${className}`}>
            {children}
        </div>
    )
}

export default HighLightText;