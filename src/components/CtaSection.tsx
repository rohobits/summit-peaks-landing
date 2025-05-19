
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-20 bg-summit-light/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-summit-forest rounded-3xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-summit-forest to-transparent"></div>
          </div>
          
          <div className="py-16 px-8 md:p-16 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to elevate your outdoor business online?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-lg">
              Join our growing network of outdoor industry clients who are seeing real results from their custom-designed websites.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-summit-forest hover:bg-white/90 py-6 px-8 text-lg flex items-center gap-2">
                Get Your Free Consultation <ArrowRight size={18} />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 py-6 px-8 text-lg">
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
