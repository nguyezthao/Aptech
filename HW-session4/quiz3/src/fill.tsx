import React, { useState } from 'react';
import styles from './fill.module.css';

type Props = {
    questionContent: string;
    correctAnswers: string[]; // Sử dụng mảng cho các câu trả lời đúng
};

export default function FillInTheBlank({ questionContent, correctAnswers }: Props) {
    // user answer
    const [userAnswer, setUserAnswer] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserAnswer(event.target.value);
    };

    const handleClick = () => {
        const lowercaseUserAnswer = userAnswer.trim().toLocaleLowerCase();
        const isAnswerCorrect = correctAnswers.some(correctAnswer =>
            lowercaseUserAnswer === correctAnswer.trim().toLocaleLowerCase()

        );
        setIsCorrect(isAnswerCorrect);
        if (isAnswerCorrect) {
            alert('Correct!');
        } else {
            alert('Wrong!');
        }
    };

    // cắt bởi '___'
    const text = questionContent.split(/(___)/g);

    return (
        <div className={styles.container}>
            <h3>Fill in the blank</h3>
            <hr />
            <div className={styles.question}>
                {text.map((item, index) => {
                    if (item === '___') {
                        return (
                            <div key={index} style={{ display: 'inline-block', height: 30 }}>
                                <input
                                    autoComplete='off'
                                    style={{ width: 100, fontSize: 20 }} // Đặt chiều rộng mặc định
                                    onChange={handleChange}
                                />
                            </div>
                        );
                    }
                    return <span key={index}>{item}</span>; // text
                })}
            </div>

            <div>
                <button className={styles.submit} onClick={handleClick}>
                    Submit
                </button>
            </div>


        </div>
    );
}
