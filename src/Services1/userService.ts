import { supabase } from "../supabase/supabaseclient";

export const createUser = async (user: any) => {
  await supabase.from("users").insert([
    {
      id: user.uid,
      email: user.email,
      role: "passenger",
    },
  ]);
};
