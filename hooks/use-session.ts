import { authClient } from "@/lib/auth-client";

export const useUserSession = () => {
  const { data: session } = authClient.useSession();
  return session;
};
