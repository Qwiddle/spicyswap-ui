import styled from 'styled-components';

export const PotTable = styled.table`
  background-color: ${p => p.theme.primary};
  border-radius: 4px;
  border-collapse: collapse;
  box-shadow: 0 2px 10px rgba(0, 67, 115, 0.2);
  width: 100%;
  max-width: 800px;
  border-radius: 14px;
  color: ${p => p.theme.textSecondary};
  order: 5;

  thead {
    text-transform: uppercase;
    font-weight: normal;
    font-size: 0.75rem;
  }

  td,
  th {
    padding: 1rem 1.5rem;
  }

  .u-text-left {
    text-align: left;
  }

  .table__link {
    text-decoration: none;
    color: ${p => p.theme.textSecondary};
  }

  .table__transaction {
    a {
      color: ${p => p.theme.text};
    }
  }

  .u-text-right {
    text-align: right;
  }

  .u-text-center {
    text-align: center;
  }

  .text-center {
    text-align: center;
  }

  @media (max-width: 600px) {
    font-size: 14px;

    thead {
      display: none;
    }

    tr {
      display: grid;
      grid-template-columns: 2fr 2fr 2fr;
      grid-template-rows: 1fr 1fr;
      grid-column-gap: 1rem;
      align-items: center;
      padding: 1rem;
      border-radius: 14px;
    }

    td {
      padding: 0;
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .table__account {
      grid-column: 1;
      grid-row: span 2;
    }

    .table__account-content {
      display: flex;
      flex-direction: column;
    }

    .table__odds {
      grid-column: 2;
      grid-row: 2;
      font-size: 0.75rem;
      padding-top: 0.125rem;
    }

    .table__odds::before {
      content: 'Odds: ';
    }

    .table__pot::before {
      content: 'Pot: ';
    }

    .table__transaction {
      grid-column: 3;
      grid-row: span 2;
    }

    .table__outcome {
      grid-column: 2;
      grid-row: 1;
    }
  }
`;
