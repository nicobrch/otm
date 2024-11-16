import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import GithubSignInButton from "@/components/github-sign-in-button";

export default function LoginForm() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50">
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold tracking-tight">Welcome back</CardTitle>
                    <CardDescription>Choose your preferred sign in method</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-3">
                        <GithubSignInButton/>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t"/>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">Or</span>
                        </div>
                    </div>
                    <div className="text-center text-sm">
                        Don&apos;t have an account?{" "}
                        <a className="underline underline-offset-4 hover:text-primary" href="#">
                            Sign up
                        </a>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}