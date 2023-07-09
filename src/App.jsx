import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import adoptedPetContext from "./AdoptedPetContext";
import { Suspense, lazy, useState } from "react";

const Detail = lazy(() => import("./Detail"));
const SearchParams = lazy(() => import("./SearchParams"));

function App() {
  let queryclient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        cacheTime: Infinity,
      },
    },
  });
  const adoptedPet = useState(null);
  return (
    <div
      className="m-0 p-0"
      style={{
        background: "url(http://pets-images.dev-apis.com/pets/wallpaperB.jpg)",
      }}
    >
      <BrowserRouter>
        <QueryClientProvider client={queryclient}>
          <adoptedPetContext.Provider value={adoptedPet}>
            <Suspense
              fallback={
                <div className="loading-pane">
                  <h2 className="loader">🐶</h2>
                </div>
              }
            ></Suspense>
            <header className="mb-10 w-full bg-gradient-to-b from-yellow-400 via-orange-500 p-7 text-center">
              <Link
                className="text-6xl text-white hover:text-gray-200"
                to="/"
                element={<SearchParams />}
              >
                Adopt Me
              </Link>
            </header>
            <Routes>
              <Route path="/details/:id" element={<Detail />} />
              <Route path="/" element={<SearchParams />} />
            </Routes>
          </adoptedPetContext.Provider>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
