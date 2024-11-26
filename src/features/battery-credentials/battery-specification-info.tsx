import { Button, Descriptions } from 'antd';
import { BatterySpecificationCredentialSubject } from '../../types';
import { DescriptionsItemType } from 'antd/es/descriptions';
import { ReactElement } from 'react';
import { DownloadOutlined } from '@ant-design/icons';

type Props = {
  credentialSubject: BatterySpecificationCredentialSubject;
};

export function BatterySpecificationInfo({ credentialSubject }: Props) {
  const items: DescriptionsItemType[] = [
    {
      label: 'Battery Category',
      children: credentialSubject.batteryCategory,
    },
    {
      label: 'Battery Model',
      children: credentialSubject.batteryModel,
    },
    {
      label: 'Battery Weight',
      children: credentialSubject.batteryWeight,
    },
    {
      label: 'Chemistry Composition',
      children: credentialSubject.chemistryComposition,
    },
    {
      label: 'Commercial Warranty Period',
      children: credentialSubject.commercialWarrantyPeriod,
    },
    {
      label: 'Cycle Life Reference Test',
      children: credentialSubject.cycleLifeReferenceTest,
    },
    {
      label: 'Due Diligence Score',
      children: credentialSubject.dueDiligenceScore,
    },
    {
      label: 'ESG Score',
      children: credentialSubject.esgScore,
    },
    {
      label: 'Expected Lifetime Km',
      children: credentialSubject.expectedLifetimeKm,
    },
    {
      label: 'Expected Lifetime Miles',
      children: credentialSubject.expectedLifetimeMiles,
    },
    {
      label: 'Expected Lifetime Years',
      children: credentialSubject.expectedLifetimeYears,
    },
    {
      label: 'Exhaustion Capacity Threshold',
      children: credentialSubject.exhaustionCapacityThreshold,
    },
    {
      label: 'Greenhouse Gas Score',
      children: credentialSubject.greenhouseGasScore,
    },
    {
      label: 'Initial Discharge Capacity',
      children: credentialSubject.initialDischargeCapacity,
    },
    {
      label: 'Life Cycle Status',
      children: credentialSubject.lifeCycleStatus,
    },
    {
      label: 'Manufacturing Date',
      children: credentialSubject.manufacturingDate,
    },
    {
      label: 'Manufacturing Place',
      children: credentialSubject.manufacturingPlace,
    },
    {
      label: 'Manufacturer',
      children: credentialSubject.manufacturer,
    },
    {
      label: 'Manufacturer Identification',
      children: credentialSubject.manufacturerIdentification,
    },
    {
      label: 'Maximum Power Permitted',
      children: credentialSubject.maximumPowerPermitted,
    },
    {
      label: 'Nominal Voltage',
      children: credentialSubject.voltageNominal,
    },
    {
      label: 'Original Power Capability',
      children: credentialSubject.originalPowerCapability,
    },
    {
      label: 'Rated Capacity',
      children: credentialSubject.ratedCapacity,
    },
    {
      label: 'Temperature Idle State Max',
      children: credentialSubject.temperatureIdleStateMax,
    },
    {
      label: 'Temperature Idle State Min',
      children: credentialSubject.temperatureIdleStateMin,
    },
    {
      label: 'Trip Energy Efficiency',
      children: credentialSubject.tripEnergyEfficiency,
    },
    {
      label: 'Voltage Maximum',
      children: credentialSubject.voltageMaximum,
    },
    {
      label: 'Voltage Minimum',
      children: credentialSubject.voltageMin,
    },
  ];

  const files: ReactElement[] = [];

  [credentialSubject.materialFiles, credentialSubject.supplyChainFiles, credentialSubject.certificationFiles].forEach(
    (filesArray) => {
      filesArray?.forEach((file) => {
        files.push(
          <>
            <Button
              icon={<DownloadOutlined />}
              size="small"
              type="link"
              href={file.fileUrl}
              target="_blank"
              rel="noreferrer"
            >
              {file.fileName}
            </Button>
            <br />
          </>
        );
      });
    }
  );

  items.push({
    label: 'Files',
    children: <div>{files}</div>,
  });

  return <Descriptions size="small" items={items} />;
}
