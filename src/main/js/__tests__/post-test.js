import React from 'react';
import Post from '../posts/post';
import { render } from "react-testing-library"
import "dom-testing-library/extend-expect";


describe('Display Post', function(){

    it('components receives props and renders text', function(){

        const{ getByTestId } = render(
        <Post post = {{comment: "Hey, Folks! Welcome to Acebook!", createdAt: "2018-06-11"}}/>
        );

        expect(getByTestId("post-content")).toHaveTextContent(
        "Hey, Folks! Welcome to Acebook! - 2018-06-11"
        )

    })

})


