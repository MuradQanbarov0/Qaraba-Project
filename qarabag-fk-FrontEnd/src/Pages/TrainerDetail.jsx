import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import Container from "../Components/Container";
import axios from "axios";
import { ArrowLeft, Mail, Phone, Award } from "lucide-react";

const TrainerDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [trainer, setTrainer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios(`http://localhost:3000/coachingStaff/${id}`)
      .then((res) => {
        if (res.status === 200) {
          setTrainer(res.data);
        }
      })
      .catch(() => navigate("/trainers"))
      .finally(() => setLoading(false));
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="content h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin inline-block w-8 h-8 border-4 border-primary border-t-transparent rounded-full"></div>
          <p className="text-primary font-medium mt-4">Yüklənir...</p>
        </div>
      </div>
    );
  }

  if (!trainer) {
    return (
      <div className="content">
        <Container>
          <div className="py-12 text-center">
            <h2 className="text-2xl text-primary font-medium">
              Məşqçi tapılmadı
            </h2>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="content">
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-12 mb-12">
        <Container>
          <button
            onClick={() => navigate("/trainers")}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity mb-4"
          >
            <ArrowLeft size={20} />
            Geri qay
          </button>
          <h1 className="text-4xl font-bold">{trainer.name}</h1>
          <p className="text-lg opacity-90">{trainer.role}</p>
        </Container>
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-12">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden sticky top-20">
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-primary mb-2">
                  {trainer.name}
                </h2>
                <p className="text-lg text-gray-600 mb-6 font-medium">
                  {trainer.role}
                </p>

                {trainer.email && (
                  <div className="flex items-center gap-3 mb-4 text-gray-700">
                    <Mail size={20} className="text-primary" />
                    <a
                      href={`mailto:${trainer.email}`}
                      className="hover:text-primary"
                    >
                      {trainer.email}
                    </a>
                  </div>
                )}

                {trainer.phone && (
                  <div className="flex items-center gap-3 mb-4 text-gray-700">
                    <Phone size={20} className="text-primary" />
                    <a
                      href={`tel:${trainer.phone}`}
                      className="hover:text-primary"
                    >
                      {trainer.phone}
                    </a>
                  </div>
                )}

                {trainer.achievements && (
                  <div className="flex items-center gap-3 text-gray-700">
                    <Award size={20} className="text-primary" />
                    <span>{trainer.achievements}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-primary mb-6">Haqqında</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                {trainer.bio ||
                  `${trainer.name} Qarabağ FK-nın profesional məşqçilərindən biridir. 
                  ${trainer.role} olaraq komandaya böyük katkı qoyur. Geniş təcrübəsi 
                  və futbol bilikləri ilə tanınır.`}
              </p>
            </div>

            {trainer.experience && (
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Təcrübə
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {trainer.experience}
                </p>
              </div>
            )}

            {trainer.specialization && (
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Spesializasiya
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {trainer.specialization}
                </p>
              </div>
            )}

            {trainer.achievements && (
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border-l-4 border-primary p-8">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  Fəaliyyətləri
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {trainer.achievements}
                </p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TrainerDetail;
