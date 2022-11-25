import React from "react";

export const Header = (props: {title: string}) => (
    <h1 className="w-full truncate text-center text-3xl font-bold tracking-wide">{props.title.split("-")[0]}</h1>
);