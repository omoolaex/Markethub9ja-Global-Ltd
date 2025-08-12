'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaGlobe } from 'react-icons/fa';

const leaders = [
  {
    name: 'Matthew',
    role: 'Operations Manager',
    image: '/team/matthew.jpg',
    bio: 'Matthew leads our execution across supply chain and vendor ops, ensuring things run smoothly with vision and agility.',
    socials: {
      website: 'https://matthewsite.com',
      linkedin: 'https://linkedin.com/in/matthew',
      facebook: 'https://facebook.com/matthew',
      twitter: 'https://twitter.com/matthew',
    },
  },
  {
    name: 'Celestina',
    role: 'Marketing Intern',
    image: '/team/celestina.jpg',
    bio: 'Celestina drives engagement and energy in our digital campaigns, amplifying our voice where it matters most.',
    socials: {
      facebook: 'https://facebook.com/celestina',
      linkedin: 'https://linkedin.com/in/celestina',
    },
  },
  {
    name: 'John Doe',
    role: 'Marketing Manager',
    image: '/team/marketing-manager.jpg',
    bio: 'John leads our brand story and growth strategy, shaping how Markethub9ja connects with local and global audiences.',
    socials: {
      linkedin: 'https://linkedin.com/in/john-doe',
    },
  },
  {
    name: 'Jane Smith',
    role: 'Graphics Designer',
    image: '/team/graphics-designer.jpg',
    bio: 'Jane crafts visuals that speak volumes, translating ideas into stunning designs across digital and print media.',
    socials: {
      website: 'https://janesmith.design',
      twitter: 'https://twitter.com/janesmith',
    },
  },
];

const iconMap = {
  website: <FaGlobe />,
  facebook: <FaFacebookF />,
  linkedin: <FaLinkedinIn />,
  twitter: <FaTwitter />,
};

export default function LeadershipTeam() {
  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-8 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Meet Our Leadership
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {leaders.map((person, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 text-center transition-transform hover:scale-[1.02]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-28 h-28 mx-auto mb-4 relative rounded-full overflow-hidden border border-gray-300 shadow">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{person.name}</h3>
              <p className="text-sm text-indigo-600 font-medium">{person.role}</p>
              <p className="text-sm text-gray-600 mt-3 mb-4">{person.bio}</p>

              {/* Social Icons */}
              <div className="flex justify-center gap-3 text-gray-500">
                {person.socials &&
                  Object.entries(person.socials).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-indigo-600 transition-colors text-sm"
                    >
                      {iconMap[platform]}
                    </a>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}