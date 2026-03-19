import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Foody POS — The First AI-Based POS for Modern Restaurants';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: '#ffffff',
          gap: 24,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ fontSize: 96, fontWeight: 900, color: '#000000', letterSpacing: -2 }}>
            F
          </span>
          <span style={{ fontSize: 96, fontWeight: 900, color: '#000000', letterSpacing: -2 }}>
            o
          </span>
          {/* Orange circle icon */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 72,
              height: 72,
              borderRadius: 36,
              border: '5px solid #f18a47',
              marginLeft: -4,
              marginRight: -4,
            }}
          />
          <span style={{ fontSize: 96, fontWeight: 900, color: '#000000', letterSpacing: -2 }}>
            d
          </span>
          <span style={{ fontSize: 96, fontWeight: 900, color: '#000000', letterSpacing: -2 }}>
            y
          </span>
          <span style={{ fontSize: 96, fontWeight: 900, color: '#000000', letterSpacing: -2, marginLeft: 24 }}>
            P
          </span>
          <span style={{ fontSize: 96, fontWeight: 900, color: '#000000', letterSpacing: -2 }}>
            O
          </span>
          <span style={{ fontSize: 96, fontWeight: 900, color: '#000000', letterSpacing: -2 }}>
            S
          </span>
        </div>
        <span style={{ fontSize: 32, color: '#666666', fontWeight: 400 }}>
          The First AI-Based POS for Modern Restaurants
        </span>
      </div>
    ),
    { ...size },
  );
}
