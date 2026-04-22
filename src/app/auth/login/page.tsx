import { signIn } from "@/src/auth"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function SignIn() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-sm">

        <div className="mb-8 text-center">
          <h1 className="text-white text-3xl font-bold tracking-tight">stonks</h1>
          <p className="text-zinc-500 text-sm mt-1">sign in to your account</p>
        </div>

        <Card className="bg-black">
          <CardHeader className="pb-4">
            <CardTitle className="text-white text-lg">Welcome back</CardTitle>
            <CardDescription className="text-zinc-400">
              Enter your credentials to continue
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form
              action={async (formData) => {
                "use server"
                await signIn("credentials", formData)
              }}
              className="space-y-4"
            >
              <div className="space-y-2">
                <Label htmlFor="username" className="text-zinc-300 text-sm">
                  Username
                </Label>
                <Input
                  id="username"
                  name="username"
                  type="username"
                  placeholder="chickenOnaise"
                  className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 focus-visible:ring-zinc-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="passphrase" className="text-zinc-300 text-sm">
                  Passphrase
                </Label>
                <Input
                  id="passphrase"
                  name="passphrase"
                  type="passphrase"
                  placeholder="••••••••"
                  className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 focus-visible:ring-zinc-500"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-white text-black hover:bg-zinc-200 font-medium mt-2"
              >
                Sign In
              </Button>
            </form>
          </CardContent>
        </Card>

      </div>
    </div>
  )
}