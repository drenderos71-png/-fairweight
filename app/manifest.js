export default function manifest() {
  return {
    name: 'Fairweight — Gold & Silver Buyer',
    short_name: 'Fairweight',
    description:
      'Mobile gold & silver buyer serving Maryland and the DMV. Honest weight, fair prices, same-day cash. Se habla español.',
    start_url: '/',
    display: 'standalone',
    background_color: '#15110a',
    theme_color: '#15110a',
    lang: 'en',
    icons: [
      { src: '/icon', sizes: '64x64', type: 'image/png' },
      { src: '/apple-icon', sizes: '180x180', type: 'image/png' },
    ],
  };
}
