import { Button, message, Tooltip } from 'antd';

type Props = {
  did: string;
};

export function Did({ did }: Props) {
  const [messageApi, contextHolder] = message.useMessage();
  const shortDid = did.substring(0, 6) + '...' + did.substring(did.length - 6);

  function copyToClipboard() {
    navigator.clipboard.writeText(did);
    messageApi.info('Did copied to clipboard');
  }

  return (
    <Tooltip title={did}>
      {contextHolder}
      <Button type="default" size="small" onClick={copyToClipboard}>
        {shortDid}
      </Button>
    </Tooltip>
  );
}
