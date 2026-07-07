import { ReactNode, useMemo, useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AccessibilityProvider } from "@/components/common/AccessibilityWidget";
import { ScrollRestoration } from "@/components/common/ScrollRestoration";
import { ScrollToTopButton } from "@/components/common/ScrollToTopButton";

const AccessibilityWidget = dynamic(
  () => import("@/components/common/AccessibilityWidget").then((mod) => mod.AccessibilityWidget),
  { ssr: false }
);

const ChatbotWidget = dynamic(
  () => import("@/components/common/ChatbotWidget").then((mod) => mod.ChatbotWidget),
  { ssr: false }
);

const StickyDemoBar = dynamic(
  () => import("@/components/common/StickyDemoBar").then((mod) => mod.StickyDemoBar),
  { ssr: false }
);

const CursorEffect = dynamic(
  () => import("@/components/animations/CursorEffect").then((mod) => mod.CursorEffect),
  { ssr: false }
);

const GetInTouchSection = dynamic(
  () => import("@/components/ui/GetInTouchSection").then((mod) => mod.GetInTouchSection),
  { ssr: false }
);

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  const [queryClient] = useState(() => new QueryClient());
  const [stickyDemoBarDismissed, setStickyDemoBarDismissed] = useState(false);
  const router = useRouter();
  const shouldShowGetInTouch = useMemo(
    () => !["/contact", "/demo", "/404", "/not-found"].includes(router.pathname),
    [router.pathname],
  );
  const shouldShowStickyDemoBar = useMemo(
    () => !["/contact", "/demo"].includes(router.pathname),
    [router.pathname],
  );

  return (
    <QueryClientProvider client={queryClient}>
      <AccessibilityProvider>
        <TooltipProvider>
          <ScrollRestoration />
          <CursorEffect />
          <div className="relative flex min-h-screen flex-col overflow-hidden">
            <Navbar />
            <main className="relative z-10 flex-grow">{children}</main>
            {shouldShowGetInTouch && <GetInTouchSection />}
            <Footer />
            <AccessibilityWidget />
            <ScrollToTopButton />
            <ChatbotWidget />
            {shouldShowStickyDemoBar && (
              <StickyDemoBar
                dismissed={stickyDemoBarDismissed}
                onDismiss={() => setStickyDemoBarDismissed(true)}
              />
            )}
          </div>
          <Toaster />
        </TooltipProvider>
      </AccessibilityProvider>
    </QueryClientProvider>
  );
}

export default AppShell;
