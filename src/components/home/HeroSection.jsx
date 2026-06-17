import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import heroLogo from '../../assets/DGM2.png'

const trustBadges = ['Expert Guidance', 'Proven Success', 'Global Opportunities']

const stats = [
  { value: '68+', label: 'Students Trained' },
  { value: '4+', label: 'Years Expertise' },
  { value: 'A1–C1', label: 'German Levels' },
  { value: 'End-to-End', label: 'Student Support' },
]

function HeroSection() {
  return (
    <section className="relative flex flex-col overflow-hidden bg-[#F5F0E8]" style={{ minHeight: '100vh' }}>

      {/* ── Germany building watermark ── */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1920&q=80")',
          opacity: 0.08,
        }}
      />

      {/* ── Dot grid top-right ── */}
      <div
        className="absolute top-16 right-52 w-36 h-36 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #D4A017 1.5px, transparent 1.5px)',
          backgroundSize: '14px 14px',
        }}
      />

      {/* ── Gold swoosh curves ── */}
      <svg
        className="absolute top-0 right-0 w-[460px] h-[600px] pointer-events-none"
        viewBox="0 0 460 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path d="M460 0 Q340 160 240 300 Q140 440 460 600" stroke="#D4A017" strokeWidth="32" fill="none" opacity="0.3" strokeLinecap="round"/>
        <path d="M460 60 Q360 200 270 330 Q180 460 460 600" stroke="#D4A017" strokeWidth="10" fill="none" opacity="0.15" strokeLinecap="round"/>
      </svg>

      {/* ── Bottom-right small swoosh ── */}
      <svg
        className="absolute bottom-0 right-0 w-[280px] h-[160px] pointer-events-none"
        viewBox="0 0 280 160"
        fill="none"
      >
        <path d="M280 160 Q160 80 0 140" stroke="#D4A017" strokeWidth="20" fill="none" opacity="0.25" strokeLinecap="round"/>
      </svg>

      {/* ── Main content — vertically centered in full viewport ── */}
      <div className="relative z-10 flex-1 flex items-center" style={{ paddingTop: '72px' }}>
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 py-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-72px-80px)]">

            {/* ── LEFT ── */}
            <div className="flex flex-col justify-center">

              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-6"
              >
                <svg className="w-4 h-4 text-brand-gold flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span className="text-brand-navy text-sm font-bold uppercase tracking-[0.2em]">
                  Hyderabad → Germany
                </span>
                <div className="h-px w-10 bg-brand-gold" />
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-display font-bold leading-[1.08]
                           text-5xl sm:text-6xl lg:text-[4.2rem]"
              >
                <span className="text-brand-navy block">Learn German.</span>
                <span className="text-brand-gold block">Build Your Future.</span>
                <span className="text-brand-navy block">Go Global.</span>
              </motion.h1>

              {/* Sub-label */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center gap-3 mt-5 mb-4"
              >
                <div className="h-px w-8 bg-brand-gold" />
                <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em]">
                  German Language &amp; Abroad Services
                </p>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="text-gray-600 text-base leading-relaxed max-w-[500px]"
              >
                DharmaGita German Language & Abroad Services is a Germany-focused education and career platform dedicated to helping students and professionals build successful futures in Germany.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <Link
                  to="/contact"
                  className="group bg-brand-gold text-white font-bold px-7 py-3.5 rounded-lg
                             text-base flex items-center gap-2
                             hover:bg-brand-gold-light hover:shadow-lg hover:shadow-brand-gold/30
                             transition-all duration-300"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  Book Free Counseling
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </Link>

                <Link
                  to="/courses"
                  className="group border-2 border-gray-300 text-brand-navy font-semibold
                             px-7 py-3.5 rounded-lg text-base flex items-center gap-2
                             hover:border-brand-navy transition-all duration-300"
                >
                  Explore Courses
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </Link>
              </motion.div>

              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.75 }}
                className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2"
              >
                {trustBadges.map(({ label } = {}, i) => {
                  const text = trustBadges[i]
                  return (
                    <div key={text} className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-brand-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-gray-600 text-sm">{text}</span>
                      {i < trustBadges.length - 1 && <span className="ml-3 text-gray-300 text-sm">|</span>}
                    </div>
                  )
                })}
              </motion.div>
            </div>

            {/* ── RIGHT — Logo perfectly centered ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
              className="hidden lg:flex items-center justify-center" //justify-start pl-4
            >
              <div className="relative flex items-center justify-center">
                {/* Outer decorative ring */}
                <div className="absolute w-[380px] h-[380px] rounded-full border border-brand-gold/25" />
                <div className="absolute w-[350px] h-[350px] rounded-full border border-brand-gold/15" />

                {/* Pulsing ring animation */}
                <motion.div
                  animate={{ scale: [1, 1.03, 1], opacity: [0.15, 0.05, 0.15] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute w-[400px] h-[400px] rounded-full border-2 border-brand-gold/20"
                />

                {/* White circle with logo */}
                <div className="relative w-[350px] h-[350px] rounded-full bg-white flex items-center justify-center
                                shadow-[0_24px_80px_rgba(0,0,0,0.13),0_0_0_1px_rgba(212,160,23,0.18)]">
                  {/* Inner subtle ring */}
                  <div className="absolute inset-3 rounded-full border border-brand-gold/10" />
                  <img
                    src={heroLogo}
                    alt="DharmaGita"
                    className="w-[85%] h-[85%] object-contain relative z-10"
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="relative z-10 border-t border-gray-200 bg-white/70 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0 sm:divide-x sm:divide-gray-200">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center sm:px-8">
                <p className="text-xl sm:text-2xl font-display font-bold text-brand-gold">{value}</p>
                <p className="text-gray-500 text-xs mt-0.5 font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

    </section>
  )
}

export default HeroSection

// 2 // import { motion } from 'framer-motion'
// import { Link } from 'react-router-dom'
// import heroLogo from '../../assets/DG.jpg'

// const stats = [
//   { value: '68+', label: 'Students Trained' },
//   { value: '4+', label: 'Years Expertise' },
//   { value: 'A1–C1', label: 'German Levels' },
//   { value: '95%', label: 'Visa Success Rate' },
// ]

// const navHighlights = ['German Language', 'Study Abroad', 'Visa Assistance', 'Ausbildung']

// function HeroSection() {
//   return (
//     <section className="relative min-h-screen flex flex-col bg-brand-navy overflow-hidden">

//       {/* ── Decorative background elements ── */}
//       <div className="absolute inset-0 pointer-events-none select-none">
//         {/* Large faint circle top-right */}
//         <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full
//                         border border-brand-gold/10" />
//         <div className="absolute -top-16 -right-16 w-[400px] h-[400px] rounded-full
//                         border border-brand-gold/8" />
//         {/* Bottom-left subtle glow */}
//         <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full
//                         bg-brand-gold/4 blur-3xl" />
//         {/* Diagonal gold rule */}
//         <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b
//                         from-transparent via-brand-gold/15 to-transparent" />
//       </div>

//       {/* ── Top thin gold accent bar ── */}
//       <div className="relative z-10 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent" />

//       {/* ── Main content ── */}
//       <div className="relative z-10 flex-1 flex items-center">
//         <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full pt-20 pb-12">
//           <div className="grid lg:grid-cols-2 gap-10 items-center">

//             {/* ───── LEFT COLUMN ───── */}
//             <div>

//               {/* Service tags row */}
//               <motion.div
//                 initial={{ opacity: 0, y: 16 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="flex flex-wrap gap-2 mb-8"
//               >
//                 {navHighlights.map((tag) => (
//                   <span
//                     key={tag}
//                     className="text-xs font-semibold text-brand-gold border border-brand-gold/30
//                                bg-brand-gold/8 px-3 py-1 rounded-full tracking-wide"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </motion.div>

//               {/* Eyebrow */}
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6, delay: 0.05 }}
//                 className="flex items-center gap-3 mb-6"
//               >
//                 <div className="h-px w-10 bg-brand-gold" />
//                 <span className="text-brand-gold text-sm font-semibold uppercase tracking-[0.2em]">
//                   🇩🇪 Hyderabad → Germany
//                 </span>
//               </motion.div>

//               {/* Main headline */}
//               <motion.h1
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.1 }}
//                 className="font-display font-bold text-white leading-[1.05]
//                            text-5xl sm:text-6xl lg:text-[4.5rem]"
//               >
//                 Learn German.
//                 <br />
//                 <span className="text-brand-gold relative inline-block">
//                   Build Your Future.
//                   {/* Underline accent */}
//                   <motion.div
//                     initial={{ scaleX: 0 }}
//                     animate={{ scaleX: 1 }}
//                     transition={{ duration: 0.8, delay: 0.7 }}
//                     className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-gold/50 origin-left"
//                   />
//                 </span>
//                 <br />
//                 Go Global.
//               </motion.h1>

//               {/* Tagline */}
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.6, delay: 0.3 }}
//                 className="flex items-center gap-3 mt-5 mb-6"
//               >
//                 <div className="h-px w-8 bg-brand-gold/50" />
//                 <p className="text-brand-gold/80 text-sm font-semibold uppercase tracking-[0.15em]">
//                   German Language &amp; Abroad Services
//                 </p>
//               </motion.div>

//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7, delay: 0.35 }}
//                 className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-lg"
//               >
//                 DharmaGita is a Germany-focused education and career platform dedicated to
//                 helping students and professionals build successful futures in Germany —
//                 with complete guidance from day one.
//               </motion.p>

//               {/* CTA Buttons */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.5 }}
//                 className="mt-10 flex flex-wrap gap-4"
//               >
//                 <Link
//                   to="/contact"
//                   className="group relative bg-brand-gold text-brand-navy font-bold
//                              px-8 py-4 rounded-lg text-base overflow-hidden
//                              hover:shadow-xl hover:shadow-brand-gold/30
//                              transition-all duration-300"
//                 >
//                   <span className="relative z-10 flex items-center gap-2">
//                     Book Free Counseling
//                     <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                     </svg>
//                   </span>
//                   <div className="absolute inset-0 bg-brand-gold-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 </Link>

//                 <Link
//                   to="/courses"
//                   className="group border border-white/30 text-white font-semibold
//                              px-8 py-4 rounded-lg text-base backdrop-blur-sm
//                              hover:border-brand-gold hover:text-brand-gold
//                              transition-all duration-300 flex items-center gap-2"
//                 >
//                   Explore Courses
//                   <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                 </Link>
//               </motion.div>

//               {/* Trust line */}
//               <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.6, delay: 0.75 }}
//                 className="mt-6 text-gray-500 text-xs flex items-center gap-2"
//               >
//                 <svg className="w-4 h-4 text-brand-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                 </svg>
//                 Free counseling session · No commitment · Expert Germany guidance
//               </motion.p>
//             </div>

//             {/* ───── RIGHT COLUMN — Logo ───── */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.88 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
//               className="hidden lg:flex items-center justify-center relative"
//             >
//               {/* Glow ring behind logo */}
//               <div className="absolute w-[420px] h-[420px] rounded-full
//                               bg-brand-gold/6 blur-2xl" />
//               <div className="absolute w-[320px] h-[320px] rounded-full
//                               border border-brand-gold/15 animate-pulse" />
//               <img
//                 src={heroLogo}
//                 alt="DharmaGita"
//                 className="relative z-10 w-full max-w-[460px] object-contain drop-shadow-2xl"
//               />
//             </motion.div>

//           </div>
//         </div>
//       </div>

//       {/* ── Stats bar ── */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7, delay: 0.9 }}
//         className="relative z-10 border-t border-white/8 bg-white/4 backdrop-blur-sm"
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-8 py-5">
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-0
//                           sm:divide-x sm:divide-white/10">
//             {stats.map(({ value, label }) => (
//               <div key={label} className="text-center sm:px-8 first:pl-0 last:pr-0">
//                 <p className="text-2xl sm:text-3xl font-display font-bold text-brand-gold">
//                   {value}
//                 </p>
//                 <p className="text-gray-400 text-xs sm:text-sm mt-1 font-medium">{label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </motion.div>

//       {/* ── Bottom gold accent bar ── */}
//       <div className="relative z-10 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />

//     </section>
//   )
// }

// export default HeroSection

// 1 // import { motion } from 'framer-motion'
// import { Link } from 'react-router-dom'
// import heroLogo from '../../assets/dharmagita-logo1.jpg'

// const stats = [
//   { value: '68+', label: 'Students Trained' },
//   { value: '4+', label: 'German Expertise' },
//   { value: 'A1–C1', label: 'German Language Levels' },
//   { value: 'End-to-End', label: 'Student Support' },
// ]

// function HeroSection() {
//   return (
//       <section
//       className="relative min-h-screen flex items-center bg-cover bg-center"
//       style={{
//         backgroundImage: `url(${heroLogo})`,
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 to-brand-navy/60" />

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full pt-24 pb-16">
//         <div className="max-w-3xl">
//           {/* Badge */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="inline-flex items-center gap-2 bg-brand-gold/20 border border-brand-gold/40
//                        text-brand-gold text-sm font-semibold px-4 py-2 rounded-full mb-6"
//           >
//             <span>🇩🇪</span>
//             Germany's Trusted Education Platform — From Hyderabad
//           </motion.div>

//           {/* Headline */}
//           <motion.h1
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.1 }}
//             className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1]"
//           >
//             Learn German.
//             <br />
//             <span className="text-brand-gold">Build Your Future.</span>
//             <br />
//             Go Global.
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.3 }}
//             className="mt-6 text-lg text-gray-300 max-w-xl leading-relaxed"
//           >
//             DharmaGita German Language & Abroad Services is a Germany-focused education and career platform dedicated to helping students and professionals build successful futures in Germany.
//           </motion.p>

//           {/* CTA Buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.5 }}
//             className="mt-10 flex flex-wrap gap-4"
//           >
//             <Link
//               to="/contact"
//               className="bg-brand-gold text-brand-navy font-bold px-8 py-4 rounded-lg text-base
//                          hover:bg-brand-gold-light transition-all duration-200 shadow-lg shadow-brand-gold/30"
//             >
//               Book Free Counseling
//             </Link>
//             <Link
//               to="/courses"
//               className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg text-base
//                          hover:bg-white hover:text-brand-navy transition-all duration-200"
//             >
//               Explore Courses
//             </Link>
//           </motion.div>

//           {/* Trust indicators */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.8 }}
//             className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6"
//           >
//             {stats.map(({ value, label }) => (
//               <div key={label} className="text-center sm:text-left">
//                 <p className="text-3xl font-display font-bold text-brand-gold">{value}</p>
//                 <p className="text-gray-300 text-sm mt-1">{label}</p>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       {/* <motion.div
//         className="absolute bottom-8 left-1/2 -translate-x-1/2"
//         animate={{ y: [0, 8, 0] }}
//         transition={{ duration: 1.5, repeat: Infinity }}
//       >
//         <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
//           <div className="w-1.5 h-2.5 bg-white/60 rounded-full" />
//         </div>
//       </motion.div> */}
//     </section>
//   )
// }

// export default HeroSection
