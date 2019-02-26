<?php

namespace App\Http\Controllers;

use App\post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function allpost(){
        $posts = post::with('category','user')->get();

        return $posts;
    }
}
