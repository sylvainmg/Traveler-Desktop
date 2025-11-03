import type { ReactNode } from "react";

interface ScrollAreaProps {
    children: ReactNode;
    className?: string;
}

export default function ScrollArea({
    children,
    className = "",
}: ScrollAreaProps) {
    return (
        <div className={`flex-1 overflow-auto ${className}`}>{children}</div>
    );
}
