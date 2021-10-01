import styled from 'styled-components';

const Modal = ({ handleClose, show, poster }) => {
  const showHideClassName = show ? 'display-block' : 'display-none';

  return (
    <ModalContainer className={showHideClassName} data-testid="modal">
      <Section className="modal-main">
        <img src={poster} alt={poster} data-testid="poster"/>
        <CloseButton type="button" onClick={handleClose}>
          x
        </CloseButton>
      </Section>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

const Section = styled.div`
  position: fixed;
  background: white;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 0;
  right: -20px;
  cursor: pointer;
  background: white;
  padding: 5px 8px;
  font-weight: bold;
  border-radius: 5px;
`;

export default Modal;
