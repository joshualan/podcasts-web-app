import { SampleFeature } from "features/sample-feature";
import { RouteObject } from "lib/router";
import { MainPage } from "features/";

export const routes: RouteObject[] = [
  {
    path: "/sample-feature",
    element: <SampleFeature />,
  },
  {
    path: "/",
    element: <MainPage />,
  },
];
