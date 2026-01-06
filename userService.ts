import { supabase } from "C:\Users\DIVYA LAHARI\OneDrive\Desktop\EcoRide\EcoRide\supabaseclient.ts";

export const createUser = async (user: any) => {
  await supabase.from("users").insert([
    {
      id: user.uid,
      email: user.email,
      role: "passenger",
    },
  ]);
};
