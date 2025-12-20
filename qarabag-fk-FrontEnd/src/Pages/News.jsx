import Container from "../Components/Container";

const NewsPage = () => {
  const newsData = [
    {
      id: 1,
      title: "Məlumat",
      date: "19 Dek 2025",
      image: "/news-pages/melumat.png",
    },
    {
      id: 2,
      title: "Komandamızın 2025-ci ildəki son oyununun hakimləri müəyyənləşdi",
      date: "18 Dek 2025",
      image: "/news-pages/melumat.png",
    },
    {
      id: 3,
      title: '"Bu oyun bizə böyük fayda verəcək"',
      date: "18 Dek 2025",
      image: "/news-pages/qurban-news.jpg",
    },
    {
      id: 4,
      title: "3 qollu səfər oyunu",
      date: "18 Dek 2025",
      image: "/news-pages/sabah-qarabag.jpg",
    },
    {
      id: 5,
      title: '"Sabah"la oyunun hakimləri müəyyənləşdi',
      date: "16 Dek 2025",
      image: "/news-pages/melumat.png",
    },
    {
      id: 6,
      title: "Qış hazırlıq planı müəyyənləşdi",
      date: "15 Dek 2025",
      image: "/news-pages/melumat.png",
    },
    {
      id: 7,
      title: "Qurban Qurbanov 15-ci dəfə ən yaxşı baş məşqçi seçildi",
      date: "15 Dek 2025",
      image: "/news-pages/qurban-kubok.png",
    },
    {
      id: 8,
      title: '"ABB-Qarabağ" kobrend kartı buraxılır!',
      date: "15 Dek 2025",
      image: "/news-pages/abb-qarabag.jpg",
    },
  ];

  return (
    <div className="content">
      <Container>
        <div className="py-8 flex items-end">
          <h2 className="text-4xl text-primary font-medium uppercase">
            Xəbərlər
          </h2>
          <div className="h-0.5 w-full bg-primary"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-12">
          {newsData.map(({ id, title, date, image }) => (
            <div
              key={id}
              className="bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <p className="text-xs text-gray-500 mb-2">{date}</p>
                <p className="text-sm font-medium text-gray-800 line-clamp-3">
                  {title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default NewsPage;
