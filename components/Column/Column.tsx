import classNames from "classnames"
import styles from "./Column.module.css"

interface ColumnProps {
    children: React.ReactNode;
    gap?: "small";
}

export const Column = ({ gap, children }: ColumnProps) => {

    const columnClass = classNames({
        [styles.base]: true,
        [styles.gapSmall]: gap === "small"
    })

    return (
        <div className={columnClass}>
            {children}
        </div>
    )
}