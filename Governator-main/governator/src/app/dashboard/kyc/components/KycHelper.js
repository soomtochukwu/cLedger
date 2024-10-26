//

export default function ListItem({ text }) {
  return (
    <ul className=" text-xs inline-flex items-center gap-3">
      <span className="badge badge-success p-1 h-1"></span>
      <li>{text}</li>
    </ul>
  );
}
