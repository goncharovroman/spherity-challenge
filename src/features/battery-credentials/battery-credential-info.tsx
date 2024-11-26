import { BatteryCredential, BatterySpecificationCredentialSubject } from '../../types';
import { CREDENTIAL_TYPES } from '../../constants';
import { BatteryManufacturerScoresInfo } from './battery-manufacturer-scores-info';
import { BatterySpecificationInfo } from './battery-specification-info';

type Props = {
  batteryCredential: BatteryCredential;
};

export function BatteryCredentialInfo({ batteryCredential }: Props) {
  const { credentialSubject, type } = batteryCredential;

  if (type?.includes(CREDENTIAL_TYPES.rcsScores)) {
    return (
      <BatteryManufacturerScoresInfo credentialSubject={credentialSubject as BatterySpecificationCredentialSubject} />
    );
  }

  // looks like in the test data should be a different credential type for BatteryQualityAssuranceCredential, not batteryDPP
  // that's why here is added cellChemistry check
  if (credentialSubject && 'cellChemistry' in credentialSubject) {
    return <BatterySpecificationInfo credentialSubject={credentialSubject} />;
  }

  return <p>There is no info for this credential</p>;
}
