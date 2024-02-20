import React from 'react';
import styles from './form02.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type Inputs = {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    password: string;
    confirmPassword: string;
    checkBox: boolean;

};

type Props = { color1?: string };

const schema = yup.object({
    firstName: yup.string().required('Vui lòng nhập tên.'),
    lastName: yup.string().required('Vui lòng nhập họ và tên.'),
    phone: yup.string().matches(/^\d+$/, 'Số điện thoại phải là số và không chứa ký tự khác.').min(10, 'Số điện thoại phải có ít nhất 10 chữ số.').required('Vui lòng nhập số điện thoại.'),
    email: yup.string().email('Địa chỉ email không hợp lệ.').required('Vui lòng nhập email.'),
    password: yup.string().required('Vui lòng nhập mật khẩu.'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password')], 'Mật khẩu xác nhận không khớp.')
        .required('Vui lòng xác nhận mật khẩu.'),
    checkBox: yup.boolean().oneOf([true]).required('erro'),
});

export default function Form02({ color1 = '#1d41d0' }: Props) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({ //
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: Inputs) => console.log(data);

    return (
        <div className={styles.container}>
            <div className={styles.child1}></div>
            <div>
                <div>
                    <p className={styles.text1}>Register</p>
                    <p className={styles.text2}>Manage all your lottery efficiently</p>
                    <p className={styles.text3}>
                        Let's get you all set up so you can verify your personal account and begin setting up your profile
                    </p>
                    <hr />
                </div>
                <div className={styles.child2}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={styles.name}>
                            <input type="text" {...register('firstName')} placeholder="First Name" />
                            <p>{errors.firstName?.message}</p>
                            <input type="text" {...register('lastName')} placeholder="Last Name" />
                            <p>{errors.lastName?.message}</p>
                        </div>
                        <div className={styles.name} >
                            <input type="text" {...register('phone')} placeholder="Phone Number" />
                            <p>{errors.phone?.message}</p>
                            <input type="text" {...register('email')} placeholder="Email" />
                            <p>{errors.email?.message}</p>
                        </div>
                        <div className={styles.name}>
                            <div>
                                <input type="password" {...register('password')} placeholder="Password" />
                                <p>{errors.password?.message}</p>
                            </div>
                            <div>
                                <input type="password" {...register('confirmPassword')} placeholder="Confirm Password" />
                                <p>{errors.confirmPassword?.message}</p>
                            </div>
                        </div>
                        <div >
                            <div>
                                <input type="checkbox" {...register('checkBox')} />Yes,I want to receive lottery display emails
                                <p>{errors.password?.message}</p>
                            </div>
                            <input type="checkbox" {...register('checkBox')} /> I agree to all the <span style={{ color: color1 }}>Term,Privacy Policy</span> and  <span style={{ color: color1 }}> free</span>
                            <p>{errors.password?.message}</p>
                        </div>
                        <button className={styles.button} type="submit">Submit</button>
                        <div>Already have an account? <span style={{ color: color1 }}> Log in</span></div>
                    </form>
                </div>
            </div>
        </div>
    );
}
