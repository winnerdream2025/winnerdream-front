import React from 'react';

function Footer() {
  return (
    <footer className="text-center text-sm text-gray-500 py-4 border-t mt-10">
      © {new Date().getFullYear()} WinnerDream. Tous droits réservés.
    </footer>
  );
}

export default Footer;
