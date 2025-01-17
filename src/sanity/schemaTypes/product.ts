export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    { name: 'name', title: 'Product Name', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'price', title: 'Price', type: 'number' },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
    { name: 'stockQuantity', title: 'Stock Quantity', type: 'number' },
    { name: 'category', title: 'Category', type: 'string' },
    { name: 'supplier', title: 'Supplier', type: 'reference', to: [{ type: 'supplier' }] },
    { name: 'sku', title: 'SKU (Stock Keeping Unit)', type: 'string' },
    { name: 'weight', title: 'Weight (in kg)', type: 'number' },
    { name: 'dimensions', title: 'Dimensions (LxWxH)', type: 'object',
      fields: [
        { name: 'length', title: 'Length', type: 'number' },
        { name: 'width', title: 'Width', type: 'number' },
        { name: 'height', title: 'Height', type: 'number' }
      ]
    },
    { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] },
    { name: 'ratings', title: 'Ratings', type: 'number' },
    { name: 'reviews', title: 'Reviews', type: 'array', of: [{ type: 'reference', to: [{ type: 'review' }] }] }
  ]
};
