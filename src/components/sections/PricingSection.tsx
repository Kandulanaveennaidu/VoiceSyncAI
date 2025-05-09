
"use client";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Star } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Business',
    price: '$97',
    billing: '/mo',
    features: [
      '1 AI Voice Agent',
      '500 Call Minutes/mo',
      'Basic CRM Integration',
      'Lead Scoring',
      'Email Support',
    ],
    cta: 'Start Free Trial',
    ctaLink: '/signup?plan=business',
    secondaryCta: 'Book a Call',
    secondaryCtaLink: '/book-call?plan=business',
  },
  {
    name: 'Agency',
    price: '$297',
    billing: '/mo',
    features: [
      '3 AI Voice Agents',
      '2,000 Call Minutes/mo',
      'Advanced CRM Integration',
      'AI Calendar Booking',
      'Priority Email Support',
      'Analytics Dashboard',
    ],
    cta: 'Start Free Trial',
    ctaLink: '/signup?plan=agency',
    secondaryCta: 'Book a Call',
    secondaryCtaLink: '/book-call?plan=agency',
  },
  {
    name: 'Enterprise',
    price: '$497',
    billing: '/mo',
    features: [
      '10 AI Voice Agents',
      '5,000 Call Minutes/mo',
      'Custom CRM Integrations',
      'White-Labeling Options',
      'Dedicated Account Manager',
      'API Access',
      'HIPAA, SOC2, GDPR Ready',
    ],
    cta: 'Start Free Trial',
    ctaLink: '/signup?plan=enterprise',
    isRecommended: true,
    secondaryCta: 'Book a Call',
    secondaryCtaLink: '/book-call?plan=enterprise',
  },
  {
    name: 'Startup',
    price: '$997',
    billing: '/mo',
    features: [
      'Unlimited AI Voice Agents',
      '2,500 Call Minutes/mo (talk time)',
      'Unlimited Contacts',
      'Unlimited Workspaces',
      'Multi-language',
      'Batch Campaigns',
      'GHL & Cal.com Integration',
      'Real Time Booking',
      'Live Call Transfer (advanced)',
      'Advanced Knowledge Base',
      'Sync Notes With CRM',
      'VoiceSync AI Academy',
      '24/7 Priority Support',
    ],
    cta: 'Contact Sales',
    ctaLink: '/contact-sales?plan=startup',
    secondaryCta: 'Book a Discovery Call',
    secondaryCtaLink: '/book-discovery?plan=startup',
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 50 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.15,
      duration: 0.5,
    },
  }),
};

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-foreground mb-4"
        >
          Simple, Transparent Pricing
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto"
        >
          Choose the plan that’s right for your agency. No hidden fees, cancel anytime.
        </motion.p>
        <div className="grid lg:grid-cols-4 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              custom={index}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="h-full" // Ensure motion.div takes full height for card flex
            >
              <Card
                className={`flex flex-col shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full ${plan.isRecommended ? 'border-2 border-primary ring-4 ring-primary/20 relative' : 'border-border'}`}
              >
                {plan.isRecommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" /> Recommended
                  </div>
                )}
                <CardHeader className="pt-10">
                  <CardTitle className="text-2xl font-semibold text-foreground text-center">{plan.name}</CardTitle>
                  <CardDescription className="text-center text-muted-foreground">
                    <span className="text-4xl font-extrabold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.billing}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-2 text-sm">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-px" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex flex-col gap-2 mt-auto pt-6">
                  <Button size="lg" className="w-full" asChild>
                    <Link href={plan.ctaLink}>{plan.cta}</Link>
                  </Button>
                  <Button variant="outline" size="lg" className="w-full" asChild>
                     <Link href={plan.secondaryCtaLink}>{plan.secondaryCta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
