<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Listing extends Model
{
    use HasFactory;
    protected $fillable = ['type_id', 'suburb_id', 'title', 'street_address', 'area', 'rooms', 'price', 'blurb', 'description', 'img_path', 'listed_at'];

    public function type()
    {
        return $this->belongsTo(Type::class, 'type_id');
    }
    
    public function suburb()
    {
        return $this->belongsTo(Suburb::class, 'suburb_id');
    }

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['type'] ?? false, fn($query, $type) =>
            $query
                ->whereExists(fn($query) =>
                    $query->where('listings.type_id', $type))->orderBy('listings.id', 'ASC')
        );
    }
}
