import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import Container from "../Components/Container";
import axios from "axios";
import { ArrowLeft, Shirt, Trophy, Zap } from "lucide-react";

const PlayerDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios(`http://localhost:3000/players/${id}`)
      .then((res) => {
        if (res.status === 200) {
          setPlayer(res.data);
        }
      })
      .catch(() => navigate("/players"))
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

  if (!player) {
    return (
      <div className="content">
        <Container>
          <div className="py-12 text-center">
            <h2 className="text-2xl text-primary font-medium">
              Oyunçu tapılmadı
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
            onClick={() => navigate("/players")}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity mb-4"
          >
            <ArrowLeft size={20} />
            Geri qay
          </button>
          <h1 className="text-4xl font-bold">{player.name}</h1>
          <p className="text-lg opacity-90">{player.position}</p>
        </Container>
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-12">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden sticky top-20">
              <img
                src={player.image}
                alt={player.name}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-primary mb-2">
                  {player.name}
                </h2>
                <p className="text-lg text-gray-600 mb-6 font-medium">
                  {player.position}
                </p>

                <div className="flex items-center gap-3 mb-4 text-gray-700 bg-blue-50 p-4 rounded-lg">
                  <Shirt size={24} className="text-primary" />
                  <div>
                    <p className="text-sm text-gray-600">Nömrə</p>
                    <p className="font-bold text-2xl text-primary">
                      {player.number}
                    </p>
                  </div>
                </div>

                {player.birthDate && (
                  <div className="text-sm text-gray-600 mb-4">
                    <p className="font-medium">Doğum Tarixi</p>
                    <p>{player.birthDate}</p>
                  </div>
                )}

                {player.nationality && (
                  <div className="text-sm text-gray-600 mb-4">
                    <p className="font-medium">Milliyəti</p>
                    <p>{player.nationality}</p>
                  </div>
                )}

                {player.height && (
                  <div className="text-sm text-gray-600 mb-4">
                    <p className="font-medium">Boy</p>
                    <p>{player.height}</p>
                  </div>
                )}

                {player.weight && (
                  <div className="text-sm text-gray-600">
                    <p className="font-medium">Çəki</p>
                    <p>{player.weight}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            {player.bio && (
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Haqqında
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {player.bio}
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {player.goalsScored && (
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border-l-4 border-primary">
                  <div className="flex items-center gap-3 mb-4">
                    <Trophy className="text-primary" size={28} />
                    <h3 className="text-xl font-bold text-primary">Qollar</h3>
                  </div>
                  <p className="text-4xl font-bold text-primary">
                    {player.goalsScored}
                  </p>
                </div>
              )}

              {player.assists && (
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 border-l-4 border-purple-700">
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="text-purple-700" size={28} />
                    <h3 className="text-xl font-bold text-purple-700">
                      Asistsiz
                    </h3>
                  </div>
                  <p className="text-4xl font-bold text-purple-700">
                    {player.assists}
                  </p>
                </div>
              )}
            </div>

            {player.career && (
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Karriyeri
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {player.career}
                </p>
              </div>
            )}

            {player.achievements && (
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border-l-4 border-primary p-8">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  Fəaliyyətləri
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {player.achievements}
                </p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PlayerDetail;
