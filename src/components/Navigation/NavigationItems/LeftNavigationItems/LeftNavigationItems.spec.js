import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import LeftNavigationItems from './LeftNavigationItems';

describe('LeftNavigationItems', () => {
  // const renderInput = (args) => {
  //   const defaultprops = {
  //     elementConfig: {
  //       placeholder: 'Your Email',
  //       required: true,
  //       type: 'email',
  //       elementtype: 'input',
  //       invalid: 'true'
  //     }
  //   };
  //   const props = { ...defaultprops, ...args };
  //   return render(<LeftNavigationItems {...props} />);
  // };
  it('should render LeftNavigationItems', () => {
    const { container, debug } = render(
      <BrowserRouter>
        <LeftNavigationItems />
      </BrowserRouter>
    );
    cleanup();
    //debug();
  });

  it('should render LeftNavigationItems', () => {
    const props = {
      isClient: true
    };
    const { container, debug } = render(
      <BrowserRouter>
        <LeftNavigationItems {...props} />
      </BrowserRouter>
    );
    const navItems = container.querySelectorAll('.NavItem');
  });
});
