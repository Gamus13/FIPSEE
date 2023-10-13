<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use App\Models\Product;
use Illuminate\Http\Request;

class ProgressBarController extends Controller
{
    public function getCurrentAmount($projectId)
    {
        // Récupérer le projet en fonction de l'ID du projet
        $product = Product::findOrFail($projectId);

        // Récupérer le montant total payé pour le projet
        $currentAmount = Payment::where('product_id', $product->id)->sum('amount');

        return response()->json(['current_amount' => $currentAmount]);
    }


    public function updateProgress($projectId)
    {
        // Récupérer le projet en fonction de l'ID du projet
        $product = Product::findOrFail($projectId);

        // Récupérer le montant total attendu pour le projet
        $expectedAmount = $product->expected_amount; // Assurez-vous que le modèle Product a un attribut "expected_amount" correspondant

        // Calculer le montant total payé pour le projet
        $paidAmount = Payment::where('product_id', $product->id)->sum('amount');

        // Calculer le nombre total de personnes qui ont payé pour le projet
        $paymentCount = Payment::where('product_id', $product->id)->groupBy('user_id')->count();

        // Calculer la progression en pourcentage
        $progress = ($paidAmount / $expectedAmount) * 100;

        // Mettre à jour la barre de progression dans la base de données ou créer une nouvelle si elle n'existe pas
        $progressBar = $product->progressBar()->firstOrNew();
        $progressBar->progress = $progress;
        $progressBar->payment_count = $paymentCount;
        $progressBar->save();

        // Vous pouvez également effectuer d'autres actions nécessaires ici, comme vérifier si la progression atteint un objectif spécifique, etc.
    }

}
