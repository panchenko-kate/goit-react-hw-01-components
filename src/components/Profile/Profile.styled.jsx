import styled from 'styled-components';

export const Item = styled.div `
    margin: 50px auto;
    padding: 20px;
    display: flex;
    text-align: center;
    flex-direction: column;
    font-size: 20px;
    width: 400px;
    background-color: #efeff0;
    box-shadow: 5px 5px 10px -2px #CCD0E8;
    border: thick double #758d97;
    border-radius: 20px;
`;

export const Ul = styled.ul`
    display: flex;
    text-align: center;
    justify-content: center;
    gap: 60px;
    font-size:20px;
    padding: 0;

`;

export const Li = styled.li`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const Name = styled.p`
    font-size: 26px;
    font-weight: 700;
`;

export const Label = styled.span`
    font-weight: 500;
    color: #717172;
`;

export const Span = styled.span`
    font-size: 24px;
    font-weight: 700;
`;

export const Img = styled.img`
    width: 350px;
`;

