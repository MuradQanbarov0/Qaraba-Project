import Container from "../Components/Container";
import {
  Facebook,
  Twitter,
  Instagram,
  Phone,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const contactInfo = [
    {
      id: 1,
      icon: <MapPin size={24} />,
      title: "Ünvan",
      content: "Səttar Bəhlulzadə, 24",
      bg: "bg-blue-50",
    },
    {
      id: 2,
      icon: <Phone size={24} />,
      title: "Telefon",
      content: "+994 12 4041951",
      bg: "bg-purple-50",
    },
    {
      id: 3,
      icon: <Mail size={24} />,
      title: "Email",
      content: "qarabagh@qarabagh.com",
      bg: "bg-indigo-50",
    },
  ];

  const social = [
    { id: 1, icon: <Facebook size={20} />, link: "/", name: "Facebook" },
    { id: 2, icon: <Twitter size={20} />, link: "/", name: "Twitter" },
    { id: 3, icon: <Instagram size={20} />, link: "/", name: "Instagram" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="content">
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-16 mb-12">
        <Container>
          <h1 className="text-5xl font-bold mb-2">Əlaqə</h1>
          <p className="text-lg opacity-90">
            Bizimləsiniz, suallarınız varsa əlaqə saxlayın
          </p>
        </Container>
      </div>

      <Container>
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map(({ id, icon, title, content, bg }) => (
              <div
                key={id}
                className={`${bg} p-8 rounded-lg border-l-4 border-primary shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary text-white w-12 h-12 rounded-lg flex items-center justify-center">
                    {icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary">{title}</h3>
                </div>
                <p className="text-gray-700 text-lg">{content}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Bizə Yazın
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Adınız
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Adınız"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mesaj
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Mesajınız"
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition resize-none"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
                >
                  <Send size={20} />
                  Göndər
                </button>
              </form>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Əlavə Məlumat
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">
                    Çalışma Saatları
                  </h3>
                  <p className="text-gray-700">
                    Bazar ertəsi - Cuma: 09:00 - 18:00
                  </p>
                  <p className="text-gray-700">Şənbə: 10:00 - 16:00</p>
                  <p className="text-gray-700">Bazar: Kapalı</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">
                    Sosial Şəbəkələr
                  </h3>
                  <div className="flex gap-4">
                    {social.map(({ id, icon, link, name }) => (
                      <a
                        key={id}
                        href={link}
                        className="bg-primary text-white w-12 h-12 flex items-center justify-center rounded-full hover:bg-opacity-80 transition-all duration-300 transform hover:scale-125 shadow-md"
                        title={name}
                      >
                        {icon}
                      </a>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">
                    Haqqımızda
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Qarabağ FK 1987-ci ildən bu adla çıxış etməyə başlayıb.
                    Komandamız 12 dəfə Azərbaycan çempionu, 8 dəfə ölkə
                    kubokunun sahibi olmuşdur.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-2">Soruşdun mu?</h2>
            <p className="text-lg">
              Bizimlə əlaqə saxlayın və cəvab almaq üçün gözləməyin!
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
