import { useEffect } from "react";
import { useRouter } from "next/router";

/** Leadership detail pages are not published yet  avoid indexing fictional bios. */
export default function TeamProfileRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/about");
  }, [router]);

  return null;
}
