// import { Route, Routes } from 'react-router-dom';
// import { ProductList } from '@myreactapp/modules/products';
// import { OrderList } from '@myreactapp/modules/orders';
// import { Posts } from '@myreactapp/posts';
// import { Comments } from '@myreactapp/comments';

import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './users';
import { PostList } from './posts/list';
import { PostEdit } from './posts/edit';
import { PostCreate } from './posts/create';

import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';
import { Dashboard } from './dashboard';
import { authProvider } from './providers/auth';
import { CommentsResource } from '@myreactapp/comments';
import NotFound from './notFound';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

export default function App() {
  return (
    <Admin
      authProvider={authProvider}
      dataProvider={dataProvider}
      dashboard={Dashboard}
      catchAll={NotFound}
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
      <Resource {...CommentsResource} />
    </Admin>
  );
}

// function Home() {
//   return <h1>Welcome to the App</h1>;
// }

// export function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />}></Route>
//       <Route path="/products" element={<ProductList />}></Route>
//       <Route path="/orders" element={<OrderList />}></Route>
//       <Route path="/posts" element={<Posts />}></Route>
//       <Route path="/comments" element={<Comments />}></Route>
//     </Routes>
//   );
// }

// export default App;
