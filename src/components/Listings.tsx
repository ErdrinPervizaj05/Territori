import ListingCard from "./ListingCard";
import { LISTINGS, type Listing } from "../data/listings";

export default function Listings() {
  return (
    <div className="py-16 space-y-12">
      {/* PAGE HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-light tracking-wide text-slate-900">
            Listings
          </h1>
          <p className="mt-3 text-slate-500 font-light">
            Explore premium properties with clean details and elegant presentation.
          </p>
        </div>

        <div className="text-sm text-slate-600">
          <span className="font-semibold text-slate-900">{LISTINGS.length}</span>{" "}
          results
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {LISTINGS.map((l: Listing) => (
          <ListingCard key={l.id} listing={l} />
        ))}
      </div>
    </div>
  );
}
