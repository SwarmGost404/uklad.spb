type Props = {
    date: string;
    time: string;
    place: string;
    inf: string;
  };

export const LocalCard: React.FC<Props> = ({date, time, place, inf}) => {
    return (
        <div className="card">
            <div className="date">{date}</div>
            <div className="time">{time}</div>
            <div className="place">{place}</div>
            <div className="inf">{inf}</div>
        </div>
    )
}