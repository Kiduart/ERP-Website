import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

type NavLink = {
  label: string;
  href: string;
  badge?: string;
};

type DropdownItem = {
  label: string;
  href: string;
  note?: string;
};

type DropdownGroup = {
  title: string;
  items: DropdownItem[];
};

const NAV_LINKS: NavLink[] = [
  { label: "Features", href: "/features" },
  { label: "Solutions", href: "/solutions" },
  { label: "Platform", href: "/platform" },
];

const DROPDOWNS: Record<string, DropdownGroup[]> = {
  Resources: [
    {
      title: "Insights",
      items: [
        { label: "Blog", href: "/blog", note: "Ideas, guides, and updates" },
        { label: "Customer Stories", href: "/stories", note: "See real school outcomes" },
      ],
    },
    {
      title: "Support",
      items: [
        { label: "Help Center", href: "/help", note: "Docs, walkthroughs, and answers" },
      ],
    },
  ],
  More: [
    {
      title: "Platform Add-ons",
      items: [
        { label: "Pricing", href: "/pricing", note: "Plans built for growing schools" },
        { label: "Security", href: "/security", note: "Data, compliance, and trust" },
        { label: "Integrations", href: "/integrations", note: "Connect your school stack" },
        { label: "KIDUORBIT AI", href: "/kiduorbit", note: "Our AI workspace for schools" },
      ],
    },
    {
      title: "Company",
      items: [
        { label: "About", href: "/about", note: "Who we are building for" },
        { label: "Careers", href: "/careers", note: "Join the team" },
        { label: "Contact", href: "/contact", note: "Talk to KIDUART" },
      ],
    },
  ],
};

const dropdownPanelVariants: Variants = {
  hidden: {
    opacity: 1,
    y: 10,
    scaleY: 0,
    scaleX: 1,
    transformOrigin: "top center",
  },
  visible: {
    opacity: 1,
    y: 0,
    scaleY: 1,
    scaleX: 1,
    transformOrigin: "top center",
    transition: {
      duration: 0.32,
      ease: [0.22, 1, 0.36, 1] as const,
      when: "beforeChildren",
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 1,
    y: 8,
    scaleY: 0,
    scaleX: 1,
    transformOrigin: "top center",
    transition: { duration: 0.22, ease: [0.4, 0, 1, 1] as const },
  },
};

const dropdownGroupVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 6,
    clipPath: "inset(0 0 100% 0 round 1rem)",
  },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0 0 0% 0 round 1rem)",
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1] as const,
      staggerChildren: 0.05,
    },
  },
};

const dropdownItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 4,
    clipPath: "inset(0 0 100% 0 round 0.75rem)",
  },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0 0 0% 0 round 0.75rem)",
    transition: { duration: 0.24, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Navbar() {
  const [location] = useLocation();
  const isHomePage = location === "/" || location === "/home";
  const [scrolled, setScrolled] = useState(false);
  const transparentMode = isHomePage && !scrolled;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        transparentMode ? "bg-white/20 py-3" : "bg-brand-beige backdrop-blur-md shadow-md py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <img src="/logo.png" alt="KIDUART" className="h-10 w-auto md:h-16" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover-underline-group px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 ${
                  location === link.href
                    ? transparentMode
                      ? "text-brand-navy font-bolder bg-white/12"
                      : "text-brand-teal bg-white/50"
                    : transparentMode
                      ? "text-brand-navy font-bolder hover:bg-white/40"
                      : "text-brand-navy hover:text-brand-teal hover:bg-white/30"
                }`}
              >
                <span className="center-gradient-underline">{link.label}</span>
                {link.badge && (
                  <span className="px-1.5 py-0.5 rounded-full bg-brand-yellow text-brand-navy text-[10px] font-bold">
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}

            {/* Dropdowns */}
            {Object.entries(DROPDOWNS).map(([title, groups]) => (
              <div
                key={title}
                className="relative"
                onMouseEnter={() => setActiveDropdown(title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  transparentMode ? "text-brand-navy hover:bg-white/40" : "text-brand-navy hover:text-brand-teal hover:bg-white/30"
                }`}>
                  {title} <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === title ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {activeDropdown === title && (
                    <motion.div
                      variants={dropdownPanelVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      style={{ transformOrigin: "top center" }}
                      className={`absolute top-full pt-4 overflow-hidden rounded-[1.5rem] border border-white/55 bg-white shadow-[0_26px_70px_rgba(0,48,73,0.16)] backdrop-blur-xl ${
                        title === "More" ? "left-1/2 w-[34rem] -translate-x-1/2 p-4" : "left-0 w-[28rem] p-4"
                      }`}
                    >
                      <div className={`grid gap-4 ${groups.length > 1 ? "md:grid-cols-2" : "grid-cols-1"}`}>
                        {groups.map((group) => (
                          <motion.div
                            key={group.title}
                            variants={dropdownGroupVariants}
                            className="rounded-[1.15rem] border border-brand-navy/20 bg-white/72 p-3"
                          >
                            <div className="px-3 pb-2 text-[11px] font-bold uppercase tracking-[0.22em] text-brand-teal/85">
                              {group.title}
                            </div>
                            <div className="space-y-1">
                              {group.items.map((item) => (
                                <motion.div key={item.href} variants={dropdownItemVariants}>
                                  <Link
                                    href={item.href}
                                    className="hover-underline-group block rounded-[1rem] px-3 py-3 transition-colors hover:bg-brand-beige/65"
                                  >
                                    <div className="center-gradient-underline text-sm font-semibold text-brand-navy transition-colors">
                                      {item.label}
                                    </div>
                                    {item.note && (
                                      <div className="mt-1 text-xs leading-5 text-brand-navy/52">
                                        {item.note}
                                      </div>
                                    )}
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link 
              href="/login" 
              className={`hidden md:block text-sm font-bold transition-colors text-brand-navy hover:text-brand-teal`}
            >
              Login
            </Link>
            <Link
              href="/demo"
              className={`hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full font-semibold text-sm shadow-lg transition-all duration-300 hover:-translate-y-0.5 ${
                 "bg-brand-navy text-white hover:bg-brand-teal hover:shadow-brand-teal/25"
              }`}
            >
              Request Demo
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden rounded-lg p-2 ${transparentMode ? "text-white hover:bg-white/12" : "text-brand-navy hover:bg-white/50"}`}
            >
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-brand-beige overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              <div className="grid grid-cols-2 gap-2">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-3 rounded-lg bg-brand-beige/30 text-brand-navy font-medium flex items-center justify-between"
                  >
                    {link.label}
                    {link.badge && (
                      <span className="px-1.5 py-0.5 rounded-full bg-brand-yellow text-brand-navy text-[10px] font-bold">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
              
              {Object.entries(DROPDOWNS).map(([title, groups]) => (
                <div key={title} className="space-y-2">
                  <h4 className="font-bold text-sm text-brand-teal px-2 uppercase tracking-wider">{title}</h4>
                  <div className="space-y-3">
                    {groups.map((group) => (
                      <div key={group.title} className="rounded-xl bg-brand-beige/25 p-3">
                        <div className="px-1 pb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-navy/55">
                          {group.title}
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {group.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block rounded-lg px-3 py-2 text-sm text-brand-navy hover:bg-brand-beige/50"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              
              <div className="pt-4 border-t border-brand-beige/50 flex flex-col gap-3">
                <Link
                  href="/login"
                  className="block w-full text-center px-6 py-3 rounded-xl border-2 border-brand-navy text-brand-navy font-bold"
                >
                  Login
                </Link>
                <Link
                  href="/demo"
                  className="block w-full text-center px-6 py-3 rounded-xl bg-brand-navy text-white font-bold"
                >
                  Request a Demo
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
