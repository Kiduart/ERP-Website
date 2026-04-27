import { useRouter } from "next/router";
import { ArrowLeft, Home, LifeBuoy } from "lucide-react";
import { Link } from "wouter";
import { PageTransition } from "@/components/ui/PageTransition";

export default function NotFound() {
  const router = useRouter();

  return (
    <PageTransition className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#09090b] px-4 py-10 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 grayscale"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/72 to-[#101829]/90" />

      <div className="relative z-10 w-full max-w-4xl rounded-[2rem] border border-white/10 bg-white/5 px-6 py-10 text-center shadow-[0_35px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm sm:px-10 sm:py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#8fb8ff]">404 Error</p>
        <h1 className="mt-6 text-5xl font-bold leading-none text-white sm:text-6xl lg:text-7xl">
          This page is sleeping.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
          The link may be broken, the page may have moved, or the content has not been published
          yet. The good news is the rest of the site is still awake and ready to help.
        </p>

        <div className="mx-auto mt-10 grid max-w-3xl gap-4 text-left sm:grid-cols-3">
          <button
            type="button"
            onClick={() => router.back()}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/10"
          >
            <ArrowLeft className="h-5 w-5 text-[#8fb8ff]" />
            <p className="text-start mt-4 text-sm font-semibold text-white">Previous page</p>
            <p className="text-start mt-2 text-sm leading-6 text-white/55">Go back to where you came from.</p>
          </button>

          <Link
            href="/"
            className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/10"
          >
            <Home className="h-5 w-5 text-[#8fb8ff]" />
            <p className="mt-4 text-sm font-semibold text-white">Home page</p>
            <p className="mt-2 text-sm leading-6 text-white/55">Jump back to the main KIDUART experience.</p>
          </Link>

          <Link
            href="/help"
            className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/10"
          >
            <LifeBuoy className="h-5 w-5 text-[#8fb8ff]" />
            <p className="mt-4 text-sm font-semibold text-white">Help center</p>
            <p className="mt-2 text-sm leading-6 text-white/55">Open support resources and guided answers.</p>
          </Link>
        </div>

        <p className="mt-10 text-sm text-white/45">
          If this keeps happening, reach out through the contact page and we&apos;ll fix the route.
        </p>
      </div>
    </PageTransition>
  );
}
