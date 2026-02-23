"use client"
import Link from 'next/link'
import { FileText, MessageSquare, ArrowRight } from 'lucide-react'
import { Card } from "@/components/ui/card"

export default function OnboardingFork() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Path 1: Resume Upload */}
        <Link href="/onboarding/upload">
          <Card className="group p-12 flex flex-col items-center text-center space-y-6 hover:border-black transition-all cursor-pointer border-slate-200 shadow-none">
            <div className="p-4 bg-slate-50 rounded-2xl group-hover:bg-slate-100 transition-colors">
              <FileText className="w-12 h-12 text-slate-900" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight">Upload Resume</h2>
            <p className="text-slate-500">We'll parse your details and start the story from there.</p>
          </Card>
        </Link>

        {/* Path 2: Start from Scratch */}
        <Link href="/onboarding/workshop">
          <Card className="group p-12 flex flex-col items-center text-center space-y-6 hover:border-black transition-all cursor-pointer border-slate-200 shadow-none">
            <div className="p-4 bg-slate-50 rounded-2xl group-hover:bg-slate-100 transition-colors">
              <MessageSquare className="w-12 h-12 text-slate-900" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight">Start from Scratch</h2>
            <p className="text-slate-500">Talk to our AI to build your narrative through a conversation.</p>
          </Card>
        </Link>

      </div>
    </div>
  )
}