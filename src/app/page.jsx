import Banner from "@/components/banner/Banner";
import Clients from "@/components/clients/Clients";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Banner />
      <Clients />
    </main>
  );
}
