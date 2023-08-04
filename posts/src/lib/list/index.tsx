import {
  List,
  Datagrid,
  TextField,
  TextInput,
  ReferenceField,
  ReferenceInput,
  EditButton,
} from 'react-admin';

const postFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="userId" label="User" reference="users" />,
];

export function PostList() {
  return (
    <List filters={postFilters}>
      <Datagrid>
        <TextField source="id" />
        <ReferenceField source="userId" reference="users" />
        <TextField source="title" />
        <TextField source="body" />
        <EditButton />
      </Datagrid>
    </List>
  );
}
