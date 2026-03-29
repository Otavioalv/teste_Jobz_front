import type { PropsWithChildren } from "react";

type IContainerCardProps = PropsWithChildren;

export const ContainerCard = ({children}: IContainerCardProps) => {
    return (
        <div className="flex flex-col md:justify-between md:items-end w-full md:max-w-500 gap-10">
            {children}
        </div>
    );
}