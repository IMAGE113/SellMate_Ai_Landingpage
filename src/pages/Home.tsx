import { Check, Zap, BarChart3, Bell, Cpu, TrendingUp, Package, CreditCard, MessageSquare, Sparkles, Globe } from "lucide-react";
import { useLocation } from "wouter";

export default function Home() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.4)]">
              <Cpu className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">SellMate AI</span>
            <span className="ml-2 px-2 py-1 bg-blue-600/20 text-blue-400 text-[10px] font-bold rounded uppercase tracking-wider">Early Beta</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium hover:text-blue-400 transition-colors">Features</a>
            <a href="#integrations" className="text-sm font-medium hover:text-blue-400 transition-colors">Integrations</a>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm transition-all shadow-[0_0_10px_rgba(37,99,235,0.3)]">Join Beta Access</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 md:py-32 container mx-auto px-6 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-mono">Pioneering Omni-channel Commerce</div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tighter">
              Turn Social Chats into <span className="text-blue-500">Automated Revenue</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
              The first AI-driven platform in the region to unify social sales and **Global Logistics API**. Automate order taking, verify payments, and sync with delivery partners—all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all text-center shadow-lg shadow-blue-600/20">
                Get Beta Access
              </button>
              <button className="border border-gray-700 hover:border-blue-500 bg-white/5 px-8 py-4 rounded-xl font-bold transition-all">
                See Technical Demo
              </button>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono text-gray-500">
              <span className="flex items-center gap-1"><Check className="w-3 h-3 text-blue-500" /> No Credit Card Required</span>
              <span className="flex items-center gap-1"><Check className="w-3 h-3 text-blue-500" /> Free During Beta</span>
            </div>
          </div>

          {/* Blueprint Visual */}
          <div className="relative h-[400px] bg-gray-900 border-2 border-blue-500/20 rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:20px_20px] opacity-20" />
            <div className="space-y-6 text-center z-10">
              <div className="text-2xl text-blue-500 font-mono tracking-widest animate-pulse">
                Σ (SOCIAL_AI + LOGISTICS_API)
              </div>
              <div className="h-px w-48 bg-blue-500/30 mx-auto" />
              <div className="text-xl text-blue-400 font-mono tracking-wider">
                = SCALABLE_GROWTH
              </div>
              <div className="pt-8 opacity-40 group-hover:opacity-100 transition-opacity">
                 <div className="text-[10px] font-mono text-blue-300 uppercase tracking-[0.3em]">System: Optimal</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="text-blue-500 font-mono text-xs mb-4 uppercase tracking-widest">Core Infrastructure</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Everything You Need to Scale</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-gray-900/40 border border-gray-800 rounded-2xl hover:border-blue-500/50 transition-all hover:bg-gray-900/60">
            <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
              <Package className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Integrated Logistics</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Direct connection with regional and global delivery networks. Automate waybill generation and real-time tracking with zero manual effort.
            </p>
          </div>

          <div className="p-8 bg-gray-900/40 border border-gray-800 rounded-2xl hover:border-blue-500/50 transition-all hover:bg-gray-900/60">
            <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
              <MessageSquare className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Omni-channel AI Bot</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Capture orders across all major social platforms simultaneously. Our AI understands context, captures data, and confirms orders 24/7.
            </p>
          </div>

          <div className="p-8 bg-gray-900/40 border border-gray-800 rounded-2xl hover:border-blue-500/50 transition-all hover:bg-gray-900/60">
            <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
              <BarChart3 className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Growth Analytics</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Professional-grade dashboard to monitor revenue, customer behavior, and branch performance with AI-generated insights.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-16 bg-black">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Cpu className="w-5 h-5 text-blue-500" />
            <span className="font-bold tracking-tight">SellMate AI v1.0</span>
          </div>
          <p className="text-sm text-gray-500 opacity-60">© 2026 SellMate AI. Engineered for Scale.</p>
        </div>
      </footer>
    </div>
  );
}
