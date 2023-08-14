import Image from "next/image";
import Link from "next/link";
export default function Support({ data }) {
  return (
    <section className="support-section grid-col-3">
      {data.splice(0, 3).map((product) => {
        return (
          <Link href={`/detailed-page/${product.slug}`} className="hero-card">
            <div className="hero-icon">
              <Image src={product.image} alt="side cup" fill />
            </div>
            <div className="card-text">
              <h4 className="title">{product.title}</h4>
              <p>{product.detailed_description}</p>
            </div>
          </Link>
        );
      })}

      {/* <div className="hero-card">
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
      </div> */}
    </section>
  );
}
