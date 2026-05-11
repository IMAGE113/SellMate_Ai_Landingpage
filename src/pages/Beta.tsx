import { useState } from "react";
import { ArrowLeft, Send, MessageSquare, Mail } from "lucide-react";

export default function BetaPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-xl bg-white rounded-[32px] shadow-xl p-8 md:p-12 border border-slate-100">
        
        {/* Back Button */}
        <button 
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-slate-400 hover:text-brandBlue mb-8 transition-colors text-sm font-bold"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>

        {!submitted ? (
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-extrabold text-[#0F172A] tracking-tight">Join the Beta</h1>
              <p className="text-slate-500 mt-2">Be the first to build with SellMate AI Infrastructure.</p>
            </div>

            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Full Name</label>
                <input type="text" required className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Enter your name" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Business Email</label>
                <input type="email" required className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="name@company.com" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Tell us about your use case</label>
                <textarea className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all h-32" placeholder="How do you plan to use SellMate?"></textarea>
              </div>

              <button type="submit" className="w-full bg-[#2563EB] text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-blue-200 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                Request Access <Send className="w-5 h-5" />
              </button>
            </form>

            {/* Contact Section */}
            <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-brandBlue">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email Us</p>
                  <p className="text-sm font-bold text-slate-700">admin@sellmate-ai.shop</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Live Chat</p>
                  <p className="text-sm font-bold text-slate-700">Available for Beta</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12 space-y-6">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <Send className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Application Sent!</h2>
            <p className="text-slate-500">Our team will review your request and get back to you at your business email within 24 hours.</p>
            <button onClick={() => window.history.back()} className="text-[#2563EB] font-bold">Return to Website</button>
          </div>
        )}
      </div>
    </div>
  );
}
