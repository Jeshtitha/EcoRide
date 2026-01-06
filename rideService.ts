import { supabase } from ".C:\Users\DIVYA LAHARI\OneDrive\Desktop\EcoRide\EcoRide\supabaseclient.ts";

export const createRide = async (ride: any) => {
  return await supabase.from("rides").insert([ride]);
};

export const getAllRides = async () => {
  return await supabase.from("rides").select("*");
};
