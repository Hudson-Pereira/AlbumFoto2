import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import Api from "../../../api/api";

const List = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getPhotos();
  }, []);

  const getPhotos = async () => {
    const response = await Api.fetchGetAll();
    console.log(response);
    setPhotos(response);
    console.log(photos);
  };

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
      {photos.map((id, index) => (
        <Card data={id} key={index} />
      ))}
    </div>
  );
};

export default List;
