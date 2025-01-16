import './App.css'
import './styles/Header_Module.css'
import './styles/Common.css'
import './styles/Home_Module.css'
import './styles/Login_Module.css'

"use client";
import { ErrorBoundary } from "react-error-boundary";

import AppRoutes from './routes/AppRoutes'

function App() {

  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1> */}

      {/* <ErrorBoundary fallback={<div>Something went wrong</div>}> */}
      <AppRoutes />

      {/* </ErrorBoundary> */}

    </>
  )
}

export default App
