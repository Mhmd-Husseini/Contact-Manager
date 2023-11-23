<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller{
    
    public function add(Request $request)
    {
        $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|email|unique:contacts',
            'phone_number' => 'required|regex:/^\+[0-9]{1,3}[0-9]{4,14}$/',
        ]);        
        $contact = Contact::create($request->all());
        return response()->json($contact, 201);
    }
}
