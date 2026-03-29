import type { PropsWithChildren } from "react";

type IContainerScreenProps = PropsWithChildren;

export const ContainerScreen = ({children}: IContainerScreenProps) => {
    return (
        <div className="px-10 py-20 flex flex-col justify-center md:items-center gap-14">
            {children}
        </div>
    );
}