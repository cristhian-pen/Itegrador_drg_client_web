import React from "react";
import { Switch, Route, useLocation } from 'react-router-dom';

import Client from "./Components/Client";
import Logs from './Components/Logs';
import Contact from "./Components/Contacts";
import NotFound from "./Components/NotFound";

export default function Rotas() {
    const location = useLocation();
    return (
        <Switch location={location}>
            <Route exact path="/" component={Client} />
            <Route path="/logs" component={Logs} />
            <Route path="/contato" component={Contact} />
            <Route path="*" component={NotFound} />
        </Switch>
    );
}