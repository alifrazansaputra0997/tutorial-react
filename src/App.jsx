import componentImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data.js";
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept/CoreConcept';
import TabButton from './components/TabButton/TabButton';
import { EXAMPLES } from './data.js';

import { useState } from 'react';

function App() {
  
  // selectedTopic = current state value
  // setSelectedTopic = a function that provide from react for update the current state value 
  const [selectedTopic, setSelectedTopic] = useState('components'); // useState always return array!


  function onSelect(param){
    setSelectedTopic(param);
    
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
              <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
              <CoreConcept
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            />
              <CoreConcept {...CORE_CONCEPTS[3]}
            />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => onSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => onSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => onSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => onSelect('state')}>State</TabButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
