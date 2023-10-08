import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";

const Addict = () => {
  return (
    <div>
        <Header></Header>
        <Navbar></Navbar>
      <label className="swap swap-flip text-9xl">
        {/* this hidden checkbox controls the state */}
        <input type="checkbox" />

        <div className="swap-on">😈</div>
        <div className="swap-off">😇</div>
      </label>
    </div>
  );
};

export default Addict;
