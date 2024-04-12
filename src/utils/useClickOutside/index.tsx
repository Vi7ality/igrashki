import {MutableRefObject, useEffect } from "react";

export default function useClickOutside(ref: MutableRefObject<any>, cb: () => void) {
    useEffect(() => {
        const handleClickOutside = (event: Event) => {
             if (ref.current && !ref.current.contains(event.target as Node)) {
                cb();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, cb]);
}