import React from 'react';

function Footer(props) {
    return (
       <footer className=" container px-12 py-6 border-t border-[#1e1e22] flex items-center justify-between">
        <p className="text-[13px] text-[#444]">© 2026 PRINCE. All rights reserved.</p>
        <div className="flex gap-6">
          {["GitHub", "Twitter", "LinkedIn", "RSS"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-[13px] text-[#444] hover:text-[#888] transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </footer>
    );
}

export default Footer;