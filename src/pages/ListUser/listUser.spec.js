import React from 'react';
import { render, getByText } from '@testing-library/react';
import ListUser from './ListUser';

describe('render <ListUser />', () => {
  it('should render ListUser Page', () => {
    const { container } = render(<ListUser />);
    expect(container.querySelector('.list-account-main').className).toBe('list-account-main');
  });
});
