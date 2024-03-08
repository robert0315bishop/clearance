import { Suspense } from "react";

const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<div>Error while loading page!</div>}>
      <Component {...props} />
    </Suspense>
  );

export default Loadable;