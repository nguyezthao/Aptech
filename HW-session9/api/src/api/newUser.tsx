import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from '../configs/axiosClient';

interface IFormInput {
    username: string;
    email: string;
    password: string;
    fullName: string;
}

const RegisterComponent: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInput>();

    const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        try {
            const response = await axios.post('https://training.softech.cloud/api/training/users/register', data);

            const responseData = response.data;

            if (responseData.ok && responseData.register) {
                console.log('Registration successful!');
                console.log('User:', responseData.result?.data);
                setErrorMessage(null);
            } else {
                console.log('Registration failed:', responseData.message);
                setErrorMessage(responseData.message || 'Registration failed. Please check your input.');
            }
        } catch (error) {
            console.error('Error during registration:', error);
            setErrorMessage('An error occurred during registration. Please try again.');
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="username" className="form-label">
                    Username
                </label>
                <input type="text" id="username" {...register('username')} className="form-control " />

                <label htmlFor="email" className="form-label">
                    Email
                </label>
                <input type="email" id="email" {...register('email')} className="form-control " />

                <label htmlFor="password" className="form-label">
                    Password
                </label>
                <input type="password" id="password" {...register('password')} className="form-control " />

                <label htmlFor="fullName" className="form-label">
                    Full Name
                </label>
                <input type="text" id="fullName" {...register('fullName')} className="form-control " />

                <button type="submit" className="btn btn-primary">
                    Register
                </button>
            </form>
            {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
        </div>
    );
};

export default RegisterComponent;
