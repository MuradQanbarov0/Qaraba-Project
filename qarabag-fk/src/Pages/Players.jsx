import { useEffect, useState } from "react";
import Container from "../Components/Container";
import axios from "axios";

const Players = () => {
  const endpoint = "http://localhost:3000/players";
  const [data, setData] = useState([]);

  useEffect(() => {
    axios(endpoint).then((res) => {
      if (res.status === 200 && res.statusText === "OK") {
        setData(res.data);
      }
    });
  }, []);
  return (
    <div className="content">
      <Container>
        <div className="py-8 flex items-end">
          <h2 className="text-4xl text-primary font-medium uppercase">
            Oyunçular
          </h2>
          <div className="h-0.5 w-full bg-primary"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map(({ id, name, image, position, number }) => {
            return (
              <div
                key={id}
                className="bg-white p-4 flex flex-col gap-4 items-center"
              >
                <div className="text-center">
                  <h2 className="text-xl text-primary font-medium">{name}</h2>
                  <h3 className="text-md text-primary">{position}</h3>
                  <h4 className="text-sm text-primary">Nömrə: {number}</h4>
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

export default Players;
