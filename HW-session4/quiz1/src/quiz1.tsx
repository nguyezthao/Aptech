import React from 'react'
import styles from './quiz1.module.css'
import { useState } from 'react'

type Props = {
    question?: string
    answers?: string[];
    correctAnswer?: string

}

export default function Quiz1({ question, answers, correctAnswer }: Props) {
    const alphabet = ['A', 'B', 'C', 'D']
    const [userAnswer, setUserAnswer] = React.useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        setUserAnswer(event.target.value);
    };

    const handleClick = () => {
        if (userAnswer === correctAnswer) {
            alert('Correct');
        } else {
            alert('Wrong');
        }

    }
    return (
        <div className={styles.container}>
            <h1> {question}</h1>
            <hr />
            <div className={styles.answers}>
                {answers?.map((answer, index) => {
                    return (
                        <div className={styles.answer} key={`answer-${index}`}>
                            <input type='radio' radioGroup='answer' name={question} value={answer} autoComplete='off' onChange={handleChange} />
                            <strong>
                                {alphabet[index]}. {answer}
                            </strong>
                        </div>

                    );
                })}
                <div>
                    <button
                        className={styles.submit}
                        onClick={() => {
                            handleClick();
                        }}
                    >
                        Submit
                    </button>
                </div>
            </div>


        </div>
    )
}