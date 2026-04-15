
import { googleLogin } from "@/src/lib/auth/actions";
// import { useRouter } from "next/router";
import { Button } from "@/src/components/ui/button";
import { toast } from "sonner"
import { FaGoogle } from "react-icons/fa";

export default async function AuthPage() {

    return (
        <div className="dark min-h-screen bg-background flex items-center justify-center p-4">
            <div className="w-full max-w-sm space-y-6">
                <div className="space-y-1 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight text-foreground">
                        Stonks
                    </h1>
                </div>

                <div>
                    <FaGoogle height={12} width={12}/>
                    <form action={googleLogin}>
                        <Button 
                            type="submit"
                            variant="default" 
                            size="lg" 
                            className="w-full gap-2 text-white">
                            Continue with Google
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
