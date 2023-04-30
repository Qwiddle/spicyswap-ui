export interface TableHeading {
  name: string;
  align: 'left' | 'right' | 'center';
}

export interface TableData {
  account: string;
  odds: string;
  pot: number;
  outcome: boolean;
  operation: string;
}
