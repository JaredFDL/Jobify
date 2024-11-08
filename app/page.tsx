import { Button } from "@/components/ui/button";
import Image from "next/image";
import Logo from "@/assets/logo.svg";
import LandingImg from "@/assets/main.svg";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

const Home = () => {
  return (
    <main>
      <header className="flex items-center justify-between max-w-6xl mx-auto px-4 sm:px-8 py-6">
        <Image src={Logo} alt="Logo" />
        <div>
          <ThemeToggle />
        </div>
      </header>
      <section className="max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr,400px] items-center">
        <div>
          <h1 className="capitalize text-4xl md:text-6xl font-bold">
            Job <span className="text-primary">tracking</span> app
          </h1>
          <p className=" leading-loose max-w-md mt-4">
            sdfa sdfasd fsdf sd s fsdfs f sfs f dfsd fsdfasdfadsf fad sfs fds
            fsd f sfaddsa safd
          </p>
          <Button asChild className="mt-4">
            <Link href="/add-job">Get Started</Link>
          </Button>
        </div>
        <Image src={LandingImg} alt="landing" className="hidden lg:block" />
      </section>
    </main>
  );
};

export default Home;
