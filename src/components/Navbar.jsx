import {
  ChevronDownIcon,
  UserIcon,
  EyeIcon,
  BuildingOffice2Icon,
  BriefcaseIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <ul className="flex h-14 items-center gap-8 text-sm font-semibold text-slate-700">
          <li className="hover:text-emerald-700 cursor-pointer">Beranda</li>

          {/* PROFIL */}
          <li className="relative group">
            <div className="flex items-center gap-1 cursor-pointer hover:text-emerald-700">
              Profil
              <ChevronDownIcon className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
            </div>

            <Dropdown width="w-[520px]">
              <DropdownItem icon={UserIcon} title="Profil Menko Pangan" />
              <DropdownItem icon={EyeIcon} title="Visi dan Misi" />
              <DropdownItem
                icon={BuildingOffice2Icon}
                title="Struktur Organisasi"
              />
              <DropdownItem icon={BriefcaseIcon} title="Tugas dan Fungsi" />
            </Dropdown>
          </li>

          <li className="hover:text-emerald-700 cursor-pointer">JDIH</li>

          {/* PPID */}
          <li className="relative group">
            <div className="flex items-center gap-1 cursor-pointer hover:text-emerald-700">
              PPID
              <ChevronDownIcon className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
            </div>

            <Dropdown width="w-[600px]">
              <DropdownItem icon={DocumentTextIcon} title="Permohonan PPID" />
              <DropdownItem
                icon={ShieldCheckIcon}
                title="Manajemen Risiko (MR)"
              />
              <DropdownItem
                icon={BuildingOffice2Icon}
                title="Reformasi Birokrasi"
              />
              <DropdownItem icon={ShieldCheckIcon} title="Zona Integritas" />
              <DropdownItem icon={ChartBarIcon} title="SAKIP" />
              <DropdownItem icon={UserIcon} title="Informasi Magang" />
              <DropdownItem icon={ShieldCheckIcon} title="SPIP" />
              <DropdownItem icon={ChartBarIcon} title="Statistik" />
            </Dropdown>
          </li>

          <li className="hover:text-emerald-700 cursor-pointer">
            Swasembada Pangan
          </li>
          <li className="hover:text-emerald-700 cursor-pointer">
            Diversifikasi Pangan
          </li>
          <li className="hover:text-emerald-700 cursor-pointer">Siaran Pers</li>
        </ul>
      </div>
    </nav>
  );
}

/* DROPDOWN */
function Dropdown({ children, width }) {
  return (
    <div
      className="absolute left-0 top-full pt-3 invisible opacity-0 scale-95
      group-hover:visible group-hover:opacity-100 group-hover:scale-100
      transition-all duration-200 ease-out"
    >
      <div
        className={`bg-white rounded-xl shadow-xl p-6 grid grid-cols-2 gap-4 ${width}`}
      >
        {children}
      </div>
    </div>
  );
}

/* ITEM */
function DropdownItem({ icon: Icon, title }) {
  return (
    <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-100 cursor-pointer">
      {Icon && (
        <div className="w-10 h-10 rounded-lg bg-emerald-700 text-white flex items-center justify-center">
          <Icon className="w-5 h-5" />
        </div>
      )}

      <span className="text-sm">{title}</span>
    </div>
  );
}
