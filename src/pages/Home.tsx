import { Check, Zap, ArrowRight, MessageSquare, LayoutDashboard, CreditCard, Package } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto flex items-center justify-between py-4 px-6 md:px-8">
          <div className="flex items-center gap-2.5">
            {/* Logo Container */}
            <div className="w-8 h-8 md:w-9 md:h-9 overflow-hidden rounded-xl flex items-center justify-center shadow-sm">
              <img 
                src="/logo.png" 
                alt="SellMate Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-lg md:text-xl font-bold tracking-tight text-brandDark">SellMate AI</span>
          </div>
          <button className="bg-brandBlue text-white px-4 py-2 md:px-6 md:py-2.5 rounded-lg font-bold text-xs md:text-sm hover:bg-blue-700 transition shadow-sm">
            Request Beta
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-6 md:pt-40 md:pb-32 md:px-8">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-blue-50 text-brandBlue text-[10px] md:text-[11px] font-bold tracking-wider uppercase mx-auto lg:mx-0">
              <Zap className="w-3 h-3" /> AI Infrastructure for Social Commerce
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-brandDark leading-[1.1] tracking-tight">
              Automate Sales.<br />
              <span className="text-brandBlue">Integrate Everything.</span>
            </h1>
            <p className="text-base md:text-lg text-slate-500 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              The operating system for modern commerce. Seamlessly connect AI-driven order capture with automated payments and global logistics gateways.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
              <button className="bg-brandBlue text-white px-8 py-3.5 md:px-10 md:py-4 rounded-xl font-bold text-base md:text-lg shadow-lg shadow-blue-100 hover:shadow-xl transition-all">
                Start Free Beta
              </button>
              <button className="flex items-center justify-center gap-2 text-slate-600 font-bold px-8 py-4 hover:text-brandBlue transition text-sm md:text-base">
                View API Docs <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Workflow Diagram */}
          <div className="flex flex-col items-center">
            <div className="mb-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-brandDark">Our Workflow</h2>
              <p className="text-sm text-slate-400 mt-1 uppercase tracking-widest font-medium">From Chat to Delivery</p>
            </div>
            <div className="w-full bg-slate-50 rounded-[40px] p-8 md:p-12 border border-slate-100 relative overflow-hidden h-[480px] md:h-[500px] flex items-center justify-center shadow-inner">
               <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
               <div className="relative w-full max-w-sm flex flex-col items-center">
                  <div className="w-full flex items-center gap-4 bg-white p-4 md:p-5 rounded-2xl shadow-sm border border-slate-100 z-10 -translate-x-4 md:-translate-x-12">
                     <MessageSquare className="text-brandBlue w-5 h-5 md:w-6 md:h-6 shrink-0" />
                     <div className="flex-1">
                        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                           <div className="h-full bg-brandBlue animate-[progress_6s_infinite]" />
                        </div>
                        <span className="text-[9px] md:text-[10px] font-black text-slate-400 mt-2 block uppercase tracking-widest">AI Capture</span>
                     </div>
                  </div>
                  <div className="w-[2px] h-10 md:h-12 bg-slate-200 my-1 relative -translate-x-4 md:-translate-x-12">
                     <div className="absolute top-0 w-full bg-brandBlue animate-[pathFlow_6s_infinite_1.2s] opacity-0" />
                  </div>
                  <div className="w-full flex items-center gap-4 bg-white p-4 md:p-5 rounded-2xl shadow-md border border-slate-100 z-10">
                     <CreditCard className="text-emerald-500 w-5 h-5 md:w-6 md:h-6 shrink-0" />
                     <div className="flex-1">
                        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                           <div className="h-full bg-emerald-500 animate-[progress_6s_infinite_2.4s] w-0" />
                        </div>
                        <span className="text-[9px] md:text-[10px] font-black text-slate-400 mt-2 block uppercase tracking-widest">Payment Sync</span>
                     </div>
                  </div>
                  <div className="w-[2px] h-10 md:h-12 bg-slate-200 my-1 relative translate-x-4 md:translate-x-12">
                     <div className="absolute top-0 w-full bg-emerald-500 animate-[pathFlow_6s_infinite_3.6s] opacity-0" />
                  </div>
                  <div className="w-full flex items-center gap-4 bg-white p-4 md:p-5 rounded-2xl shadow-sm border border-slate-100 z-10 translate-x-4 md:translate-x-12">
                     <Package className="text-orange-500 w-5 h-5 md:w-6 md:h-6 shrink-0" />
                     <div className="flex-1">
                        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                           <div className="h-full bg-orange-500 animate-[progress_6s_infinite_4.8s] w-0" />
                        </div>
                        <span className="text-[9px] md:text-[10px] font-black text-slate-400 mt-2 block uppercase tracking-widest">Carrier Gateway</span>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars Section */}
      <section id="solutions" className="py-20 md:py-24 container mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brandDark tracking-tight">Our Core Features</h2>
          <p className="text-slate-500 mt-3 max-w-2xl mx-auto text-sm md:text-base">Powerful tools designed to scale your social commerce operations globally.</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: "AI Order Capture", icon: <MessageSquare />, desc: "Extract order data from social chats with natural language processing." },
            { title: "Omni-Dashboard", icon: <LayoutDashboard />, desc: "Centralized control plane for multi-tenant branch management." },
            { title: "Bank Automation", icon: <CreditCard />, desc: "Automated payment verification via secure financial API hooks." },
            { title: "Global Logistics", icon: <Package />, desc: "Unified API access to regional and international carrier networks." }
          ].map((f, i) => (
            <div key={i} className="group p-8 bg-white border border-slate-100 rounded-3xl hover:border-brandBlue transition-all shadow-sm hover:shadow-md">
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 text-brandBlue group-hover:bg-brandBlue group-hover:text-white transition-all">
                {f.icon}
              </div>
              <h3 className="font-bold text-brandDark mb-2">{f.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Infrastructure */}
      <section id="infrastructure" className="py-20 md:py-24 bg-[#0F172A] text-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">API-First Commerce Infrastructure.</h2>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed">
              Built for high-volume merchants. Our scalable gateway handles everything from data extraction to last-mile fulfillment.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-semibold">
              <div className="flex items-center gap-2 text-slate-300"><Check className="text-brandBlue w-5 h-5" /> 99.9% System Uptime</div>
              <div className="flex items-center gap-2 text-slate-300"><Check className="text-brandBlue w-5 h-5" /> Bank-grade Security</div>
              <div className="flex items-center gap-2 text-slate-300"><Check className="text-brandBlue w-5 h-5" /> Multi-carrier Sync</div>
              <div className="flex items-center gap-2 text-slate-300"><Check className="text-brandBlue w-5 h-5" /> Real-time Analytics</div>
            </div>
          </div>
          
          {/* OPTIMIZED TERMINAL BOX */}
          <div className="relative mt-8 lg:mt-0">
            <div className="absolute -inset-4 bg-brandBlue/30 blur-3xl rounded-full opacity-20" />
            <div className="relative p-1 bg-gradient-to-br from-slate-700 to-slate-800 rounded-[2rem] border border-slate-700 shadow-2xl">
              <div className="bg-[#0B1120] rounded-[1.8rem] p-6 md:p-10 font-mono text-[11px] sm:text-[12px] md:text-sm leading-relaxed overflow-hidden">
                <div className="flex gap-1.5 mb-8 opacity-50">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                </div>
                <div className="space-y-4">
                  <p className="text-slate-500 italic">// SellMate OS v1.0 Initializing...</p>
                  <div className="space-y-2">
                    <p className="text-blue-400">
                      <span className="text-purple-400">const</span> order = <span className="text-purple-400">await</span> 
                      <span className="text-white"> SellMate.capture</span>(chat);
                    </p>
                    <p className="text-blue-400 whitespace-nowrap">
                      <span className="text-purple-400">await</span> order.<span className="text-white">verifyPayment</span>();
                    </p>
                    <p className="text-blue-400 whitespace-nowrap">
                      <span className="text-purple-400">await</span> order.<span className="text-white">syncToLogistics</span>();
                    </p>
                  </div>
                  <div className="pt-6 border-t border-slate-800 flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <p className="text-slate-500 text-[10px] tracking-widest uppercase font-bold">System Status</p>
                    </div>
                    <span className="text-emerald-500 text-[10px] font-bold tracking-wider">OPTIMAL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 md:py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 md:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 overflow-hidden rounded-lg flex items-center justify-center shadow-sm">
              <img 
                src="/logo.png" 
                alt="SellMate Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-bold text-slate-900 tracking-tight">SellMate AI v1.0</span>
          </div>
          <p className="text-slate-400 text-xs md:text-sm text-center md:text-left leading-relaxed">© 2026 SellMate AI. The Operating System for Social Commerce.</p>
          <div className="flex gap-6 md:gap-8 text-xs md:text-sm font-semibold text-slate-500">
             <a href="#" className="hover:text-brandBlue transition-colors">Docs</a>
             <a href="#" className="hover:text-brandBlue transition-colors">Terms</a>
             <a href="#" className="hover:text-brandBlue transition-colors">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
