import { Rule } from '@sanity/types';

export default {
  name: 'review',
  title: 'Review',
  type: 'document',
  fields: [
    {
      name: 'product',
      title: 'Product',
      type: 'reference',
      to: [{ type: 'product' }],
      validation: (Rule: Rule) => Rule.required().error('Product is required.'),
    },
    {
      name: 'customer',
      title: 'Customer',
      type: 'reference',
      to: [{ type: 'customer' }],
      validation: (Rule: Rule) => Rule.required().error('Customer is required.'),
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (Rule: Rule) =>
        Rule.required().min(1).max(5).error('Rating must be between 1 and 5.'),
    },
    {
      name: 'reviewText',
      title: 'Review Text',
      type: 'text',
      validation: (Rule: Rule) =>
        Rule.required().min(10).max(500).error('Review text must be between 10 and 500 characters.'),
    },
    {
      name: 'createdAt',
      title: 'Review Date',
      type: 'datetime',
      validation: (Rule: Rule) => Rule.required().error('Review date is required.'),
    },
  ],
};
