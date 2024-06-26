import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const StructuredData = () => {
  const jsonData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Galbur Mihail - Peinture et Nettoyage de Toiture",
    "image": "https://decopeintregalburmihail.com/asset/logo.png",
    "@id": "https://decopeintregalburmihail.com",
    "url": "https://decopeintregalburmihail.com",
    "telephone": "07 55 91 16 02",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Antony",
      "addressRegion": "Île-de-France",
      "postalCode": "92160",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "48.7598",
      "longitude": "2.3058"
    },
    "openingHours": "Mo-Sa 08:00-18:00",
    "priceRange": "$$",
    "servesCuisine": "Peinture, Nettoyage de Toiture"
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(jsonData)}
    </script>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
