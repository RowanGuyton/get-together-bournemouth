<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Event;
use Illuminate\Support\Facades\Auth;

class EventsController extends Controller
{
    //
    public function index() {
        $events = Event::all();
        return response()->json($events);
    }
    // TODO: Implement retrieving individual events
    public function show($id) {

    }
    // TODO: Implement creating new events
    public function create(Request $request) {
        $userId = Auth::user()->id;

        $event = new Event();

        $event->user_id = $userId;
        $event->name= $request->input('name');
        $event->date = $request->input('date');
        $event->description = $request->input('description');
        $event->event_url = $request->input('event_url');
        $event->maps_url = $request->input('maps_url') ?? null;

        $result = $event->save();

        if (!$result) {
            return response()->json('error', 500);
        }

        return response()->json('success');
    }
}
