import * as React from "react";

export function UseEffect(params: {
  effect: React.EffectCallback;
  dependency?: any[];
}) {
  React.useEffect(params.effect, params.dependency || []);
  return null;
}
