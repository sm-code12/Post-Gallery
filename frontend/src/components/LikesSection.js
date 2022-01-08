import React from 'react';
import {Row} from 'react-bootstrap';

const LikesSection = ({ postName, likes, setPostInfo }) => {
    const likeArticle = async () => {
        const result = await fetch(`/api/posts/${postName}/likes`, {
            method: 'post',
        });
        const body = await result.json();
        setPostInfo(body);
    }
    return (
        <div id="likes-section">
        
 <button onClick={() => likeArticle()}>Add Like {likes}</button>
           
        
           
        </div>
    );
}

export default LikesSection;