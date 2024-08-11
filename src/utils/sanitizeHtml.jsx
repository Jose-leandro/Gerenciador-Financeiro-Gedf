import DOMPurify from 'dompurify';

export default function sanitizeHtml(htmlContent) {
  return DOMPurify.sanitize(htmlContent, { USE_PROFILES: { html: true } });
}
