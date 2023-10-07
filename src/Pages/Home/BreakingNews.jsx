import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex">
      <button className="btn btn-secondary">Breaking News</button>
      <Marquee pauseOnHover={true} speed={130}>
        <Link className="mr-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat cum
          incidunt voluptas quidem, quia quisquam nam commodi velit minima
          reiciendis!
        </Link>
        <Link className="mr-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat cum
          incidunt voluptas quidem, quia quisquam nam commodi velit minima
          reiciendis!
        </Link>
        <Link className="mr-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat cum
          incidunt voluptas quidem, quia quisquam nam commodi velit minima
          reiciendis!
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
