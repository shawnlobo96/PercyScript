const PercyScript = require('@percy/script');

const TEST_URL = `https://google.com`;

// A script to navigate our app and take snapshots with Percy.
PercyScript.run(async (page, percySnapshot) => {
  await page.goto(TEST_URL);
  await percySnapshot('TodoMVC home page');
});
