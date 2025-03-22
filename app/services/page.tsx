"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Sparkles, Rocket, Zap, Globe, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Services() {
  const services = [
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Social Media Marketing",
      description: "Engage your audience across all major platforms with compelling content and strategic campaigns.",
      features: [
        "Platform-specific content strategy",
        "Community management",
        "Paid social advertising",
        "Analytics and reporting"
      ],
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113",
      link: "/services/social-media-marketing"
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Content Creation",
      description: "Professional videos, reels, and posts that capture attention and drive engagement.",
      features: [
        "Video production",
        "Social media content",
        "Blog writing",
        "Graphic design"
      ],
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
      link: "/services/content-creation"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Digital Advertising",
      description: "Data-driven advertising campaigns that deliver measurable results and ROI.",
      features: [
        "PPC campaigns",
        "Display advertising",
        "Retargeting",
        "Performance tracking"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      link: "/services/digital-advertising"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Website Design",
      description: "Beautiful, responsive websites that convert visitors into customers.",
      features: [
        "Custom design",
        "Mobile optimization",
        "SEO integration",
        "Performance optimization"
      ],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d",
      link: "/services/website-design"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-background to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive digital marketing solutions tailored to your business needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              >
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="text-primary mb-4">{service.icon}</div>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild>
                    <Link href={service.link}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className={`relative h-[300px] rounded-lg overflow-hidden ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your project and create a customized solution.
            </p>
            <Button
              size="lg"
              variant="secondary"
              asChild
            >
              <Link href="/contact">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}