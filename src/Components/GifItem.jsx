export const GifItem = ({ title, url }) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p className="text-slate-900">{title}</p>
    </div>
  );
};
