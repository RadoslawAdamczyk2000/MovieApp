import React from 'react';
import styled from 'styled-components';
import { favsAPI } from '../../data/favsAPI';

const MovieDisfavouriteButtonStyle = styled.button`
    border:none;
    outline:none;
    cursor:pointer;
    background:var(--grey);
    color:var(--redDark);
    width:22rem;
    height:5rem;
    font-size:1.8rem;
    text-transform:uppercase;
    font-weight:900;
    transition:.2s linear filter;

    &:hover {
        filter: brightness(150%);
    }
`

export const MovieDisfavouriteButton = ({ title, poster}) => {

    const removeMovie = e => {

        const favElementAPI = {
            title: e.title,
            poster:e.poster
        }


        favsAPI.slice(favElementAPI ,1);
        console.log(favsAPI);
    }


    return (
        <MovieDisfavouriteButtonStyle onClick={removeMovie}>
            Remove from fav
        </MovieDisfavouriteButtonStyle>
    )
}