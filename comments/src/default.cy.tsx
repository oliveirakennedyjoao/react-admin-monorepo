import { Admin, DataProvider, Resource } from 'react-admin';

import jsonServerProvider from 'ra-data-json-server';

import { CommentList } from './lib/list';

describe('Comments', () => {
  const dataProvider: DataProvider = jsonServerProvider(
    'https://jsonplaceholder.typicode.com'
  );

  it('renders', () => {
    cy.mount(
      <Admin dataProvider={dataProvider}>
        <Resource name="comments" list={CommentList}></Resource>
      </Admin>
    );

    cy.get('.column-postId').should('exist');
  });
});
