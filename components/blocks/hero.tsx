import { Github, MoveDown, MoveRight, PhoneCall } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { motion } from "framer-motion";


export const Hero = () => (
  <div className="w-full relative">
    <div className="container mx-auto">
      <div className="flex gap-8 mt-40 py-20 lg:py-70 items-center justify-center flex-col">
        
        <div className="flex gap-4 flex-col">
          <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
          Do you want to discover the undiscovered?
          </h1>
          <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
          Turkey's first web3-based tourism application
          </p>
        </div>
        
        <button 
          onClick={() => {
            document.getElementById('promo-video')?.scrollIntoView({ 
              behavior: 'smooth'
            });
          }}
          className="animate-bounce mt-8 text-muted-foreground hover:text-primary transition-colors"
          aria-label="Scroll to video"
        >
          <MoveDown size={32} />
        </button>
      </div>
    </div>

    <div 
      id="promo-images" 
      className="w-full min-h-screen flex items-center justify-center bg-black"
    >
      <div className="flex flex-col items-center">
        <div className="flex justify-center transition-transform duration-500 transform hover:translate-y-[-10px]">
          <motion.img 
            src="/images/photo1.png" 
            alt="Photo 1" 
            className="mb-4 mx-2 w-1/4" 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }} 
          />
          <motion.img 
            src="/images/photo2.png" 
            alt="Photo 2" 
            className="mb-4 mx-2 w-1/4" 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }} 
          />
          <motion.img 
            src="/images/photo3.png" 
            alt="Photo 3" 
            className="mb-4 mx-2 w-1/4" 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }} 
          />
        </div>
      </div>
    </div>
  </div>
);
