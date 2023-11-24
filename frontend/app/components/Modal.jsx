const Modal = ({modalOpen, setModalOpen, children}) => {
  return (
    <div className={`modal ${modalOpen && "modal-open"}`} role="dialog">
        <div className="modal-box">
            <div className="modal-action">
                <button onClick={()=>setModalOpen(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </div>
            {children}
        </div>
    </div>
  )
}

export default Modal