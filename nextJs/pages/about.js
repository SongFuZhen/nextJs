import Link from "next/link";

const About = ({ stars }) => (
    <div>
        Next stars: {stars}
        <br />
        <Link href="/">
            <a>Home</a>
        </Link>{" "}
    </div>
);

About.getInitialProps = async ({ req }) => {
    const res = await fetch("https://api.github.com/repos/zeit/next.js");
    const json = await res.json();
    return { stars: json.stargazers_count };
};

export default About;
