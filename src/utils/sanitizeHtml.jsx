import DOMPurify from 'dompurify';

export function sanitizeHtml(htmlContent) {
  return DOMPurify.sanitize(htmlContent, { USE_PROFILES: { html: true } });
}
