<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use App\Models\ImageGallery;

class ImageGalleryController extends Controller
{
    public function saveImage(Request $request)
    {
        $fielnames = $request->input('name');
        $desc = $request->input('desc');

        $submitData = ImageGallery::create([
            'name' => $fielnames,
            'status' => 0,
            'description' => $desc
        ]);

        if ($submitData) {
            return Response::json(['status' => true]);
        } else {
            return Response::json(['status' => false]);
        }
    }

    public function dataList()
    {
        $res = ImageGallery::all();
        return Response::json($res);
    }

    public function getLatestRow(Request $request)
    {
        $res = ImageGallery::where('status', 0)->count();
        return Response::json($res);
    }

    public function updateNotification(Request $request)
    {
        $updateNotification = ImageGallery::where('status', 0)->update([
            'status' => 1,
        ]);

        if ($updateNotification) {
            return Response::json(['status' => true]);
        } else {
            return Response::json(['status' => false]);
        }
    }
}
