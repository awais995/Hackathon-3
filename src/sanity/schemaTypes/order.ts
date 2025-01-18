import { Rule } from '@sanity/types';

export default {
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    {
      name: 'customer',
      title: 'Customer',
      type: 'reference',
      to: [{ type: 'customer' }],
      validation: (Rule: Rule) => Rule.required().error('Customer is required.'),
    },
    {
      name: 'orderItems',
      title: 'Order Items',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'product' }] }],
      validation: (Rule: Rule) => Rule.required().min(1).error('At least one order item is required.'),
    },
    {
      name: 'totalAmount',
      title: 'Total Amount',
      type: 'number',
      validation: (Rule: Rule) =>
        Rule.required().positive().precision(2).error('Total amount must be a positive number with up to 2 decimal places.'),
    },
    {
      name: 'paymentStatus',
      title: 'Payment Status',
      type: 'string',
      validation: (Rule: Rule) =>
        Rule.required()
          .custom((status: string) =>
            ['pending', 'paid', 'failed', 'refunded'].includes(status)
              ? true
              : 'Invalid payment status.'
          ),
    },
    {
      name: 'orderDate',
      title: 'Order Date',
      type: 'datetime',
      validation: (Rule: Rule) => Rule.required().error('Order date is required.'),
    },
    {
      name: 'trackingNumber',
      title: 'Tracking Number',
      type: 'string',
      validation: (Rule: Rule) =>
        Rule.optional().max(50).error('Tracking number must be less than 50 characters.'),
    },
    {
      name: 'shipmentStatus',
      title: 'Shipment Status',
      type: 'string',
      validation: (Rule: Rule) =>
        Rule.required()
          .custom((status: string) =>
            ['pending', 'shipped', 'delivered', 'cancelled'].includes(status)
              ? true
              : 'Invalid shipment status.'
          ),
    },
  ],
};
