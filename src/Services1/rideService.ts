import { supabase } from "../supabase/supabaseclient";

export const createRide = async (ride: any) => {
  return await supabase.from("rides").insert([ride]);
};

export const getAllRides = async () => {
  return await supabase.from("rides").select("*");
};
