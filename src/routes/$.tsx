import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Index } from "./index";

export const Route = createFileRoute("/$")({
  component: SplatComponent,
});

function SplatComponent() {
  const { _splat } = Route.useParams();

  useEffect(() => {
    if (_splat && typeof window !== "undefined") {
      const cleanPath = _splat.toLowerCase().replace(/^\/+|\/+$/g, "");
      const element = document.getElementById(cleanPath);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [_splat]);

  return <Index />;
}
