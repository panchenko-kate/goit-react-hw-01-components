import styled from 'styled-components';

export const Table = styled.table`
    margin: 50px auto;
    border-collapse: collapse;
    border: 2px solid #fdfcff;
    padding: 8px;
    width: 500px;
`;

export const Head = styled.thead`
    border: 2px solid #efeef1;
    background-color: #8cc8d3;
    color: white;
    text-transform: uppercase;
`; 

export const Bodyth = styled.td`
    padding: 10px 50px;
    border: 2px solid #efeef1;
    :first-letter {
        text-transform: uppercase;
    }
`; 

export const Title = styled.th`
    padding-top: 12px;
    padding-bottom: 12px;
`; 

export const String = styled.tr`
    :nth-child(even) {
        background-color: #e0e9ea;
    }
`