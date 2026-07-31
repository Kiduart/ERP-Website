import { PageSeoHead } from "@/components/seo/PageSeoHead";
import { pageSeo } from "@/lib/pageSeo";
import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { FloatingIcons } from "@/components/animations/FloatingIcons";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2 } from "lucide-react";
import { CONTACT_PHONE_DISPLAY, DEFAULT_COUNTRY_CODE, WHATSAPP_URL } from "@/lib/contact";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { useState } from "react";

const demoSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  code: z.string().min(2, "Country code is required"),
  phone: z.string().regex(/^\d{10}$/, "Enter a valid 10 digit phone number"),
  school: z.string().min(2, "School name is required"),
  role: z.string().min(2, "Role is required"),
  students: z.string().min(1, "Please select student count"),
  message: z.string().optional(),
});

type DemoFormValues = z.infer<typeof demoSchema>;

async function parseApiResponse(response: Response) {
  const contentType = response.headers.get("content-type") || "";
  const rawBody = await response.text();

  if (contentType.includes("application/json")) {
    return rawBody ? JSON.parse(rawBody) : {};
  }

  throw new Error(
    response.ok
      ? "Unexpected response from the server."
      : "The form API is not returning JSON yet. Please retry after the server restart."
  );
}

export default function RequestDemo() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const form = useForm<DemoFormValues>({
    resolver: zodResolver(demoSchema),
    defaultValues: {
      firstName: "", lastName: "", email: "", code: DEFAULT_COUNTRY_CODE, phone: "",
      school: "", role: "", students: "", message: ""
    }
  });

  const onSubmit = async (data: DemoFormValues) => {
    setIsSubmitting(true);
    setSuccessMessage("");

    try {
      const response = await fetch("/api/demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await parseApiResponse(response);

      if (!response.ok) {
        throw new Error(result?.error || "Unable to send demo request right now.");
      }

      toast({
        title: "Demo request confirmed!",
        description: "We will be in touch soon to finalise your session. Check your inbox for a confirmation shortly.",
      });
      // SEO-UPGRADE: Updated success toast copy for clarity on timeline and next steps
      setSuccessMessage("Your request is in. We will be in touch soon to confirm your session time and understand your priorities.");
      // CONTENT: Updated success inline message with concrete response expectation
      form.reset({
        firstName: "",
        lastName: "",
        email: "",
        code: DEFAULT_COUNTRY_CODE,
        phone: "",
        school: "",
        role: "",
        students: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Request failed",
        description: error instanceof Error ? error.message : "Something went wrong while scheduling your demo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition className="pt-20 pb-0 bg-brand-beige/20 min-h-screen flex items-center relative overflow-hidden">
      <PageSeoHead {...pageSeo.demo} />
      <BackgroundBlobs blobs={[
        { color: "#fcbf49", size: 400, position: "top-left", opacity: 0.35 },
        { color: "#0c716b", size: 400, position: "bottom-right", opacity: 0.35 }
      ]} />
      <FloatingIcons icons={["MessageSquare", "BookOpen", "Users"]} count={6} heroMode={true} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10 w-full">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          
          {/* Left Content */}
          <div className="lg:col-span-2">
            <SectionReveal>
              <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6 leading-tight">
                See exactly how KIDUART works for your school
              </h1>
              {/* SEO-UPGRADE: Updated demo H1 for outcome-focused intent */}
              <p className="text-lg text-brand-navy/70 mb-10">
                This is not a recorded walkthrough. It is a live session shaped around your school's size, structure and the specific workflow problems you want to solve. Bring your hardest questions. The specialist will have real answers.
              </p>
              {/* SEO-UPGRADE: Rewrote subtitle to set live-demo expectation and qualify intent */}
              <div className="mb-8 flex flex-wrap items-center gap-4 text-sm text-brand-navy/[0.72]">
                <span className="font-semibold">Not ready to book yet?</span>
                {/* SEO-UPGRADE: Improved WhatsApp CTA pretext for pre-booking confidence */}
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-semibold text-brand-navy shadow-sm transition-colors hover:text-brand-teal">
                  <WhatsAppIcon className="h-4 w-4" />
                  {CONTACT_PHONE_DISPLAY}
                </a>
              </div>
              
              <div className="space-y-6 mb-12">
                {[
                  "A live walkthrough of the modules your school actually needs, not a scripted tour.",
                  "You will get a ballpark figure before the call ends, no waiting for a proposal document.",
                  "We cover what your specific school type and size requires, not a generic product overview.",
                  "You leave with a clear picture of fit and a realistic implementation timeline."
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-brand-teal shrink-0" />
                    <span className="text-brand-navy font-medium">{item}</span>
                  </div>
                ))}
              </div>

              {/* Steps */}
              <div className="bg-white p-6 rounded-2xl border border-brand-navy/10 shadow-sm">
                <h4 className="font-bold text-brand-navy mb-4">What happens after you submit</h4>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-navy text-white font-bold flex items-center justify-center shrink-0 text-sm">1</div>
                    <div>
                      <p className="font-semibold text-brand-navy text-sm">Tell us about your school</p>
                      <p className="text-brand-navy/60 text-xs">Complete the form below. The more detail you add, the better we can tailor the session to what actually matters for your institution.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-teal text-white font-bold flex items-center justify-center shrink-0 text-sm">2</div>
                    <div>
                      <p className="font-semibold text-brand-navy text-sm">We reach out promptly</p>
                      <p className="text-brand-navy/60 text-xs">A product specialist reviews your submission and contacts you to confirm timing and understand where you are and what your school looks like. We take it from there.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-orange text-brand-navy font-bold flex items-center justify-center shrink-0 text-sm">3</div>
                    <div>
                      <p className="font-semibold text-brand-navy text-sm">Your personalised session</p>
                      <p className="text-brand-navy/60 text-xs">A live screen-share of KIDUART configured around the workflows that matter to your school. You leave with a clear picture of fit and a realistic implementation timeline.</p>
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-3">
            <SectionReveal delay={0.2} className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-brand-navy/5">
              <h3 className="text-2xl font-bold text-brand-navy mb-6">Book your free demo</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField control={form.control} name="firstName" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-brand-navy">First Name</FormLabel>
                        <FormControl><Input placeholder="John" {...field} className="field-surface" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="lastName" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-brand-navy">Last Name</FormLabel>
                        <FormControl><Input placeholder="Doe" {...field} className="field-surface" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField control={form.control} name="phone" render={({ field }) => (
                      <FormItem className="md:col-span-1">
                        <FormLabel className="text-brand-navy">Phone Number</FormLabel>
                        <FormControl>
                          <div className="field-surface flex items-center rounded-md border border-brand-navy/10 focus-within:ring-2 focus-within:ring-brand-teal">
                            <span className="border-r border-brand-navy/10 px-3 py-2 text-sm font-bold text-brand-navy">+91</span>
                            <Input placeholder="10 digit number" inputMode="numeric" maxLength={10} {...field} onChange={(e) => field.onChange(e.target.value.replace(/\D/g, "").slice(0, 10))} className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-brand-navy">School or Work Email</FormLabel>
                        {/* SEO-UPGRADE: Updated field label for school/work email acceptance */}
                        <FormControl><Input placeholder="john@school.edu" {...field} className="field-surface" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <FormField control={form.control} name="school" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-brand-navy">School Name</FormLabel>
                      {/* SEO-UPGRADE: Simplified school name field label */}
                      <FormControl><Input placeholder="e.g. Sunrise Public School" {...field} className="field-surface" /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField control={form.control} name="role" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-brand-navy">Your Role</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl><SelectTrigger className="field-surface"><SelectValue placeholder="Select" /></SelectTrigger></FormControl>
                          <SelectContent>
                            <SelectItem value="Principal">Principal/Admin</SelectItem>
                            <SelectItem value="IT">IT Director</SelectItem>
                            <SelectItem value="Teacher">Teacher</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="students" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-brand-navy">Students</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl><SelectTrigger className="field-surface"><SelectValue placeholder="Select" /></SelectTrigger></FormControl>
                          <SelectContent>
                            <SelectItem value="<500">Under 500</SelectItem>
                            <SelectItem value="500-2000">500 - 2,000</SelectItem>
                            <SelectItem value="2000+">Over 2,000</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )} />
                    {/* <FormField control={form.control} name="country" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-brand-navy">Country</FormLabel>
                        <FormControl><Input placeholder="India" {...field} className="field-surface" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} /> */}
                  </div>

                  <FormField control={form.control} name="message" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-brand-navy">What is the biggest challenge you want us to address?</FormLabel>
                      {/* SEO-UPGRADE: Reframed open field label for problem-led demo prep */}
                      <FormControl><Textarea placeholder="e.g. We are mainly looking for a better gradebook..." {...field} className="field-surface resize-none" rows={3} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <button type="submit" disabled={isSubmitting} className="w-full py-4 rounded-xl bg-brand-navy text-white font-bold text-lg hover:bg-brand-teal transition-all duration-300 shadow-lg hover:shadow-brand-teal/25 disabled:cursor-not-allowed disabled:opacity-70">
                    {isSubmitting ? "Scheduling..." : "Book My Free Demo"}
                  </button>
                  {successMessage ? (
                    <p aria-live="polite" className="text-sm font-medium text-brand-teal">{successMessage}</p>
                  ) : null}
                </form>
              </Form>
            </SectionReveal>
          </div>

        </div>
      </div>
    </PageTransition>
  );
}
