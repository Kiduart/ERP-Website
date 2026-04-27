import NextLink from "next/link";
import { useRouter } from "next/router";
import { ComponentPropsWithoutRef, useMemo } from "react";

type Params = Record<string, string | undefined>;

type CompatLinkProps = ComponentPropsWithoutRef<typeof NextLink>;

function stripQuery(path: string) {
  return path.split(/[?#]/, 1)[0] || "/";
}

function extractDynamicParams(pathname: string, asPath: string): Params {
  const templateParts = stripQuery(pathname).split("/").filter(Boolean);
  const actualParts = stripQuery(asPath).split("/").filter(Boolean);
  const params: Params = {};

  templateParts.forEach((segment, index) => {
    if (!segment.startsWith("[") || !segment.endsWith("]")) {
      return;
    }

    const key = segment.slice(1, -1);
    const value = actualParts[index];
    params[key] = value ? decodeURIComponent(value) : undefined;
  });

  return params;
}

function normalizeQueryParams(query: Record<string, string | string[] | undefined>): Params {
  return Object.fromEntries(
    Object.entries(query).map(([key, value]) => [
      key,
      Array.isArray(value) ? value[0] : value,
    ]),
  );
}

export function Link({ children, ...props }: CompatLinkProps) {
  return <NextLink {...props}>{children}</NextLink>;
}

export function useLocation(): [string, (to: string) => Promise<boolean>] {
  const router = useRouter();

  return [router.asPath, router.push];
}

export function useParams<T extends Params = Params>(): T {
  const router = useRouter();

  return useMemo(
    () =>
      ({
        ...extractDynamicParams(router.pathname, router.asPath),
        ...normalizeQueryParams(router.query),
      }) as T,
    [router.asPath, router.pathname, router.query],
  );
}
