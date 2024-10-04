export const levels = [
  {
    level: 1,
    perks: [
      "Can participate on up to 100 public votes, and 15 private votes",
      "Create up to 10 public polls",
    ],
    requirements: ["Your BVN or NIN", "Your visual identity"],
    done: true,
  },
  {
    level: 2,
    perks: [
      "Can participate on up to 500 public votes, and 50 private votes",
      "Can create up to 50 public votes and 15 private votes",
    ],
    requirements: [
      "Your proof of address",
      "Your recent 3 months utility bill",
    ],
    done: false,
  },
  {
    level: 3,
    perks: [
      "Can participate on up to 500 public votes, and 50 private votes",
      "Can create up to 50 public votes and 15 private votes",
    ],
    requirements: [
      "Your proof of address",
      "Your recent 3 months utility bill",
    ],
    done: false,
  },
];

export function ListItem({ text }) {
  return (
    <ul className=" text-xs inline-flex items-center gap-3">
      <span className="badge badge-success p-1 h-1"></span>
      <li>{text}</li>
    </ul>
  );
}
