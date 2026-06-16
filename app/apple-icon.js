import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'radial-gradient(circle at 50% 35%, #2a2114 0%, #15110a 70%)',
          color: '#D8B23F',
          fontFamily: 'serif',
        }}
      >
        <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: 2, lineHeight: 1 }}>FW</div>
        <div style={{ fontSize: 18, letterSpacing: 4, marginTop: 8, color: '#cdbf9c' }}>FAIRWEIGHT</div>
      </div>
    ),
    { ...size }
  );
}
