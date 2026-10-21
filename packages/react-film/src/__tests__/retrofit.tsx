/** @jest-environment @happy-dom/jest-environment */

let consoleError: jest.SpyInstance;
let element: HTMLElement;

beforeEach(() => {
  // React 18 warns "ReactDOM.render is no longer supported".
  consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});

  document.body.innerHTML =
    '<div id="film"><img alt="Cat 01" src="../image/01.jpg" /><img alt="Cat 02" src="../image/02.jpg" /><img alt="Cat 03" src="../image/03.jpg" /></div>';

  element = document.getElementById('film') as HTMLElement;
});

afterEach(() => {
  consoleError.mockRestore();
  jest.resetModules();
});

test('should retrofit the element when ReactDOM.render() is available', () => {
  const { default: retrofit } = jest.requireActual('../retrofit.tsx');

  retrofit(element, { height: 316 });

  expect(element.isConnected).toBe(false);
  expect(document.querySelectorAll('.react-film img')).toHaveLength(3);
});

test('should throw when ReactDOM.render() is not available (React 19)', () => {
  // React 19 removed render() from "react-dom".
  jest.doMock('react-dom', () => ({}));

  const { default: retrofit } = jest.requireActual('../retrofit.tsx');

  expect(() => retrofit(element, { height: 316 })).toThrow(/createRoot\(\)/u);

  // Should not touch the DOM before throwing.
  expect(element.isConnected).toBe(true);
});
