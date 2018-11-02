import React from 'react';
const client = require('../client');

class InputPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {content: ''};
        this.createPost = this.createPost.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({
            content: e.target.value
        });
    }

    createPost(e){
        e.preventDefault();
        client({method: "POST",
            path: "/posts",
            headers: {
                'Content-Type': 'application/json'
            },
            entity: {content: this.state.content}})
            .then(response => {
                console.log(response.entity);
            })
    }

    render() {
        return (
            <article className='Input-post'>
                <h1 className='Input-post-header'>
                    Input post
                </h1>
                <form>
                    <textarea name="message"
                              placeholder="Don't worry, be happy"
                              value={this.state.content}
                              onChange={this.handleChange} />
                    <button type="submit"
                            name="submitPost"
                            onClick={this.createPost}>
                        Take a Longshot
                    </button>
                </form>
            </article>
        )
    }

}



export default InputPost;

