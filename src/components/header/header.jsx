import React from 'react';
import './header.css'
import {Link} from "react-router-dom";

export const Header = ({linksList}) => {
    return (
        <header className="header">
            <div className="logo">
                <h2><Link className='header-link' to={'/'}>Leafea</Link></h2>
            </div>
            <nav>
                <ul className="header-list">
                    {linksList.map((item, index) => (
                        <li className='header-list-item' key={index}>
                            <Link className='header-list-item-link' to={`/${item.link}`}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};