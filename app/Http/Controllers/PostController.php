<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{

    function index()
    {
        return response(['status' => 'success', 'posts' => Post::all(), 'code' => 200]);
    }

    function save(Request $request)
    {
        $request->validate(['title' => 'required', 'description' => 'required']);
        $post = new Post();
        $post->title = $request->title;
        $post->description = $request->description;
        $post->save();

        return response(['status' => 'success', 'post' => $post, 'code' => 200]);
    }

    // get post by id
    function get($id)
    {
        $post = Post::find($id);
        return response(['status' => 'success', 'post' => $post, 'code' => 200]);
    }

    function update(Request $request)
    {
        $request->validate(['title' => 'required', 'description' => 'required']);
        $post = Post::find($request->id);
        $post->title = $request->title;
        $post->description = $request->description;
        $post->save();

        return response(['status' => 'success', 'post' => $post, 'code' => 200]);
    }

    function delete($id)
    {
        $post = Post::find($id);
        $post->delete();
        return response(['status' => 'success', 'message' => 'deleted successfully', 'code' => 200]);
    }
}
