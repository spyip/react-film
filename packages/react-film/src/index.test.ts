import { test } from 'node:test';

test('should import successfully', async () => {
  await import('./index.js');
});
