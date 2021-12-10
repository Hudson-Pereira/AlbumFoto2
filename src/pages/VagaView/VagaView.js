import React, { useState, useEffect } from "react";
import Api from "../../api/api";
import "react-responsive-modal/styles.css";

const PhotoView = (props) => {
  const _id = props.match.params.id;
  const [photo, setPhoto] = useState({});

  useEffect(() => {
    getPhotoById();
  }, []);

  const getPhotoById = async () => {
    const response = await Api.fetchGetById(_id);
    const result = await response.json();
    setPhoto(result);
    console.log(photo.src.original);
  };

  return (
    <div className="container_home flex-grow-1">
      <div className="row">
        <div className="col" id="img">
          <img id="gd" src={photo.src.original} alt={photo.src.original} />
        </div>
      </div>
    </div>
  );
};

export default PhotoView;
