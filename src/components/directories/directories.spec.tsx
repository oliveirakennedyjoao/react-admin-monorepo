import { render } from '@testing-library/react';

import Directories from './directories';

describe('Directories', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Directories />);
    expect(baseElement).toBeTruthy();
  });
});
