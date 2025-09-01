import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image src={"/filthi-logo.png"} alt="" width={28} height={28} />
      <span className="text-lg hidden lg:flex font-bold">Filthi Store</span>
    </div>
  );
}
