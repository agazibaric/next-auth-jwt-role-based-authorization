import { Session } from "next-auth";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { NEXT_AUTH_SECRET } from "./const";
import { getRequiredPageRole, isAuthorized } from "./helpers";

export async function middleware(req: NextRequest) {
  const requiredRole = getRequiredPageRole(req.nextUrl.pathname);
  if (!requiredRole) {
    return NextResponse.next();
  }

  const token = await getToken({ req, secret: NEXT_AUTH_SECRET });

  if (!isAuthorized(token as Session, requiredRole)) {
    return NextResponse.rewrite(new URL("/unauthorized", req.url));
  }

  return NextResponse.next();
}
