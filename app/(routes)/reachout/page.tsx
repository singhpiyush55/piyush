export default function Contact() {
  return (
    <div>
      {/* <h2 className="text-2xl font-semibold mb-6">
        Reach out
      </h2> */}

      <p className="text-white/80 mb-4 leading-relaxed max-w-xl">
        If something here resonated with you, or you’d just like to talk,
        feel free to reach out.
      </p>

      <ul className="space-y-2 text-white">
        <li>
          <img
            src="/reachout_icons/Mail_ru.png"
            alt="GitHub"
            className="w-5 h-5 mr-2 inline-block"
          />
          <a
            href="mailto:piyushsingh.co@gmail.com"
            className="hover:text-[rgb(255,230,3)] transition"
          >
            Email
          </a>
        </li>

        <li>
          <img
            src="/reachout_icons/Github.png"
            alt="GitHub"
            className="w-5 h-5 mr-2 inline-block"
          />
          <a
            href="https://github.com/singhPiyush55"
            target="_blank"
            className="hover:text-[rgb(255,230,3)] transition"
          >
            GitHub
          </a>
        </li>

        <li>
          <img
            src="/reachout_icons/LinkedIN.png"
            alt="GitHub"
            className="w-5 h-5 mr-2 inline-block"
          />
          <a
            href="https://linkedin.com/in/singhpiyush192/"
            target="_blank"
            className="hover:text-[rgb(255,230,3)] transition"
          >
            LinkedIn
          </a>
        </li>

        <li>
          <img
            src="/reachout_icons/Instagram.png"
            alt="GitHub"
            className="w-5 h-5 mr-2 inline-block"
          />
          <a
            href="https://instagram.com/captain_singhpiyush"
            target="_blank"
            className="hover:text-[rgb(255,230,3)] transition"
          >
            Instagram
          </a>
        </li>

        <li>
          <img
            src="/reachout_icons/WhatsApp.png"
            alt="GitHub"
            className="w-5 h-5 mr-2 inline-block"
          />
          <a
            href="https://wa.me/9576842191"
            target="_blank"
            className="hover:text-[rgb(255,230,3)] transition"
          >
            WhatsApp
          </a>
        </li>

        <li>
          <img
            src="/reachout_icons/X.png"
            alt="GitHub"
            className="w-5 h-5 mr-2 inline-block bg-gray-100 border rounded-lg" 
          />
          <a
            href="https://x.com/singhPiyush55"
            target="_blank"
            className="hover:text-[rgb(255,230,3)] transition"
          >
            X (Twitter)
          </a>
        </li>

        <li>
          <img
            src="/reachout_icons/Discord.png"
            alt="GitHub"
            className="w-5 h-5 mr-2 inline-block"
          />
          <a
            href="https://discord.com/users/singhpiyush55"
            target="_blank"
            className="hover:text-[rgb(255,230,3)] transition"
          >
            Discord
          </a>
        </li>
      </ul>
    </div>
  );
}





// export default function ReachOut() {
//   return (
//     <div>
//       <h2 className="text-2xl font-semibold mb-6">
//         Let’s Connect
//       </h2>

//       {/* Floating card */}
//       <div
//         className="
//           bg-white/5
//           backdrop-blur
//           border border-white/10
//           rounded-xl
//           p-6
//           shadow-lg
//           max-w-xl
//         "
//       >
//         <p className="text-white/80 mb-5 leading-relaxed">
//           If something here resonated with you, or you’d just like to talk,
//           feel free to reach out.
//         </p>

//         {/* Contact icons */}
//         <div className="flex flex-wrap gap-4">
//           {/* Email */}
//           <ContactIcon
//             href="mailto:your@email.com"
//             label="Email"
//           >
//             <MailIcon />
//           </ContactIcon>

//           {/* GitHub */}
//           <ContactIcon
//             href="https://github.com/yourusername"
//             label="GitHub"
//           >
//             <GithubIcon />
//           </ContactIcon>

//           {/* LinkedIn */}
//           <ContactIcon
//             href="https://linkedin.com/in/yourusername"
//             label="LinkedIn"
//           >
//             <LinkedInIcon />
//           </ContactIcon>

//           {/* Instagram */}
//           <ContactIcon
//             href="https://instagram.com/yourusername"
//             label="Instagram"
//           >
//             <InstagramIcon />
//           </ContactIcon>

//           {/* WhatsApp */}
//           <ContactIcon
//             href="https://wa.me/xxxxxxxxxx"
//             label="WhatsApp"
//           >
//             <WhatsAppIcon />
//           </ContactIcon>

//           {/* X (Twitter) */}
//           <ContactIcon
//             href="https://x.com/yourusername"
//             label="X"
//           >
//             <XIcon />
//           </ContactIcon>

//           {/* Discord */}
//           <ContactIcon
//             href="https://discord.com/users/youruserid"
//             label="Discord"
//           >
//             <DiscordIcon />
//           </ContactIcon>
//         </div>
//       </div>
//     </div>
//   );
// }
// function ContactIcon({
//   href,
//   label,
//   children,
// }: {
//   href: string;
//   label: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <a
//       href={href}
//       target="_blank"
//       aria-label={label}
//       className="
//         p-2
//         rounded-full
//         transition
//         hover:bg-white/10
//         hover:text-[rgb(255,230,3)]
//       "
//     >
//       {children}
//     </a>
//   );
// }
// function MailIcon() {
//   return (
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//       <rect x="2" y="4" width="20" height="16" rx="2" />
//       <polyline points="22 6 12 13 2 6" />
//     </svg>
//   );
// }
// function GithubIcon() {
//   return (
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//       <path d="M9 19c-4 1-4-2-6-2" />
//       <path d="M15 19c4 1 4-2 6-2" />
//       <path d="M12 2a10 10 0 0 0-3 19" />
//     </svg>
//   );
// }
// function LinkedInIcon() {
//   return (
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//       <rect x="2" y="2" width="20" height="20" rx="2" />
//       <line x1="7" y1="8" x2="7" y2="16" />
//       <path d="M11 16v-5a2 2 0 0 1 4 0v5" />
//     </svg>
//   );
// }
// function InstagramIcon() {
//   return (
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//       <rect x="2" y="2" width="20" height="20" rx="5" />
//       <circle cx="12" cy="12" r="4" />
//       <circle cx="17" cy="7" r="1" />
//     </svg>
//   );
// }
// function WhatsAppIcon() {
//   return (
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//       <path d="M21 11.5a8.5 8.5 0 1 1-3.5-6.8" />
//       <path d="M8 14s1.5 2 4 2 4-2 4-2" />
//     </svg>
//   );
// }
// function XIcon() {
//   return (
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//       <line x1="4" y1="4" x2="20" y2="20" />
//       <line x1="20" y1="4" x2="4" y2="20" />
//     </svg>
//   );
// }
// function DiscordIcon() {
//   return (
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//       <circle cx="9" cy="12" r="1" />
//       <circle cx="15" cy="12" r="1" />
//       <path d="M7.5 17c2 1 7 1 9 0" />
//       <path d="M4 4c4-2 12-2 16 0" />
//     </svg>
//   );
// }
