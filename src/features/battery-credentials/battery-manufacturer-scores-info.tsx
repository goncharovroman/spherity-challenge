import { Descriptions } from 'antd';
import { BatteryManufacturerScoresCredentialSubject } from '../../types';

type Props = {
  credentialSubject: BatteryManufacturerScoresCredentialSubject;
};

export function BatteryManufacturerScoresInfo({ credentialSubject }: Props) {
  const { esgScore, dueDiligenceScore, greenhouseGasScore } = credentialSubject;

  const items = [
    {
      label: 'ESG Score',
      children: esgScore,
    },
    {
      label: 'Due Diligence Score',
      children: dueDiligenceScore,
    },
    {
      label: 'Greenhouse Gas Score',
      children: greenhouseGasScore,
    },
  ];

  return <Descriptions size="small" items={items} />;
}
