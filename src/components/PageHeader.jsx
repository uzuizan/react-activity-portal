export default function PageHeader({ number, title, description }) {
  return (
    <div className="page-heading">
      <span className="eyebrow">ACTIVITY {number}</span>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
