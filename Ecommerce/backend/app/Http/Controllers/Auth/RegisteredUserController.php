<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;

use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules;
use App\Models\User;


class RegisteredUserController extends Controller
{
    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:' . User::class],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 400,
                'errors' => $validator->errors()
            ], 400);
        }
        $isFirstUser = User::count() === 0;

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        if ($isFirstUser) {
            $user->assignRole('admin');
        } else {
            $user->assignRole('user');
        }


        event(new Registered($user));

        Auth::login($user);

        return response()->json([
            'status' => 200,
            'message' => 'User register successfully',
            'data' => $user
        ]);
    }

    public function login(LoginRequest $request)
    {
        try {
            $request->authenticate();
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json([
                'status' => 401,
                'message' => 'Invalid credentials',
                'errors' => $e->errors()
            ], 401);
        }

        $user = $request->user();

        $abilities = $user->hasRole('admin') ? ['admin'] : ['user'];
        $token = $user->createToken('auth_token', $abilities)->plainTextToken;

        return response()->json([
            'message' => 'Login Successfully!',
            'token' => $token,
            'token_type' => 'Bearer',
            'status' => 200,
            'user' => $user
        ]);
    }
}
