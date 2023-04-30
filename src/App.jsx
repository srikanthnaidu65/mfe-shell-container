import React, { Suspense } from "react";
import "./App.scss";

const LeftNavComponent = React.lazy(() => import("LeftNav/LeftNav"));
const TopNavComponent = React.lazy(() => import("TopNav/TopNav"));
const ItemDetailsComponent = React.lazy(() =>import("ItemDetails/ItemDetails"));

export default function () {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section>
        <TopNavComponent />
        <div className="flex">
          <LeftNavComponent />
          <ItemDetailsComponent />
        </div>
      </section>
    </Suspense>
  );
}
