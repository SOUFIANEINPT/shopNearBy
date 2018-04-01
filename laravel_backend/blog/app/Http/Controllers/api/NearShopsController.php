<?php

namespace App\Http\Controllers\api;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
class NearShopsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $date = new DateTime('now');
        $tosub = new DateInterval('PT03H00M');
        $date->sub($tosub);
        $data->format('Y-m-d H:i:s');
        $sql1='SELECT id FROM shopnears WHERE shopnear_id NOT IN (SELECT id FROM favorites)';
        $sql2='SELECT id FROM shopnears WHERE shopnear_id IN (SELECT id FROM favorites WHERE updated_at>='.$date.' AND type==false)';
        $results1 =DB::connection()->getPdo()->exec($sql1);
        $results2=DB::connection()->getPdo()->exec($sql2);
        $total=array_push($results,$results2);
        return response()->json(['data' => $total], 200, [], JSON_NUMERIC_CHECK);
    }
   
}
