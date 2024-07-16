import React from 'react';
import './People.css';
import image1 from '../../Assets/Ben Rein.png';
import image2 from '../../Assets/Dain Walker.png';
import image3 from '../../Assets/Wealth.png';
import image4 from '../../Assets/Clips.png';
import image5 from '../../Assets/Art of Poets.jpeg';
import image6 from '../../Assets/Mr Beast.png';
import image7 from '../../Assets/UXGoodies.jpg';
import image8 from '../../Assets/Logo Inspirations.png';
import image9 from '../../Assets/Seth Godin.png';
import image10 from '../../Assets/IT Challenges.webp';
import image11 from '../../Assets/Ethan Bridge.jpeg';
import image12 from '../../Assets/Marketing Harry.jpeg';
import image13 from '../../Assets/Chris Do.jpg';

const People = () => {
  const peopleData = [
    { src: image1, name: "Ben Rein" },
    { src: image2, name: "Dain Walker" },
    { src: image3, name: "Wealth" },
    { src: image4, name: "Clips" },
    { src: image5, name: "Art of Poets" },
    { src: image6, name: "MrBeast" },
    { src: image7, name: "UXGoodies" },
    { src: image8, name: "Logo Inspirations" },
    { src: image9, name: "Seth Godin" },
    { src: image10, name: "IT Challenges" },
    { src: image11, name: "Ethan Bridge" },
    { src: image12, name: "Marketing Harry" },
    { src: image13, name: "Chris Do" },
  ];

  return (
    <div className='people'>
      <div className='people-inner'>
        {peopleData.map((person, index) => (
          <div key={index}>
            <img src={person.src} alt={person.name} />
            <p>{person.name}</p>
          </div>
        ))}
        {peopleData.map((person, index) => (
          <div key={index + peopleData.length}>
            <img src={person.src} alt={person.name} />
            <p>{person.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default People;
