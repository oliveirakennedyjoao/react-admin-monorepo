import { Admin, DataProvider, Resource } from 'react-admin';

import jsonServerProvider from 'ra-data-json-server';

import { CommentList } from './lib/list';
import { Core } from './lib/core';

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

    cy.get('.column-postId');
  });

  it('should load core componente correctly', () => {
    cy.mount(<Core />);
    cy.get('h1').contains('Core component works!');
  });

  it('should show h2 message', () => {
    cy.mount(<Core />);
    cy.get('h2').contains('Test component is ok!');
  });
});
