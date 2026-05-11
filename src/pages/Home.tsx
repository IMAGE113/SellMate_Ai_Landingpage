import { Check, Zap, ArrowRight, MessageSquare, LayoutDashboard, CreditCard, Package, Share2 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto flex items-center justify-between py-5 px-8">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-brandBlue rounded-xl flex items-center justify-center text-white shadow-md">
              <span className="font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-brandDark">SellMate AI</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6 text-sm font-semibold text-slate-500">
              <a href="#solutions" className="hover:text-brandBlue transition">Solutions</a>
              <a href="#infrastructure" className="hover:text-brandBlue transition">Infrastructure</a>
            </div>
            <button className="bg-brandBlue text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-blue-700 transition">
              Request Beta Access
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-8">
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-brandBlue text-[11px] font-bold tracking-wider uppercase">
              <Zap className="w-3 h-3" /> AI Infrastructure for Social Commerce
            </div>
            <h1 className="text-6xl md:text-7xl font-extrabold text-brandDark leading-[1.05] tracking-tight">
              Automate Sales.<br />
              <span className="text-brandBlue">Integrate Everything.</span>
            </h1>
            <p className="text-lg text-slate-500 max-w-xl leading-relaxed">
              The operating system for modern commerce. Seamlessly connect AI-driven order capture with automated payments and global logistics gateways.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-brandBlue text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all">
                Start Free Beta
              </button>
              <button className="flex items-center gap-2 text-slate-600 font-bold px-8 py-4 hover:text-brandBlue transition">
                View API Docs <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Workflow Diagram - The Mind Game */}
          <div className="bg-slate-50 rounded-3xl p-10 border border-slate-100 relative overflow-hidden">
             <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-50" />
             <div className="relative space-y-6">
                <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                   <MessageSquare className="text-brandBlue w-5 h-5" />
                   <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-brandBlue animate-pulse" />
                   </div>
                   <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">AI Capture</span>
                </div>
                <div className="ml-10 flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                   <CreditCard className="text-emerald-500 w-5 h-5" />
                   <div className="flex-1 h-2 bg-slate-100 rounded-full" />
                   <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">Payment Sync</span>
                </div>
                <div className="ml-20 flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                   <Package className="text-orange-500 w-5 h-5" />
                   <div className="flex-1 h-2 bg-slate-100 rounded-full" />
                   <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">Carrier Gateway</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars Infrastructure */}
      <section id="solutions" className="py-24 container mx-auto px-8">
        <div className="grid md:grid-cols-4 gap-6">
          <div className="group p-8 bg-white border border-slate-100 rounded-3xl hover:border-brandBlue transition shadow-sm">
            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 text-brandBlue group-hover:bg-brandBlue group-hover:text-white transition">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-brandDark mb-2">AI Order Capture</h3>
            <p className="text-sm text-slate-500 leading-relaxed">Extract order data from social chats with natural language processing.</p>
          </div>

          <div className="group p-8 bg-white border border-slate-100 rounded-3xl hover:border-brandBlue transition shadow-sm">
            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 text-brandBlue group-hover:bg-brandBlue group-hover:text-white transition">
              <LayoutDashboard className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-brandDark mb-2">Omni-Dashboard</h3>
            <p className="text-sm text-slate-500 leading-relaxed">Centralized control plane for multi-tenant branch management.</p>
          </div>

          <div className="group p-8 bg-white border border-slate-100 rounded-3xl hover:border-brandBlue transition shadow-sm">
            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 text-brandBlue group-hover:bg-brandBlue group-hover:text-white transition">
              <CreditCard className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-brandDark mb-2">Bank Automation</h3>
            <p className="text-sm text-slate-500 leading-relaxed">Automated payment verification via secure financial API hooks.</p>
          </div>

          <div className="group p-8 bg-white border border-slate-100 rounded-3xl hover:border-brandBlue transition shadow-sm">
            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 text-brandBlue group-hover:bg-brandBlue group-hover:text-white transition">
              <Package className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-brandDark mb-2">Global Logistics</h3>
            <p className="text-sm text-slate-500 leading-relaxed">Unified API access to regional and international carrier networks.</p>
          </div>
        </div>
      </section>

      {/* Technical Infrastructure Proof */}
      <section id="infrastructure" className="py-24 bg-brandDark text-white overflow-hidden">
        <div className="container mx-auto px-8 grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">API-First Commerce Infrastructure.</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Built for high-volume merchants. Our scalable gateway handles everything from data extraction to last-mile fulfillment.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm font-semibold">
              <div className="flex items-center gap-2"><Check className="text-brandBlue w-4 h-4" /> 99.9% System Uptime</div>
              <div className="flex items-center gap-2"><Check className="text-brandBlue w-4 h-4" /> Bank-grade Security</div>
              <div className="flex items-center gap-2"><Check className="text-brandBlue w-4 h-4" /> Multi-carrier Sync</div>
              <div className="flex items-center gap-2"><Check className="text-brandBlue w-4 h-4" /> Real-time Analytics</div>
            </div>
          </div>
          <div className="relative p-1 bg-slate-800 rounded-2xl border border-slate-700">
             <div className="bg-slate-900 rounded-xl p-8 font-mono text-sm text-blue-400">
                <p className="opacity-50">// SellMate Operating System</p>
                <p className="mt-4 text-white">const order = await SellMate.capture(chat_context);</p>
                <p>await order.verifyPayment();</p>
                <p className="text-blue-300">await order.syncToLogistics("PREFERRED_CARRIER");</p>
                <p className="mt-4 opacity-50">// System Status: Optimal</p>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-brandBlue rounded-lg flex items-center justify-center text-white font-bold text-sm">S</div>
            <span className="font-bold text-slate-900">SellMate AI v1.0</span>
          </div>
          <p className="text-slate-400 text-sm">© 2026 SellMate AI. The Operating System for Social Commerce.</p>
          <div className="flex gap-6 text-sm font-semibold text-slate-500">
             <a href="#" className="hover:text-brandBlue transition">Documentation</a>
             <a href="#" className="hover:text-brandBlue transition">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
