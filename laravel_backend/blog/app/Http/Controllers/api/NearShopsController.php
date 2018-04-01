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
        $user_id=Auth::user()->id;
        //$user_id=2;
        $date =  new \DateTime('now');
        $tosub = new \DateInterval('PT03H00M');
        $date=$date->sub($tosub);
        $date=$date->format('Y-m-d H:i:s');
        //dd($date);
        $sql1='SELECT * FROM shopnears WHERE id NOT IN (SELECT shopnear_id FROM favorites)';
        $sql2='SELECT * FROM shopnears WHERE id IN (SELECT shopnear_id FROM favorites WHERE updated_at<=? AND type=0 AND user_id=?)';
        $results1 =DB::select($sql1);
       // dd($results1);
        $results2=DB::select($sql2,[$date,$user_id]);
       //dd($results2);
       foreach($results2 as $value){
        array_push($results1,$value);
       }
        dd($results1);
        return response()->json(['data' => $total], 200, [], JSON_NUMERIC_CHECK);
    }
   
}
