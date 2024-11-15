import { lazy, Suspense } from "react";
import Loader from "../../../components/Loader";
const CheckAvailability = lazy(() =>
  import("../../../components/CheckAvailability/CheckAvailability")
);

const AvailabilityChecker = () => {
  return (
    <Suspense fallback={<Loader />}>
      <CheckAvailability />
    </Suspense>
  );
};

export default AvailabilityChecker;
