/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalCard = ({ handleClose, show, post, author }) => {
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="button-card ">
          <Modal.Title className="text-white display-6">
            {post?.title}{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-card text-white">
          <h5>Detalles</h5>
          <p>{post?.body}</p>
          <hr />
          {author ? (
            <div>
              <p>
                <strong>Nombre del Autor:</strong> {author.name}{" "}
              </p>
            </div>
          ) : (
            <p>Cargando informacion...</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            className="button-card border-0"
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalCard;
