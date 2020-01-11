import React from 'react';
import Api from '../components/api';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

configure({adapter:new Adapter()});

describe('', () => {
    it('', () => {
        expect(true).toBeTruthy();
    });
});

describe('Api component', () => {
    it('renders correctly', () => {
        const page = renderer.create(<Api />).toJSON();
        expect(page).toMatchSnapshot();
    });
});

describe('Api Enzyme Testing', () => {
    it('has a Heading', () => {
        let component = mount(<Api />);
        expect(component.find('div h3').text()).toBe(
            'Words of Wisdom',
        );
    })});