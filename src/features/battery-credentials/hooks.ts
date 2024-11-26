import { useEffect, useState } from "react";
import { BatteryCredential } from "../../types";

export const useBatteryCredentials = (credentialRegistry: string) => {
    const [batteryCredentials, setBatteryCredentials] = useState<BatteryCredential[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error>();

    useEffect(() => {
        fetch(process.env.REACT_APP_BASE_API_URL + '/credential-registry/' + credentialRegistry)
            .then(response => response.json())
            .then(setBatteryCredentials)
            .catch(setError)
            .finally(() => { setIsLoading(false) });
    }, [credentialRegistry]);

    return { batteryCredentials, isLoading, error };
}