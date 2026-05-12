import { ReactNode } from "react";

type Props = {
  chip?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeader({
  chip,
  title,
  description,
  align = "center",
  className = "",
}: Props) {
  return (
    <div
      className={
        "mx-auto max-w-2xl " +
        (align === "center" ? "text-center" : "text-left") +
        " " +
        className
      }
    >
      {chip && <span className="chip mb-3">{chip}</span>}
      <h2 className="text-3xl font-extrabold tracking-tight text-royal-900 md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm text-royal-900/65 md:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
