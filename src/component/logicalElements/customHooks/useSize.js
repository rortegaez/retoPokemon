import { useState } from "react";

export const useSize = () => {
  const [sizefind, setSizefind] = useState(4);
  const [sizewhat, setSizewhat] = useState(9);

  const incrementFind = () => {
    if (sizefind >= 12) {
      return setSizefind(sizefind)
    } else {
      return setSizefind(sizefind + 4);
    }
  };

  const decrementFind = () => {
    if (sizefind <= 4) {
      return setSizefind(sizefind);
    } else {
      return setSizefind(sizefind - 4);
    }
  };

  const incrementWhat = () => {
    if (sizewhat >= 15) {
      return null;
    } else {
      return setSizewhat(sizewhat + 3);
    }
  };

  const decrementWhat = () => {
    if (sizewhat <= 3) {
      return null;
    } else {
      return setSizewhat(sizewhat - 3);
    }
  };

  return {
    sizefind,
    sizewhat,
    incrementFind,
    decrementFind,
    incrementWhat,
    decrementWhat,
  };
};