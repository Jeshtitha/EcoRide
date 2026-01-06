import { createRide } from "C:\Users\DIVYA LAHARI\OneDrive\Desktop\EcoRide\EcoRide\rideService.ts";
import { auth } from "../firebase/firebase";

const handleCreateRide = async () => {
  const user = auth.currentUser;
  if (!user) return;

  await createRide({
    from_location: "Campus",
    to_location: "City",
    seats: 3,
    driver_id: user.uid,
  });
};
