import Image from "next/image";
export default function Support() {
  return (
    <section className="support-section grid-col-3">
      <div className="hero-card">
        <div className="hero-icon">
          <Image src="/products/yoghurt-cup.png" alt="side cup" fill />
        </div>
        <div className="card-text">
          <h4 className="title">Sippy Cards</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis,
            quam?
          </p>
        </div>
      </div>
      <div className="hero-card">
        <div className="hero-icon">
          <Image src="/products/yoghurt-cup.png" alt="side cup" fill />
        </div>
        <div className="card-text">
          <h4 className="title">Sippy Cards</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis,
            quam?
          </p>
        </div>
      </div>
      <div className="hero-card">
        <div className="hero-icon">
          <Image src="/products/yoghurt-cup.png" alt="side cup" fill />
        </div>
        <div className="card-text">
          <h4 className="title">Sippy Cards</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis,
            quam?
          </p>
        </div>
      </div>
    </section>
  );
}
