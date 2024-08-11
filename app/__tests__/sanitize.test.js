// __tests__/sanitize.test.js
import DOMPurify from 'dompurify';
import { sanitizeHtml } from '@/utils/sanitizeHtml';

test('sanitizes HTML to prevent XSS', () => {
  const unsafeHtml = `
    <h1>Hello World</h1>
    <script>alert('XSS Attack!')</script>
  `;

  const sanitizedHtml = sanitizeHtml(unsafeHtml);

  // Ensure the script tag is removed and alert doesn't appear in the sanitized HTML
  expect(sanitizedHtml).not.toContain('<script>');
  expect(sanitizedHtml).toContain('<h1>Hello World</h1>');
});

test('sanitizes user input in a component', () => {
  // Mocking a component that uses sanitized HTML
  const userInput = `
    <h1>Welcome</h1>
    <img src="x" onerror="alert('XSS')"/>
  `;

  const sanitizedInput = sanitizeHtml(userInput);

  // Ensure the onerror attribute is removed
  expect(sanitizedInput).not.toContain('onerror');
  expect(sanitizedInput).toContain('<h1>Welcome</h1>');
});
