import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PagePost() {
    const { postId } = useParams();

    const [post, setPost] = useState([]);
    const [comment, setComment] = useState([]);

    async function getPost(postId) {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then((response) => {
                setPost(response.data);
            });
    }
    async function getComment(postId) {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then((response) => {
                setComment(response.data);
            });
    }

    useEffect(() => {
        getPost(postId);
        getComment(postId);
    }, [postId]);

    const commentElm = comment.map((comment) => {
        return (
            <div>
                <h6>{comment.email}</h6>
                <p>{comment.body}</p>
                <hr />
            </div>
        );
    });

    return (
        <div>
            <div className="alert alert-warning text-primary">
                <h3 className="container ">{post.title}</h3>
                <p className="container">{post.body}</p>
            </div>

            <div className="bg-dark text-light">
                <div className="container font-weight-bold"> {comment.length} comment  </div>
                <div className="container">{commentElm}</div>
            </div>
        </div>
    );
}

export default PagePost;
