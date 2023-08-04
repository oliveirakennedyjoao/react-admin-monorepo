import {
  Datagrid,
  EditButton,
  Link,
  List,
  //   ReferenceField,
  TextField,
  useRecordContext,
} from 'react-admin';

import { useParams } from 'react-router-dom';
import { Button } from '@mui/material';

export function CommentList() {
  return (
    <List>
      <Datagrid>
        <TextField source="id" />
        <TextField source="postId" />
        <TextField source="name" />
        <TextField source="email" />
        <TextField source="body" />
        {/* <ReferenceField source="userId" reference="users" /> */}
        <EditSongButton />
      </Datagrid>
    </List>
  );
}

const EditSongButton = () => {
  const comment = useRecordContext();
  return (
    <Button
      component={Link}
      to={`/comments/${comment?.postId}/author/${comment?.id}`}
    >
      Edit
    </Button>
  );
};
