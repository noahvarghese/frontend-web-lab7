import { useEffect, useState } from "react";
import { Animal, GetAllAnimals } from "./models/Animal";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About/About";
import Search from "./pages/Search/Search";
import Edit from "./pages/Edit/Edit";
import Nav from "./components/Nav/Nav";
import "./App.css";

function App() {
    const [animals, setAnimals] = useState<Animal[]>([]);

    useEffect(() => {
        // Allow fetch call to load animals from database
        // not pretty but does the job
        // should use a named function

        (async () => {
            setAnimals(await GetAllAnimals());
        })();
    }, []);

    return (
        <Router>
            <div className="App">
                <Nav />

                <Switch>
                    <Route path="/" exact>
                        <About />
                    </Route>
                    <Route path="/search" exact>
                        <Search />
                    </Route>
                    <Route path="/edit" exact>
                        <Edit animals={animals} />
                    </Route>
                </Switch>
                <footer>
                    <span>&#169; Noah's Ark 2021</span>
                </footer>
            </div>
        </Router>
    );
}

export default App;
