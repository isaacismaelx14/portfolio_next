import Image, { ImageProps } from 'next/image';
import React from 'react';
import Skeleton from 'react-loading-skeleton';

interface IProps extends ImageProps {
    borderradius?: string;
}

function ImageLazy(imageProp: IProps) {
    return (
        <div className={`lazy_load-image`}>
            <Image loading="lazy" alt={imageProp.alt} {...imageProp} />
            <Skeleton
                count={1}
                height="100%"
                inline
                borderRadius={imageProp.borderradius}
                baseColor="#8ebaec83"
                highlightColor="#5de09857"
            />
        </div>
    );
}

export default ImageLazy;
