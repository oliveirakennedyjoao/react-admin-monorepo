import { Create, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

export function CommentCreate() {
  return (
    <Create>
      <SimpleForm>
        <ReferenceInput source="postId" reference="posts" />
        <TextInput source="name" fullWidth />
        <TextInput source="email" fullWidth />
        <TextInput source="body" multiline rows={5} fullWidth />
      </SimpleForm>
    </Create>
  );
}
