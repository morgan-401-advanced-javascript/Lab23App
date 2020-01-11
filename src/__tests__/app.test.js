import React from 'react';
import App from '../components/App';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

configure({adapter:new Adapter()});

describe('', () => {
    it('', () => {
        expect(true).toBeTruthy();
    });
});

describe('App component', () => {
    it('renders correctly', () => {
        const page = renderer.create(<App />).toJSON();
        expect(page).toMatchSnapshot();
    });
});

describe('App Enzyme Testing', () => {
    it('has a  Heading', () => {
        let component = mount(<App />);
        expect(component.find('div.App h1').text()).toBe(
            'LAB 23!',
        );
    })});