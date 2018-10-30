import React from 'react';


class InputPost extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <article className='test'>
                <h1 className='test2'>
                    Input post
                </h1>
                <form>
                    <textarea name="message" placeholder="Don't worry, be happy"/>
                    <button type="submit" name="Take a Longshot" value="Take a Longshot">Take a Longshot</button>
                </form>
            </article>
        )
    }

}



export default InputPost;

