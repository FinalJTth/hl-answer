import { ReactElement, ReactNode } from "react";

export default function MainContainer({ children, }: Readonly<{ children: ReactNode; }>): ReactElement {
    return (
        <div className="mx-auto mt-10 w-[1000px] bg-cyan-950">
            {children}
        </div>
    )
}