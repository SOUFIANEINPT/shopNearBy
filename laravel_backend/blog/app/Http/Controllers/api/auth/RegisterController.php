<?php

namespace App\Http\Controllers\api\auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Route;
use Laravel\Passport\Client;
class RegisterController extends Controller
{
    //
    use TokensTrait;
    private $client;
	public function __construct(){
		$this->client = Client::find(1);
	}
    public function register(Request $request){
    	$this->validate($request, [
    		'name' => 'required',
    		'email' => 'required|email|unique:users,email',
    		'password' => 'required|min:6'
    	]);
    	$user = User::create([
    		'name' => request('name'),
    		'email' => request('email'),
    		'password' => bcrypt(request('password'))
    	]);
    	return $this->issueToken($request, 'password');
    }
}
