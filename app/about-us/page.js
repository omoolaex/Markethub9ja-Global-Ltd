import CompanyStory from '@/components/About/CompanyStory';
import HeroAbout from '@/components/About/HeroAbout';
import LeadershipTeam from '@/components/About/LeadershipTeam';
import OrganizationalValues from '@/components/About/OrganizationalValues';
import OurJourneySection from '@/components/About/OurJourneySection';
import Vision2030 from '@/components/About/Vision';
import PageHero from '@/components/global/PageHero';

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen overflow-x-hidden">
      <PageHero
        title="About Us"
        subtitle="Who We Are & What We Stand For"
        breadcrumb={[
          { label: 'About', href: '/about-us' }
        ]}
      />
      <HeroAbout />
      <CompanyStory />
      <Vision2030 />
      <LeadershipTeam />
      <OrganizationalValues />
      <OurJourneySection />

      {/* 👇 Next section: Company Story (our journey) */}
    </main>
  );
}