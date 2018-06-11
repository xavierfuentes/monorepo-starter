import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

describe('<Button />', () => {
  describe('onClick()', () => {
    test('successfully calls the onClick handler', () => {
      const mockOnClick = jest.fn();
      const wrapper = shallow(<Button onClick={mockOnClick}>button</Button>);

      wrapper.find('button').simulate('click');

      expect(mockOnClick.mock.calls.length).toEqual(1);
    });
  });
});
