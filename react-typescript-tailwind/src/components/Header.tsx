import React from "react";

export const Header = (props: {title: string}) => (
    <h1 className="w-full text-center text-3xl font-bold tracking-wide">{props.title}</h1>
);