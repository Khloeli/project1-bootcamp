import { useState } from "react";
import Modal from "react-bootstrap/Modal";

export default function NewTask(props) {
  // 'show' state to handle the showing / hiding of the modal (or pop up box)
  const [show, setShow] = useState(false);
  const handleClose = (event) => {
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const handleFreshInput = () => {
    setName("");
    setDescription("");
    setCategory("");
    setPriority("");
  };

  // 'name' 'description' 'category' 'priority' states to manage the initial values of the form
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");

  // 'task' state to store details of the task
  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: Date.now(),
      name: name,
      description: description,
      category: category,
      priority: priority,
      completed: false,
    };
    // calls the addTask function that has been passed down from the parent component as a prop, and pushes the newTask object as the parameter
    props.addTask(newTask);
    handleClose();
    handleFreshInput();
  };

  return (
    <>
      <button
        type="button"
        class="btn btn-outline-light"
        onClick={handleShow}
        style={{ width: "100%" }}
      >
        + New Task
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className="Modal-header">
          <Modal.Title>Add New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body className="Modal-body">
          <form id="addNewTask" className="w-full max-w-sm">
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label htmlFor="name">Task Name</label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  required
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label htmlFor="description">Description</label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  id="description"
                  type="text"
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label htmlFor="category">Category</label>
              </div>
              <div className="md:w-2/3">
                <select
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  id="category"
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                  required
                >
                  <option value="" disabled>
                    Select category
                  </option>
                  <option value="Personal">Personal</option>
                  <option value="Work">Work</option>
                  <option value="School">School</option>
                  <option value="Home">Home</option>
                  <option value="Errands">Errands</option>
                </select>
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label htmlFor="priority">Priority</label>
              </div>
              <div className="md:w-2/3">
                <select
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  id="priority"
                  value={priority}
                  onChange={(e) => {
                    setPriority(e.target.value);
                  }}
                  required
                >
                  <option value="" disabled>
                    Select priority
                  </option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer className="Modal-footer">
          <button
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
            form="addNewTask"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
            form="addNewTask"
            onClick={handleSubmit}
            disabled={[name, category, priority].some((state) => state === "")}
          >
            Add
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
