import { ImageResponse } from 'next/og';

export const size = { width: 64, height: 64 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#15110a',
          color: '#D8B23F',
          fontSize: 30,
          fontWeight: 700,
          fontFamily: 'serif',
          letterSpacing: 1,
          borderRadius: 12,
        }}
      >
        FW
      </div>
    ),
    { ...size }
  );
}
