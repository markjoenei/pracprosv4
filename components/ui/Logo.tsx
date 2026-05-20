import Image from "next/image";

type LogoProps = {
  className?: string;
  invert?: boolean;
};

export function Logo({ className = "", invert = false }: LogoProps) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src="/brand/pracpros-logo.png"
        alt="PracPros"
        width={357}
        height={135}
        priority
        className={`h-9 w-auto md:h-10 ${invert ? "brightness-0 invert" : ""}`}
      />
    </span>
  );
}
