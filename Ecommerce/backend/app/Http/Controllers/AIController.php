<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class AIController extends Controller
{
    public function __construct()
    {
        set_time_limit(120);
    }

    public function askAI(Request $request)
    {
        $prompt = $request->prompt;

        $response = Http::timeout(300)
            ->retry(3, 1000)
            ->post('http://localhost:11434/api/generate', [
                "model" => "phi3",
                "prompt" => $prompt,
                "stream" => false,
                "keep_alive" => -1
            ]);

        $data = $response->json();

        return response()->json(
            ["response" => $data["response"] ?? "No response"]
        );
    }

    public function chat(Request $request)
{
    $message = $request->message;

    // Get products to recommend
    $products = Product::select('title','price','description')->limit(10)->get();

    $productText = "";
    foreach ($products as $product) {
        $productText .= "Title: {$product->title}\n";
        $productText .= "Price: {$product->price}\n";
        $productText .= "Description: {$product->description}\n\n";
    }

    // Improved prompt
    $prompt = "
You are a helpful and friendly ecommerce AI shopping assistant.

Follow these rules:
1. Always answer politely and professionally.
2. If the user says greetings like 'Hi', 'Hello', etc., reply with something polite like 'Hi! How can I help with your shopping today?'
3. If the user asks for product recommendations or info, respond with a list of products from the provided product list.
4. Format all product recommendations using this structure:

Title: <product title>
Price: <product price>
Description: <product description>

5. Do not repeat the product list back to the user.
6. Only recommend products from the provided products list.

Products:
$productText

User question:
$message
";

    // Call the AI model
    $response = Http::timeout(300)
        ->post('http://localhost:11434/api/generate', [
            "model" => "phi3",
            "prompt" => $prompt,
            "stream" => false
        ]);

    $data = $response->json();

    return response()->json([
        "response" => $data["response"] ?? "No response"
    ]);
}
}
