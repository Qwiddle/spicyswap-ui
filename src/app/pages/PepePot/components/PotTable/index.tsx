import { PotTable as Table } from './styles';
import { truncateMiddle } from 'utils/user-address';
import { TableHeading } from './types';
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
                {(typeof op.outcome !== 'undefined' &&
                  (op.outcome ? 'WIN!' : 'Loss')) ||
                  'Pending'}
              </td>
              <td className="table__transaction u-text-right">
                <a
                  href={`https://ghostnet.tzkt.io/${op.operation}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {op.operation && truncateMiddle(op.operation, 12)}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    )
  );
};
