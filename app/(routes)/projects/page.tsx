export default function Projects() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">
        Projects
      </h2>

      <details className="mb-4">
        <summary className="cursor-pointer text-white font-medium">
          TapIn (Dec 2025 – Jan 2026)
        </summary>

        <div className="mt-2 text-white/80 leading-relaxed">
          <p>
            A full-stack web application integrated with a sofisticated IoT system, that records user attendance using RFID/NFC and stores it securely in a database with real-time API integration.
          </p>

          <a
            href="https://tapin.logictrail.space/"
            target="_blank"
            className="
              inline-block
              mt-2
              underline
              underline-offset-4
              decoration-[rgb(255,230,3)]
              decoration-wavy
            "
          >
            Live
          </a>
          <span>         </span>
          <a
            href="https://github.com/singhpiyush55/TapIn"
            target="_blank"
            className="
              inline-block
              mt-2
              underline
              underline-offset-4
              decoration-[rgb(255,230,3)]
              decoration-wavy
            "
          >
            GitHub
          </a>
        </div>
      </details>

      <details className="mb-4">
        <summary className="cursor-pointer text-white font-medium">
          Discuss (Jan 2026)
        </summary>

        <div className="mt-2 text-white/80 leading-relaxed">
          <p>
            A web chat-room.
          </p>

          {/* <a
            href="https://tapin.logictrail.space/"
            target="_blank"
            className="
              inline-block
              mt-2
              underline
              underline-offset-4
              decoration-[rgb(255,230,3)]
              decoration-wavy
            "
          >
            Live
          </a>
          <span>         </span> */}
          <a
            href="https://github.com/singhpiyush55/discuss"
            target="_blank"
            className="
              inline-block
              mt-2
              underline
              underline-offset-4
              decoration-[rgb(255,230,3)]
              decoration-wavy
            "
          >
            GitHub
          </a>
        </div>
      </details>
    </div>
  );
}
