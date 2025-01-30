import React, { useState, useEffect } from 'react';
import Image from 'next/image';  // Import the Image component from Next.js
import logo from '../../assets/logo.png';
import s from './Loading.module.scss';

interface LoadingProps {
    loadingTime?: number;
}

const Loading: React.FC<LoadingProps> = ({ loadingTime = 1000 }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, loadingTime);

        return () => clearTimeout(timer);
    }, [loadingTime]);

    if (!isLoading) {
        return null;
    }

    return (
        <div className={s.loadingContainer}>
            <div className={s.loadingBox}>
                <Image
                    src={logo}
                    alt="logo"
                    className={s.loadingLogo}
                    width={100}  // You can specify a fixed width if you want
                    height={100} // You can specify a fixed height if you want
                />
                <span className={s.loadingText}>Loading...</span>
            </div>
        </div>
    );
}

export default Loading;