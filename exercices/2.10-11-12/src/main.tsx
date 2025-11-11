import React from 'react'
import ReactDOM from "react-dom/client";
import './index.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import App from './components/Main/App'
import HomePage from './page/HomePage';
import CinemaPage from './page/CinemaPage';
import MovieListPage from './page/MovieListPage';
import AddMoviePage from './components/pages/AddMoviePage';
import MoviePage from './page/MoviePage';

const router=createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children:[
      {
        path:"",
        element:<HomePage />,
      },

      {
        path:"cinemas",
        element:<CinemaPage />,
      },

      {
        path:"movie-list",
        element:<MovieListPage />
      },
      {
        path:"add-movie",
        element:<AddMoviePage/>
      },
      {
        path:"movies/:id",
        element:<MoviePage/>
      },
      

    ],
  },

])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>  
  </React.StrictMode>
);