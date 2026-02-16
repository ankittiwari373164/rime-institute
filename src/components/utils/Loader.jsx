import Lottie from "lottie-react";
import { useLoader } from "../../context/LoaderContext";
import loadingAnimation from "../utils/loadinglinear.json";

export default function Loader() {
  const { isLoading } = useLoader();

  if (!isLoading) return null;

  return (
    <div className="fixed top-0 left-0 w-full z-999 flex items-center justify-center inset-0 bg-linear-to-br from-white via-white to-white animate-fade-in">
        <Lottie
        animationData={loadingAnimation}
        loop={true}
        className="w-20 h-20"
        />

        <style>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
