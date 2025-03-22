"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Instagram, Facebook, Twitter, Youtube, Linkedin as LinkedIn, TrendingUp, Users, BarChart2, Target } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function SocialMediaMarketing() {
  const platforms = [
    {
      icon: <Instagram className="h-8 w-8" />,
      name: "Instagram Marketing",
      description: "Engage your audience with stunning visuals and stories"
    },
    {
      icon: <Facebook className="h-8 w-8" />,
      name: "Facebook Marketing",
      description: "Build community and drive engagement"
    },
    {
      icon: <Twitter className="h-8 w-8" />,
      name: "Twitter Marketing",
      description: "Real-time engagement and trend leveraging"
    },
    {
      icon: <LinkedIn className="h-8 w-8" />,
      name: "LinkedIn Marketing",
      description: "Professional B2B marketing solutions"
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Increased Brand Visibility",
      description: "Boost your brand's online presence across all major social platforms"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Building",
      description: "Create and nurture an engaged community around your brand"
    },
    {
      icon: <BarChart2 className="h-8 w-8" />,
      title: "Data-Driven Results",
      description: "Make informed decisions based on comprehensive analytics"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Targeted Campaigns",
      description: "Reach your ideal audience with precision targeting"
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Social Media Marketing</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your social media presence with our expert marketing strategies
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Elevate Your Brand's Social Presence</h2>
              <p className="text-muted-foreground mb-6">
                In today's digital landscape, a strong social media presence is crucial for business success. Our expert team crafts tailored strategies to help you connect with your audience, build brand awareness, and drive meaningful engagement across all major social platforms.
              </p>
              <Button asChild>
                <Link href="/contact">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] rounded-lg overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0"
                alt="Social Media Marketing"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Platforms We Excel In</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We help you build a strong presence across all major social media platforms
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center">
                  <div className="text-primary mb-4 flex justify-center">{platform.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{platform.name}</h3>
                  <p className="text-muted-foreground">{platform.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Social Media Marketing</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the benefits of working with our expert team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6">
                  <div className="text-primary mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] rounded-lg overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1552581234-26160f608093"
                alt="Case Study"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Success Story: TechStart Inc.</h2>
              <p className="text-muted-foreground mb-6">
                We helped TechStart Inc. increase their social media engagement by 300% within three months through strategic content planning and targeted advertising campaigns.
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-primary mr-2" />
                  <span className="text-muted-foreground">300% increase in engagement</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-primary mr-2" />
                  <span className="text-muted-foreground">150K new followers</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-primary mr-2" />
                  <span className="text-muted-foreground">2.5M reach achieved</span>
                </li>
              </ul>
              <Button asChild>
                <Link href="/portfolio">
                  View More Case Studies <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Social Media Presence?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's create a winning social media strategy for your brand.
            </p>
            <Button
              size="lg"
              variant="secondary"
              asChild
            >
              <Link href="/contact">
                Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}