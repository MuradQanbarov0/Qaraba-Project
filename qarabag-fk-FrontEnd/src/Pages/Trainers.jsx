import { useEffect, useState } from "react";
import Container from "../Components/Container";
import axios from "axios";

const Trainers = () => {
  const endpoint = "http://localhost:3000/coachingStaff";
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios(endpoint).then((res) => {
      if (res.status === 200 && res.statusText === "OK") {
        setData(res.data);
      }
    });
  }, []);

  const filteredData = data.filter(
    (trainer) =>
      trainer.name.toLowerCase().includes(search.toLowerCase()) ||
      trainer.role.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="content">
      <Container>
        <div className="py-8 flex items-end">
          <h2 className="text-4xl text-primary font-medium uppercase">
            Məşqçİlər
          </h2>
          <div className="h-0.5 w-full bg-primary"></div>
        </div>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Məşqçini axtar"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-100 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredData.map(({ id, name, image, role }) => {
            return (
              <div
                key={id}
                className="bg-white p-4 flex flex-col gap-4 items-center"
              >
                <div className="text-center">
                  <h2 className="text-xl text-primary font-medium">{name}</h2>
                  <h3 className="text-md text-primary">{role}</h3>
                </div>
                <img src={image} alt={name} />
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Trainers;
