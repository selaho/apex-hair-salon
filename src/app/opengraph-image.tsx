import { ImageResponse } from "next/og";

export const alt = "COTGI Hair Salon Demos";
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
          justifyContent: "space-between",
          background: "#121212",
          padding: 64,
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#c4788a",
              color: "#161218",
              fontSize: 36,
              fontWeight: 700,
            }}
          >
            C
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                color: "#c4788a",
                fontSize: 22,
                letterSpacing: 6,
                textTransform: "uppercase",
                fontFamily: "sans-serif",
              }}
            >
              COTGI · Local outreach
            </div>
            <div
              style={{
                display: "flex",
                color: "#f9fafb",
                fontSize: 28,
                fontFamily: "sans-serif",
              }}
            >
              Check. Fix. Grow.
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              display: "flex",
              color: "#f9fafb",
              fontSize: 72,
              lineHeight: 1.05,
              maxWidth: 980,
            }}
          >
            Hair salon demos with separate URLs
          </div>
          <div
            style={{
              display: "flex",
              color: "rgba(249,250,251,0.65)",
              fontSize: 28,
              fontFamily: "sans-serif",
              maxWidth: 900,
            }}
          >
            Strand Atelier · Bloom Braids & Beauty
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "rgba(249,250,251,0.45)",
            fontSize: 22,
            fontFamily: "sans-serif",
          }}
        >
          <div style={{ display: "flex" }}>Turnkey digital platforms for East Point shops</div>
          <div style={{ display: "flex", color: "#e85d04" }}>cotgi.com</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
