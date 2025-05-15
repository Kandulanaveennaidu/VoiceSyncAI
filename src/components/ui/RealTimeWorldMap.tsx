"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "leaflet/dist/leaflet.css";

// Interface for location data
interface LocationData {
  id: number;
  lat: number;
  lng: number;
  city: string;
  status: "active" | "inactive";
}

// Enhanced location data with more cities
const generateLocationData = (): LocationData[] => [
  { id: 1, lat: 40.7128, lng: -74.006, city: "New York", status: "active" },
  { id: 2, lat: 51.5074, lng: -0.1278, city: "London", status: "active" },
  { id: 3, lat: -33.8688, lng: 151.2093, city: "Sydney", status: "inactive" },
  { id: 4, lat: 35.6762, lng: 139.6503, city: "Tokyo", status: "active" },
  { id: 5, lat: -23.5505, lng: -46.6333, city: "São Paulo", status: "active" },
  { id: 6, lat: 28.7041, lng: 77.1025, city: "Delhi", status: "inactive" },
  {
    id: 7,
    lat: 37.7749,
    lng: -122.4194,
    city: "San Francisco",
    status: "active",
  },
  { id: 8, lat: 1.3521, lng: 103.8198, city: "Singapore", status: "active" },
  { id: 9, lat: 52.52, lng: 13.405, city: "Berlin", status: "inactive" },
  { id: 10, lat: 25.2048, lng: 55.2708, city: "Dubai", status: "active" },
];

export default function RealTimeWorldMap() {
  const mapRef = useRef<any>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const markersRef = useRef<any[]>([]);

  useEffect(() => {
    // Import Leaflet dynamically only on client-side
    const initMap = async () => {
      if (!mapContainerRef.current) return;

      const L = (await import("leaflet")).default;

      // Fix Leaflet marker icon issue
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
        iconUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
        shadowUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
      });

      // Custom active and inactive marker icons with improved colors
      const activeIcon = new L.Icon({
        iconUrl:
          "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
        shadowUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });

      const inactiveIcon = new L.Icon({
        iconUrl:
          "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png",
        shadowUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });

      // Check if map already exists and clean up if necessary
      if (mapRef.current) {
        mapRef.current.remove();
      }

      // Initialize Leaflet map with light theme
      mapRef.current = L.map(mapContainerRef.current, {
        center: [20, 0],
        zoom: 2,
        minZoom: 2,
        maxZoom: 18,
        worldCopyJump: true,
        zoomControl: true,
        attributionControl: false,
      });

      // Add a light theme map style
      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          subdomains: "abcd",
          maxZoom: 19,
        }
      ).addTo(mapRef.current);

      // Function to update markers
      const updateMarkers = () => {
        // Clear existing markers
        markersRef.current.forEach((marker) => {
          if (mapRef.current) marker.removeFrom(mapRef.current);
        });
        markersRef.current = [];

        // Add new markers
        const locations = generateLocationData().map((loc) => ({
          ...loc,
          status:
            Math.random() > 0.3
              ? "active"
              : ("inactive" as "active" | "inactive"),
        }));

        locations.forEach((loc) => {
          if (!mapRef.current) return;

          const marker = L.marker([loc.lat, loc.lng], {
            icon: loc.status === "active" ? activeIcon : inactiveIcon,
          }).addTo(mapRef.current);

          marker.bindPopup(
            `<div style="text-align:center">
              <strong>${loc.city}</strong><br>
              <span style="color:${
                loc.status === "active" ? "#4CAF50" : "#9C27B0"
              }">
                ● ${loc.status.charAt(0).toUpperCase() + loc.status.slice(1)}
              </span>
            </div>`
          );

          markersRef.current.push(marker);
        });
      };

      // Initial marker setup
      updateMarkers();

      // Update markers every 5 seconds
      const interval = setInterval(updateMarkers, 5000);

      // Cleanup function
      return () => {
        clearInterval(interval);
        if (mapRef.current) {
          mapRef.current.remove();
          mapRef.current = null;
        }
      };
    };

    initMap();
  }, []);

  return (
    <motion.div
      className="w-full h-full rounded-lg overflow-hidden shadow-xl border border-primary/10"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
    >
      <div
        ref={mapContainerRef}
        className="w-full h-full"
        style={{ minHeight: "400px" }}
        aria-label="Real-time world map showing global activity"
      />
    </motion.div>
  );
}
