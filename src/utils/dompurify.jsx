import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

// Create a JSDOM window object to support server-side rendering (SSR)
const window = new JSDOM('').window;
const purify = DOMPurify(window);

export default purify;
