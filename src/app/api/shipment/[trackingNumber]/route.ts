import { NextResponse } from 'next/server';
import { shipengineClient } from '@/sanity/lib/shipengine';

export async function GET(request: Request, { params }: { params: { trackingNumber: string } }) {
  try {
    // Fetch tracking information using ShipEngine
    const trackingInfo = await shipengineClient.trackUsingCarrierCodeAndTrackingNumber({
      carrierCode: 'fedex', // Replace with the actual carrier code (e.g., 'ups', 'usps', 'dhl')
      trackingNumber: params.trackingNumber,
    });

    // Log the response to inspect its structure
    console.log('ShipEngine API Response:', trackingInfo);

    // Return the tracking information in the response
    return NextResponse.json(trackingInfo);
  } catch (error) {
    console.error('Error fetching shipment status:', error);

    // Return a user-friendly error message
    return NextResponse.json(
      { error: 'Failed to fetch shipment status. Please check the tracking number and try again.' },
      { status: 500 }
    );
  }
}