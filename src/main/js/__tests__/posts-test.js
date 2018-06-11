import React from 'react';
import { shallow } from 'enzyme';
import Posts from '../posts/posts';
import { render } from "react-testing-library";
import "dom-testing-library/extend-expect";

describe('Display multiple posts', function(){

    const {getByTestId} = render(
       <Posts />
    );

    it('displays a title', function(){

        expect(getByTestId("title-content")).toHaveTextContent("Posts")

    })

})
