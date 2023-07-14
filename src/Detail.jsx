/* eslint-disable no-unused-vars */
import { useParams, useNavigate } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import Modal from "./Modal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { adopt } from "./AdoptPetSlice";
import { useGetPetQuery } from "./petApiService";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let { isLoading, data: pet } = useGetPetQuery(id);
  const [showModal, setShowModal] = useState(false);

  if (isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🐶</h2>
      </div>
    );
  }

  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {pet.state} {pet.city}
        </h2>
        <button onClick={() => setShowModal(true)}>Adopt {pet.name}</button>
        <p>{pet.description}</p>
        {showModal ? (
          <Modal>
            <div>
              <h1>Would you like to adopt {pet.name}?</h1>
              <div className="buttons">
                <button
                  onClick={() => {
                    dispatch(adopt(pet));
                    navigate("/");
                  }}
                >
                  Yes
                </button>
                <button onClick={() => setShowModal(false)}>No</button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    </div>
  );
};

function ErrorDetail(props) {
  return (
    <ErrorBoundary>
      <Detail {...props} />
    </ErrorBoundary>
  );
}

export default ErrorDetail;
