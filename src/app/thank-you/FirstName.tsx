"use client";

import { useEffect, useState } from "react";

/** Shows ", Rahul" after the visitor's first name saved by the contact form. */
export default function FirstName() {
  const [name, setName] = useState("");
  useEffect(() => {
    try {
      const n = sessionStorage.getItem("karmahubai-name");
      if (n) setName(n); // eslint-disable-line react-hooks/set-state-in-effect -- sessionStorage only exists on the client
    } catch {}
  }, []);
  return name ? <>, {name}</> : null;
}
