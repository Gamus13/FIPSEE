<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use App\Models\Notification;
use Illuminate\Support\Facades\DB;

class NotificationController extends Controller
{
    public function saveImage(Request $request)
    {
        $fielnames = $request->input('name');
        $desc = $request->input('desc');

        $submitData = DB::table('notifications')->insert([
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


    public function getNotificationList()
    {
        $notifications = Notification::all();
        return Response::json($notifications);
    }

    public function getUnreadNotificationCount(Request $request)
    {
        $count = Notification::where('status', 0)->count();
        return Response::json($count);
    }

    public function markNotificationAsRead(Request $request)
    {
        $updateNotification = Notification::where('status', 0)->update([
            'status' => 1,
        ]);

        if ($updateNotification) {
            return Response::json(['status' => true]);
        } else {
            return Response::json(['status' => false]);
        }
    }
}
