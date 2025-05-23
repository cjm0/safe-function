// test/utils.test.js 
// 测试用例

const { 
  newURL,
  jsonPrase,
  jsonStringify,
} = require('../dist/safe-function.cjs.js');

// newURL
test('newURL should return the correct URL', () => {
  const url = 'https://www.ccgegc.com:9003/book/51920/36340.html?a=1#search';
  const urlObj = newURL(url);

  expect(urlObj.href).toBe('https://www.ccgegc.com:9003/book/51920/36340.html?a=1#search');
  expect(urlObj.origin).toBe('https://www.ccgegc.com:9003');
  expect(urlObj.protocol).toBe('https:');
  expect(urlObj.username).toBe('');
  expect(urlObj.password).toBe('');
  expect(urlObj.host).toBe('www.ccgegc.com:9003');
  expect(urlObj.hostname).toBe('www.ccgegc.com');
  expect(urlObj.port).toBe('9003');
  expect(urlObj.pathname).toBe('/book/51920/36340.html');
  expect(urlObj.search).toBe('?a=1');
  expect(urlObj.searchParams.get('a')).toBe('1');
  expect(urlObj.hash).toBe('#search');

  expect(newURL('abc123').href).toBe(undefined);
});

// jsonPrase
test('jsonPrase should return the correct obj', () => {
  const objStr1 = '{ "name": "safe-function" }';
  expect(jsonPrase(objStr1).name).toBe('safe-function');

  const objStr2 = 'test';
  expect(jsonPrase(objStr2)).toBe(null);
});

// jsonStringify
test('jsonStringify should return the correct string', () => {
  const obj1 = { name: "safe-function" };
  expect(typeof jsonStringify(obj1)).toBe('string');
});

