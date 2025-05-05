import Link from "next/link";
import Logo01 from "@/public/images/logo.svg";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Cruip">
      <Image src={Logo01} width={32} height={32} alt="Logo" className="h-8 w-8" />
    </Link>
  );
}
