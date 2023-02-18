import styled from 'styled-components';

export const Section = styled.section`
    width: 500px;    
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 50px auto;
    border: 2px solid #5b5b5b;
`;

export const Title = styled.h2`
    background-color: #efeef1;
    color: #5b5b5b;
    margin: 0;
    padding: 26px;
    font-size: 30px;
    text-transform: uppercase;
`;

export const List = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 0;
    width: 20%;
    height: 70px;
`;

export const SpanLabel = styled.span`
    display: flex;
    font-weight: 700;
    color: #efeded;
`;

export const Percent = styled.span`
    display: flex;
    font-size: 24px;
    font-weight: 500;
    color: #efeded;
`;