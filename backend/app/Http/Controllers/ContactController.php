<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Contact;

class ContactController extends Controller{
    
    public function add(Request $request){
        $validator = Validator::make($request->all(), [
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|email|unique:contacts',
            'phone_number' => 'required|regex:/^\+[0-9]{1,3}[0-9]{4,14}$/',
        ]);
    
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $contact = Contact::create($request->all());
        return response()->json($contact, 201);
    }

    public function get($id = null){
        if ($id === null) {
            $contacts = Contact::all();
            return response()->json($contacts, 200);

        } else {
            $contact = Contact::findOrFail($id);
            return response()->json($contact, 200);
        }
    }

    public function delete($id){
        $contact = Contact::findOrFail($id);
        $contact->delete();
        return response()->json(null, 204);
    }

    public function update(Request $request, $id){
        $validator = Validator::make($request->all(), [
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|email|unique:contacts,email,'.$id,
            'phone_number' => 'required|regex:/^\+[0-9]{1,3}[0-9]{4,14}$/',
        ]);
        
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        
        $contact = Contact::findOrFail($id);
        $contact->update($request->all());
        return response()->json($contact, 200);
    }
}
