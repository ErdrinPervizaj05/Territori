import ListingCard from "../ListingCard";
import SectionHeader from "../SectionHeader";
import { LISTINGS, type Listing } from "../../data/listings";

export default function Toka() {
  // UI-only placeholder filter: bigger area
  const items = LISTINGS.filter((l: Listing) => l.area >= 300);

  return (
    <div className="py-10 space-y-10">
      <SectionHeader
        title="Land"
        subtitle="Land opportunities for residential and commercial development."
        right={
          <div className="text-sm text-slate-600">
            <span className="font-semibold text-slate-900">{items.length}</span>{" "}
            results
          </div>
        }
      />

      {items.length === 0 ? (
        <div className="border border-slate-200 bg-white p-8 text-slate-600">
          No land listings available yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((l) => (
            <ListingCard key={l.id} listing={l} />
          ))}
        </div>
      )}
    </div>
  );
}
