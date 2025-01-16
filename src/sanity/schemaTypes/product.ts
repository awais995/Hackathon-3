export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      { name: 'title', title: 'Title', type: 'string' },
      { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
      { name: 'description', title: 'Description', type: 'text' },
      { name: 'price', title: 'Price', type: 'number' },
      { name: 'images', title: 'Images', type: 'array', of: [{ type: 'image' }] },
      { name: 'category', title: 'Category', type: 'string' },
    ],
  };