import Popup from "reactjs-popup";
import "../style/popup.css";

const PopupComponent = () => (
  <Popup
    trigger={<button className="button"> Buy </button>}
    modal
    nested
  >
    {(close) => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>        <div className="header"> Want to buy it?</div>
        <div className="content">
          {" "}
         
        </div>
        <div className="actions">
          <Popup
            trigger={<button className="button"> Yes </button>}
            position="top center"
            nested
          >
            <span>
              You item is added to the cart CONGRATULATIONS.
            </span>
          </Popup>
          <button
            className="button"
            onClick={() => {
              console.log("modal closed ");
              close();
            }}
          >
            Nah
          </button>
        </div>
      </div>
    )}
  </Popup>
);

export default PopupComponent;
