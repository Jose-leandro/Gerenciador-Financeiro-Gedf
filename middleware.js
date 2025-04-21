import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl.clone();
  const pathname = url.pathname;

  // Skip redirection for static assets and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.endsWith('.js') ||
    pathname.endsWith('.css') ||
    pathname.endsWith('.png') ||
    pathname.endsWith('.jpg')
  ) {
    return NextResponse.next();
  }

  // Skip redirection for public routes like login and signup
  const publicRoutes = ['/', '/login', '/signup'];
  const isPublicRoute = publicRoutes.includes(pathname);

  const hasAccount = checkIfUserHasAccount(request); // Replace this with your actual logic

  if (!hasAccount && !isPublicRoute) {
    url.pathname = '/spends'; // Redirect to home page if no account and not on a public route
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

async function checkIfUserHasAccount(request) {

    let dataEstadoUsuario = ''
    let stateOfUser = false
  
  return stateOfUser; 
}