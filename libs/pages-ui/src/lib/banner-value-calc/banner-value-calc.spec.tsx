import { render } from '@testing-library/react';

import BannerValueCalc from './banner-value-calc';

describe('BannerValueCalc', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BannerValueCalc />);
    expect(baseElement).toBeTruthy();
  });
});
