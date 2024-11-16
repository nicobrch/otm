import { auth } from "@/app/auth";

export default async function Home() {
    const session = await auth();
    if (!session?.user) return <h1>Not Authenticated</h1>;

    return (
        <div className="p-4">
            <h1 className="text-xl">Hello {session?.user?.name}</h1>
        </div>
    );
}
