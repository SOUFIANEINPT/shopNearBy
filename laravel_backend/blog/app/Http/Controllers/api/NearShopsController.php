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
    public function index(Request $request)
    {
        //
        $user_id=Auth::user()->id;
        $sf = 3.14159 / 180;
        $lat=request('latide');
        $log=request('longitude');
        $date =  new \DateTime('now');
        $tosub = new \DateInterval('PT03H00M');
        $date=$date->sub($tosub);
        $date=$date->format('Y-m-d H:i:s');
        DB::delete('delete from favorites WHERE updated_at<=? AND type=0',$date);
        //dd($date);
        $sql1='SELECT * FROM shopnears WHERE id NOT IN (SELECT shopnear_id FROM favorites WHERE user_id=?)
        ORDER BY ACOS(SIN(coordinatesLatide*?)*SIN(?*?) + COS(coordinatesLatide*?)*COS(?*?)*COS((coordinatesLongitude-?)*?))';
        //$sql2='SELECT * FROM shopnears WHERE id IN (SELECT shopnear_id FROM favorites WHERE  type=1 AND user_id=?)';
        $results1 =DB::select($sql1,[$user_id,$sf,$lat,$sf,$sf,$lat,$sf,$lon,$sf]);
       // dd($results1);
       // $results2=DB::select($sql2,[$date,$user_id]);
       //dd($results2);
       // dd($results1);
        return response()->json(['data' =>$results1], 200, [], JSON_NUMERIC_CHECK);
    }
   
}
