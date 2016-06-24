'use babel';

import chai, {expect} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import {shallow, mount} from 'enzyme';
import React from 'react';
import Clock from '../../lib/components/Clock';

chai.use(sinonChai);

describe('<Clock />', () => {
  it('should render', () => {
    const wrapper = shallow(<Clock />);
    expect(wrapper.length).to.equal(1);
  });

  xit('should periodically update the time', (done) => {
    // TODO: hack in a global document to get mount working
    const wrapper = mount(<Clock />);
    const spy = sinon.spy(wrapper.instance(), 'getPrettyTime');

    setTimeout(() => {
      spy.should.have.been.called;
      done();
    }, 2000);
  });
});
