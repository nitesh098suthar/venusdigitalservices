"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Portfolio() {
  const projects = [
    {
      title: "TechStart Inc. Rebrand",
      category: "Social Media Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      description: "Complete social media overhaul resulting in 300% engagement increase",
      results: ["300% increase in engagement", "150K new followers", "2.5M reach"]
    },
    {
      title: "EcoGreen Solutions Campaign",
      category: "Content Creation",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
      description: "Sustainable product launch campaign with viral video content",
      results: ["1M+ video views", "45% conversion rate", "Featured in major media"]
    },
    {
      title: "Bloom Fashion E-commerce",
      category: "Digital Advertising",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
      description: "Targeted advertising campaign for fashion e-commerce",
      results: ["200% ROI", "50K new customers", "1M in additional revenue"]
    },
    {
      title: "FitLife App Launch",
      category: "Website Design",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
      description: "Modern website design for fitness app launch",
      results: ["95% user satisfaction", "3s load time", "50K app downloads"]
    },
    {
      title: "Urban Cafe Chain",
      category: "Social Media Marketing",
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb",
      description: "Local cafe chain social media presence expansion",
      results: ["400% follower growth", "35% foot traffic increase", "Local influencer partnerships"]
    },
    {
      title: "SportGear Pro",
      category: "Digital Advertising",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
      description: "Sports equipment e-commerce advertising campaign",
      results: ["3x ROAS", "1M+ impressions", "45% conversion rate"]
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Work</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our portfolio of successful digital marketing campaigns and projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-primary mb-2">{project.category}</div>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="space-y-2">
                      {project.results.map((result) => (
                        <div key={result} className="text-sm text-muted-foreground">
                          • {result}
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Create Your Success Story?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's work together to achieve your digital marketing goals.
            </p>
            <Button
              size="lg"
              variant="secondary"
              asChild
            >
              <Link href="/contact">
                Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}