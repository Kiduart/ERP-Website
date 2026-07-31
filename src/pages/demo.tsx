import { PageSeoHead } from "@/components/seo/PageSeoHead";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { pageSeo } from "@/lib/pageSeo";
import { InView } from "@/components/ui/InView";
import { Stagger } from "@/components/ui/Stagger";
import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { FloatingIcons } from "@/components/animations/FloatingIcons";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle2, Clock3, ShieldCheck, Users } from "lucide-react";
import {
  CONTACT_PHONE_DISPLAY,
  DEFAULT_COUNTRY_CODE,
  WHATSAPP_URL,
} from "@/lib/contact";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { buildBreadcrumbSchema, buildFaqPageSchema } from "@/lib/seoSchemas";
import { useState } from "react";
import { Link } from "wouter";

const demoSchema = z
  .object({
    firstName: z.string().min(2, "First name is required"),
    lastName: z.string().min(2, "Last name is required"),
    email: z.string().email("Invalid email address"),
    code: z.string().min(2, "Country code is required"),
    phone: z.string().regex(/^\d{10}$/, "Enter a valid 10 digit phone number"),
    school: z.string().min(2, "School name is required"),
    role: z.string().min(2, "Role is required"),
    students: z.string().min(1, "Please select student count"),
    hasWebsite: z.boolean().default(false),
    website: z.string().optional(),
    message: z.string().optional(),
  })
  .superRefine((values, ctx) => {
    if (!values.hasWebsite) return;
    const site = values.website?.trim() ?? "";
    if (!site) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Enter your school website URL",
        path: ["website"],
      });
      return;
    }
    try {
      const candidate = /^https?:\/\//i.test(site) ? site : `https://${site}`;
      // eslint-disable-next-line no-new
      new URL(candidate);
    } catch {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Enter a valid website URL",
        path: ["website"],
      });
    }
  });

type DemoFormValues = z.infer<typeof demoSchema>;

const DEMO_FAQS = [
  {
    q: "What happens in a KIDUART school ERP demo?",
    a: "A live screen-share shaped around your school  fee heads, attendance, role panels, or parent updates  not a recorded montage. You leave with fit and a realistic rollout picture.",
  },
  {
    q: "Who should join the demo call?",
    a: "Usually the principal or school admin, plus finance or IT if those workflows matter most. Teachers can join when academics is the priority.",
  },
  {
    q: "Is the demo free and without lock-in?",
    a: "Yes. The walkthrough is free, no card required, and nothing is charged to see the product on your school structure.",
  },
];

async function parseApiResponse(response: Response) {
  const contentType = response.headers.get("content-type") || "";
  const rawBody = await response.text();

  if (contentType.includes("application/json")) {
    return rawBody ? JSON.parse(rawBody) : {};
  }

  throw new Error(
    response.ok
      ? "Unexpected response from the server."
      : "The form API is not returning JSON yet. Please retry after the server restart.",
  );
}

export default function RequestDemo() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const form = useForm<DemoFormValues>({
    resolver: zodResolver(demoSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      code: DEFAULT_COUNTRY_CODE,
      phone: "",
      school: "",
      role: "",
      students: "",
      hasWebsite: false,
      website: "",
      message: "",
    },
  });

  const hasWebsite = form.watch("hasWebsite");

  const onSubmit = async (data: DemoFormValues) => {
    setIsSubmitting(true);
    setSuccessMessage("");

    const website =
      data.hasWebsite && data.website?.trim()
        ? /^https?:\/\//i.test(data.website.trim())
          ? data.website.trim()
          : `https://${data.website.trim()}`
        : "";

    try {
      const response = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          code: data.code,
          phone: data.phone,
          school: data.school,
          role: data.role,
          students: data.students,
          website,
          message: data.message,
        }),
      });

      const result = await parseApiResponse(response);

      if (!response.ok) {
        throw new Error(
          result?.error || "Unable to send demo request right now.",
        );
      }

      toast({
        title: "Demo request confirmed!",
        description:
          "We will be in touch soon to finalise your session. Check your inbox for a confirmation shortly.",
      });
      setSuccessMessage(
        "Your request is in. We will be in touch soon to confirm your session time and understand your priorities.",
      );
      form.reset({
        firstName: "",
        lastName: "",
        email: "",
        code: DEFAULT_COUNTRY_CODE,
        phone: "",
        school: "",
        role: "",
        students: "",
        hasWebsite: false,
        website: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Request failed",
        description:
          error instanceof Error
            ? error.message
            : "Something went wrong while scheduling your demo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition className="relative flex min-h-screen items-center overflow-hidden bg-brand-beige/20 pb-0 pt-20">
      <PageSeoHead {...pageSeo.demo} />
      <SchemaMarkup
        data={[
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Book a Demo", path: "/demo" },
          ]),
          buildFaqPageSchema({ demo: DEMO_FAQS }),
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Book a Free KIDUART School ERP Demo",
            url: "https://www.kiduart.com/demo",
            description: pageSeo.demo.description,
          },
        ]}
      />
      <BackgroundBlobs
        blobs={[
          { color: "#fcbf49", size: 400, position: "top-left", opacity: 0.35 },
          {
            color: "#0c716b",
            size: 400,
            position: "bottom-right",
            opacity: 0.35,
          },
        ]}
      />
      <FloatingIcons
        icons={["MessageSquare", "BookOpen", "Users"]}
        count={6}
        heroMode
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-start gap-16 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionReveal>
              <h1 className="mb-6 text-4xl font-bold leading-tight text-brand-navy md:text-5xl">
                See exactly how KIDUART works for your school
              </h1>
              <p className="mb-10 text-lg text-brand-navy/70">
                This is not a recorded walkthrough. It is a live session shaped
                around your school&apos;s size, structure and the specific
                workflow problems you want to solve fees, attendance, role
                panels, or parent updates. Bring your hardest questions.
              </p>
              <div className="mb-8 flex flex-wrap items-center gap-4 text-sm text-brand-navy/[0.72]">
                <span className="font-semibold">Not ready to book yet?</span>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-semibold text-brand-navy shadow-sm transition-colors hover:text-brand-teal"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  {CONTACT_PHONE_DISPLAY}
                </a>
              </div>

              <Stagger className="mb-12 space-y-6" itemClassName="motion-stamp">
                {[
                  "A live walkthrough of the modules your school actually needs, not a scripted tour.",
                  "You will get a ballpark figure before the call ends, no waiting for a proposal document.",
                  "We cover what your specific school type and size requires, not a generic product overview.",
                  "You leave with a clear picture of fit and a realistic implementation timeline.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 shrink-0 text-brand-teal" />
                    <span className="font-medium text-brand-navy">{item}</span>
                  </div>
                ))}
              </Stagger>

              <div className="rounded-2xl border border-brand-navy/10 bg-white p-6 shadow-sm">
                <h4 className="mb-4 font-bold text-brand-navy">
                  What happens after you submit
                </h4>
                <div className="space-y-4">
                  {[
                    {
                      n: "1",
                      tone: "bg-brand-navy text-white",
                      title: "Tell us about your school",
                      body: "Complete the form. School email is required; website is optional if you tick that you have one.",
                    },
                    {
                      n: "2",
                      tone: "bg-brand-teal text-white",
                      title: "We reach out promptly",
                      body: "A product specialist reviews your submission and contacts you to confirm timing.",
                    },
                    {
                      n: "3",
                      tone: "bg-brand-orange text-brand-navy",
                      title: "Your personalised session",
                      body: "A live screen-share of KIDUART around the workflows that matter to your school.",
                    },
                  ].map((step) => (
                    <div key={step.n} className="flex gap-4">
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${step.tone}`}
                      >
                        {step.n}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-brand-navy">
                          {step.title}
                        </p>
                        <p className="text-xs text-brand-navy/60">
                          {step.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          </div>

          <div className="lg:col-span-3">
            <InView
              once
              className="motion-rise rounded-3xl border border-brand-navy/5 bg-white p-8 shadow-xl sm:p-10"
            >
              <h2 className="mb-2 text-2xl font-bold text-brand-navy">
                Book your free demo
              </h2>
              <p className="mb-6 text-sm text-brand-navy/65">
                Free live walkthrough for Indian schools admissions, fees,
                attendance, exams, and parent communication.
              </p>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid gap-6 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-brand-navy">
                            First Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="John"
                              {...field}
                              className="field-surface"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-brand-navy">
                            Last Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Doe"
                              {...field}
                              className="field-surface"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-brand-navy">
                            Phone Number
                          </FormLabel>
                          <FormControl>
                            <div className="field-surface flex items-center rounded-md border border-brand-navy/10 focus-within:ring-2 focus-within:ring-brand-teal">
                              <span className="border-r border-brand-navy/10 px-3 py-2 text-sm font-bold text-brand-navy">
                                +91
                              </span>
                              <Input
                                placeholder="10 digit number"
                                inputMode="numeric"
                                maxLength={10}
                                {...field}
                                onChange={(e) =>
                                  field.onChange(
                                    e.target.value
                                      .replace(/\D/g, "")
                                      .slice(0, 10),
                                  )
                                }
                                className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-brand-navy">
                            School or Work Email
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="admin@school.edu"
                              {...field}
                              className="field-surface"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="school"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-brand-navy">
                          School Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g. Sunrise Public School"
                            {...field}
                            className="field-surface"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="hasWebsite"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start gap-3 space-y-0 rounded-xl border border-brand-navy/10 bg-brand-beige/30 px-4 py-3">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={(checked) => {
                              field.onChange(checked === true);
                              if (checked !== true) {
                                form.setValue("website", "");
                                form.clearErrors("website");
                              }
                            }}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="cursor-pointer text-sm font-semibold text-brand-navy">
                            Our school has a website
                          </FormLabel>
                          <p className="text-xs text-brand-navy/60">
                            Optional. Tick only if you want to share the school
                            URL.
                          </p>
                        </div>
                      </FormItem>
                    )}
                  />

                  {hasWebsite ? (
                    <FormField
                      control={form.control}
                      name="website"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-brand-navy">
                            School website URL
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="www.yourschool.edu.in"
                              {...field}
                              className="field-surface"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ) : null}

                  <div className="grid gap-6 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="role"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-brand-navy">
                            Your Role
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="field-surface">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Principal">
                                Principal / Director
                              </SelectItem>
                              <SelectItem value="SchoolAdmin">
                                School Admin
                              </SelectItem>
                              <SelectItem value="Finance">
                                Finance / Accounts
                              </SelectItem>
                              <SelectItem value="IT">
                                IT / Coordinator
                              </SelectItem>
                              <SelectItem value="Teacher">Teacher</SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="students"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-brand-navy">
                            Students
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="field-surface">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="<500">Under 500</SelectItem>
                              <SelectItem value="500-2000">
                                500 - 2,000
                              </SelectItem>
                              <SelectItem value="2000+">Over 2,000</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-brand-navy">
                          What is the biggest challenge you want us to address?
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="e.g. Fee collection follow-ups and parent attendance alerts..."
                            {...field}
                            className="field-surface resize-none"
                            rows={3}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-xl bg-brand-navy py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:bg-brand-teal hover:shadow-brand-teal/25 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? "Scheduling..." : "Book My Free Demo"}
                  </button>
                  {successMessage ? (
                    <p
                      aria-live="polite"
                      className="text-sm font-medium text-brand-teal"
                    >
                      {successMessage}
                    </p>
                  ) : null}
                </form>
              </Form>
            </InView>
          </div>
        </div>

        {/* Light market add-ons  same visual language, SEO + trust */}
        <section className="mt-16 grid gap-4 md:grid-cols-3">
          {[
            {
              icon: Clock3,
              title: "About 30 minutes",
              body: "Booked around school hours. Focused on the modules you name.",
            },
            {
              icon: Users,
              title: "Built for Indian schools",
              body: "Fee heads, concessions, attendance, TCs, and parent SMS/WhatsApp reality.",
            },
            {
              icon: ShieldCheck,
              title: "No card, no lock-in",
              body: "See the product first. Security and role access are part of the walkthrough.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-brand-navy/10 bg-white/90 p-5 shadow-sm"
            >
              <card.icon className="h-5 w-5 text-brand-teal" />
              <h3 className="mt-3 font-bold text-brand-navy">{card.title}</h3>
              <p className="mt-1.5 text-sm leading-6 text-brand-navy/70">
                {card.body}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-10 rounded-2xl border border-brand-navy/10 bg-white/90 p-6 md:p-8">
          <h2 className="text-xl font-bold text-brand-navy">
            Demo questions schools ask first
          </h2>
          <dl className="mt-5 space-y-4">
            {DEMO_FAQS.map((item) => (
              <div key={item.q}>
                <dt className="text-sm font-bold text-brand-navy">{item.q}</dt>
                <dd className="mt-1 text-sm leading-6 text-brand-navy/70">
                  {item.a}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-sm text-brand-navy/65">
            Prefer reading first? Explore the{" "}
            <Link
              href="/features"
              className="font-semibold text-brand-teal hover:underline"
            >
              capability map
            </Link>{" "}
            or{" "}
            <Link
              href="/vendor-checklist"
              className="font-semibold text-brand-teal hover:underline"
            >
              vendor checklist
            </Link>
            .
          </p>
        </section>
      </div>
    </PageTransition>
  );
}
