<?php

namespace App\Http\Controllers;

use App\category;
use Illuminate\Http\Request;

class categoryController extends Controller
{
    public function addCategory(Request $request){
        $this->validate($request, [
            'CategoryName'=>'required|min:2|max:50'
        ]);
        $category = new category();
        $category->name = $request->CategoryName;
        $category->save();

        return ['message'=>'ok'];
    }

    public function getAllCategory(){
        $categories = category::all();
        return response()->json([
            'categories' => $categories
        ], 200);
    }
    public function deleteCategory($id){
        $category = category::find($id);
        $category->delete();
    }
}
