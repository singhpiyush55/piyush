import { title } from "process";

export default function Home() {
const langs = [
  {
    img: "/langs/c.png",
    title: "C"
  },
  {
    img: "/langs/java.png",
    title: "Java"
  },
  {
    img: "/langs/javascript.png",
    title: "Java Script"
  },
  {
    img: "/langs/typescript.png",
    title: "Type Script"
  },
  {
    img: "/langs/python.png",
    title: "Python"
  }
];

const laf = [
  {
    img: "/libs_frameworks/express.png",
    title: "Express"
  },
  {
    img: "/libs_frameworks/next_js.png",
    title: "NextJS"
  },
  {
    img: "/libs_frameworks/node_js.png",
    title: "Node JS"
  },
  {
    img: "/libs_frameworks/react.png",
    title: "React"
  },
  {
    img: "/libs_frameworks/tailwind_css.png",
    title: "Tailwind CSS"
  },
]
const db = [
  {
    img: "/db/mongodb.png",
    title: "Mongo DB"
  },
  {
    img: "/db/mysql.png",
    title: "MySQL"
  },
  {
    img: "/db/postgresql.png",
    title: "PostgreSQL"
  }
]
const tools = [
  {
    img: "/tools/git.png",
    title: "Git"
  },
  {
    img: "/tools/postman.png",
    title: "Postman"
  }
]


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
        {/* Languages --> Cards */}
        <div className="flex flex-col gap-4 bg-white/5 border border-white/10 rounded-xl p-6">
          <p className="text-white text-lg font-medium">Languages</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {langs.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-black/30 border border-white/10 rounded-lg px-4 py-3 hover:border-[rgb(255,230,3)] transition"
              >
                <img
                  src={item.img}
                  className="w-7 h-7 shrink-0"
                />

                <div>
                  <p className="text-white">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/*Libraries & Frameworks --> Card*/}
        <div className="flex flex-col gap-4 bg-white/5 border border-white/10 rounded-xl p-6">
          <p className="text-white text-lg font-medium">Libraries & Frameworks</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {laf.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-black/30 border border-white/10 rounded-lg px-4 py-3 hover:border-[rgb(255,230,3)] transition"
              >
                <img
                  src={item.img}
                  className="w-7 h-7 shrink-0"
                />

                <div>
                  <p className="text-white">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Databases */}
        <div className="flex flex-col gap-4 bg-white/5 border border-white/10 rounded-xl p-6">
          <p className="text-white text-lg font-medium">Databases</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {db.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-black/30 border border-white/10 rounded-lg px-4 py-3 hover:border-[rgb(255,230,3)] transition"
              >
                <img
                  src={item.img}
                  className="w-7 h-7 shrink-0"
                />

                <div>
                  <p className="text-white">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="flex flex-col gap-4 bg-white/5 border border-white/10 rounded-xl p-6">
          <p className="text-white text-lg font-medium">Tools</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tools.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-black/30 border border-white/10 rounded-lg px-4 py-3 hover:border-[rgb(255,230,3)] transition"
              >
                <img
                  src={item.img}
                  className="w-7 h-7 shrink-0"
                />

                <div>
                  <p className="text-white">{item.title}</p>
                </div>
              </div>
            ))}
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
