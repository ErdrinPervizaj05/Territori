import { Outlet } from "react-router-dom";

const Service = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold text-slate-900">Shërbimet</h2>
      <Outlet />
    </div>
  );
};

export default Service;
