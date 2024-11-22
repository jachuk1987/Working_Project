import React, { useState } from "react";
import { FaXmark, FaBars } from "react-icons/fa6";
import { Link } from "react-scroll";

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    const navItems = [
        {
            link: 'Home', path: 'home'
        },
        {
            link: 'About', path: 'about'
        },
        {
            link: 'Services', path: 'services'
        },
        {
            link: 'Team', path: 'team'
        },
        {
            link: 'Contact', path: 'contact'
        }
    ]
    
    return (
        <div>
            Header 
        </div>
    )
}

export default Header;