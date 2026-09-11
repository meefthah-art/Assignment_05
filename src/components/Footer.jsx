const LINK_GROUPS = [
  {
    title: "Product",
    links: ["Technologies", "Projects", "Pricing", "Changelog"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Blog", "Contact"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Security"],
  },
];

const SOCIALS = [
  { label: "GitHub", href: "https://github.com" },
  { label: "Twitter", href: "https://twitter.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-base-300 bg-base-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10">
          <div>
            <div className="flex items-center gap-2">
              <img src="/favicon.svg" alt="Dev Stack logo" className="w-8 h-8" />
              <span className="text-lg font-bold gradient-text">
                Dev Stack
              </span>
            </div>
            <p className="mt-3 text-sm text-base-content/60 max-w-xs">
              A curated hub for exploring modern web technologies and
              assembling the stack that fits your next project.
            </p>
            <div className="flex gap-3 mt-4">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-circle btn-ghost btn-sm"
                  aria-label={social.label}
                >
                  {social.label[0]}
                </a>
              ))}
            </div>
          </div>

          {LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h3 className="font-semibold text-sm mb-3">{group.title}</h3>
              <ul className="flex flex-col gap-2 text-sm text-base-content/60">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-secondary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-base-300 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-base-content/50">
          <p>© {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-secondary transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-secondary transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
