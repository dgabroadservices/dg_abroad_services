import { motion } from 'framer-motion'
import PageLayout from '../components/layout/PageLayout'
import SectionTitle from '../components/common/SectionTitle'
import CTASection from '../components/home/CTASection'
import aboutImage from '../assets/about.jpg'
import founderPhoto from '../assets/founder.png'
import CoFounderPhoto from '../assets/Co-founder.png'

 
const teamValues = [
  { icon: '🤝', title: 'Integrity First', desc: 'Transparent guidance with no hidden agendas or misleading promises.' },
  { icon: '🎯', title: 'Student-Centered', desc: "Every decision is made with the student's best interest at heart." },
  { icon: '🌍', title: 'Global Network', desc: 'Strong ties with German universities, employers and alumni.' },
  { icon: '📚', title: 'Expert Knowledge', desc: 'Deep expertise in German education, immigration and career markets.' },
]
 
const founders = [
  {
    name: 'Srinath Pothunuka',
    role: 'Founder & Academic Head',
    roleLabel: 'FOUNDER &\nACADEMIC HEAD',
    photo: founderPhoto,
    points: [
      { icon: '🎓', text: "Srinath Pothunuka, Founder & Academic Head of DharmaGita, brings valuable international exposure and practical insights from Germany's education and professional ecosystem." },
      { icon: '📖', text: "Having pursued his Master's education in Germany at Hochschule Kaiserslautern, he possesses a strong understanding of German academics, student life, career pathways, and global opportunities." },
      { icon: '🌐', text: "With real-world Germany experience and a passion for mentoring aspiring students, he is committed to providing transparent guidance, quality German language training, and practical mentorship to help students confidently build their futures in Germany." },
      { icon: '🎯', text: "As the academic lead of DharmaGita, his vision is to create a trusted Germany-focused learning platform that bridges students from India to international opportunities through ethical guidance and real-world exposure." },
    ],
  },
  {
    name: 'Ram Prasad Pothunuka',
    role: 'Co-Founder & Business Head',
    roleLabel: 'CO-FOUNDER &\nBUSINESS HEAD',
    photo: CoFounderPhoto,
    points: [
      { icon: '💼', text: "Ram Prasad Pothunuka, Co-Founder & Business Head of DharmaGita, leads the organization's business operations, student engagement, branding, client relations, strategic partnerships, and growth initiatives." },
      { icon: '🤝', text: "With professional experience in client relationship management, business development, and strategic collaborations, he focuses on building a transparent, student-centric, and professionally driven Germany education platform." },
      { icon: '📈', text: "Passionate about creating meaningful global opportunities for students, Ram plays a key role in strengthening DharmaGita's brand presence, institutional collaborations, operational execution, and long-term business expansion." },
      { icon: '👥', text: "His vision is to establish DharmaGita as a trusted Germany-focused education ecosystem that combines guidance, transparency, strategic partnerships, and global career opportunities under one platform." },
    ],
  },
]
 
const milestones = [
  { year: '2022', event: 'The Vision Begins' },
  { year: '2023', event: 'Germany Experience & Global Exposure' },
  { year: '2024', event: 'Student Mentorship & Guidance' },
  { year: '2025', event: 'DharmaGita Takes Shape' },
  { year: '2026', event: 'Official Launch in Hyderabad' },
  { year: 'Future', event: 'Building Global Futures' },
]
 
function About() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-brand-navy py-24 text-white text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-brand-gold font-semibold uppercase tracking-widest text-sm mb-4">
            Our Story
          </p>
          <h1 className="text-5xl sm:text-6xl font-display font-bold">About DharmaGita</h1>
          <p className="mt-5 text-gray-300 text-lg max-w-2xl mx-auto">
            A Germany-focused education and career platform built on transparency, ethical guidance and genuine care for every student.
          </p>
        </motion.div>
      </section>
 
      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-xl grid md:grid-cols-2 gap-14 items-center">
          <div>
            <SectionTitle title="Who We Are" centered={false} />
            <p className="text-gray-600 leading-relaxed mb-4">
              DharmaGita German Language &amp; Abroad Services was established in Hyderabad with the sole goal of providing all worthy Indian professionals and students with honest, competent guidance and access to Germany.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Since we only work in Germany, our counselors are the most knowledgeable about the country's educational system, employment market, visa requirements, and cultural norms.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With more than 68+ students scattered around Germany today, we are still motivated by the same conviction: every aspiration for Germany's future deserves the proper direction.
            </p>
          </div>
          <img
            src={aboutImage}
            alt="DharmaGita team and students"
            className="rounded-2xl shadow-2xl w-full h-[420px] object-cover"
          />
        </div>
      </section>
 
      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-xl">
          <SectionTitle title="Our Core Values" subtitle="What drives everything we do" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamValues.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-8 shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="font-bold text-brand-navy text-lg mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* Founders */}
      <section className="section-padding bg-gray-50">
        <div className="container-xl">
          {/* Section heading */}
          <div className="text-center mb-14">
            <p className="text-brand-gold font-semibold uppercase tracking-widest text-sm mb-3">
              Driven by Purpose. Built on Values. Committed to Your Future.
            </p>
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-brand-navy">
              Our <span className="text-brand-gold">Founders</span>
            </h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-brand-gold mx-auto" />
          </div>
 
          {/* Founder cards — one per row, photo left + content right */}
          <div className="space-y-10">
            {founders.map(({ name, role, roleLabel, photo, points }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100
                           hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="grid md:grid-cols-[320px_1fr]">
 
                  {/* LEFT — Photo with role badge at bottom */}
                  <div className="relative min-h-[380px] md:min-h-0">
                    <img
                      src={photo}
                      alt={name}
                      className="w-full h-full object-cover object-center absolute inset-0"
                    />
                    {/* Dark gradient at bottom for badge readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent" />
 
                    {/* Role badge — bottom left, matching the reference image */}
                    <div className="absolute bottom-5 left-5 flex items-center gap-3
                                    bg-brand-gold/95 rounded-xl px-4 py-3 shadow-lg">
                      <div className="w-9 h-9 rounded-full bg-brand-navy flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-brand-gold" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                        </svg>
                      </div>
                      <div>
                        {roleLabel.split('\n').map((line, idx) => (
                          <p key={idx} className="text-brand-navy font-bold text-xs leading-tight uppercase tracking-wide">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
 
                  {/* RIGHT — Name, role, bullet points */}
                  <div className="p-8 sm:p-10 flex flex-col justify-center">
                    {/* Name & role */}
                    <div className="mb-6">
                      <h3 className="text-2xl sm:text-3xl font-display font-bold text-brand-navy leading-tight">
                        {name}
                      </h3>
                      <p className="text-brand-gold font-semibold text-base mt-1">{role}</p>
                      {/* Gold divider line with diamond */}
                      <div className="flex items-center gap-2 mt-4">
                        <div className="h-px bg-brand-gold flex-1 max-w-[60px]" />
                        <div className="w-2 h-2 rotate-45 bg-brand-gold flex-shrink-0" />
                        <div className="h-px bg-brand-gold flex-1 max-w-[60px]" />
                      </div>
                    </div>
 
                    {/* Bullet points with icons */}
                    <div className="space-y-4">
                      {points.map(({ icon, text }, j) => (
                        <div key={j} className="flex items-start gap-4">
                          {/* Icon circle */}
                          <div className="w-9 h-9 rounded-full bg-brand-navy flex items-center justify-center
                                          flex-shrink-0 mt-0.5 text-base shadow-sm">
                            {icon}
                          </div>
                          <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
 
          {/* Bottom tagline strip */}
          <div className="mt-12 bg-brand-navy rounded-2xl px-8 py-6
                          flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {['Trusted Guidance', 'Student Centric', 'Ethical Mentorship', 'Global Opportunities', 'End-to-End Support'].map((tag) => (
              <div key={tag} className="flex items-center gap-2 text-white text-sm font-semibold">
                <span className="w-2 h-2 rounded-full bg-brand-gold inline-block" />
                {tag}
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-xl max-w-3xl mx-auto">
          <SectionTitle title="Our Journey" subtitle="Key milestones since 2022" />
          <div className="relative border-l-2 border-brand-gold pl-8 space-y-8">
            {milestones.map(({ year, event }) => (
              <div key={year} className="relative">
                <div className="absolute -left-[2.75rem] top-1 w-5 h-5 rounded-full bg-brand-gold border-4 border-white shadow" />
                <span className="text-brand-gold font-bold text-sm">{year}</span>
                <p className="text-gray-700 font-medium mt-1">{event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      <CTASection />
    </PageLayout>
  )
}
 
export default About

// import { motion } from 'framer-motion'
// import PageLayout from '../components/layout/PageLayout'
// import SectionTitle from '../components/common/SectionTitle'
// import CTASection from '../components/home/CTASection'
// import aboutImage from '../assets/about.jpg'
 
// const teamValues = [
//   { icon: '🤝', title: 'Integrity First', desc: 'Transparent guidance with no hidden agendas or misleading promises.' },
//   { icon: "🎯", title: "Student-Centered", desc: "Every decision is made with the student's best interest at heart." },
//   { icon: '🌍', title: 'Global Network', desc: 'Strong ties with German universities, employers and alumni.' },
//   { icon: '📚', title: 'Expert Knowledge', desc: 'Deep expertise in German education, immigration and career markets.' },
// ]
 
// const founders = [
//   {
//     name: 'Srinath Pothunuka',
//     role: 'Founder & Academic Head',
//     photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
//     points: [
//       "Srinath Pothunuka, Founder & Academic Head of DharmaGita, brings valuable international exposure and practical insights from Germany's education and professional ecosystem.",
//       "Having pursued his Master's education in Germany at Hochschule Kaiserslautern, he possesses a strong understanding of German academics, student life, career pathways, and global opportunities.",
//       "With real-world Germany experience and a passion for mentoring aspiring students, he is committed to providing transparent guidance, quality German language training, and practical mentorship to help students confidently build their futures in Germany.",
//       "As the academic lead of DharmaGita, his vision is to create a trusted Germany-focused learning platform that bridges students from India to international opportunities through ethical guidance and real-world exposure.",
//     ],
//   },
//   {
//     name: 'Ram Prasad Pothunuka',
//     role: 'Co-Founder & Business Head',
//     photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
//     points: [
//       "Ram Prasad Pothunuka, Co-Founder & Business Head of DharmaGita, leads the organization's business operations, student engagement, branding, client relations, strategic partnerships, and growth initiatives.",
//       "With professional experience in client relationship management, business development, and strategic collaborations, he focuses on building a transparent, student-centric, and professionally driven Germany education platform.",
//       "Passionate about creating meaningful global opportunities for students, Ram plays a key role in strengthening DharmaGita's brand presence, institutional collaborations, operational execution, and long-term business expansion.",
//       "His vision is to establish DharmaGita as a trusted Germany-focused education ecosystem that combines guidance, transparency, strategic partnerships, and global career opportunities under one platform.",
//     ],
//   },
// ]
 
// const milestones = [
//   { year: '2022', event: 'The Vision Begins'},
//   { year: '2023', event: 'Germany Experience & Global Exposure' },
//   { year: '2024', event: 'Student Mentorship & Guidance' },
//   { year: '2025', event: 'DharmaGita Takes Shape' },
//   { year: '2026', event: 'Official Launch in Hyderabad' },
//    { year: 'Future', event: 'Building Global Futures' },
// ]
 
// function About() {
//   return (
//     <PageLayout>
//       {/* Hero */}
//       <section className="bg-brand-navy py-24 text-white text-center px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//         >
//           <p className="text-brand-gold font-semibold uppercase tracking-widest text-sm mb-4">
//             Our Story
//           </p>
//           <h1 className="text-5xl sm:text-6xl font-display font-bold">About DharmaGita</h1>
//           <p className="mt-5 text-gray-300 text-lg max-w-2xl mx-auto">
//             A Germany-focused education and career platform built on transparency, ethical guidance and genuine care for every student.
//           </p>
//         </motion.div>
//       </section>
 
//       {/* Story */}
//       <section className="section-padding bg-white">
//         <div className="container-xl grid md:grid-cols-2 gap-14 items-center">
//           <div>
//             <SectionTitle title="Who We Are" centered={false} />
//             <p className="text-gray-600 leading-relaxed mb-4">
//               {/* DharmaGita German Language &amp; Abroad Services was founded in Hyderabad with a single mission — to make Germany accessible to every deserving Indian student and professional, with complete honesty and expert guidance. */}
//               DharmaGita German Language & Abroad Services was established in Hyderabad with the sole goal of providing all worthy Indian professionals and students with honest, competent guidance and access to Germany.
//             </p>
//             <p className="text-gray-600 leading-relaxed mb-4">
//               Since we only work in Germany, our counselors are the most knowledgeable about the country's educational system, employment market, visa requirements, and cultural norms.
//             </p>
//             <p className="text-gray-600 leading-relaxed">
//               {/* Today, with 500+ students placed across Germany, we continue to be driven by one belief: <em>every dream of a Germany future deserves the right guidance.</em> */}
//               With more than 68+ students scattered around Germany today, we are still motivated by the same conviction: every aspiration for Germany's future deserves the proper direction.
//             </p>
//           </div>
//           <img
//             src={aboutImage}
//             alt="DharmaGita team and students"
//             className="rounded-2xl shadow-2xl w-full h-[420px] object-cover"
//           />
//         </div>
//       </section>
 
//       {/* Values */}
//       <section className="section-padding bg-gray-50">
//         <div className="container-xl">
//           <SectionTitle title="Our Core Values" subtitle="What drives everything we do" />
//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {teamValues.map(({ icon, title, desc }) => (
//               <div
//                 key={title}
//                 className="bg-white rounded-2xl p-8 shadow-md text-center hover:shadow-lg transition-shadow"
//               >
//                 <div className="text-4xl mb-4">{icon}</div>
//                 <h3 className="font-bold text-brand-navy text-lg mb-2">{title}</h3>
//                 <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
 
//     {/* Founders */}
//     <section className="section-padding bg-white">
//       <div className="container-xl">
//         <SectionTitle
//           title="Meet Our Founders"
//           subtitle="Driven by Purpose. Built on Values. Committed to Your Future."
//         />
//           <div className="grid md:grid-cols-2 gap-10">
//             {founders.map(({ name, role, photo, points }, i) => (
//               <motion.div
//                 key={name}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: i * 0.15 }}
//                 className="bg-white border border-gray-100 rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
//               >
//                 {/* Photo + name header */}
//                 <div className="relative h-56 overflow-hidden">
//                   <img
//                     src={photo}
//                     alt={name}
//                     className="w-full h-full object-cover object-top"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/30 to-transparent" />
//                   <div className="absolute bottom-0 left-0 right-0 px-7 py-5">
//                     <h3 className="text-white font-display font-bold text-xl leading-tight">{name}</h3>
//                     <p className="text-brand-gold text-sm font-semibold mt-1">{role}</p>
//                   </div>
//                 </div>
 
//                 {/* Points */}
//                 <div className="px-8 py-7 space-y-4">
//                   {points.map((point, j) => (
//                     <div key={j} className="flex items-start gap-3">
//                       <div className="w-6 h-6 rounded-full bg-brand-gold/15 flex items-center justify-center flex-shrink-0 mt-0.5">
//                         <div className="w-2 h-2 rounded-full bg-brand-gold" />
//                       </div>
//                       <p className="text-gray-600 text-sm leading-relaxed">{point}</p>
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
 
//                   {/* Bottom tagline strip */}
//           <div className="mt-12 bg-brand-navy rounded-2xl px-8 py-6 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
//             {['Trusted Guidance', 'Student Centric', 'Ethical Mentorship', 'Global Opportunities', 'End-to-End Support'].map((tag) => (
//               <div key={tag} className="flex items-center gap-2 text-white text-sm font-semibold">
//                 <span className="w-2 h-2 rounded-full bg-brand-gold" />
//                 {tag}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
 
//       {/* Timeline */}
//       <section className="section-padding bg-white">
//         <div className="container-xl max-w-3xl mx-auto">
//           <SectionTitle title="Our Journey" subtitle="Key milestones since 2018" />
//           <div className="relative border-l-2 border-brand-gold pl-8 space-y-8">
//             {milestones.map(({ year, event }) => (
//               <div key={year} className="relative">
//                 <div className="absolute -left-[2.75rem] top-1 w-5 h-5 rounded-full bg-brand-gold border-4 border-white shadow" />
//                 <span className="text-brand-gold font-bold text-sm">{year}</span>
//                 <p className="text-gray-700 font-medium mt-1">{event}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
 
//       <CTASection />
//     </PageLayout>
//   )
// }
 
// export default About
// // import { motion } from 'framer-motion'
// // import PageLayout from '../components/layout/PageLayout'
// // import SectionTitle from '../components/common/SectionTitle'
// // import CTASection from '../components/home/CTASection'
// // import aboutImage from '../assets/about.jpg'

// // const teamValues = [
// //   { icon: '🤝', title: 'Integrity First', desc: 'Transparent guidance with no hidden agendas or misleading promises.' },
// //   { icon: "🎯", title: "Student-Centered", desc: "Every decision is made with the student's best interest at heart." },
// //   { icon: '🌍', title: 'Global Network', desc: 'Strong ties with German universities, employers and alumni.' },
// //   { icon: '📚', title: 'Expert Knowledge', desc: 'Deep expertise in German education, immigration and career markets.' },
// // ]

// // const founders = [
// //   {
// //     name: 'Srinath Pothunuka',
// //     role: 'Founder & Academic Head',
// //     points: [
// //       "Srinath Pothunuka, Founder & Academic Head of DharmaGita, brings valuable international exposure and practical insights from Germany's education and professional ecosystem.",
// //       "Having pursued his Master's education in Germany at Hochschule Kaiserslautern, he possesses a strong understanding of German academics, student life, career pathways, and global opportunities.",
// //       "With real-world Germany experience and a passion for mentoring aspiring students, he is committed to providing transparent guidance, quality German language training, and practical mentorship to help students confidently build their futures in Germany.",
// //       "As the academic lead of DharmaGita, his vision is to create a trusted Germany-focused learning platform that bridges students from India to international opportunities through ethical guidance and real-world exposure.",
// //     ],
// //   },
// //   {
// //     name: 'Ram Prasad Pothunuka',
// //     role: 'Co-Founder & Business Head',
// //     points: [
// //       "Ram Prasad Pothunuka, Co-Founder & Business Head of DharmaGita, leads the organization's business operations, student engagement, branding, client relations, strategic partnerships, and growth initiatives.",
// //       "With professional experience in client relationship management, business development, and strategic collaborations, he focuses on building a transparent, student-centric, and professionally driven Germany education platform.",
// //       "Passionate about creating meaningful global opportunities for students, Ram plays a key role in strengthening DharmaGita's brand presence, institutional collaborations, operational execution, and long-term business expansion.",
// //       "His vision is to establish DharmaGita as a trusted Germany-focused education ecosystem that combines guidance, transparency, strategic partnerships, and global career opportunities under one platform.",
// //     ],
// //   },
// // ]

// // const milestones = [
// //   { year: '2022', event: 'The Vision Begins'},
// //   { year: '2023', event: 'Germany Experience & Global Exposure' },
// //   { year: '2024', event: 'Student Mentorship & Guidance' },
// //   { year: '2025', event: 'DharmaGita Takes Shape' },
// //   { year: '2026', event: 'Official Launch in Hyderabad' },
// //    { year: 'Future', event: 'Building Global Futures' },
// // ]

// // function About() {
// //   return (
// //     <PageLayout>
// //       {/* Hero */}
// //       <section className="bg-brand-navy py-24 text-white text-center px-4">
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.7 }}
// //         >
// //           <p className="text-brand-gold font-semibold uppercase tracking-widest text-sm mb-4">
// //             Our Story
// //           </p>
// //           <h1 className="text-5xl sm:text-6xl font-display font-bold">About DharmaGita</h1>
// //           <p className="mt-5 text-gray-300 text-lg max-w-2xl mx-auto">
// //             A Germany-focused education and career platform built on transparency, ethical guidance and genuine care for every student.
// //           </p>
// //         </motion.div>
// //       </section>

// //       {/* Story */}
// //       <section className="section-padding bg-white">
// //         <div className="container-xl grid md:grid-cols-2 gap-14 items-center">
// //           <div>
// //             <SectionTitle title="Who We Are" centered={false} />
// //             <p className="text-gray-600 leading-relaxed mb-4">
// //               {/* DharmaGita German Language &amp; Abroad Services was founded in Hyderabad with a single mission — to make Germany accessible to every deserving Indian student and professional, with complete honesty and expert guidance. */}
// //               DharmaGita German Language & Abroad Services was established in Hyderabad with the sole goal of providing all worthy Indian professionals and students with honest, competent guidance and access to Germany.
// //             </p>
// //             <p className="text-gray-600 leading-relaxed mb-4">
// //               Since we only work in Germany, our counselors are the most knowledgeable about the country's educational system, employment market, visa requirements, and cultural norms.
// //             </p>
// //             <p className="text-gray-600 leading-relaxed">
// //               {/* Today, with 500+ students placed across Germany, we continue to be driven by one belief: <em>every dream of a Germany future deserves the right guidance.</em> */}
// //               With more than 68+ students scattered around Germany today, we are still motivated by the same conviction: every aspiration for Germany's future deserves the proper direction.
// //             </p>
// //           </div>
// //           <img
// //             src={aboutImage}
// //             alt="DharmaGita team and students"
// //             className="rounded-2xl shadow-2xl w-full h-[420px] object-cover"
// //           />
// //         </div>
// //       </section>

// //       {/* Values */}
// //       <section className="section-padding bg-gray-50">
// //         <div className="container-xl">
// //           <SectionTitle title="Our Core Values" subtitle="What drives everything we do" />
// //           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
// //             {teamValues.map(({ icon, title, desc }) => (
// //               <div
// //                 key={title}
// //                 className="bg-white rounded-2xl p-8 shadow-md text-center hover:shadow-lg transition-shadow"
// //               >
// //                 <div className="text-4xl mb-4">{icon}</div>
// //                 <h3 className="font-bold text-brand-navy text-lg mb-2">{title}</h3>
// //                 <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //     {/* Founders */}
// //     <section className="section-padding bg-white">
// //       <div className="container-xl">
// //         <SectionTitle
// //           title="Meet Our Founders"
// //           subtitle="Driven by Purpose. Built on Values. Committed to Your Future."
// //         />
// //           <div className="grid md:grid-cols-2 gap-10">
// //             {founders.map(({ name, role, points }, i) => (
// //               <motion.div
// //                 key={name}
// //                 initial={{ opacity: 0, y: 30 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ duration: 0.6, delay: i * 0.15 }}
// //                 className="bg-white border border-gray-100 rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
// //               >
// //                 {/* Header band */}
// //                 <div className="bg-brand-navy px-8 py-6 flex items-center gap-4">
// //                   <div className="w-14 h-14 rounded-full bg-brand-gold flex items-center justify-center text-brand-navy text-xl font-display font-bold flex-shrink-0">
// //                     {name.split(' ').map(n => n[0]).join('').slice(0, 2)}
// //                   </div>
// //                   <div>
// //                     <h3 className="text-white font-display font-bold text-xl leading-tight">{name}</h3>
// //                     <p className="text-brand-gold text-sm font-semibold mt-0.5">{role}</p>
// //                   </div>
// //                 </div>

// //                 {/* Points */}
// //                 <div className="px-8 py-7 space-y-4">
// //                   {points.map((point, j) => (
// //                     <div key={j} className="flex items-start gap-3">
// //                       <div className="w-6 h-6 rounded-full bg-brand-gold/15 flex items-center justify-center flex-shrink-0 mt-0.5">
// //                         <div className="w-2 h-2 rounded-full bg-brand-gold" />
// //                       </div>
// //                       <p className="text-gray-600 text-sm leading-relaxed">{point}</p>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </div>

// //                   {/* Bottom tagline strip */}
// //           <div className="mt-12 bg-brand-navy rounded-2xl px-8 py-6 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
// //             {['Trusted Guidance', 'Student Centric', 'Ethical Mentorship', 'Global Opportunities', 'End-to-End Support'].map((tag) => (
// //               <div key={tag} className="flex items-center gap-2 text-white text-sm font-semibold">
// //                 <span className="w-2 h-2 rounded-full bg-brand-gold" />
// //                 {tag}
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Timeline */}
// //       <section className="section-padding bg-white">
// //         <div className="container-xl max-w-3xl mx-auto">
// //           <SectionTitle title="Our Journey" subtitle="Key milestones since 2018" />
// //           <div className="relative border-l-2 border-brand-gold pl-8 space-y-8">
// //             {milestones.map(({ year, event }) => (
// //               <div key={year} className="relative">
// //                 <div className="absolute -left-[2.75rem] top-1 w-5 h-5 rounded-full bg-brand-gold border-4 border-white shadow" />
// //                 <span className="text-brand-gold font-bold text-sm">{year}</span>
// //                 <p className="text-gray-700 font-medium mt-1">{event}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       <CTASection />
// //     </PageLayout>
// //   )
// // }

// // export default About