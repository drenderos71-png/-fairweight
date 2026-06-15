'use client';
import { useEffect, useRef } from 'react';

const PINS = [
  { lat: 38.9059, lng: -76.9830, name: 'Hyattsville, MD', note: 'Home base' },
  { lat: 38.9897, lng: -77.0330, name: 'Silver Spring, MD' },
  { lat: 38.9784, lng: -76.9441, name: 'Beltsville, MD' },
  { lat: 38.8951, lng: -76.8687, name: 'Landover, MD' },
  { lat: 38.8462, lng: -76.9977, name: 'Oxon Hill, MD' },
  { lat: 38.9940, lng: -77.0269, name: 'Takoma Park, MD' },
  { lat: 38.8816, lng: -76.9319, name: 'Capitol Heights, MD' },
  { lat: 38.9072, lng: -77.0369, name: 'Washington, DC' },
  { lat: 38.8048, lng: -77.0469, name: 'Alexandria, VA' },
  { lat: 38.8462, lng: -77.3064, name: 'Centreville, VA' },
  { lat: 39.0834, lng: -77.1528, name: 'Gaithersburg, MD' },
  { lat: 39.1434, lng: -77.2014, name: 'Germantown, MD' },
  { lat: 38.7059, lng: -76.7497, name: 'Upper Marlboro, MD' },
  { lat: 38.9687, lng: -77.3411, name: 'Reston, VA' },
  { lat: 38.9596, lng: -77.4571, name: 'Ashburn, VA' },
];

export default function DmvMap() {
  const mapRef = useRef(null);
  const instanceRef = useRef(null);

  useEffect(() => {
    if (instanceRef.current) return;

    async function init() {
      const L = (await import('leaflet')).default;
      await import('leaflet/dist/leaflet.css');

      if (!mapRef.current) return;
      const map = L.map(mapRef.current, {
        center: [38.92, -77.08],
        zoom: 9,
        zoomControl: true,
        scrollWheelZoom: false,
      });
      instanceRef.current = map;

      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '© OpenStreetMap contributors © CARTO',
        maxZoom: 19,
      }).addTo(map);

      const pinIcon = L.divIcon({
        className: 'fw-pin',
        html: '<span></span>',
        iconSize: [16, 16],
        iconAnchor: [8, 16],
        popupAnchor: [0, -18],
      });

      PINS.forEach(({ lat, lng, name, note }) => {
        L.marker([lat, lng], { icon: pinIcon })
          .addTo(map)
          .bindPopup(`<strong style="color:#D8B23F">${name}</strong>${note ? `<br><small>${note}</small>` : ''}`)
          .on('click', function () { this.openPopup(); });
      });
    }

    init();
    return () => { instanceRef.current?.remove(); instanceRef.current = null; };
  }, []);

  return <div ref={mapRef} id="dmv-map" />;
}
