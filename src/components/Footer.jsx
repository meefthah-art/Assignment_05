const LINK_GROUPS = [
  {
    title: "Product",
    links: ["Home", "Technologies", "Projects"],
  },
  {
    title: "Company",
    links: ["About", "Contact", "Careers"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service"],
  },
];

const SOCIALS = ["GitHub", "Twitter", "LinkedIn"];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-100">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
          <div>
            <div className="flex items-center gap-2.5">
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{
                  backgroundImage: "linear-gradient(135deg, #ec4899, #7c3aed)",
                }}
              >
                <span className="text-white font-extrabold text-[11px] leading-none">
                  DS
                </span>
              </span>
              <span className="text-lg font-bold text-slate-900">
                Dev Stack
              </span>
            </div>
            <p className="mt-4 text-sm text-slate-500 max-w-xs leading-relaxed">
              A curated hub for exploring modern web technologies and
              assembling the stack that fits your next project.
            </p>
            <div className="flex gap-4 mt-5 text-sm text-slate-500">
              {SOCIALS.map((social) => (
                <a
                  key={social}
                  href="#"
                  className="hover:text-slate-800 transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h3 className="font-semibold text-sm text-slate-900 mb-4">
                {group.title}
              </h3>
              <ul className="flex flex-col gap-3 text-sm text-slate-500">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-slate-800 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-slate-700 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-700 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
