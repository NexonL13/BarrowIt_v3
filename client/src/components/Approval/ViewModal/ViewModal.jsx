const ViewModal = () => {
    return (
        <> 
        <input type="checkbox" id="purpose" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-xl">
          <h3 className="font-bold text-lg">Purpose</h3>
          <p className="py-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, aliquid! Blanditiis atque nostrum fugit, officia doloribus impedit! Mollitia, debitis nostrum.</p>
          <div className="modal-action">
            <label htmlFor="purpose" className="btn">Close</label>
          </div>
        </div>
      </div>
      </>
     )
}
 
export default ViewModal;