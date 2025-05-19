
import React from "react";
import { ArrowRight, CheckCircle, Monitor, Palette, Globe, Smartphone, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DesignFeatures = [
  {
    title: "Outdoor Brand Focus",
    description: "Designs that resonate with outdoor enthusiasts and reflect your connection to nature",
    icon: <Palette className="h-10 w-10 text-summit-forest" />
  },
  {
    title: "Mobile Optimization",
    description: "Responsive designs that look great on any device, from desktop to smartphone",
    icon: <Smartphone className="h-10 w-10 text-summit-forest" />
  },
  {
    title: "SEO for Outdoor Niches",
    description: "Specialized SEO strategies to help local outdoor businesses get found online",
    icon: <Globe className="h-10 w-10 text-summit-forest" />
  },
  {
    title: "Interactive Product Displays",
    description: "Showcase your gear with interactive elements that drive customer engagement",
    icon: <Layers className="h-10 w-10 text-summit-forest" />
  },
  {
    title: "Integrated with Inventory",
    description: "Seamless connection between your website design and inventory management",
    icon: <Monitor className="h-10 w-10 text-summit-forest" />
  }
];

const WebsiteDesign = () => {
  return (
    <div className="min-h-screen bg-summit-cream">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-white to-summit-light/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Custom Website Design for Outdoor Businesses
              </h1>
              <p className="text-summit-dark text-lg mb-8 max-w-2xl">
                Stand out online with a website designed specifically for outdoor retailers, 
                bike shops, ski outfitters, and adventure companies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-summit-forest hover:bg-summit-forest/90 text-white py-6 px-8 text-lg flex items-center gap-2">
                  Get a Free Consultation <ArrowRight size={18} />
                </Button>
                <Button variant="outline" className="border-summit-forest text-summit-forest hover:bg-summit-forest hover:text-white py-6 px-8 text-lg">
                  View Portfolio
                </Button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-summit-light animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Mountain bike shop website" 
                  className="rounded-xl w-full h-64 object-cover"
                />
                <div className="mt-4">
                  <div className="h-4 bg-summit-light/50 rounded-full w-3/4 mb-3"></div>
                  <div className="h-4 bg-summit-light/50 rounded-full w-1/2 mb-3"></div>
                  <div className="h-8 bg-summit-forest/80 rounded-md w-1/3 mt-4"></div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-summit-light rotate-3 animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
                  alt="Mobile view" 
                  className="rounded-lg w-32 h-60 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Website Features Designed for Outdoor Retailers
            </h2>
            <p className="text-summit-dark max-w-2xl mx-auto text-lg">
              We build websites that connect with outdoor enthusiasts and drive conversions
              for your shop's products and services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DesignFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-summit-cream rounded-xl p-8 border border-summit-light hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-summit-dark">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-summit-light/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Our Design Process
            </h2>
            <p className="text-summit-dark max-w-2xl mx-auto text-lg">
              We follow a collaborative approach to ensure your website perfectly reflects your brand 
              and meets the needs of your outdoor customers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <ol className="relative border-l border-summit-forest">
                {[
                  {
                    step: "Discovery & Strategy",
                    description: "We learn about your outdoor business, target audience, and goals to develop a tailored website strategy."
                  },
                  {
                    step: "Design & Prototyping",
                    description: "We create visual mockups that reflect your brand's connection to the outdoors and focus on conversions."
                  },
                  {
                    step: "Development & Integration",
                    description: "We build your site with clean code and integrate it with your inventory management system."
                  },
                  {
                    step: "Testing & Launch",
                    description: "We thoroughly test your website and ensure a smooth launch with ongoing support."
                  }
                ].map((item, i) => (
                  <li key={i} className="mb-12 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-summit-forest rounded-full -left-4 ring-4 ring-summit-cream text-white">
                      {i + 1}
                    </span>
                    <h3 className="text-xl font-semibold mb-2">{item.step}</h3>
                    <p className="text-summit-dark">{item.description}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-summit-light">
              <img 
                src="https://images.unsplash.com/photo-1517247864542-6226ab25a9bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Design process" 
                className="rounded-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-summit-forest text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Hear from outdoor businesses that have transformed their online presence with our custom website design.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Summit Sites understood our bike shop needs perfectly. Our new website has increased online bookings by 40%.",
                name: "Sarah Johnson",
                role: "Owner, Mountain View Cycles"
              },
              {
                quote: "The integration between our website and inventory system saved us countless hours of manual updates.",
                name: "Mike Peterson",
                role: "Manager, Alpine Ski & Board"
              },
              {
                quote: "Our outdoor gear shop finally has a website that matches the quality of products we sell. Couldn't be happier.",
                name: "Lisa Thompson",
                role: "Director, Trailhead Outfitters"
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white/10 rounded-xl p-8 backdrop-blur-sm border border-white/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4 text-2xl">"</div>
                <p className="text-lg mb-6">{testimonial.quote}</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-white/80 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-summit-cream rounded-3xl overflow-hidden p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Elevate Your Outdoor Business Online?
            </h2>
            <p className="text-summit-dark text-lg mb-8 max-w-2xl mx-auto">
              Let's create a website that connects with outdoor enthusiasts and drives real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-summit-forest hover:bg-summit-forest/90 text-white py-6 px-8 text-lg">
                Schedule Your Free Consultation
              </Button>
              <Button variant="outline" className="border-summit-forest text-summit-forest hover:bg-summit-forest hover:text-white py-6 px-8 text-lg">
                View Our Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebsiteDesign;

