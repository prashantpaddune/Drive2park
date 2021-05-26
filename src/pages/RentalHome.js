

import React from 'react';
import { motion } from "framer-motion"
import RentalCard from 'components/rental/RentalCard';
import { connect } from 'react-redux'
import { fetchRentals } from 'actions';
import RentalSearchInput from "../components/rental/RentalSearchInput";

class RentalHome extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchRentals());
  }

  renderRentals = (rentals) => 
    rentals.map(rental => 
      <div key={rental._id} className="col-md-3">
          <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
          >
              <RentalCard rental={rental}/>
          </motion.div>
      </div>
    );
  
  render() {
    const { rentals } = this.props;

      var TxtRotate = function(el, toRotate, period) {
          this.toRotate = toRotate;
          this.el = el;
          this.loopNum = 0;
          this.period = parseInt(period, 10) || 2000;
          this.txt = '';
          this.tick();
          this.isDeleting = false;
      };

      TxtRotate.prototype.tick = function() {
          var i = this.loopNum % this.toRotate.length;
          var fullTxt = this.toRotate[i];

          if (this.isDeleting) {
              this.txt = fullTxt.substring(0, this.txt.length - 1);
          } else {
              this.txt = fullTxt.substring(0, this.txt.length + 1);
          }

          this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

          var that = this;
          var delta = 300 - Math.random() * 100;

          if (this.isDeleting) { delta /= 2; }

          if (!this.isDeleting && this.txt === fullTxt) {
              delta = this.period;
              this.isDeleting = true;
          } else if (this.isDeleting && this.txt === '') {
              this.isDeleting = false;
              this.loopNum++;
              delta = 500;
          }

          setTimeout(function() {
              that.tick();
          }, delta);
      };

      window.onload = function() {
          var elements = document.getElementsByClassName('txt-rotate');
          for (var i=0; i<elements.length; i++) {
              var toRotate = elements[i].getAttribute('data-rotate');
              var period = elements[i].getAttribute('data-period');
              if (toRotate) {
                  new TxtRotate(elements[i], JSON.parse(toRotate), period);
              }
          }
          // INJECT CSS
          var css = document.createElement("style");
          css.type = "text/css";
          css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
          document.body.appendChild(css);
      };
    return (
        <div className="new-container">
            <div className="container-logo mt-5">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                    }}
                >
                    <img
                        src="/images/drive2park.png"
                        alt="..."
                        style={{width:"200px", height:"200px",display:"block", margin:"auto"}}/>

                    <motion.h1
                        className="page-title text-center"
                        style={{color: "rgb(96,115,180)"}}
                    >
                        Drive2park
                    </motion.h1>

                    <motion.h5
                        className="text-center"
                        style={{fontWeight: '600'}}
                        initial={{ y: 0, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                    >
                        <span
                            className="txt-rotate"
                            data-period="1000"
                            data-rotate='[ " To Find Parking Space...", " To Book Parking Space..."]'/>
                    </motion.h5>
                </motion.div>
            </div>
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
            >
            <RentalSearchInput/>
            </motion.div>

            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
            >
            <div className="card-list mt-4">
                <div className="row justify-content-center">
                    { this.renderRentals(rentals) }
                </div>
            </div>
            </motion.div>
      </div>
    )
  }
}

const mapStateToProps = ({rentals}) => {
  return {
    rentals: rentals.items
  }
}

export default connect(mapStateToProps)(RentalHome);