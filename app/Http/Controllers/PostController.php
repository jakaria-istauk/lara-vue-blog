<?php

namespace App\Http\Controllers;

use App\post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function getAllPosts(){
        $posts = post::with('user','category')->get();

        return response()->json([
            'posts' => $posts
        ], 200);
    }
}
