import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions] = useState(data);
  return (
    <main>
      <div className='container'>
        <h3>FREQUENTLY ASKED QUESTIONS
        <div className="underline"></div>
        </h3>

        <section className='info'>
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}/>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
