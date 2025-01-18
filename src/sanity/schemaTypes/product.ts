import { Rule } from '@sanity/types';

export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule: Rule) =>
        Rule.required().min(3).max(100).error('Product Name must be between 3 and 100 characters.'),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: Rule) =>
        Rule.required().min(10).max(1000).error('Description must be between 10 and 1000 characters.'),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule: Rule) =>
        Rule.required().positive().precision(2).error('Price must be a positive number with up to 2 decimal places.'),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule: Rule) => Rule.required().error('An image is required.'),
    },
    {
      name: 'stockQuantity',
      title: 'Stock Quantity',
      type: 'number',
      validation: (Rule: Rule) =>
        Rule.required().integer().min(0).error('Stock Quantity must be a non-negative integer.'),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: (Rule: Rule) =>
        Rule.required().min(3).max(50).error('Category must be between 3 and 50 characters.'),
    },
    {
      name: 'sku',
      title: 'SKU (Stock Keeping Unit)',
      type: 'string',
      validation: (Rule: Rule) =>
        Rule.required().min(3).max(50).error('SKU must be between 3 and 50 characters.'),
    },
    {
      name: 'weight',
      title: 'Weight (in kg)',
      type: 'number',
      validation: (Rule: Rule) =>
        Rule.required().positive().error('Weight must be a positive number.'),
    },
    {
      name: 'dimensions',
      title: 'Dimensions (LxWxH)',
      type: 'object',
      fields: [
        {
          name: 'length',
          title: 'Length',
          type: 'number',
          validation: (Rule: Rule) =>
            Rule.required().positive().error('Length must be a positive number.'),
        },
        {
          name: 'width',
          title: 'Width',
          type: 'number',
          validation: (Rule: Rule) =>
            Rule.required().positive().error('Width must be a positive number.'),
        },
        {
          name: 'height',
          title: 'Height',
          type: 'number',
          validation: (Rule: Rule) =>
            Rule.required().positive().error('Height must be a positive number.'),
        },
      ],
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule: Rule) => Rule.max(20).error('You can add up to 20 tags.'),
    },
    {
      name: 'ratings',
      title: 'Ratings',
      type: 'number',
      validation: (Rule: Rule) =>
        Rule.min(0).max(5).error('Ratings must be between 0 and 5.'),
    },
  ],
};
