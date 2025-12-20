import { useEffect, useState } from "react";
import Container from "../Components/Container";
import axios from "axios";
import { Link } from "react-router";
import { ChevronRight } from "lucide-react";

const Trainers = () => {
  const endpoint = "http://localhost:3000/coachingStaff";
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    axios(endpoint).then((res) => {
      if (res.status === 200 && res.statusText === "OK") {
        setData(res.data);
      }
    });
  }, []);

  useEffect(() => {
    const filtered = data.filter(
      (trainer) =>
        trainer.name.toLowerCase().includes(search.toLowerCase()) ||
        trainer.role.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filtered);
  }, [search, data]);
  return (
    <div className="content">
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-12 mb-12">
        <Container>
          <h1 className="text-5xl font-bold mb-2">Məşqçilər</h1>
          <p className="text-lg opacity-90">
            Komandamızın peşəkar məşqçi heyəti
          </p>
        </Container>
      </div>

      <Container>
        <div className="mb-8">
          <input
            type="text"
            placeholder="Məşqçini axtar..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary transition"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-12">
          {filteredData.map(({ id, name, image, role }) => {
            return (
              <Link
                key={id}
                to={`/trainers/${id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer"
              >
                <div className="relative overflow-hidden bg-gray-200 h-64">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-bold text-primary mb-1 group-hover:text-purple-700 transition">
                    {name}
                  </h2>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {role}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                    Ətraflı <ChevronRight size={16} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {filteredData.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">Heç bir məşqçi tapılmadı</p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Trainers;
