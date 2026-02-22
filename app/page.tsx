import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold tracking-tighter">PIERSQUARE<span className="text-blue-600">.</span></div>
        <Link href="/login">
          <Button variant="ghost">Login</Button>
        </Link>
      </nav>

      <main className="max-w-7xl mx-auto px-8 pt-20 pb-32 flex flex-col items-center text-center">
        <div className="inline-flex items-center space-x-2 bg-slate-100 px-3 py-1 rounded-full mb-8">
          <CheckCircle2 className="w-4 h-4 text-blue-600" />
          <span className="text-xs font-medium uppercase tracking-widest text-slate-600">Pre-Verified Talent Only</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-8">
          Find your area of <span className="text-slate-400 italic font-light">excellence.</span>
        </h1>
        
        <p className="text-xl text-slate-500 mb-10 max-w-2xl">
          The first candidate-centric portal where your story matters more than your resume. 
          Verified by data, built for the next generation of builders.
        </p>

        <Link href="/login">
          <Button size="lg" className="h-14 px-8 bg-black text-white hover:bg-slate-800 rounded-full text-lg">
            Start Your Story <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Link>
      </main>
    </div>
  );
}