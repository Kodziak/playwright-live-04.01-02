import {test} from '@playwright/test';

// 1.
test.beforeAll(async () => {
  console.log('BEFORE ALL HOOK');
});

// 2.
// 5.
test.beforeEach(async () => {
  console.log('BEFORE EACH HOOK');
});

// 4.
// 7.
test.afterEach(async () => {
  console.log('AFTER EACH HOOK');
});

// 8.
test.afterAll(async () => {
  console.log('AFTER ALL HOOK');
});

// 3.
test('TEST - 1', async () => {
  console.log('TEST - 1');
});

// 6.
test('TEST - 2', async () => {
  console.log('TEST - 2');
});
