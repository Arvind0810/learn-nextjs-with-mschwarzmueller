export function GET(request){
    return new Response('Hello!')
}

export function POST(request){
    console.log(request)
    return new Response('Hello! POST')
}

