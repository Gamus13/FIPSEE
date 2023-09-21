<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

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


    public function store(Request $request)
    {
        $request->validate([
            'titre' => 'required',
            'Secteur' => 'required',
            'Montant_de_levée' => 'required',
            'Monnaie' => 'required',
            'Duree_de_la_levée' => 'required',
            'description' => 'required',
            'images' => 'required|array',
            'images.*' => 'image'
        ]);

        try {
            $imagePaths = []; // Tableau pour stocker les chemins des images9W23     /

            foreach ($request->file('images') as $image) {
                $paths = $image->store('product/image', 'public');
                $imagePaths[] = $paths;
            }

            $product = new Product();
            $product->titre = $request->input('titre');
            $product->Secteur = $request->input('Secteur');
            $product->Montant_de_levée = $request->input('Montant_de_levée');
            $product->Monnaie = $request->input('Monnaie');
            $product->Duree_de_la_levée = $request->input('Duree_de_la_levée');
            $product->description = $request->input('description');
            $product->images = json_encode($imagePaths);
            $product->save();

            return response()->json([
                'message' => 'Product Created Successfully!!'
            ]);
        } catch (\Exception $e) {
            \Log::error($e->getMessage());
            return response()->json([
                'message' => 'Something goes wrong while creating a product!!',
                'error' => $e->getMessage()
            ], 500);
        }
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

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    // public function update(Request $request, Product $product)
    // {
    //     $request->validate([
    //         'title'=>'required',
    //         'description'=>'required',
    //         'image'=>'nullable'
    //     ]);

    //     try{

    //         $product->fill($request->post())->update();

    //         if($request->hasFile('image')){

    //             // remove old image
    //             if($product->image){
    //                 $exists = Storage::disk('public')->exists("product/image/{$product->image}");
    //                 if($exists){
    //                     Storage::disk('public')->delete("product/image/{$product->image}");
    //                 }
    //             }

    //             $imageName = Str::random().'.'.$request->image->getClientOriginalExtension();
    //             Storage::disk('public')->putFileAs('product/image', $request->image,$imageName);
    //             $product->image = $imageName;
    //             $product->save();
    //         }

    //         return response()->json([
    //             'message'=>'Product Updated Successfully!!'
    //         ]);

    //     }catch(\Exception $e){
    //         \Log::error($e->getMessage());
    //         return response()->json([
    //             'message'=>'Something goes wrong while updating a product!!'
    //         ],500);
    //     }
    // }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    // public function destroy(Product $product)
    // {
    //     try {

    //         if($product->image){
    //             $exists = Storage::disk('public')->exists("product/image/{$product->image}");
    //             if($exists){
    //                 Storage::disk('public')->delete("product/image/{$product->image}");
    //             }
    //         }

    //         $product->delete();

    //         return response()->json([
    //             'message'=>'Product Deleted Successfully!!'
    //         ]);

    //     } catch (\Exception $e) {
    //         \Log::error($e->getMessage());
    //         return response()->json([
    //             'message'=>'Something goes wrong while deleting a product!!'
    //         ]);
    //     }
    // }
}
