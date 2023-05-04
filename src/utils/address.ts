import { b58cencode, prefix } from '@taquito/utils';

export const bytesToPkh = (bytes: string) => {
  const tag1 = bytes.substr(0, 2);
  let p, pk;

  // KT1
  if (tag1 === '01') {
    p = prefix.KT1;
    pk = bytes.substr(2, 40);
  }

  // Implicit (tz1, tz2, tz3)
  if (tag1 === '00') {
    pk = bytes.substr(4, 40);
    const tag2 = bytes.substr(2, 2);
    switch (tag2) {
      case '00':
        p = prefix.tz1;
        break;
      case '02':
        p = prefix.tz2;
        break;
      case '03':
        p = prefix.tz3;
        break;
    }
  }

  return b58cencode(pk, p);
};
