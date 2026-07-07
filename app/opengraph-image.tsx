import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const dynamic = "force-static";
export const alt = `${site.name} | ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0c1017",
          color: "#e8eaf0",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", color: "#f5a524", fontSize: 28 }}>
          [00] hello · {site.location}
        </div>
        <div style={{ display: "flex", fontSize: 96, fontWeight: 800, marginTop: 24 }}>
          {site.name}
        </div>
        <div style={{ display: "flex", fontSize: 34, color: "#8a93a6", marginTop: 20, maxWidth: 900 }}>
          {site.tagline}
        </div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            left: 0,
            bottom: 0,
            width: "100%",
            height: 10,
            backgroundColor: "#f5a524",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
