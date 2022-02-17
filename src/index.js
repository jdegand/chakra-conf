import React from 'react';
import ReactDOM from 'react-dom';
import { ColorModeScript } from '@chakra-ui/react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Routes, Route } from "react-router-dom";
const LazyVenue = React.lazy(()=> import('./routes/venue'));
const LazySpeakers = React.lazy(()=> import('./routes/speakers'));
const LazySchedule = React.lazy(()=> import('./routes/schedule'));
const LazySponsors = React.lazy(()=> import('./routes/sponsors'));
const LazyForm = React.lazy(()=> import('./routes/form'));
const LazyReserved = React.lazy(()=> import('./routes/reserved'));
const LazyConduct = React.lazy(()=> import('./routes/conduct'));
const LazyHome = React.lazy(()=> import('./routes/home'));

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
            <Route index element={<React.Suspense fallback="Loading..."><LazyHome /></React.Suspense>} />
            <Route path="schedule" element={<React.Suspense fallback="Loading..."><LazySchedule /></React.Suspense>} />
            <Route path="conduct" element={<React.Suspense fallback="Loading..."><LazyConduct /></React.Suspense>} />         
            <Route path="venue" element={<React.Suspense fallback="Loading..."><LazyVenue /></React.Suspense>} />
            <Route path="speakers" element={<React.Suspense fallback="Loading..."><LazySpeakers /></React.Suspense>} />
            <Route path="sponsors" element={<React.Suspense fallback="Loading..."><LazySponsors /></React.Suspense>} />
            <Route path="form" element={<React.Suspense fallback="Loading..."><LazyForm /></React.Suspense>} />
            <Route path="reserved" element={<React.Suspense fallback="Loading..."><LazyReserved /></React.Suspense>} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();