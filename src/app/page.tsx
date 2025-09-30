import Content from "@/components/container/Content";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navigation/Navbar";
import VotingStatusBanner from "@/components/voting/VotingStatusBanner";

export default function Home() {
  return (
    <main className="min-h-screen justify-between relative flex flex-col">
      <div className="flex-1">
        <Navbar />
        <VotingStatusBanner />
        <Content />
      </div>
      <Footer />
    </main>
  );
}
