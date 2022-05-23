import Link from "@mui/material/Link";

const list = [
  {
    name: "SAVING THE AMAZON",
    link: "https://savingtheamazon.org/en",
  },
  {
    name: "AMAZON CONSERVATION",
    link: "https://www.amazonconservation.org/",
  },

  {
    name: "DOLLAR DONATIONS",
    link: "https://dollardonations.org/product/rainforest-foundation-1-dollar/",
  },
  {
    name: "FAIR VENTURES",
    link: "https://fairventures.org/en/what-we-do/",
  },
  {
    name: "YACHANA",
    link: "https://www.yachana.com/",
  },
];

export default function HelpList() {
  return (
    <ul>
      {list.map(({ name, link }) => (
        <li key={name} style={{ margin: "32px 0 0 48px" }}>
          <Link
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            sx={{
              fontSize: "1.5rem",
            }}
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
