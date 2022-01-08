import { Link } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import { Col,  Row} from 'react-bootstrap';
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PostPage from '../pages/PostPage';

import 'bootstrap/dist/css/bootstrap.css';



const PostGrid = ({posts}) => {
    const [likes, setLikes] = useState({likes: 0});
    let liked = false;
    let a = 9;
    let changeColor = liked ? "red" : "white";
    const updateLikes = () => {
        setLikes(likes + 1)
        liked = true;
    }
    return(
        <div style={{ display: 'block' }}>
           
        <Row>
        {posts.map((post, key) => (
            
            <Col md = "3">
                 <Link key = {key} to={`/posts/${post.title}` }>
                   

               
            <Card>
              <Card.Img variant="top" src={post.image} />
                <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                <p>{post.text[0].substring(0, 150)}...</p>
                   
                </Card.Text>
                
                </Card.Body>
             </Card> 
            </Link>
            </Col>

        
            
              
    ))
            
        }
        </Row>
            
          
       
    </div>  
    );
}
export default PostGrid;
