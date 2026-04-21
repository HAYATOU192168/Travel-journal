


export default function Entry(props) {
  return (
    <article className="journal-entry">
      <div className="main-image-container">
        <img className="main-image" src={props.imageUrl} alt={props.title} />
      </div>

      <div>
        <span>{props.location}</span>

        <a href={props.googleMapsUrl} target="_blank">
          View on Google Maps
        </a>

        <h2>{props.title}</h2>

        <p>
          {props.startDate} - {props.endDate}
        </p>

        <p>{props.description}</p>
      </div>
    </article>
  );
}