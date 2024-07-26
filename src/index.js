import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import ReactDOM from 'react-dom/client';
import './pages/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import About from "./routes/About";
import Leaders from './routes/Leaders'
import Industry from './routes/Industry';
import Agriculture from './routes/Agriculture';
import Education  from './routes/Education';
import Culture from './routes/Culture';

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "leaders",
        element: <Leaders/>,
      },
      {
        path: "industry",
        element: <Industry />,
      },
      {
        path: "agriculture",
        element: <Agriculture />,
      },
      {
        path: "education",
        element: <Education />,
      },
      {
        path: "culture",
        element: <Culture />,
      },
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
