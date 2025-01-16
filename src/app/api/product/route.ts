import { NextApiRequest, NextApiResponse } from 'next';
import { client } from '../../../sanity/lib/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const query = `*[_type == "product"]`;
  const products = await client.fetch(query);
  res.status(200).json(products);
}