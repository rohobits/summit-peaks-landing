
import React from "react";
import { Link } from "react-router-dom";
import { Mountain, Compass, Database } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <Mountain className="h-10 w-10 text-summit-forest" />,
    title: "Custom Website Design",
    description: "Stand out with a unique website that reflects your brand's connection to the outdoors and drives conversions.",
    feature: "SEO-optimized for outdoor enthusiasts",
    link: "/website-design"
  },
  {
    icon: <Database className="h-10 w-10 text-summit-forest" />,
    title: "Inventory Management",
    description: "Simplify your digital presence with one inventory stream that works across all platforms including Locally integration.",
    feature: "Save thousands compared to WorkStand",
    link: "#"
  },
  {
    icon: <Compass className="h-10 w-10 text-summit-forest" />,
    title: "E-commerce Solutions",
    description: "Sell your outdoor gear and services with a seamless shopping experience that converts visitors into customers.",
    feature: "Integrated inventory management",
    link: "#"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Our Services</h2>
          <p className="text-summit-dark max-w-2xl mx-auto text-lg">
            We help outdoor businesses thrive online with specialized web solutions and affordable inventory management.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-summit-light hover:shadow-lg transition duration-300 h-full flex flex-col">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl md:text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-summit-dark">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="bg-summit-light/30 rounded-lg p-3 inline-block text-sm font-medium">
                  ✓ {service.feature}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-summit-forest text-summit-forest hover:bg-summit-forest hover:text-white" asChild>
                  <Link to={service.link}>Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
