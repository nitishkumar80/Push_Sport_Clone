import { motion } from "framer-motion";
import "./BestInClass.css"; // Import CSS file

const BestInClass = () => {
  return (
    <section className="best-in-class">
      <motion.div
        className="best-card"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="best-container">
          {/* Left Section */}
          <div className="best-left">
            <h2 className="best-heading">Find out Why we’re the best-in-class</h2>
            <p className="best-description">
              Our team of expert coaches, combined with technology, nurtures future champions
              by delivering outstanding results for educational institutions.
            </p>
          </div>

          {/* Right Section - Stats */}
          <div className="best-right">
            {[
              { count: "6000+", label: "Total Students" },
              { count: "100+", label: "Number of Coaches" },
              { count: "20+", label: "Number of Academies" },
              { count: "50+", label: "State Players" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="best-stat"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <h2 className="stat-number">{item.count}</h2>
                <p className="stat-label">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default BestInClass;
