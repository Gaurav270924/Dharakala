<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreEnquiryRequest extends FormRequest
{
    /**
     * All enquiry submissions are publicly submitted — no auth check needed.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Validation rules matching the EnquireForm fields.
     */
    public function rules(): array
    {
        return [
            'name'     => ['required', 'string', 'max:255'],
            'email'    => ['required', 'email', 'max:255'],
            'phone'    => ['nullable', 'string', 'max:50'],
            'interest' => ['required', 'string', 'in:Residential,Commercial,Townships,Plotted,Mixed-Use,General Enquiry'],
            'message'  => ['nullable', 'string', 'max:5000'],
        ];
    }

    /**
     * Human-friendly field names for validation error messages.
     */
    public function attributes(): array
    {
        return [
            'name'     => 'full name',
            'email'    => 'email address',
            'phone'    => 'phone number',
            'interest' => 'area of interest',
            'message'  => 'message',
        ];
    }
}
