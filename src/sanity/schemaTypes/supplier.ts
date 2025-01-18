import { Rule } from '@sanity/types';

export default {
  name: 'supplier',
  title: 'Supplier',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Supplier Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().min(3).max(100).error('Supplier name must be between 3 and 100 characters.'),
    },
    {
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'text',
      validation: (Rule: Rule) => Rule.required().max(300).error('Contact information must not exceed 300 characters.'),
    },
    {
      name: 'address',
      title: 'Address',
      type: 'text',
      validation: (Rule: Rule) => Rule.required().max(300).error('Address must not exceed 300 characters.'),
    },
    {
      name: 'productsSupplied',
      title: 'Products Supplied',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'product' }] }],
      validation: (Rule: Rule) => Rule.required().min(1).error('At least one product must be supplied.'),
    },
  ],
};
