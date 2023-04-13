import { Helmet } from "react-helmet";

const CustomHelmet = ({
  title = "",
  description = "a project made with youtube api adn react js",
}) => {
  return (
    <Helmet>
      <title>{title} -MyTube</title>
      <meta name="description" content={description} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
};

export default CustomHelmet;
