
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mountain } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden bg-gradient-to-b from-summit-cream to-summit-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center bg-white/50 rounded-full py-1 px-3 mb-6">
              <Mountain size={16} className="text-summit-forest mr-2" />
              <span className="text-sm font-medium">Web Design for Outdoor Businesses</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 gradient-text">
              Elevate Your <br /> 
              Outdoor Business <br />
              <span className="text-summit-forest">Online</span>
            </h1>
            <p className="text-lg md:text-xl text-summit-dark mb-8 max-w-md mx-auto md:mx-0">
              We build stunning websites that connect outdoor enthusiasts with your business, whether you sell gear, offer adventures, or provide specialized services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-summit-forest hover:bg-summit-forest/90 text-white py-6 px-8 text-lg flex items-center gap-2">
                Get Started <ArrowRight size={18} />
              </Button>
              <Button variant="outline" className="border-summit-forest text-summit-forest hover:bg-summit-forest/10 py-6 px-8 text-lg">
                View Our Work
              </Button>
            </div>
          </div>
          <div className="flex-1 relative">
            <img 
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Mountain Peak" 
              className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto md:mx-0 h-[400px] object-cover" 
            />
            <div className="absolute -bottom-10 -left-10 hidden lg:block">
              <div className="bg-white rounded-xl shadow-lg p-4 w-48 animate-float">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                    <Mountain size={16} className="text-summit-forest" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Client Success</p>
                  </div>
                </div>
                <div className="font-bold text-2xl">+127%</div>
                <div className="text-xs text-summit-medium">Increased website traffic</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
