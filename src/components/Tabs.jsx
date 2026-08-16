import TabButton from "./TabButton.jsx";
export default function Tabs({ children, buttons, ButtonsContainer }) {
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
