import Image from "next/image";

export default function LogoMark({ size = 40, className = "" }) {
  return (
    <Image
      src="/inaya-estates-mark.png"
      alt=""
      width={512}
      height={512}
      className={className}
      style={{ width: size, height: size }}
    />
  );
}
