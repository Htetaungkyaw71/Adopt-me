import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import store from "./store";

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
  return (
    <BrowserRouter>
      <div
        className="m-0 p-0"
        style={{
          background:
            "url(http://pets-images.dev-apis.com/pets/wallpaperB.jpg)",
        }}
      >
        <QueryClientProvider client={queryclient}>
          <Provider store={store}>
            <Suspense
              fallback={
                <div className="loading-pane">
                  <h2 className="loader">🐶</h2>
                </div>
              }
            >
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
            </Suspense>
          </Provider>
        </QueryClientProvider>
      </div>
    </BrowserRouter>
  );
}
export default App;
