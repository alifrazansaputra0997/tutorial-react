import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples({ onSelect, selectedTopic, tabContent }) {
  function handleSelect(selectedButton) {
    onSelect(selectedButton);
  }

  return (
    <Section id="examples" title="Examples">
      <Tabs
        ButtonsContainer="menu"
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
