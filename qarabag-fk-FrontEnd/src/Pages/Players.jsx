import { useEffect, useState } from "react";
import Container from "../Components/Container";
import axios from "axios";
import { Link } from "react-router";

const Players = () => {
  const endpoint = "http://localhost:3000/players";
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios(endpoint).then((res) => {
      if (res.status === 200 && res.statusText === "OK") {
        setData(res.data);
      }
    });
  }, []);

  const filteredData = data.filter((player) =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const groupedPlayers = filteredData.reduce((acc, player) => {
    const position = player.position || "Digər";
    if (!acc[position]) {
      acc[position] = [];
    }
    acc[position].push(player);
    return acc;
  }, {});

  return (
    <div className="content">
      <Container>
        <div className="py-8 flex items-end">
          <h2 className="text-4xl text-primary font-medium uppercase">
            Oyunçular
          </h2>
          <div className="h-0.5 w-full bg-primary"></div>
        </div>

        <div className="w-full mb-8">
          <input
            type="text"
            placeholder="Oyunçu adını axtarın..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 border border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        {Object.entries(groupedPlayers).map(([position, players]) => (
          <div key={position} className="mb-12">
            <div className="py-6 flex items-end mb-6">
              <h3 className="text-2xl text-primary font-medium uppercase">
                {position}
              </h3>
              <div className="h-0.5 w-full bg-primary ml-4"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {players.map(({ id, name, image, number }) => (
                <Link
                  to={`/players/${id}`}
                  key={id}
                  className="bg-white p-4 flex flex-col gap-4 items-center hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="text-center">
                    <h2 className="text-xl text-primary font-medium">{name}</h2>
                    <h4 className="text-sm text-primary">Nömrə: {number}</h4>
                  </div>
                  <img src={image} alt={name} />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Players;
