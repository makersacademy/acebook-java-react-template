import React from 'react';
import Posts from '../posts/posts';
import { render } from "react-testing-library";
import "dom-testing-library/extend-expect";

//jest.mock(Post, () => ({
//    Post : "<div className='post-content'> Post </div>"
//}))

describe('Display multiple posts', function(){

    const {getByTestId} = render(
       <Posts posts = {["String", "String 2"]} />
    );

    it('displays a title', function(){

        expect(getByTestId("title-content")).toHaveTextContent("Posts")

    })


//    it('renders a Post component', function(){
//
//        expect(posts).toEqual("<div className='post-content'> Post </div> <div className='post-content'> Post </div>")
//
//
//    })

})
