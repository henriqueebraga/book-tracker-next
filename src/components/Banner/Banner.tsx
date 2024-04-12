import React from 'react';

interface BannerProps {
    children: React.ReactNode;
}

const Banner: React.FC<BannerProps> = ({ children }) => {
    return (
        <>
            {children}
        </>
    );
};

export default Banner;