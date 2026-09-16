import type { GetServerSideProps } from "next";

/** Leadership bios are not published. Empty 200s here were soft 404s. */
export const getServerSideProps: GetServerSideProps = async () => ({
  redirect: { destination: "/about", permanent: true },
});

export default function TeamProfileRedirect() {
  return null;
}
