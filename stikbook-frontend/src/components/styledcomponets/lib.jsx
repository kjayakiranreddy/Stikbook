import React from 'react';
import styled from 'styled-components';
import BgImg from '../../assets/images/login_bg.jpg';

export const Button = styled.button`
color: white !important;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid #DDA14B;
border-radius: 3px;
background-color: #DDA14B !important;
border-color: none !important;

`;

export const StyledBody = styled.div`
min-height: 100vh;
display: flex;
font-weight: 400;
font-family: 'Fira Sans', sans-serif;
/* The image used */
background-image: url(${BgImg});
/* Full height */
height: 100%;
/* Center and scale the image nicely */
background-position: center;
background-repeat: no-repeat;
background-size: cover;
display: flex;
justify-content: center;
flex-direction: column;
text-align: left;
border-color: #DDA14B;
box-shadow: none;
`;


export const CenterBox = styled.div`
width: 430px;
margin: auto;
background: #ffffff;
box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
padding: 35px 45px 35px 45px;
border-radius: 15px;
transition: all .3s;
`
export const Hr = styled.hr`
border: none;
height: 1px !important;
/* Set the hr color */
color: #DDA14B; /* old IE */
background-color: #DDA14B; /* Modern Browsers */
`