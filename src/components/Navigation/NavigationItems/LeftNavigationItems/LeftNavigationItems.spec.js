import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import LeftNavigationItems from './LeftNavigationItems';

describe('LeftNavigationItems', () => {
  it('should render LeftNavigationItems', () => {
    render(
      <BrowserRouter>
        <LeftNavigationItems />
      </BrowserRouter>
    );
    cleanup();
  });

  it('should render LeftNavigationItems', () => {
    const props = {
      isClient: true
    };
    const { container } = render(
      <BrowserRouter>
        <LeftNavigationItems {...props} />
      </BrowserRouter>
    );
    container.querySelectorAll('.NavItem');
  });
});
