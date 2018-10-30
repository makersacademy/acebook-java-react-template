import React from 'react';


class Comment extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <article className='testcomment'>
                <form>
                    <textarea name="message" placeholder="Whatcha thinkin'?"/>
                    <button type="submit" name="Get Involved" value="Get Involved">Get Involved</button>
                </form>
            </article>
        )
    }

}



export default Comment;