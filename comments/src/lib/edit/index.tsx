import { Edit, SimpleForm, TextInput } from 'react-admin';
import { CommentTitle } from '../components/comment-title';

export function CommentEdit() {
  return (
    <Edit title={<CommentTitle />}>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="postId" disabled />
        <TextInput source="name" />
        <TextInput source="email" />
        <TextInput source="body" multiline rows={5} />
      </SimpleForm>
    </Edit>
  );
}
