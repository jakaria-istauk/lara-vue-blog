<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

//post view
Route::get('/post', 'postController@allpost');

//Category
Route::post('/category/add', 'categoryController@addCategory');
Route::get('/category/get', 'categoryController@getAllCategory');
Route::get('/category/delete/{id}', 'categoryController@deleteCategory');

//vue routing
Route::get('/{any}', 'HomeController@index')->where('any','.*');
