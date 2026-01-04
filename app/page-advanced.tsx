import Navigation from "@/components/Navigation";
import HeroAdvanced from "@/components/sections/HeroAdvanced";
import FixedImageSection from "@/components/FixedImageSection";
import ImageReveal from "@/components/ImageReveal";
import ParallaxImage from "@/components/ParallaxImage";
import OurStory from "@/components/sections/OurStory";
import EventDetails from "@/components/sections/EventDetails";
import Timeline from "@/components/sections/Timeline";
import Registry from "@/components/sections/Registry";
import Travel from "@/components/sections/Travel";
import WeddingParty from "@/components/sections/WeddingParty";
import FAQ from "@/components/sections/FAQ";
import RSVP from "@/components/sections/RSVP";
import FadeIn from "@/components/FadeIn";

export default function PageAdvanced() {
  return (
    <main className="overflow-x-hidden bg-black">
      <Navigation />

      <div id="home">
        <HeroAdvanced />
      </div>

      {/* Fixed Image Section - Like Example #1 */}
      <FixedImageSection
        imageUrl="/images/couple-1.jpg"
        imageAlt="James and Summer"
        title="Our Story"
        subtitle="How it all began"
        description="We met on a sunny day in Central Park, both reaching for the last croissant at a coffee cart. Instead of fighting over it, we decided to share it... and the rest is history."
      />

      {/* Our Story with Image Reveals */}
      <div className="bg-white">
        <div id="story" className="py-20 md:py-32 px-4">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <h2 className="font-script text-5xl md:text-7xl text-center text-rose-900 mb-16">
                Our Journey Together
              </h2>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
              <FadeIn delay={0.2}>
                <ImageReveal alt="Engagement photo" direction="left">
                  <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                    Engagement Photo
                  </div>
                </ImageReveal>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-6">
                    The Proposal 💍
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Michael proposed during a sunset hike at our favorite mountain trail, 
                    with champagne hidden in his backpack and our song playing from a 
                    portable speaker. It was the most magical moment of our lives.
                  </p>
                </div>
              </FadeIn>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <FadeIn delay={0.2} className="md:order-2">
                <ImageReveal alt="First date" direction="right">
                  <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                    Our First Date
                  </div>
                </ImageReveal>
              </FadeIn>

              <FadeIn delay={0.4} className="md:order-1">
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-6">
                    How We Met ❤️
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We met on a sunny day in Central Park, both reaching for the last 
                    croissant at a coffee cart. Instead of fighting over it, we decided 
                    to share it... and the rest is history.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>

      {/* Another Fixed Image Section */}
      <FixedImageSection
        imageUrl="/images/venue.jpg"
        imageAlt="Wedding venue"
        title="Join Us"
        subtitle="September 15th, 2025"
        description="We invite you to celebrate with us in the beautiful city of San Francisco, where our love story continues."
      />

      {/* Event Details with Parallax Background */}
      <div className="relative">
        <ParallaxImage
          alt="Background"
          speed={0.5}
          className="h-[800px] md:h-[1000px]"
        >
          <div className="absolute inset-0 bg-black/50" />
        </ParallaxImage>

        <div className="absolute inset-0 flex items-center">
          <div id="details" className="w-full">
            <EventDetails />
          </div>
        </div>
      </div>

      {/* Rest of sections on white background */}
      <div className="bg-white">
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

