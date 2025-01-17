import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import order from './order'
import customer from './customer'
import review from './review'
import supplier from './supplier'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, order, customer, review, supplier],
}
