<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Event;

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

    }
}
