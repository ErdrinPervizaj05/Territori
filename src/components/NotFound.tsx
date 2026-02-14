import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center max-w-xl">

        {/* 404 */}
        <h1 className="text-7xl font-extrabold text-indigo-500">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-3xl font-bold text-white">
          Faqja nuk u gjet
        </h2>

        {/* Description */}
        <p className="mt-3 text-white/60">
          Faqja që po kërkoni nuk ekziston ose është zhvendosur.
        </p>

        {/* Button */}
        <div className="mt-8">
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-semibold shadow-md hover:shadow-indigo-500/40 transition-all hover:-translate-y-[1px] active:scale-95"
          >
            Kthehu në kryefaqe
          </button>
        </div>

        {/* Footer detail */}
        <div className="mt-10 text-sm text-white/30">
          Territori • Real Estate Platform
        </div>
      </div>
    </div>
  );
};

export default NotFound;
