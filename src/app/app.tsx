import { Route, Routes } from 'react-router-dom';
import { ProductList } from '@myreactapp/modules/products';
import { OrderList } from '@myreactapp/modules/orders';
import { Posts } from '@myreactapp/posts';
import { Comments } from '@myreactapp/comments';

function Home() {
  return <h1>Welcome to the App</h1>;
}

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/products" element={<ProductList />}></Route>
      <Route path="/orders" element={<OrderList />}></Route>
      <Route path="/posts" element={<Posts />}></Route>
      <Route path="/comments" element={<Comments />}></Route>
    </Routes>
  );
}

export default App;
