import React, { useState } from 'react';
import { Col,  Row} from 'react-bootstrap';

const AddCommentForm = ({ postName, setPostInfo }) => {
    const [username, setUsername] = useState('');
    const [commentText, setCommentText] = useState('');

    const addComment = async () => {

        const result = await fetch(`/api/posts/${postName}/add-comment`, {
            method: 'post',
            body: JSON.stringify({ username, text: commentText }),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const body = await result.json();
        console.log(body.username);
        setPostInfo(body);
        setUsername('');
        setCommentText('');
    }

    return (
        <div id="add-comment-form">
            <h3>Add Comments</h3>
            <Row>
            <label>
                Name: <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
            </label>
            <label>
                Comment : <textarea rows="4" cols="50" onChange={(event) => setCommentText(event.target.value)} />
            </label>
            <button onClick={() => addComment()}>
                Add comment
            </button>
            </Row>
           
        </div>
    );
}

export default AddCommentForm;