import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import {Row} from 'react-bootstrap';
 import CommentsList from '../components/CommentsList';
 import LikesSection from '../components/LikesSection';
 import AddCommentForm from '../components/AddCommentForm';
import PostsData from './post-content';




const PostPage = () => {
    const { name } = useParams();
    const post = PostsData.find(post => post.title === name);
    
    const [postInfo, setPostInfo] = useState({ likes: 0, comments: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/posts/${name}`);
            const body = await result.json();
            setPostInfo(body);
        }
        fetchData();
    }, [name]);

    return (
        <>
        <div className='post-'>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <h1>{post.title}</h1>
        </div>
        
        
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <img src={post.image} width={500} height={300}/>

            </div>
            <div>
<LikesSection postName={name} likes={postInfo.likes} setPostInfo={setPostInfo} />
</div>
            <div style={{padding: 20}}> 
            <p>{post.text}</p>
            </div>

        </div>
        

       
   
        
        
        
        
        
        <CommentsList comments={postInfo.comments}/>
        <AddCommentForm postName={name} setPostInfo={setPostInfo} />
      
       
        </>
    );
}

export default PostPage;

