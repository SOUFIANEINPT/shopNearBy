<?php

namespace App\Http\Controllers\api;
use App\Favoite;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
class PreferredShopsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $favorits = Auth::user()->favorits()->where('type',true)->get();
    	return response()->json(['data' => $favorits], 200, [], JSON_NUMERIC_CHECK);
    }

   
    public function store(Request $request)
    {
        $favorite=new Favorite;
        $favorite->name=request('name');
        $favorite->email=request('email');
        $favorite->city=request('city');
        $favorite->picture=request('picture');
        $favorite->coordinatesLatide=request('coordinatesLatide');
        $favorite->coordinatesLongitude=request('coordinatesLongitude');
        $favorite->coordinatesLongitude=request('coordinatesLongitude');
        $favorite->type=request('type');
        $favorite->user_id=Auth::user()->id;
        $favorite->shopnear_id=request('id');
        $favorite->save();
        return response()->json('', 200, [], JSON_NUMERIC_CHECK);
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $favorite=Favoite::find($id);
        $favorite->delete();
        return response()->json('', 200, [], JSON_NUMERIC_CHECK);
    }
}
