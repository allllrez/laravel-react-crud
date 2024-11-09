import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toastr from "toastr";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    //delete post
    async function deletePost(id) {
        let response = await axios.get(`http://127.0.0.1:8000/api/posts/delete/${id}`);
        toastr.success(response.data.message);
        getPosts();
    }

    //fetch all posts
    async function getPosts() {
        let response = await axios.get("http://127.0.0.1:8000/api/posts");
        let postItems = response.data.posts;
        setPosts(postItems);
    }
    useEffect(() => {
        getPosts();
    }, []);

    return (
        <>
            <div className="container mt-2">
                <div className="card">
                    <div className="card-header">
                        <div className="d-flex justify-content-between align-items-center">
                            <h1>Posts</h1>
                            <Link
                                className="btn btn-secondary"
                                to="/create-post"
                            >
                                Create
                            </Link>
                        </div>
                    </div>
                    <div className="card-body">
                        <table
                            id="myTable"
                            className="table table-bordered table-hover"
                        >
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {posts.map((post, index) => {
                                return (
                                    <tr key={post.id}>
                                        <td>{index + 1}</td>
                                        <td>{post.title}</td>
                                        <td>{post.description}</td>
                                        <td>
                                            <Link
                                                className="btn btn-info"
                                                to={`edit-post/${post.id}`}
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                className="btn btn-danger ms-1"
                                                onClick={() =>
                                                    deletePost(post.id)
                                                }
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Posts;


