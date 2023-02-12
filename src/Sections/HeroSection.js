import "./Sections.css";
export const HeroSection = () => {
  return (
    <div className="container-fluid d-flex flex-column mt-5">
      <div>
        <img
          src="https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/62d1b8e2c048c969e47514c7_hero-top.png"
          class="img-fluid"
          width="1450"
          alt="humankind landing photo 2"
        />
      </div>
      <div>
        <img
          src="https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/62d1b8e32e16f6b524514c60_hero-bottom.png"
          class="img-fluid img-hero"
          width="1450"
          alt="humankind landing photo 1"
        />
      </div>
    </div>
  );
};
