<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Enquiry;
use App\Mail\EnquiryReceived;
use Illuminate\Support\Facades\Mail;
use App\Http\Requests\StoreEnquiryRequest;

class EnquiryController extends Controller
{
    /**
     * Store a new enquiry from the EnquireForm component.
     *
     * Validates via StoreEnquiryRequest, saves to the enquiries table,
     * then dispatches the notification mail (queued via QUEUE_CONNECTION in .env).
     */
    public function store(StoreEnquiryRequest $request)
    {
        $enquiry = Enquiry::create($request->validated());

        Mail::to(config('mail.from.address'))
            ->send(new EnquiryReceived($enquiry));

        return back()->with('flash', [
            'success' => 'Your enquiry has been received. We will be in touch within two working days.',
        ]);
    }
}
