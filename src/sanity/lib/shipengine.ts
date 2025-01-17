// lib/shipengine.ts
import { ShipEngine } from 'shipengine';

export const shipengineClient = new ShipEngine(process.env.SHIPENGINE_API_KEY!);