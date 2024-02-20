import React from 'react'
import styles from './resume.module.css'
import Skill from './skill'
type Props = {}

export default function resume({ }: Props) {

    const items = [
        {
            title: 'PROJECT',
            childs: [
                { title: 'Garage management software (c++)' },
                { title: 'Beach Tourism website' },
                { title: 'Iot electrical equipment (c)' },
            ]
        },
        {
            title: 'EDUCATION',
            childs: [
                { title: 'Da Nang university of science and technology' },
                { title: 'Aptech computer Education' },
                { title: 'Electronics and Telecommunication' },
            ]
        },

    ]
    return (

        <div className={styles.container}>
            <div className={styles.container1}>
                <div className={styles.avatar}>

                </div>
                <div className={styles.name}>
                    <div className={styles.name1}>
                        <div className={styles.name1_1}>
                            NGUYEN
                            <div> THAO</div>
                        </div>
                        <div className={styles.name1_2}>
                            <div className={styles.name1_2_1}>
                                web developer
                            </div>
                            Try your best to become a web developer
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.container2}>
                <div className={styles.about}>
                    <div className={styles.about1}>
                        <div>ABOUT</div>
                    </div>
                    I am a highly competent IT professional with a proven track record in designing websites, networking and managing databases. I have strong technical skills as well as excellent interpersonal skills.
                </div>
                <div className={styles.contact}>
                    CONTACT
                </div>
                <div className={styles.adr}>
                    <div>Nguyenthao@gmail.com</div>
                    <div>0935231483</div>
                    <div> 10620037@sv1.dut</div>
                    <div>  Da Nang city</div>
                </div>
            </div>
            <div className={styles.container3}>
                {items.map((item, index) => (
                    <div key={index} className={styles.item}>
                        <div className={styles.item1}>{item.title} </div>
                        <div className={styles.item2}>
                            {item.childs.map((child, indexChild) => (
                                <div key={indexChild} className={styles.item3}><p>{child.title}</p></div>
                            ))}
                        </div>
                    </div>

                ))}

            </div>

            <Skill />



        </div>
    )
}