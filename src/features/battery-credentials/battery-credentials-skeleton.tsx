import { Skeleton } from 'antd';

export function BatteryCredentialsSkeleton() {
  return <Skeleton title={{ width: '100%' }} paragraph={{ rows: 5, width: '100%' }} />;
}
