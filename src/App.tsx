import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import type { Technology } from "./types/technology";
import TechnologyCard from "./components/TechnologyCard";
import Stack from "./components/Stack";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import heroImage from "./assets/banner-stack.png";

import "./App.css";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/technologies.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load technologies");
        }

        return res.json();
      })
      .then((data: Technology[]) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        toast.error("Failed to load technologies!");
      });
  }, []);

  const handleAddToStack = (technology: Technology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(
        `${technology.name} is already in your stack!`
      );
      return;
    }

    setStack((previousStack) => [
      ...previousStack,
      technology,
    ]);

    toast.success(
      `${technology.name} added to your stack!`
    );
  };

  const handleRemove = (id: string) => {
    const technology = stack.find(
      (item) => item.id === id
    );

    setStack((previousStack) =>
      previousStack.filter(
        (item) => item.id !== id
      )
    );

    if (technology) {
      toast.info(
        `${technology.name} removed from your stack!`
      );
    }
  };

  const handleRemoveAll = () => {
    if (stack.length === 0) {
      toast.warning("Your stack is already empty!");
      return;
    }

    setStack([]);
    toast.error(
      "All technologies removed from your stack!"
    );
  };

  if (loading) {
    return (
      <div className="loading">
        <h2>Loading technologies...</h2>
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      <main>

        {/* HERO SECTION */}
        <section className="hero" id="home">

          <div className="hero-content">

            <p className="hero-small-title">
              BUILD YOUR FUTURE
            </p>

            <h1>
              Build Your Ideal
              <span>Development Stack</span>
            </h1>

            <p className="hero-description">
              Explore frontend, backend, database, and
              tooling options, compare them side by side,
              and put together the stack that fits your
              next project.
            </p>

            <div className="hero-buttons">

              <button
                className="primary-button"
                onClick={() => {
                  document
                    .getElementById("technologies")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}
              >
                Explore Technologies
              </button>

              <button
                className="secondary-button"
                onClick={() => {
                  document
                    .getElementById("technologies")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}
              >
                Learn More
              </button>

            </div>

          </div>


          {/* HERO IMAGE */}
          <div className="hero-visual">

            <img
              src={heroImage}
              alt="Development stack illustration"
              className="hero-image"
            />

          </div>

        </section>


        {/* TECHNOLOGY SECTION */}
        <section
          className="technology-section"
          id="technologies"
        >

          <div className="section-title">

  <h2>
    Explore the <span>Technologies</span>
  </h2>

  <p>
    Pick one technology per category to build your ideal stack.
  </p>

</div>


          <div className="content-layout">

            {/* TECHNOLOGY CARDS */}
            <div className="technology-grid">

              {technologies.map((technology) => (

                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  onAdd={handleAddToStack}
                  isAdded={stack.some(
                    (item) =>
                      item.id === technology.id
                  )}
                />

              ))}

            </div>


            {/* YOUR STACK */}
            <Stack
              stack={stack}
              onRemove={handleRemove}
              onRemoveAll={handleRemoveAll}
            />

          </div>

        </section>

      </main>


      {/* FOOTER */}
      <Footer />

    </div>
  );
}

export default App;