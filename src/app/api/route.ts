import { NextRequest, NextResponse } from "next/server"

// Next server
export async function GET(request: NextRequest, response: NextResponse) {
    const url = new URL(request.url);
    // console.log("Check url", url);
    const searchParams = new URLSearchParams(url.search);
    // console.log("Check searchParams", searchParams);
    const fileName = searchParams.get("audio");
    // trả kết quả về cho next client
    return await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/tracks/${fileName}`);
}