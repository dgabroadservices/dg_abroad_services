/**
 * @typedef {Object} Service
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {string} icon
 * @property {string[]} highlights
 * @property {string} link
 */

/** @type {Service[]} */
const servicesData = [
  {
    id: 'german-training',
    title: 'German Language Programs',
    // description:
    //   'Professional A1–C1  German language training with certified trainers and structured curricula aligned to Goethe Institut standards.',
    icon: '🎓',
    highlights: ['German Language Training (A1–C1) ', 'Goethe & TELC Exam Preparation ', 'Spoken German / Practical Communication ', 'German for Professionals ','German for Nurses ','German culture ','Online & Offline Classes ','Weekend & Fast-track Batches '],
    link: '/services#german-training',
  },
  {
    id: 'study-abroad',
    title: 'Germany Education Pathways',
    // description:
    //   'End-to-end Germany university admission guidance — from shortlisting universities to acceptance letter support.',
    icon: '🏫',
    highlights: ['Study Abroad in Germany ','Germany University Admissions ',' Public University Guidance ','Private University Guidance ','Ausbildung Programs ','Opportunity Card Guidance ','Master\'s & Bachelor\'s Support'],
    link: '/study-abroad',
  },
  {
    id: 'ausbildung',
    title: 'Student Support Services',
    // description:
    //   'Vocational training (Ausbildung) pathways in Germany across nursing, IT, engineering and hospitality sectors.',
    icon: '🔧',
    highlights: ['APS Assistance ', 'SOP & LOR Support ', ' Visa Documentation ', 'University Applications ','Scholarship Guidance ','Accommodation Support ','Pre & Post Departure Guidance ','Part-time Job Guidance in Germany ','Germany Workplace Culture '],
    link: '/services#ausbildung',
  },
  {
    id: 'career-counseling',
    title: 'Career & Counselling',
    // description:
    //   'Complete Germany visa support including documentation checklist, embassy appointment guidance, and mock interview preparation.',
    icon: '📋',
    highlights: ['Profile Evaluation ', ' Career Counselling ', 'Interview Preparation ', 'CV / Resume Building ','LinkedIn Profile Optimization ','Cover Letter Support ','Job Search Guidance ','Internship Search & Application Support ','Master\'s Thesis Guidance ',' Research & Academic Writing Support ',' Interview Preparation & Communication Skills '],
    link: '/services#career',
  },
  {
    id: 'germany-settlement-services ',
    title: 'Germany Settlement Services ',
    // description:
    //   'Personalized career roadmap sessions with Germany-experienced mentors to align your strengths with market opportunities.',
    icon: '✈️',
    highlights: ['Airport Pickup Assistance ', 'Health Insurance Guidance ', ' City Registration Support ', 'Bank Account Opening Guidance ','SIM Card & Local Setup Support ','Part-time Job Guidance ','Accommodation tips', 'Health insurance', 'Banking setup', 'Community access'],
    link: '/services#career',
  },
  // {
  //   id: 'pre-post-departure',
  //   title: 'Pre & Post Departure',
  //   description:
  //     'Holistic support before you fly and after you land — accommodation, insurance, banking setup, and community orientation.',
  //   icon: '🗺️',
  //   highlights: [],
  //   link: '/services#departure',
  // },
]

export default servicesData
