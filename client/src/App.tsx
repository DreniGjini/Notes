import Header from "./components/ui/shared/Header";
import { Toaster } from "react-hot-toast";
import { MarkDownProvider } from "./contexts/MarkdownContext";
import Notes from "./pages/note";
import AnotherPage from "./pages/another page/AnotherPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App bg-gray-600 h-screen">
      <div>
        <Toaster />
      </div>
      <BrowserRouter>
        <Header />
        <MarkDownProvider>
          <Switch>
            <Route path="/" exact>
              <Notes />{" "}
            </Route>
            <Route path="/anotherPage" exact>
              <AnotherPage />
            </Route>
          </Switch>
        </MarkDownProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
