/**
 * @typedef {Object} Course
 * @property {string} level
 * @property {string} label
 * @property {string} duration
 * @property {string} description
 * @property {string[]} skills
 * @property {string} badge  - color class
 */

/** @type {Course[]} */
const coursesData = [
  {
    level: 'A1',
    label: 'Beginner',
    duration: '6–8 weeks',
    description: 'Foundation German — greetings, numbers, basic sentences and daily vocabulary.',
    skills: ['Alphabet & pronunciation', 'Greetings', 'Numbers & dates', 'Simple phrases'],
    badge: 'bg-green-100 text-green-800',
  },
  {
    level: 'A2',
    label: 'Elementary',
    duration: '8–10 weeks',
    description: 'Everyday German — shopping, travel, family and personal introduction topics.',
    skills: ['Past tense basics', 'Shopping & travel', 'Family vocabulary', 'Simple conversations'],
    badge: 'bg-teal-100 text-teal-800',
  },
  {
    level: 'B1',
    label: 'Intermediate',
    duration: '10–12 weeks',
    description: 'Conversational German — work, education, and social situations with confidence.',
    skills: ['Work vocabulary', 'Complex sentences', 'Opinion expression', 'Goethe B1 prep'],
    badge: 'bg-blue-100 text-blue-800',
  },
  {
    level: 'B2',
    label: 'Upper Intermediate',
    duration: '12–14 weeks',
    description: 'Professional German for university admission and workplace communication.',
    skills: ['Academic writing', 'Presentations', 'Debate skills', 'TestDaF / Goethe B2'],
    badge: 'bg-purple-100 text-purple-800',
  },
  {
    level: 'C1',
    label: 'Advanced',
    duration: '14–16 weeks',
    description: 'Fluent German for professional environments, research, and integration.',
    skills: ['Formal writing', 'Complex grammar', 'Cultural nuance', 'DSH preparation'],
    badge: 'bg-orange-100 text-orange-800',
  },
  // {
  //   level: 'C2',
  //   label: 'Mastery',
  //   duration: '16–20 weeks',
  //   description: 'Near-native mastery — literature, law, medicine, and academic excellence.',
  //   skills: ['Near-native fluency', 'Specialist vocabulary', 'Academic research', 'TestDaF C2'],
  //   badge: 'bg-red-100 text-red-800',
  // },
]

export default coursesData
