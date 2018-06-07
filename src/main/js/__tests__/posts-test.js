import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Posts from '../posts/posts';
import { configure } from 'enzyme';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

describe('a test', function(){
    it('testing posts', function(){
        shallow(<Posts />);
    })
})