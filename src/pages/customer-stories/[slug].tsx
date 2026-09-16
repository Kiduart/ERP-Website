import type { GetServerSideProps } from "next";

/** Old story URLs were crawled as empty 200s. Send them to the stories index. */
export const getServerSideProps: GetServerSideProps = async () => ({
  redirect: { destination: "/stories", permanent: true },
});

export default function StoryDetail() {
  return null;
}
