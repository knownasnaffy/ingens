import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import MyRoutes from "./routes/MyRoutes";

export function render(url: string) {
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <MyRoutes />
      </StaticRouter>
    </StrictMode>
  );
  return { html };
}
