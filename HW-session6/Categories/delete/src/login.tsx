import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';
import axiosClient from './configs/axiosClient';
// npm install react-hook-form yup

interface IFormInput {
  username: string;
  password: string;
}

const schema = yup.object().shape({
  username: yup.string().email().required(),
  password: yup.string().min(3).max(20).required(),
});

export default function LoginWithAxios() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      // Send login request
      const response = await axiosClient.post('/auth/login', data);

      // Log response for debugging
      console.log('Login response:', response.data);

      if (response.data.loggedInUser) {
        alert('LOGIN OK (ASYNC / AWAIT)');

        // Save token to localStorage
        localStorage.setItem('access_token', response.data.access_token);

        // Log token for debugging
        console.log('Token saved to local storage:', localStorage.getItem('access_token'));
      } else {
        alert('LOGIN FAILED (ASYNC / AWAIT)');
      }
    } catch (err: any) {
      // Log the entire error object for debugging
      console.error('Login error:', err);

      if (err.response && err.response.status === 401) {
        alert('LOGIN FAILED (401)');
      } else {
        alert('An error occurred during login. Please check the console for details.');
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 320, gap: 12 }}>
          {/* USERNAME */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor='username'>Username</label>
            <input {...register('username')} id='username' className='form-control' />
            <span>{errors.username?.message}</span>
          </div>

          {/* PASSWORD */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor='password'>Password</label>
            <input type='password' {...register('password')} id='password' className='form-control' />
            <span>{errors.password?.message}</span>
          </div>

          {/* SUBMIT */}
          <button type='submit' name='Submit' className='btn btn-danger'>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
