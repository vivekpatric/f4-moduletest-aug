import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToHistory, clearHistory } from '../redux/actions';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom to create links


const History = () => {
  const dispatch = useDispatch();
  const searchedWords = useSelector((state) => state.searchedWords);

//   const handleClearHistory = () => {
//     // Dispatch the clearHistory action to clear the history
//     dispatch(clearHistory());
//   };

  const handleWordClick = (word) => {
    // Check if the word is already in the history
    if (!searchedWords.includes(word)) {
      // If not, add it to the history
      dispatch(addToHistory(word));
    }
  };

  // Remove duplicates from the searchedWords array
  const uniqueWords = [...new Set(searchedWords)];

  return (
    <div>
      <h2>Search History</h2>
      <div>
        {uniqueWords.map((word, index) => (
          <p key={index}>
            {/* Use Link to navigate to the WordDetails page */}
            <Link to={`/word/${word}`} onClick={() => handleWordClick(word)}>
              {word}
            </Link>
          </p>
        ))}
      </div>
      {/* <button onClick={handleClearHistory}>Clear History</button> */}
    </div>
  );
};

export default History;

