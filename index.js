import * as __SNOWPACK_ENV__ from './_snowpack/env.js';
import.meta.env = __SNOWPACK_ENV__;

import React from "./_snowpack/pkg/react.js";
import ReactDOM from "./_snowpack/pkg/react-dom.js";
import {useQuery, QueryClient, QueryClientProvider} from "./_snowpack/pkg/react-query.js";
const queryClient = new QueryClient();
function App() {
  const {isLoading, error, data} = useQuery("repoData", () => fetch("https://api.github.com/repos/arybins/snowdev").then((res) => res.json()));
  if (isLoading)
    return "Loading...";
  if (error)
    return "An error has occurred: " + error.message;
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, data.name), /* @__PURE__ */ React.createElement("p", null, data.description), /* @__PURE__ */ React.createElement("strong", null, "👀 ", data.subscribers_count), " ", /* @__PURE__ */ React.createElement("strong", null, "✨ ", data.stargazers_count), " ", /* @__PURE__ */ React.createElement("strong", null, "🍴 ", data.forks_count), /* @__PURE__ */ React.createElement("div", null, isLoading ? "Updating..." : ""));
}
ReactDOM.render(/* @__PURE__ */ React.createElement(React.StrictMode, null, /* @__PURE__ */ React.createElement(QueryClientProvider, {
  client: queryClient
}, /* @__PURE__ */ React.createElement(App, null))), document.getElementById("root"));
if (undefined /* [snowpack] import.meta.hot */ ) {
  undefined /* [snowpack] import.meta.hot */ .accept();
}
