type Props = {
  title: string;
  subtitle?: string;
  right?: React.ReactNode;
};

export default function SectionHeader({ title, subtitle, right }: Props) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
      <div>
        <h1 className="text-4xl font-light tracking-wide text-slate-900">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-3 text-slate-500 font-light">{subtitle}</p>
        ) : null}
      </div>

      {right ? <div>{right}</div> : null}
    </div>
  );
}
