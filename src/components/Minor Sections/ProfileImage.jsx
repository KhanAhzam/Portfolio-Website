import React, { useEffect, useState } from 'react'

import { motion } from 'framer-motion'

import NeymarPhoto from '../../assets/Profile/Neymar.jpg'
import ProfilePhoto from '../../assets/Profile/ProfilePhoto.JPG'

function generateRandomNum(min = 50, max = 90) {
    const random = (Math.random() * (max - min) + min).toFixed(3);
    return random
}

const ProfileImage = () => {
    const [radii, setRadii] = useState({
        TopRightX: generateRandomNum(),
        TopRightY: generateRandomNum(),
        BottomLeftX: generateRandomNum(),
        BottomLeftY: generateRandomNum(),
        BottomRightX: generateRandomNum(),
        BottomRightY: generateRandomNum(),
        TopLeftX: generateRandomNum(),
        TopLeftY: generateRandomNum(),
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setRadii({
                TopRightX: generateRandomNum(),
                TopRightY: generateRandomNum(),
                BottomLeftX: generateRandomNum(),
                BottomLeftY: generateRandomNum(),
                BottomRightX: generateRandomNum(),
                BottomRightY: generateRandomNum(),
                TopLeftX: generateRandomNum(),
                TopLeftY: generateRandomNum(),
            });
        }, 1600);

        return () => clearInterval(interval);

    }, [])

    console.log(radii.TopRightX,radii.TopRightY,radii.BottomLeftX,radii.BottomLeftY,radii.BottomRightX,radii.BottomRightY,radii.TopLeftX,radii.TopLeftY)

    return (
        <>
            <motion.img src={ProfilePhoto}
                className='w-[450px] h-[450px] object-cover border-[3px] border-black'
                alt="Profile Photo"
                animate={{
                    borderTopRightRadius: `${radii.TopRightX}% ${radii.TopRightY}%`,
                    borderBottomLeftRadius: `${radii.BottomLeftX}% ${radii.BottomLeftY}%`,
                    borderBottomRightRadius: `${radii.BottomRightX}% ${radii.BottomRightY}%`,
                    borderTopLeftRadius: `${radii.TopLeftX}% ${radii.TopLeftY}%`,
                }}
                transition={{
                    duration: 1.6,
                    ease: 'linear'
                }}
            />
        </>
    )
}

export default ProfileImage
