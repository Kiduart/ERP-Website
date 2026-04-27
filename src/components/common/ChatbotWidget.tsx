import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Bot, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/contact";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

type Message = {
  id: string;
  sender: "bot" | "user";
  text: string;
};

const SUGGESTED_CHIPS = [
  "How does pricing work?",
  "Can I request a demo?",
  "What features are included?",
  "How do I set up my school?",
  "Is my data secure?",
  "How do integrations work?"
];

const RESPONSES: Record<string, string> = {
  "How does pricing work?": "Our pricing is based on number of students — starting at $2/student/month for Basic. We offer Professional and Enterprise plans. Visit our Pricing page for full details or request a demo for a custom quote!",
  "Can I request a demo?": "Absolutely! Click the 'Request Demo' button in our navbar or visit /demo. Our team will schedule a personalized walkthrough within 24 hours.",
  "What features are included?": "KIDUART includes Student Management, Attendance, Gradebook, Fee Management, Timetable, Parent Communication, AI Analytics, and much more. Visit our Features page to explore all capabilities.",
  "How do I set up my school?": "Setup is straightforward! After your demo, our onboarding team guides you through data migration and configuration. Most schools are live within 2 weeks.",
  "Is my data secure?": "Absolutely. We use 256-bit encryption, are GDPR/FERPA compliant, ISO 27001 certified, and host on enterprise-grade infrastructure with 99.9% uptime.",
  "How do integrations work?": "KIDUART integrates with Google Classroom, Moodle, Canvas, Zoom, Stripe, and more. Visit our Integrations page or check our API docs for custom integrations."
};

const DEFAULT_RESPONSE = `Great question! Our sales team can help you better. Email us at ${CONTACT_EMAIL} or call ${CONTACT_PHONE_DISPLAY}.`;

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", sender: "bot", text: "Hi! I'm KIDU, a Product Expert. How can we help you today?" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    
    // Add user message
    const userMsg: Message = { id: Date.now().toString(), sender: "user", text };
    setMessages(prev => [...prev, userMsg]);
    setInputValue("");

    // Simulate bot response delay
    setTimeout(() => {
      const responseText = RESPONSES[text] || DEFAULT_RESPONSE;
      const botMsg: Message = { id: (Date.now() + 1).toString(), sender: "bot", text: responseText };
      setMessages(prev => [...prev, botMsg]);
    }, 600);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-105"
          aria-label="Open WhatsApp chat"
        >
          <WhatsAppIcon className="h-7 w-7" />
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-navy text-white shadow-xl transition-transform hover:scale-105"
        >
          <MessageCircle className="w-7 h-7" />
        </button>
      </div>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 flex w-[calc(100vw-2rem)] max-w-80 flex-col overflow-hidden rounded-2xl border border-brand-navy/10 bg-white shadow-2xl sm:max-w-96"
          >
            {/* Header */}
            <div className="bg-brand-navy p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-brand-navy rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-bold text-sm">KIDUART Support</h3>
                  <p className="text-xs text-white/70">We typically reply in a few minutes</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto min-h-[12rem] max-h-[18rem] bg-brand-beige/20 space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm ${
                    msg.sender === "user" ? "bg-brand-teal text-white rounded-br-sm" : "bg-white border border-brand-navy/10 text-brand-navy rounded-bl-sm"
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {/* Suggested Chips */}
              {messages.length === 1 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {SUGGESTED_CHIPS.map((chip) => (
                    <button
                      key={chip}
                      onClick={() => handleSend(chip)}
                      className="text-xs bg-white border border-brand-teal/30 text-brand-teal px-3 py-1.5 rounded-full hover:bg-brand-teal hover:text-white transition-colors text-left"
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white border-t border-brand-navy/10 flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend(inputValue)}
                placeholder="Type your message..."
                className="field-surface flex-1 border-none rounded-xl px-4 py-2 text-sm text-brand-navy focus:ring-2 focus:ring-brand-teal focus:outline-none"
              />
              <button
                onClick={() => handleSend(inputValue)}
                className="w-10 h-10 rounded-xl bg-brand-teal text-white flex items-center justify-center hover:bg-brand-navy transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!inputValue.trim()}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
