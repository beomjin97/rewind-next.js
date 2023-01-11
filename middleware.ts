import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import connect from "./utils/connectMongo";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/api")) {
    console.log("middleware execute");
    NextResponse.next();
  }
}
