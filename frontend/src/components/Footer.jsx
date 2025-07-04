import React from 'react';

function Footer() {
  return (
    <footer className="w-full  flex item items-center justify-between ">
      <p className="mb-1">Version 1.0.0</p>
      <p>© {new Date().getFullYear()} RāqibMed. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
