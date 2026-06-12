import { getStoreMatchPatterns, resolveStoreAdapter } from '@/src/runtime/adapter';

export default defineContentScript({
  matches: getStoreMatchPatterns(),
  runAt: 'document_idle',
  async main(ctx) {
    const store = resolveStoreAdapter(window.location.hostname);

    if (!store) {
      console.log('No adapter found for this site');
      return;
    }

    console.log(store);
  },
});
