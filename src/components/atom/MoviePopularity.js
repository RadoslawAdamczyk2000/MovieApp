import styled from 'styled-components';

export const MoviePopularity = styled.div`
    align-items:center;
    background:var(--red);
    color:var(--grey);
    display:flex;
    justify-content:flex-start;
    padding-left:1rem;
    margin:.5rem 0;
    font-size:2.7rem;

    & > * {
        margin:0 .5rem;
    }
`