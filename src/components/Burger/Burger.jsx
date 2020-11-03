import React from 'react';
import { bool, func } from 'prop-types';
import { StyledBurger } from './Burger.styled';

function Burger({ open, setOpen }) {
    
    const handleClick = () => {
        setOpen(!open);
    }
    
    return (
        <StyledBurger open={open} onClick={handleClick}>
            <div />
            <div />
            <div />
        </StyledBurger>
    );
}

Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired
};

export default Burger;