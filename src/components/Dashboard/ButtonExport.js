import React from "react";
import PropTypes from "prop-types";
import pdf from "../../assets/Pdf.png";
import doc from "../../assets/Doc.png";
import pptx from "../../assets/Pptx.png";
import psd from "../../assets/Psd.png";
import "../../sass/ButtonExport.scss";

const Export = ({ style, hidden, value, handleChange }) => {
  return (
    <div className={style}>
      <div onClick={hidden} className="transparant"></div>
      <div className="export">
        <h5>EXPORT</h5>
        <div className="tipe-file">
          <div className="file">
            <img src={doc} alt="doc" />
            <p>as Document</p>
          </div>
          <div className="file">
            <img src={pdf} alt="doc" />
            <p>as PDF</p>
          </div>
          <div className="file">
            <img src={psd} alt="doc" />
            <p>as PSD</p>
          </div>
          <div className="file">
            <img src={pptx} alt="doc" />
            <p>as Presentation</p>
          </div>
        </div>
        <h5>Save To</h5>
        <div className="folder">
          <input
            type="text"
            placeholder="Folder"
            value={value}
            onChange={handleChange}
          />
          <span className="tombol" href="#">
            Send
          </span>
        </div>
        <span className="tombol-export" href="#">
          Export
        </span>
      </div>
    </div>
  );
};

Export.propTypes = {
  style: PropTypes.string,
  hidden: PropTypes.func
};

export default Export;
