import { useForm, SubmitHandler } from "react-hook-form"
import styles from './form04.module.css'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface IFormInput {
    firstName: string
    lastName: string
    email: string;
    password: string
}
const schema = yup
    .object({
        firstName: yup.string().required('Không hợp lệ'),
        lastName: yup.string().required('không hợp lệ'),
        email: yup.string().email('Email không hợp lệ').required('Email bắt buộc nhập.'),
        password: yup.string().required(),
    })
    .required();


export default function App() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data: IFormInput) => console.log(data);


    return (
        <div>

            <div className={styles.container}>

                <div className={styles.tabs}>
                    <div className={styles.radius}></div>
                    <div className={styles.text1}> AnyWhere App</div>
                    <div className={styles.text2}> Home</div>
                    <div className={styles.text2}> Join</div>
                </div>
                <div className={styles.text}>
                    <p style={{ fontSize: 20 }}> START FOR FREE</p>
                    <p style={{ fontSize: 35, color: '#fffff' }}>create new account</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.name}>
                        <div className={styles.name1}>
                            <input placeholder="First Name" {...register('firstName')} />
                            <p>{errors.firstName?.message}</p>
                        </div>
                        <div className={styles.name1}>
                            <input placeholder="Last Name" {...register('lastName')} />
                            <p>{errors.lastName?.message}</p>
                        </div>
                    </div>

                    <div className={styles.email}>
                        <input placeholder="Email"{...register('email')} />
                        <p>{errors.email?.message}</p>
                        <input placeholder="Password" type="password"{...register('password')} />
                        <p>{errors.password?.message}</p>
                    </div>
                    <div className={styles.submit}>
                        <input type='submit' value={'Change method'} />
                        <input className={styles.sub} type='submit' value={'create account'} />
                    </div>
                </form>
            </div>

        </div>
    )
}