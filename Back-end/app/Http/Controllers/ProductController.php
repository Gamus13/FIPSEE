<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Requests\ProductRequest;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::all();

        $products->transform(function ($product) {
            $product->images = json_decode($product->images);
            return $product;
        });

        return response()->json($products, 200);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */


    // public function store(Request $request)
    // {
    //     $request->validate([
    //         'titre' => 'required',
    //         'Secteur' => 'required',
    //         'Status' => 'required',
    //         'Montant_de_levée' => 'required',
    //         'Monnaie' => 'required',
    //         'Duree_de_la_levée' => 'required',
    //         'description' => 'required',
    //         'images' => 'required|array',
    //         'images.*' => 'image'
    //     ]);

    //     try {
    //         $imagePaths = []; // Tableau pour stocker les chemins des images9W23     /

    //         foreach ($request->file('images') as $image) {
    //             $paths = $image->store('product/image', 'public');
    //             $imagePaths[] = $paths;
    //         }

    //         $product = new Product();
    //         $product->titre = $request->input('titre');
    //         $product->Secteur = $request->input('Secteur');
    //         $product->Status = $request->input('Status');
    //         $product->Montant_de_levée = $request->input('Montant_de_levée');
    //         $product->Monnaie = $request->input('Monnaie');
    //         $product->Duree_de_la_levée = $request->input('Duree_de_la_levée');
    //         $product->description = $request->input('description');
    //         $product->images = json_encode($imagePaths);
    //         $product->save();

    //         return response()->json([
    //             'message' => 'Product Created Successfully!!'
    //         ]);
    //     } catch (\Exception $e) {
    //         \Log::error($e->getMessage());
    //         return response()->json([
    //             'message' => 'Something goes wrong while creating a product!!',
    //             'error' => $e->getMessage()
    //         ], 500);
    //     }
    // }
    // public function store(Request $request)
    // {
    //     $request->validate([
    //         'titre' => 'required',
    //         'Secteur' => 'required',
    //         'Status' => 'required',
    //         'Montant_de_levée' => 'required',
    //         'Monnaie' => 'required',
    //         'Duree_de_la_levée' => 'required',
    //         'description' => 'required',
    //         'images' => 'required|array',
    //         'images.*' => 'image'
    //     ]);

    //     try {
    //         $imagePaths = []; // Tableau pour stocker les chemins des images

    //         foreach ($request->file('images') as $image) {
    //             $paths = $image->store('product/image', 'public');
    //             $imagePaths[] = $paths;
    //         }

    //         $product = new Product();
    //         $product->titre = $request->input('titre');
    //         $product->Secteur = $request->input('Secteur');
    //         $product->Status = $request->input('Status');
    //         $product->Montant_de_levée = $request->input('Montant_de_levée');
    //         $product->Monnaie = $request->input('Monnaie');
    //         $product->Duree_de_la_levée = $request->input('Duree_de_la_levée');
    //         $product->description = $request->input('description');
    //         $product->images = json_encode($imagePaths);
    //         $product->save();

    //         // Tri des produits par titre dans la base de données
    //         $sortedProducts = Product::orderByRaw("LOWER(Status)")->where("Status", "Actif")->get();

    //         return response()->json([
    //             'message' => 'Product Created Successfully!!',
    //             'sortedProducts' => $sortedProducts
    //         ]);
    //     } catch (\Exception $e) {
    //         \Log::error($e->getMessage());
    //         return response()->json([
    //             'message' => 'Something goes wrong while creating a product!!',
    //             'error' => $e->getMessage()
    //         ], 500);
    //     }
    // }

    // ici c'est ma logique de stockage des projets creer

    public function store(Request $request)
    {
        $request->validate([
            'user_id' => 'required',
            'titre' => 'required',
            'Secteur' => 'required',
            'Status' => 'required',
            'Montant_de_levée' => 'required',
            'Prix_des_actions' => 'required',
            'Monnaie' => 'required',
            'courte_description' => 'required',
            'Duree_de_la_levée' => 'required',
            'description' => 'required',
            'Localisation' => 'required',
            'images' => 'required|array',
            'images.*' => 'image'
        ]);

        try {
            $imagePaths = []; // Tableau pour stocker les chemins des images

            foreach ($request->file('images') as $image) {
                $paths = $image->store('product/image', 'public');
                $imagePaths[] = $paths;
            }

            $product = new Product();
            $product->user_id = $request->input('user_id');
            $product->titre = $request->input('titre');
            $product->Secteur = $request->input('Secteur');
            $product->Status = $request->input('Status');
            $product->Montant_de_levée = $request->input('Montant_de_levée');
            $product->Prix_des_actions = $request->input('Prix_des_actions');
            $product->Monnaie = $request->input('Monnaie');
            $product->courte_description = $request->input('courte_description');
            $product->Duree_de_la_levée = $request->input('Duree_de_la_levée');
            $product->description = $request->input('description');
            $product->Localisation = $request->input('Localisation');
            $product->images = json_encode($imagePaths);
            $product->save();

            return response()->json([
                'message' => 'Product Created Successfully!!',
                'product' => $product
            ]);
        } catch (\Exception $e) {
            \Log::error($e->getMessage());
            return response()->json([
                'message' => 'Something goes wrong while creating a product!!',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    // ici c'est la logique de filtrage des projets en fonction des status de chaque projet

    public function filterByStatus(Request $request)
    {
        $filterStatus = $request->input('filterStatus'); // Paramètre donné par l'utilisateur

        // Filtrer les produits en fonction du statut donné par l'utilisateur
        $sortedProducts = Product::where('Status', $filterStatus)->orderByRaw('LOWER(Status)')->get();

        return response()->json([
            'sortedProducts' => $sortedProducts
        ]);
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        return response()->json([
            'product' => $product ,
        ]);
    }

    public function countproductsByUserId($userId)
    {
        // $productsCount = products::where('id_user', $userId)->count();
        $productsCount = Product::where('user_id', $userId)->count();
        return response()->json([
            'user_id' => $userId,
            'products_count' => $productsCount
        ]);
    }

    // public function showProductForLoggedInUser($productId)
    // {
    //     $user = Auth::user();

    //     if (!$user) {
    //         return response()->json(['error' => 'User not authenticated'], 401);
    //     }

    //     $product = $user->products()->find($productId);

    //     if (!$product) {
    //         return response()->json(['error' => 'Product not found'], 404);
    //     }

    //     return response()->json(['product' => $product]);
    // }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
   {
       $request->validate([
           'titre' => 'required',
           'Secteur' => 'required',
           'Montant_de_levée' => 'required',
           'Monnaie' => 'required',
           'Duree_de_la_levée' => 'required',
           'description' => 'required',
           'images' => 'nullable|array',
           'images.*' => 'image'
       ]);

       try {
           $product->titre = $request->input('titre');
           $product->Secteur = $request->input('Secteur');
           $product->Montant_de_levée = $request->input('Montant_de_levée');
           $product->Monnaie = $request->input('Monnaie');
           $product->Duree_de_la_levée = $request->input('Duree_de_la_levée');
           $product->description = $request->input('description');

           if ($request->hasFile('images')) {
               $imagePaths = [];

               foreach ($request->file('images') as $image) {
                   $path = $image->store('product/image', 'public');
                   $imagePaths[] = $path;
               }

               $product->images = json_encode($imagePaths);
           }

           $product->save();

           return response()->json([
               'message' => 'Product Updated Successfully!!'
           ]);
       } catch (\Exception $e) {
           \Log::error($e->getMessage());
           return response()->json([
               'message' => 'Something went wrong while updating the product!!',
               'error' => $e->getMessage()
           ], 500);
       }
   }

   public function put($productId, Request $request)
   {
       $product = Product::findOrFail($productId);
       return $this->update($request, $product);
   }


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        try {
            // Supprimer l'image associée si elle existe
            if ($product->image) {
                Storage::disk('public')->delete("product/image/{$product->image}");
            }

            // Supprimer toutes les images associées si elles existent
            $imagePaths = json_decode($product->images, true);
            if (is_array($imagePaths)) {
                foreach ($imagePaths as $imagePath) {
                    Storage::disk('public')->delete($imagePath);
                }
            }

            $product->delete();

            return response()->json([
                'message' => 'Product Deleted Successfully!!'
            ]);
        } catch (\Exception $e) {
            \Log::error($e->getMessage());
            return response()->json([
                'message' => 'Something went wrong while deleting the product!!',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
