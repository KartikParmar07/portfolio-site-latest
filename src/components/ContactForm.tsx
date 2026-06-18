import { useState, FormEvent } from 'react';
import { Send, CheckCircle, Mail, MapPin, Globe, Loader2, ArrowUpRight } from 'lucide-react';
import { USER_PROFILE } from '../data';

interface ContactFormProps {
  isDark: boolean;
}

export default function ContactForm({ isDark }: ContactFormProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate elite network ingestion router call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Construct mailto link for direct fallback delivery
      const subject = encodeURIComponent(`Portfolio Message from ${formData.name}`);
      const body = encodeURIComponent(`Hello Kartik,\n\nI visited your portfolio.\n\nSender: ${formData.name} (${formData.email})\nMessage: ${formData.message}`);
      window.location.href = `mailto:${USER_PROFILE.email}?subject=${subject}&body=${body}`;
      
      // Clear values
      setFormData({ name: '', email: '', message: '' });
      
      // Clear success visual state after brief moment
      setTimeout(() => setIsSuccess(false), 5050);
    }, 1500);
  };

  return (
    <div id="contact-wrapper" className="relative w-full py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Panel: Direct Coordinates Cards */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-blue-400 font-mono text-xs uppercase tracking-[0.25em]">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                <span>Synchronous Connection</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black font-display tracking-tight uppercase italic">
                Establish Link
              </h2>
              <p className={`text-sm md:text-base leading-relaxed ${isDark ? 'text-white/60' : 'text-slate-655'}`}>
                Have an execution request, employment proposal, or system feedback? Initialize connection. Let's create high-latency free products together.
              </p>
            </div>

            <div className="space-y-4">
              {/* Location Node Card */}
              <div className={`p-4 rounded-xl border flex items-center space-x-4 transition-all duration-300 ${
                isDark ? 'bg-[#0A0A0A]/95 border-white/5' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-mono text-white/40 tracking-wider">Physical Origin Coordinate</div>
                  <div className="text-sm font-semibold">{USER_PROFILE.location}</div>
                </div>
              </div>

              {/* Direct Mail Code Ingestion Card */}
              <a 
                href={`mailto:${USER_PROFILE.email}`}
                className={`p-4 rounded-xl border flex items-center space-x-4 transition-all duration-300 hover:border-blue-500/30 group block cursor-pointer ${
                  isDark ? 'bg-[#0A0A0A]/95 border-white/5' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="flex items-center space-x-4 w-full">
                  <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-grow">
                    <div className="text-[10px] uppercase font-mono text-white/40 tracking-wider">Direct Message Ingestion</div>
                    <div className="text-sm font-semibold group-hover:text-blue-400 transition-colors">{USER_PROFILE.email}</div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-blue-400 transition-colors" />
                </div>
              </a>

              {/* Availability Status Badge */}
              <div className={`p-4 rounded-xl border flex items-center space-x-4 transition-all duration-300 ${
                isDark ? 'bg-[#0A0A0A]/95 border-white/5' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                  <Globe className="w-5 h-5 animate-spin" style={{ animationDuration: '20s' }} />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-mono text-white/40 tracking-wider">Employment Pipeline</div>
                  <div className="text-sm font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                    Open to Senior / Lead Roles
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Clean Interactive Transmission Form */}
          <div className="lg:col-span-7">
            <div className={`p-6 md:p-8 rounded-2xl border transition-all duration-300 ${
              isDark ? 'bg-[#0A0A0A]/95 border-white/5' : 'bg-white border-slate-250 shadow-lg shadow-slate-150/30'
            }`}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="contact-name" className="text-[10px] uppercase font-mono text-white/40 block mb-2 font-bold tracking-wider">
                    Sender Name / Agency
                  </label>
                  <input
                    id="contact-name"
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Stripe Recruitment / Jane Doe"
                    className={`w-full px-4 py-3 rounded-xl border font-mono text-xs sm:text-sm transition-all focus:outline-none ${
                      isDark 
                        ? 'border-white/5 bg-[#111111]/40 text-blue-450 placeholder:text-white/20 focus:border-blue-500/30 focus:bg-[#111111]' 
                        : 'border-slate-300 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-slate-900'
                    }`}
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="text-[10px] uppercase font-mono text-white/40 block mb-2 font-bold tracking-wider">
                    Communication Address (Email)
                  </label>
                  <input
                    id="contact-email"
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. jane.doe@stripe.com"
                    className={`w-full px-4 py-3 rounded-xl border font-mono text-xs sm:text-sm transition-all focus:outline-none ${
                      isDark 
                        ? 'border-white/5 bg-[#111111]/40 text-blue-450 placeholder:text-white/20 focus:border-blue-500/30 focus:bg-[#111111]' 
                        : 'border-slate-300 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-slate-900'
                    }`}
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="text-[10px] uppercase font-mono text-white/40 block mb-2 font-bold tracking-wider">
                    Message Payload
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Formulate your request. Type role description, location rules or feedback..."
                    className={`w-full px-4 py-3 rounded-xl border font-mono text-xs sm:text-sm transition-all focus:outline-none resize-none ${
                      isDark 
                        ? 'border-white/5 bg-[#111111]/40 text-blue-450 placeholder:text-white/20 focus:border-blue-500/30 focus:bg-[#111111]' 
                        : 'border-slate-300 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-slate-900'
                    }`}
                  />
                </div>

                {/* Submit button with fancy micro indicators */}
                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className={`w-full py-4 rounded-full font-mono text-xs uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center space-x-2 border cursor-pointer ${
                    isSuccess
                      ? 'bg-blue-500/10 border-blue-500/40 text-blue-400'
                      : isDark
                        ? 'bg-white hover:bg-white/90 border-transparent text-black font-bold shadow-[0_0_15px_rgba(255,255,255,0.15)]'
                        : 'bg-slate-900 hover:bg-slate-850 border-transparent text-white font-bold shadow-md'
                  } disabled:opacity-50`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin mr-1.5" />
                      <span>Ingesting Socket Packets...</span>
                    </>
                  ) : isSuccess ? (
                    <>
                      <CheckCircle className="w-4 h-4 mr-1.5 text-blue-400" />
                      <span>Link Established. Transfer Completed!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5 mr-1.5" />
                      <span>Transmit Message Payload</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
