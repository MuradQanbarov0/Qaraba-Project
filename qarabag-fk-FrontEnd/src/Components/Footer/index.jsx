import { Facebook, Twitter, Instagram, Link } from "lucide-react";
const Footer = () => {
  const social = [
    { id: 1, icon: <Facebook size={28} />, link: "/" },
    { id: 2, icon: <Twitter size={28} />, link: "/" },
    { id: 3, icon: <Instagram size={28} />, link: "/" },
  ];
  return (
    <div className="grid grid-cols-3 inset-shadow-md inset-shadow-black/10">
      <div className="left flex flex-col items-center justify-center gap-3">
        <h2 className="text-2xl uppercase font-medium  text-primary">
          Qarabağ FK Sosial Sebekelerde
        </h2>
        <div className="flex gap-5">
          {social.map(({ id, icon, link }) => (
            <a
              key={id}
              href={link}
              className="bg-gray-300 w-13 h-13 flex items-center justify-center rounded-full hover:bg-[#312759]
               hover:text-white transition-colors duration-300  "
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
      <div className="center bg-primary text-white flex flex-col items-center justify-center gap-5 p-10">
        <img src="/logo.png" alt="logo" className="w-30" />
        <p className="text-base/5">
          Qarabağ FK 1987-ci ildən bu adla çıxış etməyə başlayıb. Komandamız 12
          dəfə Azərbaycan çempionu, 8 dəfə ölkə kubokunun sahibi olmuşdur.
          Çempionlar Liqasının əsas mərhələsinə vəsiqə qazanmış ilk və tək
          Azərbaycan klubudur.
        </p>
      </div>
      <div className="bg-[#332a63] text-white flex flex-col items-center py-16 gap-8">
        <div className="flex flex-col items-center gap-4">
          <img src="./email-icon.png" alt="email icon" className="w-24" />
          <h2 className="text-xl font-bold tracking-widest">BİZİMLƏ ƏLAQƏ</h2>
        </div>

        <div className="flex flex-col gap-4 text-base">
          <p className="flex items-center gap-2">
            <span>📍</span>
            Səttar Bəhlulzadə, 24
          </p>

          <p className="flex items-center gap-2">
            <span>📞</span>
            +994 12 4041951
          </p>

          <p className="flex items-center gap-2">
            <span>✉️</span>
            qarabagh@qarabagh.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
