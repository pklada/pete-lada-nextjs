
import { Text } from "@/components/Text/Text";
import styles from "./PostInfo.module.css"
import React from "react";


type PostInfoItem = {
    key: string;
    value: string | React.ReactNode;
}

interface PostInfoProps {
    items: PostInfoItem[]
}

export const PostInfo = ({ items }: PostInfoProps) => {

    return (
        <aside className={styles.info}>
            {items.map((item, i) => (
                <React.Fragment key={i}>
                    <div className={styles.infoItemLeading}>
                        <div>
                            <Text size="xsmall" weight="black" intensity="medium">{item.key}</Text>
                            <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.5 0.5L4 4L0.5 7.5" stroke="black" strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>
                    <div className={styles.infoItemTrailing}>
                        <Text size="small">{item.value}</Text>
                    </div>
                </React.Fragment>
            ))}
        </aside>
    )
}