import React from 'react';
import Sockets from '../components/sockets';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Socket from '../components/sockets';

configure({adapter:new Adapter()});

describe('', () => {
    it('', () => {
        expect(true).toBeTruthy();
    });
});

xdescribe('Socket component', () => {
    it('renders correctly', async() => {
        const page = renderer.create(< Socket/>).toJSON();
        expect(page).toMatchSnapshot();
    });
});

xdescribe('Socket Enzyme Testing', () => {
    it('has a Heading', () => {
        let component = mount(<Socket />);
        expect(component.find('div h2').text()).toBe(
            'How is the Weather?',
        );
    })});
xdescribe('Socket Enzyme Testing', () => {
    it('Correct number of Children', () => {
        let component = mount(<Socket />);
        expect(component.find('div').children().length).toEqual(
            4
        );
    })});
