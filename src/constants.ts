export const CREDENTIAL_TYPES = {
    verifiableCredential: "VerifiableCredential",
    batteryDPP: "BatteryDPP",
    rcsScores: "rcs_scores"
} as const;

export const CREDENTIAL_NAMES = {
    [CREDENTIAL_TYPES.verifiableCredential]: "Verifiable credential",
    [CREDENTIAL_TYPES.batteryDPP]: "Battery DPP",
    [CREDENTIAL_TYPES.rcsScores]: "RCS scores"
} as const;
