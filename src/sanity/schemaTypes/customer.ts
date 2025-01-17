export default {
    name: 'customer',
    title: 'Customer',
    type: 'document',
    fields: [
      { name: 'firstName', title: 'First Name', type: 'string' },
      { name: 'lastName', title: 'Last Name', type: 'string' },
      { name: 'email', title: 'Email', type: 'string' },
      { name: 'phone', title: 'Phone Number', type: 'string' },
      { name: 'address', title: 'Address', type: 'text' },
      { name: 'createdAt', title: 'Account Created At', type: 'datetime' }
    ]
  };
  