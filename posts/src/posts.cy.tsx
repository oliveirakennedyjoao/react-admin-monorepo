import { Admin, Resource } from 'react-admin';

import jsonServerProvider from 'ra-data-json-server';

import { PostList } from './index';

describe('Posts', () => {
  const dataProvider = jsonServerProvider(
    'https://jsonplaceholder.typicode.com'
  );

  it('renders list', () => {
    cy.mount(
      <Admin dataProvider={dataProvider}>
        <Resource name="posts" list={PostList}></Resource>
      </Admin>
    );

    cy.get('.column-body').should('exist');
  });
});
