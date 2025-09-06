import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const useLogOut = () => {
  const router = useRouter();

  const handleLogOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("Logged out successfully");
          router.push("/");
        },
        onError: (error) => {
          toast.error("Error trying to log out");
          console.error("Error trying to log out", error);
        },
      },
    });
  };
  return handleLogOut;
};
