export const FooterNav = () => {
  const servicesLinks = [
    { name: "Digital Marketing", href: "#" },
    { name: "Web Development", href: "#" },
    { name: "SEO & Content", href: "#" },
    { name: "Social Media", href: "#" },
    { name: "AI Solutions", href: "#" },
    { name: "Financial Consulting", href: "#" },
  ];

  const companyLinks = [
    { name: "About Us", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms & Conditions", href: "#" },
  ];

  return (
    <div className="relative text-[15.1297px] box-border caret-transparent flex flex-col col-end-3 col-start-1 row-end-3 row-start-2 tracking-[-0.302594px] leading-[21.1816px] z-[2] md:text-[15.2873px] md:col-end-4 md:col-start-3 md:row-end-2 md:row-start-1 md:tracking-[-0.305746px] md:leading-[21.4022px]">
      <div className="grid grid-cols-2 gap-8 p-4 md:p-8 border-t border-neutral-600 md:border-t-0">
        {/* Services Column */}
        <div className="flex flex-col gap-4">
          <h3 className="text-sm uppercase tracking-wider text-neutral-400 font-medium">
            Services
          </h3>
          <ul className="flex flex-col gap-3">
            {servicesLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-stone-50 text-sm hover:text-neutral-400 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Column */}
        <div className="flex flex-col gap-4">
          <h3 className="text-sm uppercase tracking-wider text-neutral-400 font-medium">
            Company
          </h3>
          <ul className="flex flex-col gap-3">
            {companyLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-stone-50 text-sm hover:text-neutral-400 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};