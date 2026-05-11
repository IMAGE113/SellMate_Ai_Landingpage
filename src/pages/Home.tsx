import { Check, Zap, ArrowRight, MessageSquare, LayoutDashboard, CreditCard, Package } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto flex items-center justify-between py-5 px-6 md:px-8">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-brandBlue rounded-xl flex items-center justify-center text-white shadow-md">
              <span className="font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-brandDark">SellMate AI</span>
          </div>
          <button className="bg-brandBlue text-white px-5 py-2 md:px-6 md:py-2.5 rounded-lg font-bold text-sm hover:bg-blue-700 transition">
            Request Beta
          </button>
        </div>
      </nav>

      {/* Hero Section - Fixed Mobile Spacing */}
      <section className="pt-24 pb-16 px-6 md:pt-40 md:pb-32 md:px-8">
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <div className="space-y-10 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-blue-50 text-brandBlue text-[11px] font-bold tracking-wider uppercase mx-auto lg:mx-0">
              <Zap className="w-3 h-3" /> AI Infrastructure for Social Commerce
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-brandDark leading-[1.1] tracking-tight">
              Automate Sales.<br />
              <span className="text-brandBlue">Integrate Everything.</span>
            </h1>
            <p className="text-lg text-slate-500 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              The operating system for modern commerce. Seamlessly connect AI-driven order capture with automated payments and global logistics gateways.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
              <button className="bg-brandBlue text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-100 hover:shadow-xl transition-all">
                Start Free Beta
              </button>
              <button className="flex items-center justify-center gap-2 text-slate-600 font-bold px-8 py-4 hover:text-brandBlue transition">
                View API Docs <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Sequential Workflow Diagram - CEO Sketch Version */}
          <div className="bg-slate-50 rounded-[40px] p-8 md:p-12 border border-slate-100 relative overflow-hidden h-[500px] flex items-center justify-center">
             <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
             
             <div className="relative w-full max-w-sm flex flex-col items-center">
                
                {/* 1. AI Capture */}
                <div className="w-full flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-slate-100 z-10 -translate-x-6 md:-translate-x-12">
                   <MessageSquare className="text-brandBlue w-6 h-6 shrink-0" />
                   <div className="flex-1">
                      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                         <div className="h-full bg-brandBlue animate-[progress_6s_infinite]" />
                      </div>
                      <span className="text-[10px] font-black text-slate-400 mt-2 block uppercase tracking-widest">AI Capture</span>
                   </div>
                </div>

                {/* Path 1 */}
                <div className="w-[2px] h-12 bg-slate-200 my-2 relative -translate-x-6 md:-translate-x-12">
                   <div className="absolute top-0 w-full bg-brandBlue animate-[pathFlow_6s_infinite_1.2s] opacity-0" />
                </div>

                {/* 2. Payment Sync */}
                <div className="w-full flex items-center gap-4 bg-white p-5 rounded-2xl shadow-md border border-slate-100 z-10">
                   <CreditCard className="text-emerald-500 w-6 h-6 shrink-0" />
                   <div className="flex-1">
                      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                         <div className="h-full bg-emerald-500 animate-[progress_6s_infinite_2.4s] w-0" />
                      </div>
                      <span className="text-[10px] font-black text-slate-400 mt-2 block uppercase tracking-widest">Payment Sync</span>
                   </div>
                </div>

                {/* Path 2 */}
                <div className="w-[2px] h-12 bg-slate-200 my-2 relative translate-x-6 md:translate-x-12">
                   <div className="absolute top-0 w-full bg-emerald-500 animate-[pathFlow_6s_infinite_3.6s] opacity-0" />
                </div>

                {/* 3. Carrier Gateway */}
                <div className="w-full flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-slate-100 z-10 translate-x-6 md:translate-x-12">
                   <Package className="text-orange-500 w-6 h-6 shrink-0" />
                   <div className="flex-1">
                      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                         <div className="h-full bg-orange-500 animate-[progress_6s_infinite_4.8s] w-0" />
                      </div>
                      <span className="text-[10px] font-black text-slate-400 mt-2 block uppercase tracking-widest">Carrier Gateway</span>
                   </div>
                </div>

             </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars Section */}
      <section id="solutions" className="py-24 container mx-auto px-8">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { title: "AI Order Capture", icon: <MessageSquare />, desc: "Extract order data from social chats with natural language processing." },
            { title: "Omni-Dashboard", icon: <LayoutDashboard />, desc: "Centralized control plane for multi-tenant branch management." },
            { title: "Bank Automation", icon: <CreditCard />, desc: "Automated payment verification via secure financial API hooks." },
            { title: "Global Logistics", icon: <Package />, desc: "Unified API access to regional and international carrier networks." }
          ].map((f, i) => (
            <div key={i} className="group p-8 bg-white border border-slate-100 rounded-3xl hover:border-brandBlue transition shadow-sm">
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 text-brandBlue group-hover:bg-brandBlue group-hover:text-white transition">
                {f.icon}
              </div>
              <h3 className="font-bold text-brandDark mb-2">{f.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Infrastructure Proof */}
      <section id="infrastructure" className="py-24 bg-brandDark text-white overflow-hidden">
        <div className="container mx-auto px-8 grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">API-First Commerce Infrastructure.</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Built for high-volume merchants. Our scalable gateway handles everything from data extraction to last-mile fulfillment.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm font-semibold">
              <div className="flex items-center gap-2"><Check className="text-brandBlue w-5 h-5" /> 99.9% System Uptime</div>
              <div className="flex items-center gap-2"><Check className="text-brandBlue w-5 h-5" /> Bank-grade Security</div>
              <div className="flex items-center gap-2"><Check className="text-brandBlue w-5 h-5" /> Multi-carrier Sync</div>
              <div className="flex items-center gap-2"><Check className="text-brandBlue w-5 h-5" /> Real-time Analytics</div>
            </div>
          </div>
          <div className="relative p-1 bg-slate-800 rounded-3xl border border-slate-700">
             <div className="bg-slate-900 rounded-[20px] p-8 md:p-10 font-mono text-sm text-blue-400 overflow-x-auto">
                <p className="opacity-50">// SellMate Operating System</p>
                <p className="mt-6 text-white leading-relaxed">const order = await SellMate.capture(chat_context);</p>
                <p className="leading-relaxed">await order.verifyPayment();</p>
                <p className="text-blue-300 leading-relaxed">await order.syncToLogistics("PREFERRED_CARRIER");</p>
                <p className="mt-6 opacity-50">// System Status: Optimal</p>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-brandBlue rounded-lg flex items-center justify-center text-white font-bold text-sm">S</div>
            <span className="font-bold text-slate-900 tracking-tight">SellMate AI v1.0</span>
          </div>
          <p className="text-slate-400 text-sm text-center md:text-left leading-relaxed">© 2026 SellMate AI. The Operating System for Social Commerce.</p>
          <div className="flex gap-8 text-sm font-semibold text-slate-500">
             <a href="#" className="hover:text-brandBlue transition">Docs</a>
             <a href="#" className="hover:text-brandBlue transition">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
