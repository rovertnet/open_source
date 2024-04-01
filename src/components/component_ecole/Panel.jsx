import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Panel = () => {
  const icome = 95;
  const expense = 58;
  const bonnus = 20;

  return (
    <>
      <section className="mx-20 my-10">
        <div className="grid md:grid-cols-3 py-4 rounded-md gap-5">
          <div className="flex items-center gap-5 w-full justify-between md:px-10 bg-gradient-to-r from-pink to-middark py-5 rounded-md shadow-md shadow-middark">
            <div>
              <div className="text-xl font-semibold text-white">Classe A</div>
              <div className=" text-sm text-white">Première Classe</div>
              <div className="mt-8">
                <Link to="/classa">
                  <FaExternalLinkAlt className=" text-purple text-xl font-bold" />
                </Link>
              </div>
            </div>

            <div style={{ width: 80, height: 80 }}>
              <CircularProgressbar
                value={icome}
                text={`${icome}%`}
                styles={buildStyles({
                  textColor: "white",
                  pathColor: "#e2b2ed",
                  trailColor: "gray",
                })}
              />
            </div>
          </div>

          <div className="flex items-center gap-5 w-full justify-between md:px-10 bg-dark py-5 rounded-md shadow-md shadow-middark">
            <div>
              <div className="text-xl  font-semibold text-white">Classe B</div>
              <div className=" text-sm text-white">Deuxième Classe</div>
              <div className="mt-8">
                <Link to="/scool/classb">
                  <FaExternalLinkAlt className=" text-purple text-xl font-bold" />
                </Link>
              </div>
            </div>

            <div style={{ width: 80, height: 80 }}>
              <CircularProgressbar
                value={expense}
                text={`${expense}%`}
                styles={buildStyles({
                  textColor: "white",
                  pathColor: "#08fdc0",
                  trailColor: "gray",
                })}
              />
            </div>
          </div>

          <div className="flex items-center gap-5 w-full justify-between md:px-10 bg-dark py-5 rounded-md shadow-md shadow-middark">
            <div>
              <div className="text-xl  font-semibold text-white">Classe C</div>
              <div className=" text-sm text-white">Troisième Classe</div>
              <div className="mt-8">
                <Link to="/classc">
                  <FaExternalLinkAlt className=" text-purple text-xl font-bold" />
                </Link>
              </div>
            </div>

            <div style={{ width: 80, height: 80 }}>
              <CircularProgressbar
                value={bonnus}
                text={`${bonnus}%`}
                styles={buildStyles({
                  textColor: "white",
                  pathColor: "#fd8b08",
                  trailColor: "gray",
                })}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Panel;
