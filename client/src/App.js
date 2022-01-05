import "./App.css";
import SideBarWrapper from "./components/dropDownComponents/sideBarWrapper";
import DashboardWrapper from "./components/dashboardWrapper";

function App() {
  return (
    <DashboardWrapper>
      <SideBarWrapper />
    </DashboardWrapper>
  );
}

export default App;
