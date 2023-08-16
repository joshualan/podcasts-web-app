import { SampleFeature } from "features/sample-feature";
import { RouteObject } from "lib/router";

export const routes: RouteObject[] = [
  {
    path: "/sample-feature",
    element: <SampleFeature />,
  },
  {
    path: "/",
    element: <p>Alan Estrada's Fullstack Template</p>,
  },
];
