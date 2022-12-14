import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
    const routes = [
        {route: "/", label: "Home"},
        {route: "/about", label: "About"},
    ];

    return (
        <nav className="mb-10 w-full bg-red-200 p-2 drop-shadow">
            <ul className="flex gap-24 justify-center px-8 text-3xl font-bold">
                {routes.map(r => (
                    <li key={r.route} className="drop-shadow hover:text-blue-400 hover:underline">
                        <Link
                            to={r.route}>
                            {r.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};