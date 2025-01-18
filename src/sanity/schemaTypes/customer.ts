import { Rule } from '@sanity/types';

export default {
  name: 'customer',
  title: 'Customer',
  type: 'document',
  fields: [
    {
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().min(2).max(50).error('First name must be between 2 and 50 characters.'),
    },
    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().min(2).max(50).error('Last name must be between 2 and 50 characters.'),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule: Rule) =>
        Rule.required()
          .email()
          .error('A valid email address is required.'),
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      validation: (Rule: Rule) =>
        Rule.required()
          .regex(/^\+?[1-9]\d{1,14}$/)
          .error('Phone number must be valid and in E.164 format.'),
    },
    {
      name: 'address',
      title: 'Address',
      type: 'text',
      validation: (Rule: Rule) => Rule.required().max(300).error('Address must not exceed 300 characters.'),
    },
    {
      name: 'createdAt',
      title: 'Account Created At',
      type: 'datetime',
      validation: (Rule: Rule) => Rule.required().error('Account creation date is required.'),
    },
  ],
};
