import React from 'react';
import styles from './form.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface IFormInput {
    username: string; // Correct the field name to 'username'
    password: string;

}

const schema = yup.object({
    username: yup.string().required(),
    password: yup.string().required(),
    box: yup.boolean().oneOf([true]).required('erro'),
});

export default function Form03() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: IFormInput) => console.log(data);

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.child}>
                    <div className={styles.text}>
                        <p className={styles.text1}>LOGIN</p>
                        <p className={styles.text2}>Login to your account</p>
                        <p className={styles.text3}>Thank you for coming back to GROVIA. Let's access the best recommendations for you.</p>
                    </div>
                    <hr />
                    <div className={styles.login}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input placeholder='uesrname' {...register('username')} />
                            <p>{errors.username?.message}</p>
                            <input placeholder='Password' type="password" {...register('password')} />
                            <p>{errors.password?.message}</p>
                            <div className={styles.checker}>
                                <input type="checkbox" {...register('box')} style={{ width: 20, }} />
                                <p>{errors.box?.message}</p>
                                <p>Reset password</p>
                            </div>
                            <input type="submit" style={{ width: 220 }} />
                            <p>Don't have an account yet?</p>

                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}
