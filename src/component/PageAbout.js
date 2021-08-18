import { Link, Redirect, Route, Switch } from "react-router-dom";

function PageAbout() {
    return (
        <header>
            <h1 className="alert alert-success text-center">This is about !</h1>
            <div className="container d-flex justify-content-center">
                <Link className="h3 ms-3" to="/about/myself">Myself</Link>
                <Link className="h3 ms-3" to="/about/history">History</Link>

            </div>

            <Switch>
                <Route path="/about/myself">
                    <h1 className="text-center">MYSELF</h1>
                    <p className="alert alert-danger text-center">เรื่องของผม </p>
                </Route>

                <Route path="/about/history">
                    <h1 className="text-center">HISTORY</h1>
                    <p className="alert alert-danger text-center">อดีดชังมันปัจจุปันชั่งมัย </p>
                </Route>
                <Route path="/about">
                    <Redirect to="about/myself" />
                </Route>
            </Switch>
        </header>
    );
}

export default PageAbout;
