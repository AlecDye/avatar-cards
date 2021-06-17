import { useState } from 'react';
import biographies from './data/data';

const Profile = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = biographies[index]


  const checkNumber = (number) => {
    if (number > biographies.length - 1) {
      return 0;
    }
    if (number < 0) {
      return biographies.length - 1;
    }
    return number;
  };

  const nextEntry = () => {
    setIndex(index => {
      let newIndex = index + 1
      return checkNumber(newIndex)
    })
  }

  const prevEntry = () => {
    setIndex(index => {
      let newIndex = index - 1
      return checkNumber(newIndex)
    })
  }

  const randomEntry = () => {
    let randomNum = Math.floor(Math.random() * biographies.length)
    if (randomNum === index) {
      randomNum = index + 1
    }
    setIndex(checkNumber(randomNum))
  }

  return (
    <article className="team-profile">
      <div className="img-container">
        <img src={image} alt={name} className="profile-img"/>
        <span className="quote-icon"></span>
      </div>
      <h3>{name}</h3>
      <p>{job}</p>
      <p>{text}</p>
      <div className="btn-group">
        <button className="btn-prev" onClick={prevEntry}>Prev</button>
        <button className="btn-next" onClick={nextEntry}>Next</button>
      </div>
      <button className="btn-random" onClick={randomEntry}>Random</button>
    </article>
  )
}

export default Profile
