import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import emStyled from '@emotion/styled';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';
// import { Global } from '@emotion/react';
import "./Header.css";
export const Header = () => {

    return (
        <div className="header">
            
            <IconButton>
                <PersonIcon fontSize="large" className="header_icon"/>
            </IconButton>


       <img className="header_logo" src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png" alt="img"/>
       <IconButton>
         <ForumIcon fontSize="large" className="header_icon"/>
         </IconButton>
        </div>
    );
    }