'use client'

import { Button } from "@material-tailwind/react";
import { createBrowserSupabaseClient } from "utils/supabase/client";

export default async function LogoutButton() {
    const supabase = await createBrowserSupabaseClient()

    return (
        <Button color="red" onClick={async () => {
            await supabase.auth.signOut()
        }}></Button>
    )
}