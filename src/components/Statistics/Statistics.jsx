import PropTypes from 'prop-types';
import { Section, Title, List, Item, SpanLabel, Percent,  } from './Statistics.styled';

function getRandomHexColor() {
    return `#${Math.floor(Math.random()* 16777215).toString(16)}`;
}

export const Statistics = ({ title, stats }) => {
    return (
        <Section>
            {title && (<Title>{title}</Title>)}
            <List>
            {stats.map(item => (
                <Item key={item.id} style={{backgroundColor: getRandomHexColor()}}>
                <SpanLabel>{item.label}</SpanLabel>
                <Percent>{item.percentage}%</Percent>
                </Item>                
            ))}
            </List>
        </Section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }))
}