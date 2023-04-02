import { test } from '@playwright/test';

test('TEST', async () => {
  console.log('TEST');
});

// test.only('TEST - ONLY', async () => {
//   console.log('TEST - ONLY');
// });

// FIXME: Flow is broken
test.skip('TEST - SKIP', async () => {
  console.log('TEST - SKIP');
});

test.fixme('TEST - FIXME', async () => {
  console.log('TEST - FIXME');
})

test('TEST - SKIP BROWSER - On Chromium', async({ browserName }) => {
  test.skip(browserName === 'chromium', 'Skipping tests on chromium browser.');

  console.log(`TEST - SKIP BROWSER, Running on: ${browserName}`);
});

test('TEST - SKIP BROWSER - Except Chromium', async({ browserName }) => {
  test.skip(browserName !== 'chromium', 'Skipping tests except on chromium browser.');

  console.log(`TEST - SKIP BROWSER, Everything except: ${browserName}`);
});

test.describe('TEST - DESCRIBE / GROUP', async () => {
  test('TEST IN DESCRIBE - 1', async () => {
    console.log('TEST IN DESCRIBE - 1');
  });

  test('TEST IN DESCRIBE - 2', async () => {
    console.log('TEST IN DESCRIBE - 2');
  });
});

test.describe.skip('TEST - DESCRIBE / GROUP - SKIP', async () => {
  test('TEST IN DESCRIBE - 1 - SKIP', async () => {
    console.log('TEST IN DESCRIBE - 1 - SKIP');
  });

  test('TEST IN DESCRIBE - 2 - SKIP', async () => {
    console.log('TEST IN DESCRIBE - 2 - SKIP');
  });
});

test.describe('TEST - DESCRIBE / GROUP - SKIP BROWSER', async () => {
  test.skip(({browserName}) => browserName === 'chromium', 'Skipping group of tests on chromimum.')

  test('TEST IN DESCRIBE - 1 - SKIP BROWSER', async () => {
    console.log('TEST IN DESCRIBE - 1 - SKIP BROWSER');
  });

  test('TEST IN DESCRIBE - 2 - SKIP BROWSER', async () => {
    console.log('TEST IN DESCRIBE - 2 - SKIP BROWSER');
  });
});

test('@smoke TEST - SMOKE TEST', async () => {
  console.log('@smoke TEST - SMOKE TEST');
});
