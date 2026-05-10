import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getLoginUrl } from "@/const";
import { Check, Zap, BarChart3, Bell, Cpu, TrendingUp, Package, CreditCard, MessageSquare, Sparkles, Globe } from "lucide-react";
import { useLocation } from "wouter";

export default function Home() {
  const { user, isAuthenticated } = useAuth();
  const [, navigate] = useLocation();

  if (isAuthenticated && user) {
    navigate("/dashboard");
    return null;
  }

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/30">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(var(--accent),0.4)]">
              <Cpu className="w-5 h-5 text-background" />
            </div>
            <span className="text-xl font-bold tracking-tight">SellMate AI</span>
            <span className="ml-2 px-2 py-1 bg-accent/20 text-accent text-[10px] font-bold rounded uppercase tracking-wider">Early Beta</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium hover:text-accent transition-colors">Features</a>
            <a href="#integrations" className="text-sm font-medium hover:text-accent transition-colors">Integrations</a>
            <a href={getLoginUrl()} className="btn-blueprint text-sm px-6">Join Beta Access</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 md:py-32 container overflow-hidden">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="tech-label inline-block">Pioneering Omni-channel Commerce</div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tighter">
              Turn Social Chats into <span className="highlight-accent">Automated Revenue</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              The first AI-driven platform in the region to unify social sales and **Global Logistics API**. Automate order taking, verify payments, and sync with delivery partners—all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href={getLoginUrl()} className="btn-blueprint px-8 py-3 text-center">
                Get Beta Access
              </a>
              <button className="btn-blueprint-outline px-8 py-3">
                See Technical Demo
              </button>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground opacity-70">
              <span className="flex items-center gap-1"><Check className="w-3 h-3 text-accent" /> No Credit Card Required</span>
              <span className="flex items-center gap-1"><Check className="w-3 h-3 text-accent" /> Free During Beta</span>
            </div>
          </div>

          {/* Blueprint Grid Visual - This is what they'll see during the call */}
          <div className="relative h-[400px] bg-card border-2 border-accent/20 rounded-xl grid-overlay flex items-center justify-center shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />
            <div className="space-y-6 text-center z-10">
              <div className="formula text-2xl text-accent font-mono tracking-widest animate-pulse">
                Σ (SOCIAL_AI + LOGISTICS_API)
              </div>
              <div className="h-px w-48 bg-accent/30 mx-auto" />
              <div className="formula text-xl text-accent/80 font-mono tracking-wider">
                = SCALABLE_GROWTH
              </div>
              <div className="mt-12 space-y-3">
                <div className="text-[10px] font-mono uppercase tracking-[0.4em] text-muted-foreground">System Status: Production Ready</div>
                <div className="flex gap-1 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-8 h-1 bg-accent/20 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-accent animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="blueprint-divider" />

      {/* Features Section - Updated with General Terms */}
      <section id="features" className="py-24 container">
        <div className="text-center mb-20">
          <div className="tech-label mb-4">Core Infrastructure</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Everything You Need to Scale</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="wireframe-card p-8 bg-accent/5 border-accent/30 shadow-lg">
            <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
              <Package className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-3">Integrated Logistics</h3>
            <p className="text-muted-foreground leading-relaxed">
              Direct connection with regional and global delivery networks. Automate waybill generation and real-time tracking with zero manual effort.
            </p>
          </Card>

          <Card className="wireframe-card p-8 bg-card/50">
            <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
              <MessageSquare className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-3">Omni-channel AI Bot</h3>
            <p className="text-muted-foreground leading-relaxed">
              Capture orders across all major social platforms simultaneously. Our AI understands context, captures data, and confirms orders 24/7.
            </p>
          </Card>

          <Card className="wireframe-card p-8 bg-card/50">
            <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
              <BarChart3 className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-3">Growth Analytics</h3>
            <p className="text-muted-foreground leading-relaxed">
              Professional-grade dashboard to monitor revenue, customer behavior, and branch performance with AI-generated insights.
            </p>
          </Card>
        </div>
      </section>

      <div className="blueprint-divider" />

      {/* Integrations - Strategic wording for the call */}
      <section id="integrations" className="py-24 container">
        <div className="grid md:grid-cols-3 gap-8 items-center mb-16">
          <div className="md:col-span-1">
            <div className="tech-label mb-4">Ecosystem</div>
            <h2 className="text-4xl font-bold mb-4 tracking-tight">API-First Architecture</h2>
            <p className="text-muted-foreground">
              Designed to bridge the gap between social media platforms and logistics providers.
            </p>
          </div>
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
            <div className="p-6 border border-border rounded-xl bg-card/30">
              <Globe className="w-6 h-6 text-accent mb-4" />
              <h4 className="font-bold mb-2">Regional Logistics</h4>
              <div className="flex flex-wrap gap-2">
                {["Last-Mile Carriers", "Global Logistics", "Express Networks"].map(t => (
                  <span key={t} className="px-2 py-1 bg-accent/10 text-accent text-[10px] font-bold rounded uppercase">{t}</span>
                ))}
              </div>
            </div>
            <div className="p-6 border border-border rounded-xl bg-card/30">
              <CreditCard className="w-6 h-6 text-accent mb-4" />
              <h4 className="font-bold mb-2">Payment Gateways</h4>
              <div className="flex flex-wrap gap-2">
                {["Digital Wallets", "Banking APIs", "Automated Verification"].map(t => (
                  <span key={t} className="px-2 py-1 bg-accent/10 text-accent text-[10px] font-bold rounded uppercase">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 container">
        <div className="bg-accent/5 border-2 border-accent/20 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
             <Cpu className="w-64 h-64 text-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Ready to Pioneer the Future?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Join the limited beta program. Be the first to integrate AI-driven social commerce with automated logistics.
          </p>
          <div className="flex justify-center gap-4">
            <a href={getLoginUrl()} className="btn-blueprint px-10 py-4 text-lg">
              Join The Beta
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-card/30">
        <div className="container text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Cpu className="w-5 h-5 text-accent" />
            <span className="font-bold tracking-tight">SellMate AI v1.0</span>
          </div>
          <p className="text-sm text-muted-foreground opacity-60">© 2026 SellMate AI. Built for the modern entrepreneur.</p>
        </div>
      </footer>
    </div>
  );
}
