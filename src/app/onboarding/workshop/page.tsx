"use client"
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function AIWorkshop() {
  const [messages, setMessages] = useState([
    { role: 'ai', content: "Hi! Let's build your PierSquare profile. What's your name?" }
  ])
  const [inputValue, setInputValue] = useState('')
  const [userName, setUserName] = useState('')

  const handleSend = () => {
    if (!inputValue) return
    
    // Add user message to chat
    const newMessages = [...messages, { role: 'user', content: inputValue }]
    setMessages(newMessages)
    
    // Simple logic for the demo: The first answer is treated as the name
    if (!userName) {
      setUserName(inputValue)
      setMessages([...newMessages, { role: 'ai', content: `Great to meet you, ${inputValue}! What is your current or most recent job title?` }])
    }
    
    setInputValue('')
  }

  return (
    <div className="flex h-screen bg-white">
      {/* LEFT: AI Chat (40%) */}
      <div className="w-[40%] border-r border-slate-100 flex flex-col">
        <div className="p-8 border-b border-slate-50">
          <h1 className="text-xl font-bold tracking-tight">AI Workshop</h1>
          <p className="text-sm text-slate-400">Building your professional profile</p>
        </div>

        <div className="flex-1 overflow-y-auto p-8 space-y-6">
          {messages.map((msg, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }}
              key={i} 
              className={`max-w-[80%] p-4 rounded-2xl ${msg.role === 'ai' ? 'bg-slate-50 text-slate-900 self-start' : 'bg-black text-white ml-auto'}`}
            >
              {msg.content}
            </motion.div>
          ))}
        </div>

        <div className="p-8 border-t border-slate-50 flex space-x-2">
          <Input 
            placeholder="Type your answer..." 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            className="h-12 border-slate-200 focus:ring-black"
          />
          <Button onClick={handleSend} className="h-12 w-12 bg-black text-white p-0">
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* RIGHT: Ghost Profile (60%) */}
      <div className="w-[60%] bg-slate-50/50 p-12 overflow-y-auto">
        <div className="max-w-2xl mx-auto space-y-8">
          
          {/* Ghost Header */}
          <CardSkeleton active={!!userName}>
             <div className="flex items-center space-x-4">
               <div className="w-20 h-20 bg-slate-200 rounded-full animate-pulse" />
               <div className="space-y-2">
                 <h2 className="text-3xl font-bold">{userName || "Your Name"}</h2>
                 <div className="h-4 w-48 bg-slate-200 rounded" />
               </div>
             </div>
          </CardSkeleton>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-3 gap-4">
             <div className="col-span-2 bg-white p-8 rounded-3xl border border-slate-100 h-64 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">The Narrative</span>
                <div className="mt-4 space-y-2">
                  <div className="h-4 w-full bg-slate-50 rounded" />
                  <div className="h-4 w-5/6 bg-slate-50 rounded" />
                  <div className="h-4 w-4/6 bg-slate-50 rounded" />
                </div>
             </div>
             <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Tech Stack</span>
                <div className="mt-4 flex flex-wrap gap-2">
                   <div className="h-8 w-16 bg-slate-50 rounded-full" />
                   <div className="h-8 w-12 bg-slate-50 rounded-full" />
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  )
}

function CardSkeleton({ children, active }: { children: React.ReactNode, active: boolean }) {
  return (
    <motion.div 
      animate={{ opacity: active ? 1 : 0.3, scale: active ? 1 : 0.98 }}
      className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-sm"
    >
      {children}
    </motion.div>
  )
}