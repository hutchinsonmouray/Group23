import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {BrowserRouter,Routes, Route} from "react-router-dom";

import Home from "./Home";
import LearnSS from "./LearnSS";

// import setManagement from "./setManagement";
import App from "./App";

import LectureInterface from "./lectureInterface";
import SetInterface from "./setInterface";

import bindings from 'bindings'
var addon = bindings('parser')

console.log(addon.parseIntoCardsFromAudio("Also Keyword good definition awesome period"));

function getId() {
    return undefined;
}

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                {/*<Route path="/" element={<App/>}>*/}
                {/*</Route>*/}
                <Route path="/LearnSS" element={<LearnSS/>}>
                </Route>
                <Route path="/" element={<Home/>}>
                </Route>
                <Route path="/upload_set" element={<App/>}>
                </Route>
                {/*<Route path="/upload_lecture" element={<lectureManagement/>}>*/}
                {/*</Route>*/}
                {/*<Route path="/create_set" element={<UploadSet/>}>*/}
                {/*</Route>*/}
                <Route path="/set_interface" element={<SetInterface/>}>
                </Route>
                <Route path="/lecture_interface" element={<LectureInterface/>}>
                </Route>
                {/*<Route path="/Profile" element={<Profile/>}>*/}
                {/*</Route>*/}
                {/*add any new pages here*/}
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
