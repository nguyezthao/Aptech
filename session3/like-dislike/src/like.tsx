import React from 'react'
import styles from './like.module.css'
import { AiOutlineLike } from 'react-icons/ai';
import { BiSolidLike } from 'react-icons/bi';
import { useState } from "react";


type Props = {}

export default function Like({ }: Props) {
    const [isLiked, setIsLiked] = React.useState(false);

    if (isLiked) {
        return (
            <div>
                <BiSolidLike
                    onClick={() => {
                        setIsLiked(false);
                    }}
                />
            </div>
        );
    }

    return (
        <div>
            < AiOutlineLike
                onClick={() => {
                    setIsLiked(true);
                }}
            />
        </div>
    );
}