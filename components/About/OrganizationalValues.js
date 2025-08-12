'use client';

import { motion } from 'framer-motion';
import { FaHandshake, FaLightbulb, FaUsers, FaShieldAlt } from 'react-icons/fa';

const values = [
{
title: 'Integrity & Transparency',
description:
'We build trust through honesty, openness, and accountability in everything we do.',
icon: <FaShieldAlt className="text-indigo-600 w-8 h-8" />,
},
{
title: 'Innovation with Purpose',
description:
'We create thoughtful solutions rooted in the real needs of our communities and partners.',
icon: <FaLightbulb className="text-indigo-600 w-8 h-8" />,
},
{
title: 'Empowerment',
description:
'We elevate local vendors and small businesses, giving them tools to thrive sustainably.',
icon: <FaUsers className="text-indigo-600 w-8 h-8" />,
},
{
title: 'Collaboration',
description:
'We grow stronger through partnerships, teamwork, and shared successes across the ecosystem.',
icon: <FaHandshake className="text-indigo-600 w-8 h-8" />,
},
];

export default function OrganizationalValues() {
return (
<section className="bg-white py-20 px-4 sm:px-8 md:px-12 lg:px-24">
<div className="max-w-6xl mx-auto">
<motion.h2
className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-12"
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
viewport={{ once: true }}
>
Our Core Values
</motion.h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {values.map((value, idx) => (
        <motion.div
          key={idx}
          className="bg-gray-50 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-4">
            {value.icon}
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {value.title}
          </h3>
          <p className="text-sm text-gray-600">{value.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>
);
}