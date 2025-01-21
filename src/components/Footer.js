import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/Footer.css';
import L from 'leaflet';

// Fix for default marker icons in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

function Footer() {
  const position = [36.1627, -86.7816]; // Nashville coordinates

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-sections-container">
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>
              <strong>Email:</strong> <a href="mailto:info@otto-logistics.com">info@otto-logistics.com</a>
            </p>
            <p>
              <strong>Phone:</strong> <a href="tel:+16464501133">+1 646 450 1133</a>
            </p>
            <p className="address">
              <strong>Address:</strong><br />
              315 DEADERICK ST<br />
              STE 1700, PMB 25<br />
              NASHVILLE, TN 37238
            </p>
          </div>
          <div className="footer-section map-section">
            <MapContainer 
              center={position} 
              zoom={13} 
              style={{ height: '300px', width: '100%', borderRadius: '8px' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position}>
                <Popup>
                  Otto Logistics<br />
                  315 DEADERICK ST<br />
                  NASHVILLE, TN 37238
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Otto Logistics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 