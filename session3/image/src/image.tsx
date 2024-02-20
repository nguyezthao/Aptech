import React from 'react'
import styles from './image.module.css'
import classnames from 'classnames';
import { useState } from 'react';

const maxImageCount = 4;
type Props = {}

export default function Image({ }: Props) {
    const [index, setIndex] = React.useState(1);

    // let imagePath = `/images/${index}.jpeg`; // dùng dấu ngawojc gần số 1 để cộng chuỗi còn biến thì có kí tự $ trước biến
    let imagePath = '/images/' + index + '.jpg';

    return (
        <div className={styles.container}>
            {/* IMAGE */}
            <img className={styles.imageBig} src={imagePath} alt='' />

            <div className={styles.buttonContainer}>
                {/* PREVIOUS BUTTON */}
                <button
                    disabled={index === 1} // hàm vô hiệu hóa ko cho tương tác khi inddexx=1
                    style={{ backgroundColor: index === 1 ? 'gray' : 'blueviolet' }}
                    className={styles.button}
                    onClick={() => {
                        setIndex(index - 1);
                    }}
                >
                    Previous
                </button>

                {/* TEXT */}
                <div className={styles.text}>
                    {index} / {maxImageCount}
                </div>

                {/* NEXT BUTTON */}
                <button
                    disabled={index === maxImageCount}
                    style={{ backgroundColor: index === maxImageCount ? 'gray' : 'blueviolet' }}
                    className={styles.button}
                    onClick={() => {
                        setIndex(index + 1);
                    }}
                >
                    Next
                </button>
            </div>
        </div>
    );
}