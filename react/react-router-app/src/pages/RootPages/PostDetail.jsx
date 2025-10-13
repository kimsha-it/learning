import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function PostDetail() {
  const { postId } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const response = await axios.get(`https://dummyjson.com/posts/${postId}`);
      setPost(response.data);
    }
    getPosts();
  }, [postId]);

  return (
    <div>
      <p>제목 - {post.title}</p>
      <p>내용</p>
      <div>{post.body}</div>
    </div>
  );
}
