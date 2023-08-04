import { Datagrid, EditButton, List, TextField } from 'react-admin';

export function CommentList() {
  return (
    <List>
      <Datagrid>
        <TextField source="id" />
        <TextField source="postId" />
        <TextField source="name" />
        <TextField source="email" />
        <TextField source="body" />
        <EditButton />
      </Datagrid>
    </List>
  );
}
