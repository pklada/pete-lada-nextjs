import classNames from "classnames"
import { Logo } from "../Logo"
import styles from "./ProfilePhoto.module.css"

export const ProfilePhoto = ({ className, size }: { className?: string, size?: "medium" | "small" }) => {

    const wrapperClass = classNames({
        [styles.wrapper]: true,
        [styles.sizeMedium]: size == "medium",
        [styles.sizeSmall]: size == "small",
        [`${className}`]: className!!
    })

    return (
        <div className={wrapperClass}>
            <img src="https://pbs.twimg.com/profile_images/1686940524698304512/1oS9_fwg_400x400.jpg" />
            <div className={styles.badge}>
                <Logo />
            </div>
        </div>
    )
}