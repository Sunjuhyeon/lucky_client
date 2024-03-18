import React from 'react'

export default function Gallery() {
  const service1 = [
    {
      src: 'service1-1.jpeg',
    },
    {
      src: 'service1-2.jpeg',
    },
    {
      src: 'service1-3.jpeg',
    },
    {
      src: 'service1-4.jpeg',
    },
    {
      src: 'service1-5.jpeg',
    },
    {
      src: 'service1-6.jpeg',
    },
  ];
  const service2 = [
    {
      src: 'service2-1.jpeg',
    },
  ];
  const service3 = [
    {
      src: 'service3-1.jpeg',
    },
    {
      src: 'service3-2.jpeg',
    },
    {
      src: 'service3-3.jpeg',
    },
  ];
  const service4 = [
    {
      src: 'service4-1.jpeg',
    },
    {
      src: 'service4-2.jpeg',
    },
    {
      src: 'service4-3.jpeg',
    },
  ];
  return (
    <div>
      <ul className="gal_wrap">
        {service1.map((v, i) => {
          return (
            <li key={i}>
              <img
                src={require(`../../assets/images/img/${v.src}`)}
                alt="service1"
              />
            </li>
          );
        })}
        {service2.map((v, i) => {
          return (
            <li key={i}>
              <img
                src={require(`../../assets/images/img/${v.src}`)}
                alt="service1"
              />
            </li>
          );
        })}
        {service3.map((v, i) => {
          return (
            <li key={i}>
              <img
                src={require(`../../assets/images/img/${v.src}`)}
                alt="service1"
              />
            </li>
          );
        })}
        {service4.map((v, i) => {
          return (
            <li key={i}>
              <img
                src={require(`../../assets/images/img/${v.src}`)}
                alt="service1"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
