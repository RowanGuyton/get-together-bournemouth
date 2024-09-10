<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Event;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class EventsController extends Controller
{
    //
    public function index() {
        $events = Event::all();
        return response()->json($events);
    }

    public function show($id) {
        $event = Event::where('id', $id)->first();
        return Inertia::render('Events/Show', [
            'event' => $event
        ]);
    }

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
