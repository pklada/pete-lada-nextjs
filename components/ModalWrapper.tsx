"use client"

import { ReactNode } from "react";
import ReactDOM from "react-dom";
import { AnimatePresence } from "framer-motion";
import React from "react";

interface ModalWrapperProps {
    children: ReactNode;
    isShowing: boolean;
}

const ModalWrapper = ({ children, isShowing }: ModalWrapperProps) => {


    const [canShowModal, setCanShowModal] = React.useState(false);

    React.useEffect(() => {
        if (document) {
            setCanShowModal(true);
        }
    }, [])

    if (canShowModal) {
        return ReactDOM.createPortal(
            <AnimatePresence>
                {isShowing && children}
            </AnimatePresence>,
            document.body
        )
    } else {
        return <></>
    }
}

export default ModalWrapper;