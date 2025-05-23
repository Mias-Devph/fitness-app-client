import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const WorkoutModal = ({ show, onHide, onSubmit, initialData }) => {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setDuration(initialData.duration);
    } else {
      setName("");
      setDuration("");
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, duration, _id: initialData?._id });
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{initialData ? "Edit Workout" : "Add Workout"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="workoutName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="workoutDuration" className="mt-3">
            <Form.Label>Duration</Form.Label>
            <Form.Control
              type="text"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-3">
            {initialData ? "Update" : "Add"}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default WorkoutModal;
