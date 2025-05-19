
import React from "react";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Summit Sites transformed our online presence. Our website now reflects the same quality as our in-store experience, and we've seen a significant increase in equipment rentals booked online.",
    author: "Jamie Reynolds",
    position: "Owner, Alpine Edge Ski & Bike"
  },
  {
    quote: "Working with Summit Sites was the best decision we made. They understood our outdoor business needs and created a website that connects with our adventure-seeking customers.",
    author: "Alex Martinez",
    position: "Founder, Trail Seekers Adventures"
  },
  {
    quote: "The team at Summit Sites created a website that perfectly captures our brand's connection to the outdoors. Our customers love the new online shopping experience.",
    author: "Morgan Williams",
    position: "Marketing Director, Mountain Outfitters"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-summit-forest text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">What Our Clients Say</h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Hear from businesses that have transformed their online presence with Summit Sites.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white/30">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                  </svg>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-6 italic">{testimonial.quote}</p>
              </CardContent>
              <CardFooter className="flex-col text-center">
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-sm text-white/70">{testimonial.position}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
