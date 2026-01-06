import { createRide } from "../Services1/rideService";
import { supabase } from "../supabase/supabaseclient";

const handleCreateRide = async () => {
  const {
  data: { user },
} = await supabase.auth.getUser();
  if (!user) return;

  await createRide({
    from_location: "Campus",
    to_location: "City",
    seats: 3,
    driver_id: user.id,
  });
};
