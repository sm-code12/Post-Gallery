import React from "react";
import PostGrid from "../components/PostGrid";
import PostsData from "./post-content";


const HomePage = ()  => (
    <>
    <h1>Welcome to my Raahee social</h1>
    <PostGrid posts = {PostsData}/>
    </>
)
export default HomePage;