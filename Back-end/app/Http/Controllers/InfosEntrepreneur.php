<?php

namespace App\Http\Controllers;

use App\Models\Entrepreneurs;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class InfosEntrepreneur extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Entrepreneurs $entrepreneurs): Response
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Entrepreneurs $entrepreneurs): Response
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Entrepreneurs $entrepreneurs): RedirectResponse
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Entrepreneurs $entrepreneurs): RedirectResponse
    {
        //
    }
}
