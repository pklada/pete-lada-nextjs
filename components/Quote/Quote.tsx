import { Text } from "../Text/Text"
import styles from "./Quote.module.css"

interface QuoteProps {
    children: string;
    author: string;
}

export const Quote = ({ children, author }: QuoteProps) => {

    return (
        <blockquote className={styles.wrapper}>
            <Text size="small" className={styles.author}>{author}</Text>
            <Text size="large">{children}</Text>
        </blockquote>
    )
}