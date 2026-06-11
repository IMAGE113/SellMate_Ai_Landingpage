import { useState } from "react";
import { ArrowLeft, Send, MessageSquare, Mail, Loader2, CheckCircle2 } from "lucide-react";
import { registerMerchant, RegisterResponse } from "../lib/api";
import axios from "axios";

export default function BetaPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<RegisterResponse | null>(null);

  const [formData, setFormData] = useState({
    shop_name: "",
    owner_name: "",
    phone: "",
    password: "",
    requirements: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Client-side validation
    if (!formData.shop_name || !formData.owner_name || !formData.phone || !formData.password) {
      setError("All required fields must be filled.");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await registerMerchant(formData);
      if (response.success) {
        setSuccessData(response);
      } else {
        setError(response.message || "Registration failed. Please try again.");
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err) && err.response) {
        setError(err.response.data.message || "Registration failed");
      } else {
        setError("Network error. Please check your connection.");
      }
    } finally {
      setLoading(false);
    }
  };

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

        {!successData ? (
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-extrabold text-[#0F172A] tracking-tight">Join the Beta</h1>
              <p className="text-slate-500 mt-2">Be the first to build with SellMate AI Infrastructure.</p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {error && (
                <div className="p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl text-sm font-medium">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400">Shop Name *</label>
                  <input 
                    name="shop_name"
                    type="text" 
                    required 
                    value={formData.shop_name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
                    placeholder="Enter shop name" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400">Owner Name *</label>
                  <input 
                    name="owner_name"
                    type="text" 
                    required 
                    value={formData.owner_name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
                    placeholder="Enter owner name" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400">Phone Number *</label>
                  <input 
                    name="phone"
                    type="tel" 
                    required 
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
                    placeholder="Enter phone number" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400">Password *</label>
                  <input 
                    name="password"
                    type="password" 
                    required 
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
                    placeholder="Min 6 characters" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Requirements</label>
                <textarea 
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all h-32" 
                  placeholder="Describe your products, business rules, delivery rules, custom instructions, etc."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-[#2563EB] text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-blue-200 transition-all active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" /> Submitting...
                  </>
                ) : (
                  <>
                    Request Access <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>

            {/* Contact Section */}
            <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-[#2563EB]">
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
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-slate-900">Registration Successful</h2>
              <p className="text-slate-500">Welcome to SellMate AI Infrastructure!</p>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-2">
              <p className="text-xs font-black uppercase tracking-widest text-slate-400">Your Shop ID</p>
              <p className="text-3xl font-mono font-bold text-[#2563EB] tracking-wider">{successData.shop_id}</p>
              <p className="text-sm text-slate-500 pt-2">Save this Shop ID for future login.</p>
            </div>

            <button 
              onClick={() => window.history.back()} 
              className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-slate-800 transition-all active:scale-[0.98]"
            >
              Return to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
