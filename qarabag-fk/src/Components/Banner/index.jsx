const Banner = () => {
  return (
    <div className="relative h-[calc(100vh-92px)] bg-[url('/team.jpg')] bg-cover bg-center overflow-hidden">
      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/80"></div>
      
      {/* Accent gradient overlay with primary color */}
      <div className="absolute inset-0 bg-linear-to-r from-[#312759]/30 to-transparent"></div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-white px-6">
        {/* Logo or Badge */}
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-[#312759]/60 shadow-2xl shadow-[#312759]/50">
            <span className="text-5xl font-bold text-[#312759] bg-white rounded-full w-24 h-24 flex items-center justify-center">FK</span>
          </div>
        </div>
        
        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-black mb-4 text-center tracking-tight animate-slide-up">
          QARABAĞ FK
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-3xl font-light mb-8 text-center text-gray-200 animate-slide-up-delay">
          Azərbaycanın Qüruru
        </p>
        
        {/* Stats or Features */}
        <div className="flex flex-wrap gap-8 justify-center mb-12 animate-fade-in-delay">
          <div className="text-center backdrop-blur-sm bg-[#312759]/20 px-6 py-4 rounded-lg border border-[#312759]/40 shadow-lg hover:shadow-[#312759]/50 transition-all duration-300">
            <div className="text-4xl font-bold text-white">10x</div>
            <div className="text-sm text-gray-300 mt-1">Çempion</div>
          </div>
          <div className="text-center backdrop-blur-sm bg-[#312759]/20 px-6 py-4 rounded-lg border border-[#312759]/40 shadow-lg hover:shadow-[#312759]/50 transition-all duration-300">
            <div className="text-4xl font-bold text-white">2023</div>
            <div className="text-sm text-gray-300 mt-1">Kubok Qalibi</div>
          </div>
          <div className="text-center backdrop-blur-sm bg-[#312759]/20 px-6 py-4 rounded-lg border border-[#312759]/40 shadow-lg hover:shadow-[#312759]/50 transition-all duration-300">
            <div className="text-4xl font-bold text-white">UEFA</div>
            <div className="text-sm text-gray-300 mt-1">İştirakçı</div>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center animate-fade-in-delay-2">
          <button className="px-8 py-4 bg-[#312759] hover:bg-[#412968] text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-[#312759]/50">
            Komanda
          </button>
          <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold rounded-lg transition-all duration-300 border-2 border-[#312759]/40 hover:border-[#312759]/70">
            Matçlar
          </button>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-black to-transparent"></div>
      
      {/* Animated particles with primary color */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-[#312759]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-40 right-20 w-32 h-32 bg-[#312759]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-10 w-24 h-24 bg-[#312759]/15 rounded-full blur-3xl animate-pulse delay-500"></div>
    </div>
  );
};

export default Banner;