import React from 'react';
import Weather from '../assets/portfolio/Weather.png';
import Guess from '../assets/portfolio/Guess.png'
import Currency from '../assets/portfolio/Currency.png'

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Weather,
      demoLink: 'https://weather-app-omega-orpin-61.vercel.app/', 
      codeLink: 'https://github.com/Nouditya1173/Weather_App', 
    },
    {
      id: 2,
      src: Guess,
      demoLink: 'https://guess-game-ten-psi.vercel.app/', 
      codeLink: 'https://github.com/Nouditya1173/Guess_Game', 
    },
    {
      id: 3,
      src: Currency,
      demoLink: 'https://currency-converter-zeta-liard.vercel.app/', 
      codeLink: 'https://github.com/Nouditya1173/Currency_Converter', 
    },
    /*{
      id: 4,
      src: filefly,
      demoLink: 'https://filefly.onrender.com/', 
      codeLink: 'https://github.com/Mausoomi12/FileFly', 
    },*/
  ];

  return (
    <div name="projects" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Projects</p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />
              <div className="flex items-center justify-center">
                <a href={demoLink} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </a>
                <a href={codeLink} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
