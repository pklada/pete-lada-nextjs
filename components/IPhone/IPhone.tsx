
import styles from "./IPhone.module.css"

interface IPhoneProps {
    children: React.ReactNode;
}

export const IPhone = ({ children }: IPhoneProps) => {

    return (
        <div className={styles.frame}>
            <div className={styles.screen}>
                {children}
                <div className={styles.notch} />
            </div>
        </div>
    )
}