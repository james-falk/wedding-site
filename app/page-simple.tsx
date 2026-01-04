import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import OurStory from "@/components/sections/OurStory";
import EventDetails from "@/components/sections/EventDetails";
import Timeline from "@/components/sections/Timeline";
import Registry from "@/components/sections/Registry";
import Travel from "@/components/sections/Travel";
import WeddingParty from "@/components/sections/WeddingParty";
import FAQ from "@/components/sections/FAQ";
import RSVP from "@/components/sections/RSVP";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      
      <div id="home">
        <Hero />
      </div>

      <div id="story">
        <OurStory />
      </div>

      <div id="details">
        <EventDetails />
      </div>

      <div id="timeline">
        <Timeline />
      </div>

      <div id="registry">
        <Registry />
      </div>

      <div id="travel">
        <Travel />
      </div>

      <div id="party">
        <WeddingParty />
      </div>

      <div id="faq">
        <FAQ />
      </div>

      <div id="rsvp">
        <RSVP />
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-white to-rose-100 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-script text-4xl text-rose-900 mb-4">
            James & Summer
          </p>
          <p className="text-gray-600 mb-2">
            September 15th, 2025 • San Francisco, California
          </p>
          <p className="text-gray-500 text-sm">
            Made with ❤️ for our special day
          </p>
        </div>
      </footer>
    </main>
  );
}

