import styled from 'styled-components';

export const OpinionImage = styled.div`
    width:20rem;
    height:20rem;
    border-radius:50%;
    background-size:cover;
    background-position:center;
    background-image:url(${props => props.opinionUser});
    position:relative;
    margin:auto;
`  