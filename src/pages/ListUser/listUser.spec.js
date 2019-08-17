import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import ListUser from './ListUser';

describe('render <ListUser />', () => {
  it('should render ListUser Page', () => {
    const { container } = render(
      <BrowserRouter>
        <ListUser />
      </BrowserRouter>
    );
    expect(container.querySelector('.list-account-main').className).toBe(
      'list-account-main'
    );
  });
});
