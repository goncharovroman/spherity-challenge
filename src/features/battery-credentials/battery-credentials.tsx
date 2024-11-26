import { ColumnsType } from 'antd/es/table';
import { BatteryCredential } from '../../types';
import { useBatteryCredentials } from './hooks';
import { Result, Table } from 'antd';
import { CredentialTag } from '../../components/credential-tag';
import { CREDENTIAL_NAMES } from '../../constants';
import { BatteryCredentialInfo } from './battery-credential-info';
import { Did } from '../../components/did';
import { BatteryCredentialsSkeleton } from './battery-credentials-skeleton';
import { useMemo } from 'react';

type Props = {
  credentialRegistry: string;
};

export function BatteryCredentials({ credentialRegistry }: Props) {
  const { isLoading, error, batteryCredentials } = useBatteryCredentials(credentialRegistry);

  const columns: ColumnsType<BatteryCredential> = useMemo(() => {
    const typeFiltersMap: Record<string, string> = {};
    batteryCredentials.forEach((credential) => {
      credential?.type?.forEach((type) => {
        typeFiltersMap[type] = CREDENTIAL_NAMES[type as keyof typeof CREDENTIAL_NAMES] ?? type;
      });
    });
    
    return [
      { title: 'Issuer', dataIndex: 'issuer', fixed: 'left', render: (issuer) => <Did did={issuer} /> },
      {
        title: 'Issuance date',
        dataIndex: 'issuanceDate',
        render: (issuanceDate: string) => new Date(issuanceDate).toLocaleString(),
      },
      {
        title: 'Type',
        dataIndex: 'type',
        filters: Object.entries(typeFiltersMap).map(([value, text]) => ({ text, value })),
        onFilter: (value, record) => record?.type?.includes(value as string) ?? false,
        render: (type: string[]) => type.map((t) => <CredentialTag key={t} type={t} />),
      },
      {
        title: 'Proof',
        children: [
          {
            title: 'Type',
            dataIndex: ['proof', 'type'],
          },
          {
            title: 'Created',
            dataIndex: ['proof', 'created'],
            render: (created: string) => new Date(created).toLocaleString(),
          },
          {
            title: 'Verification Method',
            dataIndex: ['proof', 'verificationMethod'],
            render: (verificationMethod: string) => <Did did={verificationMethod} />,
          },
          {
            title: 'Purpose',
            dataIndex: ['proof', 'proofPurpose'],
          },
        ],
      },
    ];
  }, [batteryCredentials])

  if (isLoading) {
    return <BatteryCredentialsSkeleton />;
  }

  if (error) {
    return (
      <Result
        status="500"
        title="500"
        subTitle={error.message || 'Sorry, something went wrong. Please, try to reload the page later'}
      />
    );
  }

  return (
    <Table
      columns={columns}
      dataSource={batteryCredentials}
      rowKey={(record) => record.id}
      expandable={{
        expandedRowRender: (record) => <BatteryCredentialInfo batteryCredential={record} />,
      }}
      bordered
      size="small"
      scroll={{ x: 'calc(700px + 50%)' }}
      // Pagination is turned off because the data is not paginated on the server side,
      // and there is no understanding of the total number of records.
      pagination={false}
    />
  );
}
