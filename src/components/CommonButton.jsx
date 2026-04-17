import Link from "next/link";

export default function CommonButton({
  label,
  className = "",
  type = "button",
  href,
}) {
  const baseClassName = `cta-button inline-flex items-center justify-center rounded-full px-8 py-3 text-lg font-semibold text-white shadow-md ${className}`;
  const content = (
    <>
      <span className="cta-button__fill" />
      <span className="cta-button__inner-border" />
      <span className="cta-button__label">{label}</span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={baseClassName}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={baseClassName}>
      {content}
    </button>
  );
}
