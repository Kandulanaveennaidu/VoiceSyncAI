"use client";
import { motion } from "framer-motion";
import type { FC } from "react";

interface Partner {
  name: string;
  logoUrl: string;
  description: string;
  whyIconic: string;
  industry: string;
}

const partners: Partner[] = [
  {
    name: "Apple",
    logoUrl: "https://logo.clearbit.com/apple.com",
    description:
      "A minimalist bitten apple silhouette, symbolizing innovation and simplicity.",
    whyIconic:
      "Its clean, monochromatic design is instantly recognizable and versatile across products.",
    industry: "Technology",
  },
  {
    name: "Nike",
    logoUrl: "https://logo.clearbit.com/nike.com",
    description:
      "The Swoosh, a curved checkmark, represents speed and victory, inspired by the Greek goddess Nike.",
    whyIconic:
      "Simple, dynamic, and universally associated with athletic excellence.",
    industry: "Sports Apparel",
  },
  {
    name: "Coca-Cola",
    logoUrl: "https://logo.clearbit.com/coca-cola.com",
    description:
      "A handwritten, flowing script in white on a red background, evoking nostalgia.",
    whyIconic:
      "One of the oldest logos (since 1886), its distinctive typography is globally recognized.",
    industry: "Beverages",
  },
  {
    name: "McDonald's",
    logoUrl: "https://logo.clearbit.com/mcdonalds.com",
    description:
      'Golden Arches forming an "M," symbolizing fast food and globalization.',
    whyIconic: "Bold, simple, and a cultural symbol of quick dining.",
    industry: "Fast Food",
  },
  {
    name: "Amazon",
    logoUrl: "https://logo.clearbit.com/amazon.com",
    description:
      'A wordmark with an orange arrow from "A" to "Z," signifying comprehensive offerings.',
    whyIconic: "The arrow doubles as a smile, conveying customer satisfaction.",
    industry: "E-commerce/Technology",
  },
  {
    name: "FedEx",
    logoUrl: "https://logo.clearbit.com/fedex.com",
    description:
      'A wordmark with a hidden arrow between "E" and "x," symbolizing speed and precision.',
    whyIconic:
      'The subtle arrow creates a memorable "aha!" moment for viewers.',
    industry: "Logistics",
  },
  {
    name: "Microsoft",
    logoUrl: "https://logo.clearbit.com/microsoft.com",
    description:
      "Four colored squares forming a window, representing diverse tech solutions.",
    whyIconic: "Modern and versatile, it reflects Microsoft's broad ecosystem.",
    industry: "Technology",
  },
  {
    name: "IBM",
    logoUrl: "https://logo.clearbit.com/ibm.com",
    description:
      'Blue horizontal stripes forming "IBM," symbolizing speed and efficiency.',
    whyIconic: "A timeless design that conveys trust and tech leadership.",
    industry: "Technology",
  },
  {
    name: "Mastercard",
    logoUrl: "https://logo.clearbit.com/mastercard.com",
    description:
      "Two interlocking red and yellow circles with a lowercase wordmark.",
    whyIconic: "The Venn diagram effect symbolizes financial connectivity.",
    industry: "Finance",
  },
  {
    name: "Walmart",
    logoUrl: "https://logo.clearbit.com/walmart.com",
    description:
      "A blue wordmark with a yellow spark symbol, evoking accessibility.",
    whyIconic: "Refreshed in 2025 for a modern, digital-forward look.",
    industry: "Retail",
  },
  {
    name: "Verizon",
    logoUrl: "https://logo.clearbit.com/verizon.com",
    description:
      "A lowercase wordmark with a red checkmark, signaling reliability.",
    whyIconic: "Simple and approachable, it stands out in telecommunications.",
    industry: "Telecommunications",
  },
  {
    name: "Warner Bros.",
    logoUrl: "https://logo.clearbit.com/warnerbros.com",
    description:
      'A stylized blue and gold shield with "WB," evoking cinematic legacy.',
    whyIconic: "Represents storytelling and prestige in entertainment.",
    industry: "Entertainment",
  },
  {
    name: "Shell",
    logoUrl: "https://logo.clearbit.com/shell.com",
    description:
      "A red and yellow scallop shell, symbolizing energy and heritage.",
    whyIconic:
      "Unique colors and consistent design since the early 20th century.",
    industry: "Energy",
  },
  {
    name: "Lacoste",
    logoUrl: "https://logo.clearbit.com/lacoste.com",
    description:
      "A green crocodile with a toothy grin, embodying playful style.",
    whyIconic: "The unusual mascot adds individuality to fashion branding.",
    industry: "Fashion",
  },
  {
    name: "Mercedes-Benz",
    logoUrl: "https://logo.clearbit.com/mercedes-benz.com",
    description:
      "A three-pointed star in a circle, symbolizing dominance in land, sea, and air.",
    whyIconic: "Simple, elegant, and synonymous with luxury.",
    industry: "Automotive",
  },
  {
    name: "BMW",
    logoUrl: "https://logo.clearbit.com/bmw.com",
    description:
      "Blue and white quadrants with a black ring, reflecting Bavarian heritage.",
    whyIconic: "Conveys German efficiency and automotive prestige.",
    industry: "Automotive",
  },
  {
    name: "Adidas",
    logoUrl: "https://logo.clearbit.com/adidas.com",
    description:
      "Three slanted bars forming a mountain, symbolizing athletic challenges.",
    whyIconic: "Dynamic and versatile, it resonates with sports culture.",
    industry: "Sports Apparel",
  },
  {
    name: "PepsiCo",
    logoUrl: "https://logo.clearbit.com/pepsi.com",
    description: "A blue, red, and white globe, evoking youth and vibrancy.",
    whyIconic: "Bold and energetic, it stands out in beverages.",
    industry: "Beverages",
  },
  {
    name: "LEGO",
    logoUrl: "https://logo.clearbit.com/lego.com",
    description: 'A red square with white "LEGO" text, symbolizing creativity.',
    whyIconic:
      "Simple and playful, it reflects the brand's focus on imagination.",
    industry: "Toys",
  },
  {
    name: "Rolex",
    logoUrl: "https://logo.clearbit.com/rolex.com",
    description:
      "A gold crown above a green wordmark, symbolizing luxury and precision.",
    whyIconic: "Elegant and timeless, it defines high-end watchmaking.",
    industry: "Luxury Goods",
  },
];

const marqueeVariants = {
  animate: {
    x: ["0%", "-50%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 90,
        ease: "linear",
      },
    },
  },
};

export default function TrustedBySection() {
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-16 bg-primary/[.05]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Trusted by leading agencies and businesses
        </motion.h2>
        <div className="w-full overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap"
            variants={marqueeVariants}
            animate="animate"
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                title={partner.name}
                className="flex-shrink-0 w-48 h-24 mx-6 flex flex-col items-center justify-center text-center group relative"
                data-ai-hint="company logo"
              >
                <img
                  src={partner.logoUrl}
                  alt={`${partner.name} logo`}
                  className="w-10 h-10 object-contain mb-1 group-hover:opacity-100 opacity-70 transition-all duration-300"
                />
                <span className="text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300 truncate w-full px-1">
                  {partner.name}
                </span>
                {/* Tooltip on hover */}
                <div className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded-lg p-2 w-64 -top-24 left-1/2 transform -translate-x-1/2 z-10">
                  <p>
                    <strong>Description:</strong> {partner.description}
                  </p>
                  <p>
                    <strong>Why Iconic:</strong> {partner.whyIconic}
                  </p>
                  <p>
                    <strong>Industry:</strong> {partner.industry}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
