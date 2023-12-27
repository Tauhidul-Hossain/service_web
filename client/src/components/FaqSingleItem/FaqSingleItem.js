import React from "react";

const FaqSingleItem = ({
  according_heading,
  collapse_num,
  title,
  ans_text,
}) => {
  return (
    <>
      <div className="accordion-item">
        <h1 className="accordion-header" id={according_heading}>
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${collapse_num}`}
            aria-expanded="false"
            aria-controls={collapse_num}
          >
            {title}
          </button>
        </h1>
        <div
          id={collapse_num}
          className="accordion-collapse collapse"
          aria-labelledby={according_heading}
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">{ans_text}</div>
        </div>
      </div>
    </>
  );
};

export default FaqSingleItem;
