import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchWordDetails } from '../services/dictionaryService';
import Loader from './Loader';

const WordDetails = () => {
  const { word } = useParams();
  const [wordDetails, setWordDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Fetch word details for the selected word
    setIsLoading(true);
    fetchWordDetails(word)
      .then((data) => {
        // Assuming the first result is relevant
        setWordDetails(data[0]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching word details:', error);
        setIsLoading(false);
      });
  }, [word]);

  return (
    <div>
      <h2>{word}</h2>

      {isLoading && <Loader />}

      {wordDetails && (
        <div>
          {wordDetails.phonetics.map((phonetic, index) => (
            <div key={index}>
              <p>{phonetic.text}</p>
              {phonetic.audio && <audio src={phonetic.audio} controls />}
            </div>
          ))}

          {wordDetails.meanings.map((meaning, index) => (
            <div key={index}>
              <h2>{meaning.partOfSpeech}</h2>
                {meaning.definitions.map((definition, defIndex) => (
                  <p key={defIndex}>
                    <p>{definition.definition}</p>
                    {definition.example && <p>{definition.example}</p>}
                    
                  </p>
                ))}
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WordDetails;
