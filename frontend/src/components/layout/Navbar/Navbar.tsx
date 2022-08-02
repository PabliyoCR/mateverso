import React, { FC } from 'react';
import { Link } from "react-router-dom";
import './Navbar.scss';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => (
    <div className="Navbar">
        <Link to={{pathname : "/"}}>
            <div className="logo">
                <span>
                    M
                </span>
                <span>
                    A
                </span>
                <span>
                    T
                </span>
                <span>
                    E
                </span>
                <span>
                    V
                </span>
                <span>
                    E
                </span>
                <span>
                    R
                </span>
                <span>
                    S
                </span>
                <span>
                    O
                </span>
            </div>
        </Link>
    </div>
);

export default Navbar;
