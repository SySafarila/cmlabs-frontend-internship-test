import Navbar from "../Navbar";

const MainLayout = (props) => {
  return (
    <>
      <Navbar />
      <div className="mt-[65px]">{props.children}</div>
    </>
  );
};

export default MainLayout;
