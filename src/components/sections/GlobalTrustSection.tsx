"use client";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

// Dynamically import the map component with no SSR
const RealTimeWorldMap = dynamic(
  () => import("@/components/ui/RealTimeWorldMap"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full min-h-[400px] rounded-lg bg-muted/30 flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">
          Loading world map...
        </div>
      </div>
    ),
  }
);

export default function GlobalTrustSection() {
  return (
    <motion.section
      className="py-20 bg-gradient-to-b from-muted/50 to-background overflow-hidden relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      {/* Subtle background overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <Globe className="w-16 h-16 text-primary mx-auto mb-6" />
        </motion.div>
        <motion.h2
          className="text-4xl font-bold text-foreground mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Safe and Efficient for Everyone, Worldwide
        </motion.h2>
        <motion.p
          className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          VoiceSync AI is built on a secure and scalable infrastructure, trusted
          by businesses globally to handle sensitive communications with utmost
          care and efficiency.
        </motion.p>
        <div
          className="relative mb-12 h-64 md:h-96"
          data-ai-hint="real-time world map"
        >
          <RealTimeWorldMap />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button size="lg" asChild>
            <Link href="#pricing">Build My FREE AI Voice Agent</Link>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}