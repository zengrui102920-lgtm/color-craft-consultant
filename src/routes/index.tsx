import { createFileRoute, redirect } from "@tanstack/react-router";

// The PlumbWright site is a self-contained static page served from
// /plumbwright/index.html. The home route simply forwards to it.
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PlumbWright Plumbing & Gas, LLC — Owner-operated plumber" },
      {
        name: "description",
        content:
          "PlumbWright Plumbing & Gas, LLC. Owner-operated by Michael Wright. Water heaters, gas lines, valves, leak repair and bathroom remodels. Call (720) 982-8881.",
      },
      { property: "og:title", content: "PlumbWright Plumbing & Gas, LLC" },
      {
        property: "og:description",
        content: "Owner-operated plumbing and gas work. On time, reasonably priced, up to code. Call (720) 982-8881.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  beforeLoad: () => {
    throw redirect({ href: "/plumbwright/index.html" });
  },
  component: () => null,
});
