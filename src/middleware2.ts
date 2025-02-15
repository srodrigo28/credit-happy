import { NextRequest, NextResponse, type MiddlewareConfig } from "next/server";

// 1. ROTAS VALIDAS
const publicRoutes = [
    { path: '/login', whenAuthenticated: 'redirect'},
    { path: '/dashboard', whenAuthenticated: 'next'},
    { path: '/', whenAuthenticated: 'redirect'},
] as const

const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = '/'


// 3. NUCLEO DE VALIDAÇÃO
export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname
    const publicRoute = publicRoutes.find(route => route.path === path)
    const authToken = request.cookies.get('token')

    if(!authToken && publicRoute) {
        return NextResponse.next()
    }

    if(!authToken && !publicRoute){
        const redirectUrl = request.nextUrl.clone()

        redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE

        return NextResponse.redirect(redirectUrl)
    }

    if(authToken && publicRoute && publicRoute.whenAuthenticated === 'redirect'){
        const redirectUrl = request.nextUrl.clone()
        
        redirectUrl.pathname = '/dashboard'

        return NextResponse.redirect(redirectUrl)
    }

    // Chegar o jwt
    if(authToken && !publicRoute){
        return NextResponse.next()
    }
    
    console.log('funcionou')
    return NextResponse.next()
}


// 2. CONFIG DOC TODOS OS INDEREÇOS PADRÕES LIBERADOS
export const config: MiddlewareConfig = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, sitemap.xml, robots.txt (metadata files)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
      ],
}