export default function Blogs() {
  return (
    <div>
      {/* <h2 className="text-2xl font-semibold mb-6">
        Blogs
      </h2> */}

      {/* Floating card */}
      <div
        className="
          bg-white/5
          backdrop-blur
          border border-white/10
          rounded-xl
          p-6
          shadow-lg
          max-w-xl
          flex
          items-center
          justify-between
          transition
          duration-200
          hover:-translate-y-1
          hover:shadow-xl
        "
      >
        {/* Text */}
        <div>
          <h3 className="text-lg font-medium mb-1">
            Personal Blog
          </h3>
          <p className="text-white/80 text-sm">
            Writing about learning, engineering, and thoughts.
          </p>
        </div>

        {/* Link icon */}
        <a
          href="https://your-blog-site.com"
          target="_blank"
          aria-label="Visit blog"
          className="
            p-2
            rounded-full
            transition
            hover:bg-white/10
            hover:text-[rgb(255,230,3)]
          "
        >
          <ExternalLinkIcon />
        </a>
      </div>
    </div>
  );
}
function ExternalLinkIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}
