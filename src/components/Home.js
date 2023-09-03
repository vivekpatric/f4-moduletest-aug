import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { searchWord, addToHistory } from '../redux/actions';
import { fetchWordDetails } from '../services/dictionaryService';
import Loader from './Loader';
import '../App.css';
const Home = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const [wordDetails, setWordDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = () => {
    // Clear previous word details
    setWordDetails(null);

    if (searchTerm.trim() === '') {
      return;
    }

    setIsLoading(true);

    // Dispatch the searchWord action with the search term
    dispatch(searchWord(searchTerm));

    // Fetch word details from the API
    fetchWordDetails(searchTerm)
      .then((data) => {
        // Assuming the first result is relevant
        setWordDetails(data[0]);
        setIsLoading(false);

        // Add the searched word to the history
        dispatch(addToHistory(searchTerm));
      })
      .catch((error) => {
        console.error('Error fetching word details:', error);
        setIsLoading(false);
      });
  };

  return (
    <div>
      <div className="bar">
      <center>   
      <input 
        type="text"
        className="input"
        placeholder="Enter a word"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      <button className="button" onClick={handleSearch}>Search</button>
      </center>
      </div> 
      {isLoading && <Loader />}

      {wordDetails && (
        <div className="details">
          <h2>{wordDetails.word}</h2>
          {wordDetails.phonetics.map((phonetic, index) => (
            <div key={index}>
              <p className='para'>{phonetic.text}</p>
              {phonetic.audio && <audio className="audio" src={phonetic.audio} controls />}
            </div>
          ))}
          {wordDetails.meanings.map((meaning, index) => (
            <div key={index}>
              <h2 className='para'>{meaning.partOfSpeech}</h2>
              
                {meaning.definitions.map((definition, defIndex) => (
                  <p key={defIndex} className='para'>
                    <p className='para'>{definition.definition}</p>
                    {definition.example && <p className='para'>{definition.example}</p>}
                  </p>
                ))}
             
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
