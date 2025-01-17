export default {
    name: 'review',
    title: 'Review',
    type: 'document',
    fields: [
      { name: 'product', title: 'Product', type: 'reference', to: [{ type: 'product' }] },
      { name: 'customer', title: 'Customer', type: 'reference', to: [{ type: 'customer' }] },
      { name: 'rating', title: 'Rating', type: 'number' },
      { name: 'reviewText', title: 'Review Text', type: 'text' },
      { name: 'createdAt', title: 'Review Date', type: 'datetime' }
    ]
  };
  