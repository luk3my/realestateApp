<?php
use App\Models\Type;
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TypeController extends Controller
{
     public function index()
    {
        return Type::all();
    }
}
