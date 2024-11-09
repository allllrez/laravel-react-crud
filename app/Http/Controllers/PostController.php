<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PostController extends Controller
{

    /**
     * @return ResponseFactory|Application|Response
     */
    function index()
    {
        return response(['status' => 'success', 'posts' => Post::all(), 'code' => 200]);
    }

    /**
     * @param Request $request
     * @return ResponseFactory|Application|Response
     */
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

    /**
     * @param $id
     * @return ResponseFactory|Application|Response
     */
    function get($id)
    {
        $post = Post::find($id);
        return response(['status' => 'success', 'post' => $post, 'code' => 200]);
    }

    /**
     * @param Request $request
     * @return ResponseFactory|Application|Response
     */
    function update(Request $request)
    {
        $request->validate(['title' => 'required', 'description' => 'required']);
        $post = Post::find($request->id);
        $post->title = $request->title;
        $post->description = $request->description;
        $post->save();

        return response(['status' => 'success', 'post' => $post, 'code' => 200]);
    }

    /**
     * @param $id
     * @return ResponseFactory|Application|Response
     */
    function delete($id)
    {
        $post = Post::find($id);
        $post->delete();
        return response(['status' => 'success', 'message' => 'deleted successfully', 'code' => 200]);
    }
}
