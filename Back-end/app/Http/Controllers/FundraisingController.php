<?php

namespace App\Http\Controllers;


use App\Models\Fundraising;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;



class FundraisingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Récupérer les informations de collecte de fonds depuis la base de données ou une autre source de données
        $fundraising = Fundraising::first();

        if ($fundraising) {
            // Calculer le pourcentage actuel de collecte de fonds
            $percentage = ($fundraising->amount_raised / $fundraising->target_amount) * 100;

            // Ajouter le pourcentage aux informations de collecte de fonds
            $fundraising->percentage = $percentage;

            // Récupérer le nombre de paiements associés à la collecte de fonds
            $paymentCount = $fundraising->payment_count;

            // Ajouter le nombre de paiements aux informations de collecte de fonds
            $fundraising->payment_count = $paymentCount;
        }

        return response()->json($fundraising);
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
    public function store(Request $request)
    {
        // Valider les données de la requête
        $validatedData = $request->validate([
            'target_amount' => 'required|numeric',
            'payment_count' => 'required|integer|min:0',
        ]);

        // Créer une nouvelle collecte de fonds
        $fundraising = Fundraising::create([
            'target_amount' => $validatedData['target_amount'],
            'amount_raised' => 0,
            'payment_count' => $validatedData['payment_count'],
        ]);

        return response()->json($fundraising, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id): Response
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id): Response
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id): RedirectResponse
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id): RedirectResponse
    {
        //
    }
}
