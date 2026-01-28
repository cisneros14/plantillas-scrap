import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    // ?title=<title>
    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : siteConfig.name;

    return new ImageResponse(
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)",
          backgroundSize: "100px 100px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            padding: "40px 80px",
            borderRadius: "20px",
            boxShadow: "0 20px 60px -10px rgba(0,0,0,0.1)",
            border: "1px solid #f0f0f0",
          }}
        >
          <div
            style={{
              fontSize: 60,
              fontWeight: 900,
              background: `linear-gradient(to right, ${siteConfig.branding.primary}, #000)`,
              backgroundClip: "text",
              color: "transparent",
              marginBottom: 20,
              textAlign: "center",
            }}
          >
            {siteConfig.branding.logo_text}
          </div>
          <div
            style={{
              fontSize: 40,
              color: "#333",
              textAlign: "center",
              maxWidth: 800,
              lineHeight: 1.4,
            }}
          >
            {title}
          </div>
        </div>
      </div>,
      {
        width: 1200,
        height: 630,
      },
    );
  } catch {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
