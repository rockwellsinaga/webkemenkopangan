import { useState } from "react";
import logoKemenko from "../assets/LogoKemenkoPangan.png";

export default function Header() {
  const [logoError, setLogoError] = useState(false);

  return (
    <header className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-4">
          {!logoError ? (
            <img
              src={logoKemenko}
              alt="Kemenko Pangan"
              className="h-12 w-auto"
              onError={() => setLogoError(true)}
            />
          ) : (
            <div>
              <p className="text-sm font-semibold text-slate-700 leading-tight">
                KEMENTERIAN KOORDINATOR
              </p>
              <p className="text-sm font-semibold text-slate-700 leading-tight">
                BIDANG PANGAN
              </p>
              <p className="text-sm font-semibold text-slate-700 leading-tight">
                REPUBLIK INDONESIA
              </p>
            </div>
          )}
        </div>

        {/* UTILITIES */}
        <div className="flex items-center gap-4">
          <select className="border rounded-full px-4 py-1 text-sm">
            <option>ID</option>
            <option>EN</option>
          </select>

          <button className="text-slate-600 hover:text-emerald-700">🔍</button>
        </div>
      </div>
    </header>
  );
}
