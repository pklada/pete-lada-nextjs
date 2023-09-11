import React from "react";

interface CSSVarSetterProps {
    varName: string;
    value?: string;
    children: React.ReactNode;
}

export const CSSVarSetter = ({ varName, value, children }: CSSVarSetterProps) => {

    const wrapperRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (!value) { return }
        if (wrapperRef.current) {
            wrapperRef.current.style.setProperty(`--${varName}`, value);
        }
    }, [])

    return (
        <div ref={wrapperRef}>
            {children}
        </div>
    )
}