export default function Home() {
  return (
    <div className="max-w-3xl">
      <p className="text-white/90 leading-relaxed text-lg mb-10">
        Greetings! <br />
        I build scalable applications with a pinch of AI / LLMs as a brain to them.
        I enjoy backend development and thinking about systems that last.
      </p>

      <h4
        className="
          inline-block
          px-3
          py-1
          mb-4
          rounded-md
          border
          border-[rgb(255,230,3)]
          text-white
          font-medium
        "
      >
        Tech I have worked with
      </h4>

      {/* Tech stack list */}
      <div className="space-y-3 mb-12">
        {/* Languages */}
        <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-lg p-4">
          {/* Icon placeholder */}
          <img
            src="/icons/language.png"
            alt="Languages"
            className="w-6 h-6"
          />
          <div>
            <p className="text-white">Languages</p>
            <p className="text-white/70 text-sm">
              Java, JavaScript, Python, SQL
            </p>
          </div>
        </div>

        {/* Frameworks */}
        <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-lg p-4">
          <img
            src="/icons/framework.png"
            alt="Frameworks"
            className="w-6 h-6"
          />
          <div>
            <p className="text-white">Frameworks & Libraries</p>
            <p className="text-white/70 text-sm">
              Spring Boot, Node.js, React, Next.js
            </p>
          </div>
        </div>

        {/* Databases */}
        <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-lg p-4">
          <img
            src="/icons/database.png"
            alt="Databases"
            className="w-6 h-6"
          />
          <div>
            <p className="text-white">Databases</p>
            <p className="text-white/70 text-sm">
              MySQL, PostgreSQL, MongoDB
            </p>
          </div>
        </div>

        {/* Tools */}
        <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-lg p-4">
          <img
            src="/icons/tools.png"
            alt="Tools"
            className="w-6 h-6"
          />
          <div>
            <p className="text-white">Tools</p>
            <p className="text-white/70 text-sm">
              Git, Docker, Linux, Postman
            </p>
          </div>
        </div>
      </div>

      {/* Interests heading */}
      <h4
        className="
          inline-block
          px-3
          py-1
          mb-4
          rounded-md
          border
          border-[rgb(255,230,3)]
          text-white
          font-medium
        "
      >
        Interests
      </h4>

      {/* Interests list */}
      <ul className="space-y-2 text-white/80">
        <li>
          Problem solving —
          <a
            href="https://your-codolio-link.com"
            target="_blank"
            className="
              ml-1
              underline
              underline-offset-4
              decoration-[rgb(255,230,3)]
              decoration-wavy
            "
          >
            Codolio profile
          </a>
        </li>
        <li>System design & backend architecture</li>
        <li>Applied AI and LLM-based systems</li>
      </ul>
    </div>
  );
}
