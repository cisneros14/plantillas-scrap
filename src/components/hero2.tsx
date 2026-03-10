"use client";

import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import Image from "next/image";
import { ContactDialog } from "./ContactDialog";

export default function Hero2() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = (
    direction: "up" | "down" | "left" | "right",
  ): Variants => {
    return {
      hidden: {
        opacity: 0,
        y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
        x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      },
      visible: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          type: "spring",
          damping: 25,
          stiffness: 100,
          duration: 0.8,
        },
      },
    };
  };

  return (
    <section className="w-full bg-background/50 dark:bg-background py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden">
      <motion.div
        className="container mx-auto px-4 sm:px-6 max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-8">
          {/* Left Column */}
          <div className="flex flex-1 flex-col justify-center space-y-4 sm:space-y-6 lg:py-8 relative z-10">
            <motion.h1
              variants={itemVariants("up")}
              className="text-5xl sm:text-6xl md:text-7xl font-serif font-medium leading-[1.1] tracking-tight"
            >
              {siteConfig.hero.title}
            </motion.h1>

            <motion.p
              variants={itemVariants("right")}
              className="max-w-[500px] text-base sm:text-lg text-foreground/80 font-medium leading-relaxed"
            >
              {siteConfig.hero.description}
            </motion.p>

            <motion.div
              variants={itemVariants("left")}
              className="pt-2 flex flex-col sm:flex-row gap-4"
            >
              <ContactDialog />
              <Link href={siteConfig.hero.primaryCta.href}>
                <Button variant="default" className="bg-secondary w-full md:w-auto">
                  {siteConfig.hero.primaryCta.text}
                </Button>
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants("up")}
              className="flex flex-col gap-6 pt-4 sm:pt-6 md:pt-8"
            >
              <p className="text-base text-foreground/80 font-medium max-w-[280px]">
                {siteConfig.hero.badge.text}
              </p>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative w-[85%] border sm:w-full max-w-[280px] aspect-video bg-muted/50 rounded-xl overflow-hidden cursor-pointer group"
              >
                <Image
                  src="/placeholder.webp"
                  alt="Feature Thumbnail"
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column */}
          <motion.div
            variants={itemVariants("left")}
            className="flex-1 w-full mt-8 lg:mt-0 flex flex-col justify-center items-center"
          >
            <div className="relative w-full max-w-[500px] aspect-square group">
              <Image
                src={siteConfig.branding.logo_hero_url}
                alt="Banner Image"
                fill
                priority
                className="object-contain transform group-hover:scale-105 transition-transform duration-700 ease-out drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
