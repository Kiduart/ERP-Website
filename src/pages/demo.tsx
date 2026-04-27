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
import { CONTACT_PHONE_DISPLAY, COUNTRY_CODES, DEFAULT_COUNTRY_CODE, WHATSAPP_URL } from "@/lib/contact";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

const demoSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phoneCode: z.string().min(2, "Country code is required"),
  phone: z.string().regex(/^\d{10}$/, "Enter a valid 10 digit phone number"),
  school: z.string().min(2, "School name is required"),
  role: z.string().min(2, "Role is required"),
  students: z.string().min(1, "Please select student count"),
  country: z.string().min(2, "Country is required"),
  message: z.string().optional(),
});

type DemoFormValues = z.infer<typeof demoSchema>;

export default function RequestDemo() {
  const { toast } = useToast();
  const form = useForm<DemoFormValues>({
    resolver: zodResolver(demoSchema),
    defaultValues: {
      firstName: "", lastName: "", email: "", phoneCode: DEFAULT_COUNTRY_CODE, phone: "",
      school: "", role: "", students: "", country: "", message: ""
    }
  });

  const onSubmit = (data: DemoFormValues) => {
    console.log(data);
    toast({
      title: "Request Received!",
      description: "Our team will contact you shortly to schedule your demo.",
    });
    form.reset();
  };

  return (
    <PageTransition className="pt-20 pb-0 bg-brand-beige/20 min-h-screen flex items-center relative overflow-hidden">
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
                See KIDUART ERP in Action
              </h1>
              <p className="text-lg text-brand-navy/70 mb-10">
                Schedule a personalized 30-minute walkthrough of the platform with our education technology experts.
              </p>
              <div className="mb-8 flex flex-wrap items-center gap-4 text-sm text-brand-navy/72">
                <span className="font-semibold">Prefer a quick chat?</span>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-semibold text-brand-navy shadow-sm transition-colors hover:text-brand-teal">
                  <WhatsAppIcon className="h-4 w-4" />
                  {CONTACT_PHONE_DISPLAY}
                </a>
              </div>
              
              <div className="space-y-6 mb-12">
                {[
                  "Live demonstration of core modules",
                  "Discussion of your school's specific challenges",
                  "Pricing estimation based on your requirements",
                  "Q&A with a product specialist"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-brand-teal shrink-0" />
                    <span className="text-brand-navy font-medium">{item}</span>
                  </div>
                ))}
              </div>

              {/* Steps */}
              <div className="bg-white p-6 rounded-2xl border border-brand-navy/10 shadow-sm">
                <h4 className="font-bold text-brand-navy mb-4">What happens next?</h4>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-navy text-white font-bold flex items-center justify-center shrink-0 text-sm">1</div>
                    <div>
                      <p className="font-semibold text-brand-navy text-sm">Submit Request</p>
                      <p className="text-brand-navy/60 text-xs">Fill out the form with your details.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-teal text-white font-bold flex items-center justify-center shrink-0 text-sm">2</div>
                    <div>
                      <p className="font-semibold text-brand-navy text-sm">Quick Call</p>
                      <p className="text-brand-navy/60 text-xs">We'll call to confirm your needs.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-orange text-white font-bold flex items-center justify-center shrink-0 text-sm">3</div>
                    <div>
                      <p className="font-semibold text-brand-navy text-sm">Custom Demo</p>
                      <p className="text-brand-navy/60 text-xs">Experience the platform tailored to you.</p>
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-3">
            <SectionReveal delay={0.2} className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-brand-navy/5">
              <h3 className="text-2xl font-bold text-brand-navy mb-6">Request Your Demo</h3>
              
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
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-brand-navy">Work Email</FormLabel>
                        <FormControl><Input placeholder="john@school.edu" {...field} className="field-surface" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="phoneCode" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-brand-navy">Country Code</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl><SelectTrigger className="field-surface"><SelectValue placeholder="Select code" /></SelectTrigger></FormControl>
                          <SelectContent>
                            {COUNTRY_CODES.map((code) => (
                              <SelectItem key={code.value} value={code.value}>{code.label}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="phone" render={({ field }) => (
                      <FormItem className="md:col-span-1">
                        <FormLabel className="text-brand-navy">Phone Number</FormLabel>
                        <FormControl><Input placeholder="10 digit number" inputMode="numeric" maxLength={10} {...field} className="field-surface" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <FormField control={form.control} name="school" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-brand-navy">School / Organization Name</FormLabel>
                      <FormControl><Input placeholder="Oakridge Academy" {...field} className="field-surface" /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <div className="grid md:grid-cols-3 gap-6">
                    <FormField control={form.control} name="role" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-brand-navy">Your Role</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                    <FormField control={form.control} name="country" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-brand-navy">Country</FormLabel>
                        <FormControl><Input placeholder="India" {...field} className="field-surface" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <FormField control={form.control} name="message" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-brand-navy">Anything specific you'd like to see?</FormLabel>
                      <FormControl><Textarea placeholder="e.g. We are mainly looking for a better gradebook..." {...field} className="field-surface resize-none" rows={3} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <button type="submit" className="w-full py-4 rounded-xl bg-brand-navy text-white font-bold text-lg hover:bg-brand-teal transition-all duration-300 shadow-lg hover:shadow-brand-teal/25">
                    Schedule Demo
                  </button>
                </form>
              </Form>
            </SectionReveal>
          </div>

        </div>
      </div>
    </PageTransition>
  );
}
