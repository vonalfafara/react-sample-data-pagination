import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Slideshow from './Slideshow';

const Dialog = ({isShow, images, onHandleDialogShow}) => {
  return (
    <>
      <Modal show={isShow} onHide={() => onHandleDialogShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Slideshow images={images} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => onHandleDialogShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => onHandleDialogShow(false)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Dialog