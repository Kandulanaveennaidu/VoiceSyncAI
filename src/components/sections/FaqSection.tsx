
"use client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from 'framer-motion';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const staticFaqItems: FAQItem[] = [
  {
    id: "faq-1",
    question: "Can I White-label VoiceSync AI AI?",
    answer: "Yes, white-labeling options are available for our Enterprise plan customers. This allows you to brand the VoiceSync AI AI platform as your own."
  },
  {
    id: "faq-2",
    question: "Does VoiceSync AI work with Calendly?",
    answer: "Absolutely! VoiceSync AI AI integrates seamlessly with Calendly, Google Calendar, and Outlook Calendar for intelligent appointment booking."
  },
  {
    id: "faq-3",
    question: "Do I need tech experience to use this?",
    answer: "Not at all. VoiceSync AI AI is designed to be user-friendly. We provide a simple interface and clear instructions to get your AI Voice Agents up and running quickly."
  },
  {
    id: "faq-4",
    question: "What kind of support do you offer?",
    answer: "We offer email support for all plans. Agency and Enterprise plans include priority email support, and Enterprise plans come with a dedicated account manager. Our Startup plan includes 24/7 priority support."
  },
  {
    id: "faq-5",
    question: "How does the AI handle different accents?",
    answer: "Our AI is trained on a diverse range of voice data and is designed to understand various accents effectively. We continuously work to improve its accent comprehension."
  },
  {
    id: "faq-6",
    question: "Is my data secure with VoiceSync AI AI?",
    answer: "Data security is our top priority. We employ robust security measures, and our Enterprise plan is designed to be HIPAA compliant, SOC2 certified, and GDPR ready."
  },
  {
    id: "faq-7",
    question: "What are the limits on call minutes?",
    answer: "Call minute limits vary by plan. The Business plan includes 500 minutes/month, Agency includes 2,000 minutes/month, Enterprise includes 5,000 minutes/month, and Startup includes 2,500 minutes/month (talk time)."
  },
  {
    id: "faq-8",
    question: "Can I integrate VoiceSync AI with my existing CRM?",
    answer: "Yes, VoiceSync AI AI offers CRM integration. Basic integration is available on the Business plan, advanced integration on the Agency plan, and custom integrations for Enterprise clients. The Startup plan includes GHL integration."
  },
  {
    id: "faq-9",
    question: "How long does it take to set up an AI Voice Agent?",
    answer: "Setting up an AI Voice Agent is quick and easy. With our intuitive platform, you can have your first agent configured and ready to make calls in a matter of minutes."
  },
  {
    id: "faq-10",
    question: "What happens if I exceed my plan's limits?",
    answer: "If you approach or exceed your plan's limits, we'll notify you. You'll have the option to upgrade your plan or purchase additional capacity as needed."
  },
];

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
};

const slideUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay } },
});

export default function FaqSection() {
  return (
    <motion.section 
      id="faq" 
      className="py-20 bg-background"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          variants={slideUp(0)}
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#0038FF] to-[#7F00FF] bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about VoiceSync AI AI.
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            {staticFaqItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <AccordionItem value={item.id} className="border-b border-border last:border-b-0">
                  <AccordionTrigger className="text-left hover:no-underline text-lg font-medium py-4">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </motion.section>
  );
}
