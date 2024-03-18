import React from "react";

type PageNotFoundProps = {
  children?: React.ReactNode;
};

const PageNotFound: React.FC<PageNotFoundProps> = () => {
  return (
    <div>
      <h1>Page not found 😢</h1>
    </div>
  );
};
export default PageNotFound;
