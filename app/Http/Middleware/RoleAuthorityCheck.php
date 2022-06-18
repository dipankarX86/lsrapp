<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class RoleAuthorityCheck
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next, $role)
    {
        // $myfile = fopen("TEST.txt", "w") or die("Unable to open file!");
        // $txt = 'This is from inside role check middleware. And role is '.$role;
        // fwrite($myfile, $txt);
        // fclose($myfile);

        // here we need currently logged in user role, and also the role the current route belongs to
        if ( $request->user()->role !== $role ) {
            return response('This method is not allowed', 401);
        }

        return $next($request);
    }
}
