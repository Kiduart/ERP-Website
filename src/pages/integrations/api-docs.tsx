import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { CtaSection } from "@/components/ui/CtaSection";
import { Terminal, Key, Shield, Code2, Server } from "lucide-react";

export default function ApiDocs() {
  return (
    <PageTransition className="pt-20 pb-0 tooo">
      <section className="bg-brand-navy py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-teal/20 via-brand-navy to-brand-navy" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <SectionReveal>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md mb-8 border border-white/20">
              <Terminal className="w-8 h-8 text-brand-teal" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Developer API Documentation
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Build powerful integrations with KIDUART's RESTful API
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="mb-16">
            <h2 className="text-3xl font-bold text-brand-navy mb-4">Introduction</h2>
            <p className="text-lg text-brand-navy/70 leading-relaxed bg-brand-beige/20 p-6 rounded-2xl border border-brand-navy/5">
              The KIDUART API provides programmatic access to all platform data and operations. Built on REST principles with JSON responses, our API allows your technical team to seamlessly sync data between KIDUART and your other internal systems, learning management systems, or custom applications.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.1} className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Key className="w-8 h-8 text-brand-orange" />
              <h2 className="text-3xl font-bold text-brand-navy">Authentication</h2>
            </div>
            <p className="text-lg text-brand-navy/70 mb-4">
              Authenticate your API requests using API Keys. Include the key as a Bearer token in the <code className="bg-brand-navy/5 px-2 py-1 rounded text-brand-teal">Authorization</code> header.
            </p>
            <div className="bg-[#1e1e2e] text-gray-300 p-6 rounded-2xl overflow-x-auto shadow-inner border border-gray-800">
              <pre className="font-mono text-sm">
                <span className="text-purple-400">Authorization</span>: Bearer YOUR_API_KEY
              </pre>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2} className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Server className="w-8 h-8 text-brand-teal" />
              <h2 className="text-3xl font-bold text-brand-navy">Available Endpoints</h2>
            </div>
            <div className="overflow-hidden rounded-2xl border border-brand-navy/10 shadow-sm">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-brand-navy/5 text-brand-navy">
                    <th className="p-4 font-bold">Method</th>
                    <th className="p-4 font-bold">Endpoint</th>
                    <th className="p-4 font-bold">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-navy/5">
                  {[
                    { method: "GET", url: "/api/v1/students", desc: "List all students" },
                    { method: "POST", url: "/api/v1/students", desc: "Create student" },
                    { method: "GET", url: "/api/v1/students/:id", desc: "Get student by ID" },
                    { method: "GET", url: "/api/v1/attendance", desc: "Get attendance records" },
                    { method: "POST", url: "/api/v1/attendance", desc: "Submit attendance" },
                    { method: "GET", url: "/api/v1/fees", desc: "Get fee records" },
                    { method: "POST", url: "/api/v1/fees/collect", desc: "Record fee payment" },
                    { method: "GET", url: "/api/v1/reports", desc: "Generate reports" }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-brand-navy/[0.02] transition-colors">
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded text-xs font-bold ${row.method === 'GET' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
                          {row.method}
                        </span>
                      </td>
                      <td className="p-4 font-mono text-sm text-brand-navy/80">{row.url}</td>
                      <td className="p-4 text-brand-navy/70">{row.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.3} className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="w-8 h-8 text-brand-yellow" />
              <h2 className="text-3xl font-bold text-brand-navy">Code Examples</h2>
            </div>
            
            <h3 className="text-xl font-bold text-brand-navy mb-4">cURL Request</h3>
            <div className="bg-[#1e1e2e] text-gray-300 p-6 rounded-2xl overflow-x-auto shadow-inner border border-gray-800 mb-8">
              <pre className="font-mono text-sm leading-relaxed">
<span className="text-blue-400">curl</span> -X GET \
  https://api.kiduart.com/v1/students \
  -H <span className="text-green-400">'Authorization: Bearer YOUR_API_KEY'</span> \
  -H <span className="text-green-400">'Content-Type: application/json'</span>
              </pre>
            </div>

            <h3 className="text-xl font-bold text-brand-navy mb-4">JSON Response</h3>
            <div className="bg-[#1e1e2e] text-gray-300 p-6 rounded-2xl overflow-x-auto shadow-inner border border-gray-800">
              <pre className="font-mono text-sm leading-relaxed text-blue-300">
{`{
  "status": "success",
  "data": [
    {
      "id": "stu_12345",
      "firstName": "Alex",
      "lastName": "Johnson",
      "grade": "10th",
      "enrollmentDate": "2023-08-15"
    }
  ],
  "meta": {
    "total": 1,
    "page": 1
  }
}`}
              </pre>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-8">
            <SectionReveal delay={0.4} className="bg-brand-beige/30 p-8 rounded-3xl border border-brand-navy/5">
              <Shield className="w-10 h-10 text-brand-navy mb-4" />
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Rate Limits</h3>
              <ul className="space-y-3 text-brand-navy/70">
                <li className="flex justify-between border-b border-brand-navy/10 pb-2">
                  <span>Basic Plan</span> <span className="font-bold text-brand-navy">1,000 req/hour</span>
                </li>
                <li className="flex justify-between border-b border-brand-navy/10 pb-2">
                  <span>Professional</span> <span className="font-bold text-brand-navy">10,000 req/hour</span>
                </li>
                <li className="flex justify-between pb-2">
                  <span>Enterprise</span> <span className="font-bold text-brand-teal">Unlimited</span>
                </li>
              </ul>
            </SectionReveal>

            <SectionReveal delay={0.5} className="bg-white p-8 rounded-3xl border border-brand-navy/10 shadow-lg shadow-brand-navy/5">
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Developer Tools</h3>
              <p className="text-brand-navy/70 mb-6">Test your integration in our sandbox environment before going live.</p>
              <div className="bg-brand-navy/5 p-4 rounded-xl font-mono text-sm text-center mb-6">
                sandbox.kiduart.com
              </div>
              <div className="flex gap-2">
                {['JS/TS', 'Python', 'PHP'].map(sdk => (
                  <div key={sdk} className="flex-1 bg-brand-navy text-white text-xs font-bold py-2 rounded-lg text-center relative group overflow-hidden">
                    {sdk}
                    <div className="absolute inset-0 bg-brand-teal flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform">
                      Coming Soon
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-center text-brand-navy/50 mt-6">
                Need help? <a href="mailto:developer-support@kiduart.com" className="text-brand-teal hover:underline">developer-support@kiduart.com</a>
              </p>
            </SectionReveal>
          </div>
        </div>
      </section>

      <CtaSection 
        title="Start Building With KIDUART API" 
        subtitle="Get your API key when you sign up for any plan." 
      />
    </PageTransition>
  );
}
