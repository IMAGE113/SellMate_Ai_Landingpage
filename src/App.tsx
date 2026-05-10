import { Route, Switch } from "wouter";
import Home from "./pages/Home";

function App() {
  return (
    <Switch>
      {/* Route ပတ်လိုက်ပြီဖြစ်တဲ့အတွက် / ကိုသွားရင် ခင်ဗျားရဲ့ Home ပေါ်လာပါလိမ့်မယ် */}
      <Route path="/" component={Home} />
      <Route>404 Page Not Found</Route>
    </Switch>
  );
}

export default App;
