<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Listing extends Model
{
    use HasFactory;
    protected $gaurded = ['id'];
    protected $fillable = ['type_id'];

    public function type()
    {
        return $this->belongsTo(Type::class, 'type_id');
    }
    
    public function suburb()
    {
        return $this->belongsTo(Suburb::class, 'suburb_id');
    }
}
