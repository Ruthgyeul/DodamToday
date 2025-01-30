"use client";

import { useState, useEffect } from "react";
import Loading from "../components/common/Loading";

export default function HomePage() {
  const [isLoad, setLoading] = useState(true);
  const LOADING_TIME = 750;

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), LOADING_TIME);
    return () => clearTimeout(timer);
  }, []);

  if (isLoad) {
    return <Loading loadingTime={LOADING_TIME} />;
  }

  return (
    <section className="hero">
      <h2>Build Fast, Deploy Faster</h2>
      <p>Welcome to our simple landing page built with Next.js.</p>
      <button className="cta-button">Get Started</button>
    </section>
  );
}