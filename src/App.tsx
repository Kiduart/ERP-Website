import { ReactNode, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AccessibilityProvider, AccessibilityWidget } from "@/components/common/AccessibilityWidget";
import { ScrollRestoration } from "@/components/common/ScrollRestoration";
import { ScrollToTopButton } from "@/components/common/ScrollToTopButton";
import { ChatbotWidget } from "@/components/common/ChatbotWidget";
import { CursorEffect } from "@/components/animations/CursorEffect";
import { GetInTouchSection } from "@/components/ui/GetInTouchSection";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  const [queryClient] = useState(() => new QueryClient());
  const router = useRouter();
  const shouldShowGetInTouch = useMemo(
    () => !["/contact", "/demo", "/404", "/not-found"].includes(router.pathname),
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
          </div>
          <Toaster />
        </TooltipProvider>
      </AccessibilityProvider>
    </QueryClientProvider>
  );
}

export default AppShell;
