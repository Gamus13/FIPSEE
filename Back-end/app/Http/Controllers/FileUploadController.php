<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Blog;
use Illuminate\Support\Facades\Storage;

class FileUploadController extends Controller
{
    public function FileUpload(Request $request)
    {
        $uploadedFile = $request->file('file');

        if ($uploadedFile->isValid()) {
            $uploadedFileName = $uploadedFile->store('public/uploads');

            $blog = new Blog;
            $blog->title = $request->title;
            $blog->details = $request->details;
            $blog->blog_image = $uploadedFile->hashName();
            $results = $blog->save();

            if ($results) {
                return ["result" => "Projet Added"];
            } else {
                return ["result" => "Projet not Added"];
            }
        } else {
            return ["result" => "Invalid file"];
        }
    }

    public function getBlog(){
        $blogs = Blog::all();
        return $blogs;
    }
}
