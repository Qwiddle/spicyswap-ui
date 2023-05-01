import { PotTable as Table } from './styles';
import { truncateMiddle } from 'utils/user-address';
import { TableData, TableHeading } from './types';
import { PepePotBetHistory } from '../../types';

export const PotTable = ({ rows }: { rows: PepePotBetHistory[] }) => {
  const tableHeadings: TableHeading[] = [
    {
      name: 'Account',
      align: 'left',
    },
    {
      name: 'Odds (%)',
      align: 'right',
    },
    {
      name: 'Pot',
      align: 'right',
    },
    {
      name: 'Outcome',
      align: 'right',
    },
    {
      name: 'Transaction ID',
      align: 'right',
    },
  ];

  const operations: TableData[] = [
    {
      account: 'tz1RLomvUivaCNUmec7gALquhGMu5PgzMvkP',
      odds: '65%',
      pot: 140000,
      outcome: true,
      operation: 'opD5Ng7GsK1bJbvuLzNzjDX3vA6chetVnhgEn1kZ6VweefMNhoY',
    },
    {
      account: 'tz1RLomvUivaCNUmec7gALquhGMu5PgzMvkP',
      odds: '60%',
      pot: 135000,
      outcome: false,
      operation: 'opD5Ng7GsK1bJbvuLzNzjDX3vA6chetVnhgEn1kZ6VweefMNhoY',
    },
    {
      account: 'tz1RLomvUivaCNUmec7gALquhGMu5PgzMvkP',
      odds: '55%',
      pot: 130000,
      outcome: false,
      operation: 'opD5Ng7GsK1bJbvuLzNzjDX3vA6chetVnhgEn1kZ6VweefMNhoY',
    },
  ];

  return (
    rows && (
      <Table>
        <thead>
          <tr>
            {tableHeadings.map((head, index) => (
              <th key={`th-${index}`} className={`u-text-${head.align}`}>
                {head.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((op, index) => (
            <tr key={`tr-${index}`}>
              <td className="table__account">
                <a href="/" className="table__account-content table__link">
                  <span className="table__account-name">
                    {truncateMiddle(op.account, 12)}
                  </span>
                </a>
              </td>
              <td className="table__odds u-text-right">
                <span className="num_negative"> {op.odds} </span>
              </td>
              <td className="table__limit u-text-right">{op.pot}</td>
              <td className="table__outcome u-text-right">
                {op.outcome ? 'WIN!' : 'Loss'}
              </td>
              <td className="table__transaction u-text-right">
                <a
                  href={`https://tzkt.io/${op.operation}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {truncateMiddle(op.operation, 12)}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    )
  );
};
