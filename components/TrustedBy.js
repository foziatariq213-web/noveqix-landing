const tools = ["GitHub", "GitLab", "Jira", "Jenkins", "Slack", "Cypress"];

export default function TrustedBy() {
  return (
    <section className="border-y border-slate-100 bg-white py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
          Integrates seamlessly with your stack
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {tools.map((tool) => (
            <span
              key={tool}
              className="text-lg font-semibold text-slate-400 transition-colors hover:text-slate-600"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
