import LogoutButton from "components/layouts/auth/LogoutButton";
import { createServerSupabaseClient } from "utils/supabase/server";

export const metadata = {
  title: 'instagram',
  description: 'instagram cloned'
}

export default async function Home() {
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()
  return (
    <main className="w-full h-screen flex flex-col gap-2 items-center justify-center">
      <h1 className="font-bold text-xl">
        Welcome {user?.email?.split('@')[0]}
      </h1>
      <LogoutButton />
    </main>
  );
}
