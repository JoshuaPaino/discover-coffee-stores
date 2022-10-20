import Link from "next/link";
import Image from "next/image";
import cls from "classnames"
// 
import styles from './card.module.css'

const Card = (props) => {
    return (
        <Link href={props.href} >
            <a className={styles.CardLink}>
                <div className={cls("glass", styles.container)}>
                    <div className={styles.CardHeaderWrapper}>
                        <h2 className={styles.cardHeader}>{props.name}</h2>
                    </div>
                    <div className={styles.CardImageWrapper}>
                        <Image className={styles.CardImage} src={props.imgUrl} width={300} height={160} alt={props.alt} />
                    </div>

                </div>


            </a>
        </Link >

    );
};

export default Card;