import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './users';
import { PostList, PostEdit, PostCreate } from '@myreactapp/posts';
import { CommentList, CommentEdit, CommentCreate } from '@myreactapp/comments';
import { OtherList } from '@myreactapp/other';

import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';
import { Dashboard } from './dashboard';
import { authProvider } from './providers/auth';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

export default function App() {
  return (
    <Admin
      authProvider={authProvider}
      dataProvider={dataProvider}
      dashboard={Dashboard}
    >
      <Resource
        name="users"
        list={UserList}
        icon={UserIcon}
        recordRepresentation="name"
      />
      <Resource
        name="posts"
        icon={PostIcon}
        list={PostList}
        edit={PostEdit}
        create={PostCreate}
      />
      <Resource
        name="comments"
        list={CommentList}
        edit={CommentEdit}
        create={CommentCreate}
      />
      <Resource name="other" list={OtherList} />
    </Admin>
  );
}
