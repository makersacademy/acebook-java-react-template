import React from 'react';


class InputComment extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <article className='input-comment'>
                <h1 className='input-comment-header'>
                    Input Comment
                </h1>
                <form>
                    <textarea name="message" placeholder="Whatcha thinking?"/>
                    <button type="submit" name="submitComment">Get Involved</button>
                </form>
            </article>
        )
    }

}



export default InputComment;

