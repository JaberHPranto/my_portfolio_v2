import { useRef } from "react";

export function useLetterRef() {
  const lettersRef = useRef();
  lettersRef.current = [];
  return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
}
