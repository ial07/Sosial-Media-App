const ParallaxBG = ({ children = "HOME" }) => {
  return (
    <>
      <div
        className="container-fluid"
        style={{
          backgroundImage: "url(" + "/img/pedes.jpg" + ")",
          backgroundAttachment: "fixed",
          padding: "100px 0px 75px 0px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          display: "block",
        }}
      >
        <h1 className="font-weight-bold text-center h1">{children}</h1>
      </div>
    </>
  );
};

export default ParallaxBG;
