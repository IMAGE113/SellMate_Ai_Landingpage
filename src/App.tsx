import { Route, Switch } from "wouter";
import Home from "./pages/Home";
import BetaPage from "./pages/Beta"; // ဒါလေး ထည့်ပါ

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      {/* Beta Page အတွက် Route အသစ် */}
      <Route path="/beta" component={BetaPage} />
      
      <Route>404 Page Not Found</Route>
    </Switch>
  );
}

export default App;
