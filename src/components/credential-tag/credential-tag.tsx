import { CREDENTIAL_NAMES, CREDENTIAL_TYPES } from '../../constants';
import { Tag } from 'antd';
import { ObjValues } from '../../types-utils';

type Props = {
  type: string;
};

const tagColor = {
  [CREDENTIAL_TYPES.verifiableCredential]: 'green',
  [CREDENTIAL_TYPES.batteryDPP]: 'blue',
  [CREDENTIAL_TYPES.rcsScores]: 'blue',
};

type CredentialValues = ObjValues<typeof CREDENTIAL_TYPES>;

export function CredentialTag({ type }: Props) {
  const color = tagColor[type as CredentialValues] || 'geekblue';
  return <Tag color={color}>{CREDENTIAL_NAMES[type as CredentialValues] || type}</Tag>;
}
