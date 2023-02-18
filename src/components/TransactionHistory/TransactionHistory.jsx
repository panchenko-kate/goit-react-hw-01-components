import { Table, Head, Bodyth, Title, String } from './TransactionHistiry.styled'

export const TransactionHistiry = ({ items }) => {
    return (
        <Table>
        <Head>
            <tr>
            <Title>Type</Title>
            <Title>Amount</Title>
            <Title>Currency</Title>
            </tr>
        </Head>

        <tbody>
        {items.map(item => (
            <String key={item.id}>
            <Bodyth>{item.type}</Bodyth>
            <Bodyth>{item.amount}</Bodyth>
            <Bodyth>{item.currency}</Bodyth>
            </String>
        ))}
        </tbody>
        </Table>
    )
}


