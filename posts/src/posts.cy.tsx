import { Admin, Resource } from 'react-admin';

import jsonServerProvider from 'ra-data-json-server';

import { PostList } from './index';

describe('Posts', () => {
  const dataProvider = jsonServerProvider(
    'https://jsonplaceholder.typicode.com'
  );

  it('renders', () => {
    cy.mount(
      <Admin dataProvider={dataProvider}>
        <Resource name="post" list={PostList}></Resource>
      </Admin>
    );
  });
});
