import { List, Datagrid, TextField } from 'react-admin';
import { useParams } from 'react-router-dom';

export const PostComments = () => {
  const { id } = useParams();
  return (
    <List resource="songs" filter={{ artistId: id }}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="postId" />
        <TextField source="name" />
        <TextField source="email" />
        <TextField source="body" />
      </Datagrid>
    </List>
  );
};
