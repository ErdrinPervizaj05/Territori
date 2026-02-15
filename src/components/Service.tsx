import { Outlet, NavLink } from "react-router-dom";

const services = [
  {
    path: "/service/meqira",
    title: "For Rent",
    desc: "Discover premium rental properties tailored to your lifestyle.",
  },
  {
    path: "/service/neshitje",
    title: "For Sale",
    desc: "Find your next investment or dream home with confidence.",
  },
  {
    path: "/service/agjencite",
    title: "Agencies",
    desc: "Connect with trusted real estate professionals.",
  },
  {
    path: "/service/toka",
    title: "Land",
    desc: "Explore land opportunities for residential or commercial use.",
  },
];

const Service = () => {
  return (
    <div className="max-w-7xl mx-auto py-20">

      {/* HEADER */}
      <div className="mb-16">
        <h1 className="text-4xl font-light tracking-wide text-slate-900">
          Our Services
        </h1>
        <p className="text-slate-500 mt-3 font-light">
          Premium solutions designed around your property journey.
        </p>
      </div>

      {/* PREMIUM CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {services.map((service) => (
          <ServiceCard key={service.path} {...service} />
        ))}
      </div>

      {/* CONTENT */}
      <div className="min-h-[400px]">
        <Outlet />
      </div>
    </div>
  );
};

export default Service;

/* ---------------- Components ---------------- */

function ServiceCard({
  path,
  title,
  desc,
}: {
  path: string;
  title: string;
  desc: string;
}) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `group block border transition-all duration-300 ${
          isActive
            ? "border-slate-900 bg-slate-900 text-white"
            : "border-slate-200 bg-white hover:border-slate-400"
        }`
      }
    >
      <div className="p-6 space-y-3">
        <h3 className="text-lg font-light tracking-wide">
          {title}
        </h3>

        <p
          className={`text-sm font-light ${
            title ? "opacity-70" : ""
          }`}
        >
          {desc}
        </p>

        <div className="pt-4 text-xs tracking-wider opacity-60 group-hover:opacity-100 transition">
          EXPLORE →
        </div>
      </div>
    </NavLink>
  );
}
