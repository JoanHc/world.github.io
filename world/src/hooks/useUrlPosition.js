import { useSearchParams } from "react-router-dom";

export function useUrlPosition() {
  const [searchParams] = useSearchParams();
  const position__lat = searchParams.get("position__lat");
  const position__lng = searchParams.get("position__lng");

  return [position__lat, position__lng];
}
