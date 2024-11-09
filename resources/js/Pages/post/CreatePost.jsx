import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import toastr from "toastr";

const CreatePost = () => {
    const [post, setPost] = useState({ title: "", description: "" });
    function handleInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        setPost({ ...post, [name]: value });
    }
    async function savePost() {
        try {
            let data = await axios.post("http://127.0.0.1:8000/api/posts/save", post);
            setPost({ title: "", description: "" });
            toastr.success('Post saved Successfully')
        } catch (error) {
            let errors = error.response.data.errors
            for (let key in errors) {
                toastr.error(errors[key])
            }
        }
    }
    return (
        <>
            <div className="container mt-2">
                <div className="card">
                    <div className="card-header">
                        <div className="d-flex justify-content-between align-items-center">
                            <h1>Create Post</h1>
                            <Link className="btn btn-secondary" to="/">
                                Back
                            </Link>
                        </div>
                    </div>
                    <div className="card-body">
                        <form action="">
                            <div className="form-group">
                                <label htmlFor="title">Title:</label>
                                <input
                                    type="text"
                                    name="title"
                                    id="title"
                                    className="form-control"
                                    onChange={handleInput}
                                    value={post.title}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">
                                    Description:
                                </label>
                                <input
                                    type="text"
                                    name="description"
                                    id="description"
                                    className="form-control"
                                    onChange={handleInput}
                                    value={post.description}
                                />
                            </div>
                            <div className="form-group mt-2">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={savePost}
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreatePost;

