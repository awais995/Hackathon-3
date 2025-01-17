export default {
    name: 'supplier',
    title: 'Supplier',
    type: 'document',
    fields: [
      { name: 'name', title: 'Supplier Name', type: 'string' },
      { name: 'contactInfo', title: 'Contact Information', type: 'text' },
      { name: 'address', title: 'Address', type: 'text' },
      { name: 'productsSupplied', title: 'Products Supplied', type: 'array', of: [{ type: 'reference', to: [{ type: 'product' }] }] }
    ]
  };
  