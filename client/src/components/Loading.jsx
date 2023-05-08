import React from "react";
import { PuffLoader } from "react-spinners";

const Loading = () => {
  const override = {
    color: "#000",
    loading: true,
  };

  return (
    <div>
      <PuffLoader
        color={override.color}
        loading={override.loading}
        cssOverride={override}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
