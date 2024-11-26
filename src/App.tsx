import styles from './app.module.css';
import { BatteryCredentials } from './features/battery-credentials';

const demoCredentialRegistry =
  'did:web:api-rcs.susi.spherity.dev:did-registry:acme-power-drive-x-1000-3985-cb-1739186-d-8-d';

function App() {
  return (
    <div className={styles.app}>
      <BatteryCredentials credentialRegistry={demoCredentialRegistry} />
    </div>
  );
}

export default App;
