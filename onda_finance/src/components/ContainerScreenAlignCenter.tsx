import type { PropsWithChildren } from "react";

type IContainerScreenAlignCenterProps = PropsWithChildren;

export const ContainerScreenAlignCenter = ({children}: IContainerScreenAlignCenterProps) => {
    return (
        <div className="flex h-screen items-center justify-center ">
            {children}
        </div>
    );
};

