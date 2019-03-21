import React from 'react';
import { mount, shallow } from 'enzyme';
import GifList from './GifList';

describe('<GifList />', () => {
    const gifsData = [{
        id: "MOCK1",
        images: {
            fixed_height: { url: "https://media2.giphy.com/media/zSUanrp1uZHfq/200.gif" },
            original: { url: "https://media2.giphy.com/media/zSUanrp1uZHfq/giphy.gif" },
        }
    }, {
        id: "MOCK2",
        images: {
            fixed_height: { url: "https://media2.giphy.com/media/zSUanrp1uZHfq/200.gif" },
            original: { url: "https://media2.giphy.com/media/zSUanrp1uZHfq/giphy.gif" },
        }
    }];
    it('render itself', () => {
        const component = shallow(<GifList gifsToShow={gifsData} favorites={gifsData} title='test' />);
        expect(component).toMatchSnapshot();
    });
    it('should show 2 items since we\'re passing two items in the gifs array', () => {
        const component = mount(<GifList gifsToShow={gifsData} favorites={gifsData} title='test' />);
        expect(component.find('.ui.container').length).toEqual(1);
        expect(component.find('.ui.header.h1').length).toEqual(1);
        expect(component.find('GridColumn').length).toEqual(2);
    });
});