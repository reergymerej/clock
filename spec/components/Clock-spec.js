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

  it('should periodically update the time', () => {

    runs(() => {
      wrapper = mount(<Clock />);
      spy = sinon.spy(wrapper.instance(), 'getPrettyTime');

      ready = false;
      wait = 3000;

      setTimeout(() => {
        console.log('>>>>>>>>>>>>>set ready');
        ready = true;
      });
    });

    waitsFor(() => {
      // console.log('??ready', ready);
      return ready;
    }, '', wait + wait);

    runs(() => {
      spy.should.have.been.called;
    });
  });
});
