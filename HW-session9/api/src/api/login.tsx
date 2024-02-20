import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from '../configs/axiosClient';
import 'bootstrap/dist/css/bootstrap.min.css';

interface IFormInput {
    username: string;

    password: string;

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
                <input type="text" {...register('username')} placeholder="Username" className="form-control mb-3" />

                <input type="password" {...register('password')} placeholder="Password" className="form-control mb-3" />

                <button type="submit" className="btn btn-primary btn-block">
                    Register
                </button>
            </form>
            {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
        </div>
    );
};

export default RegisterComponent;
