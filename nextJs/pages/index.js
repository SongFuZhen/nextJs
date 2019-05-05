import React from "react";
import Head from "next/head";
import Link from "next/link";

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = { randomNo: null };
    }

    static async getInitialProps({ req }) {
        const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
        return { userAgent };
    }

    render() {
        const testES6 = { test: 1, test2: 2, test3: 3 };

        const { test, ...others } = testES6;

        const testFunc = () => {
            return <div>Good Man</div>;
        };

        return (
            <div>
                <Head>
                    <title>Test Next Header</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                Hello World
                <br />
                {this.props.userAgent}
                <br />
                <Link href={{ pathname: "/about", query: { name: "test" } }}>
                    <a>About</a>
                </Link>
                <br />
                <br />
                <br />
                {/* {...others} */}
                {testFunc()}
                <br />
                {Object.keys(others).map(d => (
                    <p>{d}</p>
                ))}
            </div>
        );
    }
}
