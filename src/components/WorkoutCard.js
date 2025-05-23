import React from "react";
import { Card, Button, Form } from "react-bootstrap";
import { FaClock, FaCheckCircle, FaHourglassHalf, FaCalendarAlt } from "react-icons/fa";


const WorkoutCard = ({ workout, onEdit, onDelete, onToggleComplete }) => {
  const { name, duration, status, dateAdded, _id } = workout;

  const statusIcon = status === "completed" ? (
    <FaCheckCircle className="text-success me-2" />
  ) : (
    <FaHourglassHalf className="text-warning me-2" />
  );

  // console.log("Created At:", dateAdded);

  return (
    <Card className="h-100 shadow-lg">
      <Card.Body>
        <Card.Title>{name}</Card.Title>

        <Card.Text className="d-flex align-items-center">
          <FaClock className="me-2" />
          {duration}
        </Card.Text>

        <Card.Text className="d-flex align-items-center">
          {statusIcon}
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Card.Text>

        <Card.Text className="d-flex align-items-center">
          <FaCalendarAlt className="me-2" />
          {new Date(dateAdded).toLocaleDateString()}
        </Card.Text>

        <Form.Check
          type="switch"
          id={`status-switch-${_id}`}
          label={status === "completed" ? "Completed" : "Pending"}
          checked={status === "completed"}
          onChange={(e) => onToggleComplete(_id, e.target.checked)}
          className="mb-2"
        />

        <div className="d-flex gap-3">
          <Button variant="primary" size="sm" onClick={() => onEdit(workout)}>
            Edit
          </Button>
          <Button variant="danger" size="sm" onClick={() => onDelete(_id)}>
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default WorkoutCard;
