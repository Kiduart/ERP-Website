import { useEffect } from "react";
import { useLocation } from "wouter";

export default function StoryDetail() {
  const [, navigate] = useLocation();

  useEffect(() => {
    navigate("/stories", { replace: true });
  }, [navigate]);

  return null;
}
