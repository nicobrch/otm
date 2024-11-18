import { auth } from "@/app/auth"
import {NextResponse} from "next/server"

export const dynamic = 'force-dynamic';

const tournaments = [
    {
        id: 1,
        name: "Tournament 1",
        href: "/manager/tournaments/tournament-1"
    },
    {
        id: 2,
        name: "Tournament 2",
        href: "/manager/tournaments/tournament-2"
    }
]

export const GET = auth((req) => {
    if (req.auth) return NextResponse.json(tournaments, { status: 200 })
    return NextResponse.json(tournaments, { status: 401 })
})