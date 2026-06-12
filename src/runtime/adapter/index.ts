import type { StoreAdapter } from './StoreAdapter';
import { SampleAdapter } from './stores/SampleAdapter';

interface StoreDefinition {
  hostname: string;
  match: string;
  adapter: new () => StoreAdapter;
}

export const stores: StoreDefinition[] = [
  {
    hostname: 'www.sample.com',
    match: '*://*.sample.com/*',
    adapter: SampleAdapter,
  },
];

export function getStoreMatchPatterns(): string[] {
  return stores.map((store) => store.match);
}

export function resolveStoreAdapter(hostname: string): StoreAdapter | null {
  const store = stores.find((store) => store.hostname === hostname);

  return store ? new store.adapter() : null;
}
