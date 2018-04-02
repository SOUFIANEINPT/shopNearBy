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
        $lat=(float)request('latide');
        $lon=(float)request('longitude');
        $date =  new \DateTime('now');
        $tosub = new \DateInterval('PT03H00M');
        $date=$date->sub($tosub);
        $date=$date->format('Y-m-d H:i:s');
        //dd($date);
        DB::table('favorites')->where('updated_at','<=',$date)->where('type','=','0')->delete();
        //dd($date);
        $sql1='SELECT * FROM shopnears WHERE id NOT IN (SELECT shopnear_id FROM favorites WHERE user_id='.$user_id.')
        ORDER BY ACOS(SIN(coordinatesLatide*'.$sf.')*SIN('.$lat*$sf.') + COS(coordinatesLatide*'.$sf.')*COS('.$lat*$sf.')*COS((coordinatesLongitude-'.$lon.')*'.$sf.'))';
        $results1=DB::select($sql1);
        //$results1 =DB::select($sql1,[,$sf,$lat,$sf,$sf,$lat,$sf,$lon,$sf]);
       //dd(DB::select($sql1));
        return response()->json(['data' =>$results1], 200, [], JSON_NUMERIC_CHECK);
    }
   
}
