
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Database, Store, Globe } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const InventorySection = () => {
  return (
    <section id="inventory" className="py-20 bg-gradient-to-b from-white to-summit-light/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white/50 rounded-full py-1 px-3 mb-6">
            <Database size={16} className="text-summit-forest mr-2" />
            <span className="text-sm font-medium">Locally Integration</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Streamlined Inventory Management
          </h2>
          <p className="text-summit-dark max-w-2xl mx-auto text-lg mb-8">
            Simplify your digital presence with one inventory stream that works across all your channels.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
              alt="Inventory Management" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-summit-forest/80 to-transparent flex items-end p-6">
              <div className="text-white">
                <h3 className="text-xl font-bold mb-2">Real-Time Stock Updates</h3>
                <p>Keep your website and in-store inventory perfectly synchronized</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-summit-forest">
              It shouldn't cost you to share your own inventory.
            </h3>
            <p className="text-lg text-summit-dark">
              Unlike workstand.com, we believe in fair pricing for outdoor businesses. Our Locally integration 
              provides a seamless way to publish and manage your inventory across all digital channels without 
              the premium price tag.
            </p>

            <div className="bg-white rounded-xl shadow-md p-6 border border-summit-light">
              <h4 className="font-bold mb-4 text-lg">Competitive Advantage</h4>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Feature</TableHead>
                    <TableHead>Summit Sites</TableHead>
                    <TableHead>WorkStand</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Real-time Inventory</TableCell>
                    <TableCell className="text-green-600">✓</TableCell>
                    <TableCell className="text-green-600">✓</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Locally Integration</TableCell>
                    <TableCell className="text-green-600">✓</TableCell>
                    <TableCell className="text-green-600">✓</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Affordable Pricing</TableCell>
                    <TableCell className="text-green-600">✓</TableCell>
                    <TableCell className="text-red-600">✗</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>True Ownership</TableCell>
                    <TableCell className="text-green-600">✓</TableCell>
                    <TableCell className="text-red-600">✗</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <Button className="w-full sm:w-auto bg-summit-forest hover:bg-summit-forest/90 text-white py-6 px-8 text-lg flex items-center gap-2 mt-2">
              Learn About Our Pricing <ArrowRight size={18} />
            </Button>
          </div>
        </div>
        
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md border border-summit-light flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-summit-light/50 flex items-center justify-center mb-4">
              <Store size={24} className="text-summit-forest" />
            </div>
            <h3 className="text-xl font-bold mb-2">Unified Inventory</h3>
            <p className="text-summit-dark">One central system for your in-store and online inventory management</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border border-summit-light flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-summit-light/50 flex items-center justify-center mb-4">
              <Globe size={24} className="text-summit-forest" />
            </div>
            <h3 className="text-xl font-bold mb-2">Multi-Channel Publishing</h3>
            <p className="text-summit-dark">Automatically sync your inventory across your website, Locally, and other platforms</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border border-summit-light flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-summit-light/50 flex items-center justify-center mb-4">
              <Database size={24} className="text-summit-forest" />
            </div>
            <h3 className="text-xl font-bold mb-2">Data Ownership</h3>
            <p className="text-summit-dark">Maintain full control over your inventory data without expensive middlemen</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InventorySection;
