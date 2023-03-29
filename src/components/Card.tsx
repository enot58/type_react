import React, { FC, useState } from "react";

export enum CardVariant {
    oulined = "oulined",
    primary = "primary",
}

export interface CardProps {
    width: string;
    height: string;
    children?: React.ReactNode;
    variant: CardVariant;
    onClick: () => void;
}

const Card: FC<CardProps> = ({ width, height, children, variant, onClick }) => {
    return (
        <div
            style={{
                width,
                height,
                border:
                    variant === CardVariant.oulined
                        ? "1px solid black"
                        : "none",
                backgroundColor:
                    variant === CardVariant.primary ? "lightgrey" : "",
            }}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default Card;
