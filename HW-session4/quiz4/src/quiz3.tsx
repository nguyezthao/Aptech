import React, { useState } from 'react';
import './App.css';

interface Question {
    id: number;
    question: string;
    answer1: string;
    answer2: string;
}

function App() {
    const questions: Question[] = [
        {
            id: 1,
            question: 'Người đánh nhau để dành Mị Nương là ___1___ và ___2___.',
            answer1: 'sơn tinh',
            answer2: 'thủy tinh',
        },

    ];

    const [userAnswers, setUserAnswers] = useState<Record<number, { answer1: string; answer2: string }>>(
        {}
    );

    const handleAnswerChange = (questionId: number, field: 'answer1' | 'answer2', value: string) => {
        setUserAnswers({
            ...userAnswers,
            [questionId]: { ...userAnswers[questionId], [field]: value },
        });
    };

    const checkAnswers = () => {
        let correctCount = 0;

        questions.forEach((question) => {
            const userAnswer = userAnswers[question.id];
            if (
                userAnswer &&
                userAnswer.answer1 === question.answer1 &&
                userAnswer.answer2 === question.answer2
            ) {

            }
        });


        alert('đúng');

    };

    return (
        <div className="App">
            <h1>Điền vào chỗ trống</h1>
            {questions.map((item) => (
                <div key={item.id}>
                    <p>
                        {item.question.replace('___1___', '________').replace('___2___', '________')}
                    </p>
                    <input
                        type="text"
                        placeholder="Đáp án 1"
                        value={(userAnswers[item.id]?.answer1 || '')}
                        onChange={(e) => handleAnswerChange(item.id, 'answer1', e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Đáp án 2"
                        value={(userAnswers[item.id]?.answer2 || '')}
                        onChange={(e) => handleAnswerChange(item.id, 'answer2', e.target.value)}
                    />
                </div>
            ))}
            <div>
                <button onClick={checkAnswers}>Kiểm tra Kết Quả</button>
            </div>
        </div>
    );
}

export default App;
