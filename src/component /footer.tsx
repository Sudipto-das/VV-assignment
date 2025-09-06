import { Linkedin, Facebook, Instagram } from "lucide-react";

type FooterLinkSection = {
  title: string;
  links: { label: string; href: string }[];
};

const footerSections: FooterLinkSection[] = [
  {
    title: "Quick Links",
    links: [
      { label: "Customer Reviews", href: "#" },
      { label: "Our Blogs", href: "#" },
      { label: "Store Locator", href: "#" },
      { label: "Jewellery Care", href: "#" },
      { label: "Join Us", href: "#" },
    ],
  },
  {
    title: "Details",
    links: [
      { label: "Shipping & Returns", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "International Shipping", href: "#" },
      { label: "FAQ's and Support", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
  {
    title: "More Info",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact Support", href: "#" },
      { label: "Partnerships", href: "#" },
      { label: "Investor Relations", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: <Linkedin size={24} />, href: "#", color: "text-[#A40303] hover:text-blue-800" },
  { icon: <Facebook size={24} />, href: "#", color: "text-[#A40303] hover:text-blue-800" },
  { icon: <Instagram size={24} />, href: "#", color: "text-[#A40303] hover:text-pink-700" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-200 font-montserrat border-t border-[#A40303]">
    
      <div className="max-w-6xl mx-auto px-4 py-8 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Dynamic Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4 text-[#A40303]">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-gray-800 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Us */}
          <div>
            <h3 className="font-semibold  mb-4 text-[#A40303]">Contact Us</h3>
            <div className="text-sm text-gray-600 space-y-2">
              <p className="font-medium">Elegant Jewels</p>
              <p>
                SF-11, Ansal Fortune Arcade, K Block,<br /> Sector-18, Noida, Uttar Pradesh
              </p>
              <p className="mt-4">
                For queries or complaints, contact:
              </p>
              <p className="font-medium">Elegant Jewel Pvt Ltd</p>
              <a
                href="mailto:contact@elegantjewels.com"
                className="text-gray-600 hover:text-gray-800 block"
              >
                contact@elegantjewels.com
              </a>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 pt-6">
          <p className="text-sm text-gray-600 mb-3">Our Social Links:</p>
          <div className="flex space-x-4">
            {socialLinks.map((item, i) => (
              <a key={i} href={item.href} className={item.color}>
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#CA8787] py-3">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-sm text-amber-50">
            © 2024 Elegant Jewels. All Rights Reserved.
          </p>
        </div>
      </div>
      
    </footer>
  );
}
