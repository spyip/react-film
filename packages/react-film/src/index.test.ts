import { test } from 'node:test';

test('should import successfully', async () => {
  // @ts-expect-error index.js has no .d.ts
  await import('./index.js');
});
