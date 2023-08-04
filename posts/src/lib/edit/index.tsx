import { Edit, ReferenceInput, SimpleForm, TextInput } from 'react-admin';
import { PostTitle } from '../title';

export function PostEdit() {
  return (
    <Edit title={<PostTitle />}>
      <SimpleForm>
        <TextInput source="id" disabled />
        <ReferenceInput source="userId" reference="users" />
        <TextInput source="title" />
        <TextInput source="body" multiline rows={5} />
      </SimpleForm>
    </Edit>
  );
}
