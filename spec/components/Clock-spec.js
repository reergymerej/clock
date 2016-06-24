'use babel';

import {expect} from 'chai';
import {shallow} from 'enzyme';
import React from 'react';
import Clock from '../../lib/components/Clock';

describe('<Clock />', () => {
  it('should render', () => {
    const wrapper = shallow(<Clock />);
    expect(wrapper.length).to.equal(1);
  });
});
