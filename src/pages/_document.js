import Document, { Html, Head, Main, NextScript } from "next/document";
import Img from "../assets/titleIcon.svg";
class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <title>Deep Point Lab</title>
          <link rel="shortcut icon" href={Img} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
