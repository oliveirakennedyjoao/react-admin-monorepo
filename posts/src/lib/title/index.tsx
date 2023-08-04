import { useRecordContext } from "react-admin";

export function PostTitle() {
  const record = useRecordContext();
  return <span>Post {record ? `"${record.title}"` : ""}</span>;
}
