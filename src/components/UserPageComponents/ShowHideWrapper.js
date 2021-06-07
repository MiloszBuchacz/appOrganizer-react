import React, { useState } from "react";
import "../Style/getNote.css"

export default function ShowHideWrapper({children, title}) {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            {isVisible &&
    <div>
        {children}
    </div>}
            <button onClick={() => setIsVisible(!isVisible)}><span>{title}</span></button>
        </>
);
}