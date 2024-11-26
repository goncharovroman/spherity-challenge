export type Proof = {
    jws?: string;
    type?: string;
    created?: string;
    proofPurpose?: string;
    verificationMethod?: string;
}

export type BatteryCellScan = {
    scanDate?: string;
    scanImage?: string;
    scanTitle?: string;
    scanImageSize?: string;
    QARequirementsMet?: string;
}

export type CTScans = {
    impurities?: string;
    anodeOverhang?: string;
    batteryCellScan?: BatteryCellScan;
    housingAndTheCathode?: BatteryCellScan;
    casingCathodeAndAnode?: BatteryCellScan;
    casingAndElectrodeAlignment?: string;
}

export type PerformanceMetrics = {
    energyDensity?: number;
    capacityRetention?: string;
    chargeDischargeRate?: string;
}

export type SafetyDurabilityTests = {
    lifeCycle?: string;
    vibrationShock?: string;
    shortCircuitResistance?: string;
}

export type BatteryCellHomologation = {
    chargeRate?: string;
    energyDensity?: number;
    lifeExpectancy?: string;
}

export type TemperatureToleranceTests = {
    operatingRange?: string;
    thermalStability?: string;
    coolingEfficiency?: string;
}

export type Material = {
    materialName?: string;
    materialWeight?: number;
    materialPercentageMassFraction?: number;
}

export type CellChemistry = {
    anodeActiveMaterials?: Material[];
    anodeCompositionOther?: Material[];
    cathodeActiveMaterials?: Material[];
    electrolyteComposition?: Material[];
    cathodeCompositionOther?: Material[];
    recyclateContentActiveMaterials?: Material[];
}

export type File = {
    fileUrl?: string;
    fileName?: string;
    fileSize?: string;
    uploadDate?: string;
}


export type BatteryQualityAssuranceCredentialSubject = {
    id?: string;
    PPAP?: {
        QAConfirmed?: boolean;
        approvalDate?: string;
    };
    CTScans?: CTScans;
    batchUUID?: string;
    cellSampleUUID?: string;
    performanceMetrics?: PerformanceMetrics;
    safetyDurabilityTests?: SafetyDurabilityTests;
    batteryCellHomologation?: BatteryCellHomologation;
    temperatureToleranceTests?: TemperatureToleranceTests;
}

export type BatterySpecificationCredentialSubject = {
    id?: string;
    esgScore?: string;
    location?: string;
    voltageMin?: string;
    batteryModel?: string;
    manufacturer?: string;
    batteryWeight?: string;
    cellChemistry?: CellChemistry;
    materialFiles?: File[];
    ratedCapacity?: string;
    voltageMaximum?: string;
    voltageNominal?: string;
    batteryCategory?: string;
    lifeCycleStatus?: string;
    supplyChainFiles?: File[];
    dueDiligenceScore?: string;
    manufacturingDate?: string;
    certificationFiles?: File[];
    expectedLifetimeKm?: string;
    greenhouseGasScore?: string;
    manufacturingPlace?: string;
    chemistryComposition?: string;
    tripEnergyEfficiency?: string;
    expectedLifetimeMiles?: string;
    expectedLifetimeYears?: string;
    maximumPowerPermitted?: string;
    cycleLifeReferenceTest?: string;
    originalPowerCapability?: string;
    temperatureIdleStateMax?: string;
    temperatureIdleStateMin?: string;
    commercialWarrantyPeriod?: string;
    initialDischargeCapacity?: string;
    manufacturerIdentification?: string;
    exhaustionCapacityThreshold?: string;
}

export type BatteryManufacturerScoresCredentialSubject = {
    id?: string;
    esgScore?: string;
    dueDiligenceScore?: string;
    greenhouseGasScore?: string;
}

export type VerifiableCredential<T> = {
    id: string;
    type?: string[];
    proof?: Proof;
    issuer?: string;
    "@context"?: string[];
    issuanceDate?: string;
    credentialSubject?: T;
}

export type BatteryQualityAssuranceCredential = VerifiableCredential<BatteryQualityAssuranceCredentialSubject>;
export type BatterySpecificationCredential = VerifiableCredential<BatterySpecificationCredentialSubject>;
export type BatteryManufacturerScoresCredential = VerifiableCredential<BatteryManufacturerScoresCredentialSubject>;

export type BatteryCredential = BatteryQualityAssuranceCredential | BatterySpecificationCredential | BatteryManufacturerScoresCredential