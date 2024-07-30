import Link from "next/link";

export default function Home() {
  return (
    <div className="flex gap-12 justify-center">
      <Link className="text-purlple-base" href={"/part-one"}>part one</Link>
      <Link className="text-purlple-base" href={"/part-two"}>part two</Link>
    </div>
  );
}
