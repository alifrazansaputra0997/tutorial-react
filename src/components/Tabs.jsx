import TabButton from "./TabButton.jsx";
export default function Tabs({ children, buttons, ButtonsContainer = 'menu'}) {
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
