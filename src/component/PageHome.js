import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function PageHome() {
    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => setPost(response.data))
    }, []);

    const postElement = post.map((post) => {
        return (
            <div key={post.id} className="container">
                <h4>
                    <Link className="text-decoration-none" to={`/post/${post.id}`}>{post.title}</Link>
                </h4>
                <p>{post.body}</p>
                <hr />
            </div>
        );
    });

    return (
        <div>
            <header>
                <h1 className="alert alert-success text-center">This is home !</h1>
            </header>
            <div>{postElement}</div>
        </div>
    );
}

export default PageHome;
