import { render } from '@testing-library/react';

import PagesUi from './pages-ui';

describe('PagesUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PagesUi />);
    expect(baseElement).toBeTruthy();
  });
});
