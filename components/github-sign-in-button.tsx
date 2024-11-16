import { signIn } from "@/app/auth"
import { Button } from "@/components/ui/button";
import { GitHubIcon } from "@/lib/icons";
import { redirect } from "next/navigation";

export default function GithubSignInButton() {
    return (
        <form
            action={async () => {
                "use server"
                await signIn("github").finally(() => {
                    redirect("/")
                });
            }}
        >
            <Button
                type="submit"
                className="w-full bg-[#24292e] text-white hover:bg-[#24292e]/90"
            >
                <GitHubIcon />
                Sign in with GitHub
            </Button>
        </form>
    )
}