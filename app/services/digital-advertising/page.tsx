"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, BarChart2, Target, PieChart, LineChart, Zap, Users, TrendingUp, Award } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function DigitalAdvertising() {
  const services = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "PPC Advertising",
      description: "Targeted pay-per-click campaigns across major platforms"
    },
    {
      icon: <BarChart2 className="h-8 w-8" />,
      title: "Display Advertising",
      description: "Eye-catching visual ads that capture attention"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Social Media Ads",
      description: "Strategic advertising on social platforms"
    },
    {
      icon: <LineChart className="h-8 w-8" />,
      title: "Retargeting",
      description: "Re-engage potential customers effectively"
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Data-Driven Strategy",
      description: "Campaigns backed by comprehensive analytics"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Precise Targeting",
      description: "Reach your ideal audience effectively"
    },
    {
      icon: <PieChart className="h-8 w-8" />,
      title: "ROI Focused",
      description: "Maximize return on advertising spend"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Rapid Results",
      description: "Quick implementation and optimization"
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Digital Advertising</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Data-driven advertising campaigns that deliver measurable results and ROI
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
              <h2 className="text-3xl font-bold mb-6">Maximize Your Digital Ad Performance</h2>
              <p className="text-muted-foreground mb-6">
                Our digital advertising experts create and manage high-performing campaigns that drive real business results. Using advanced targeting and optimization techniques, we help you reach the right audience at the right time with the right message.
              </p>
              <Button asChild>
                <Link href="/contact">
                  Start Advertising <ArrowRight className="ml-2 h-4 w-4" />
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
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                alt="Digital Advertising"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Advertising Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital advertising solutions for maximum impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center">
                  <div className="text-primary mb-4 flex justify-center">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
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
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Digital Advertising</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the benefits of data-driven advertising campaigns
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
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
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
              <h2 className="text-3xl font-bold mb-6">Success Story: SportGear Pro</h2>
              <p className="text-muted-foreground mb-6">
                Our digital advertising campaign for SportGear Pro resulted in a 3x return on ad spend and significant increase in online sales through targeted PPC and social media advertising.
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-primary mr-2" />
                  <span className="text-muted-foreground">3x Return on Ad Spend</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-primary mr-2" />
                  <span className="text-muted-foreground">1M+ Ad Impressions</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-primary mr-2" />
                  <span className="text-muted-foreground">45% Conversion Rate</span>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Boost Your Advertising ROI?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's create a data-driven advertising strategy for your business.
            </p>
            <Button
              size="lg"
              variant="secondary"
              asChild
            >
              <Link href="/contact">
                Start Your Campaign <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}