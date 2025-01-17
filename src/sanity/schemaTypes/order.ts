export default {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
      { name: 'customer', title: 'Customer', type: 'reference', to: [{ type: 'customer' }] },
      { name: 'orderItems', title: 'Order Items', type: 'array', of: [{ type: 'reference', to: [{ type: 'product' }] }] },
      { name: 'totalAmount', title: 'Total Amount', type: 'number' },
      { name: 'paymentStatus', title: 'Payment Status', type: 'string' },
      { name: 'orderDate', title: 'Order Date', type: 'datetime' },
      { name: 'trackingNumber', title: 'Tracking Number', type: 'string' },
      { name: 'shipmentStatus', title: 'Shipment Status', type: 'string' }
    ]
  };
  