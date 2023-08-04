import { useRecordContext } from 'react-admin';

export function CommentTitle() {
  const record = useRecordContext();

  return <span>Post {record ? `"${record.title}"` : ''}</span>;
}
