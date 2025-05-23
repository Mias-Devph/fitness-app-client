import React, { useContext, useState, useEffect } from "react";
import { Container, Button, Spinner, Col, Row } from "react-bootstrap";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

import { UserContext } from "../context/UserContext"; // adjust path if needed
import WorkoutModal from "../components/WorkoutModal";
import WorkoutCard from "../components/WorkoutCard";

const notyf = new Notyf();

export default function WorkoutsPage() {
  const { token } = useContext(UserContext);

  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Modal state
  const [modalShow, setModalShow] = useState(false);
  const [editWorkout, setEditWorkout] = useState(null);



  // Fetch workouts on load
  useEffect(() => {
    if (!token) return;
    fetchWorkouts();
  }, [token]);

  async function fetchWorkouts() {
    setLoading(true);
    try {
      const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/workouts/getMyWorkouts`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Failed to fetch workouts");
      const data = await res.json();
      setWorkouts(data.workouts);
    } catch (err) {
      notyf.error(err.message || "Error fetching workouts");
    } finally {
      setLoading(false);
    }
  }

  // Add or update workout handler
  async function handleSubmitWorkout(workoutData) {
    try {
      let res;
      if (editWorkout) {
        // update
        res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/workouts/updateWorkout/${editWorkout._id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(workoutData),
        });
      } else {
        // add
        res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/workouts/addWorkout`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(workoutData),
        });
      }

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to save workout");
      }

      const result = await res.json();

      if (editWorkout) {
        // Update in local state
        setWorkouts((prev) =>
          prev.map((w) => (w._id === editWorkout._id ? result.updatedWorkout || result : w))
        );
        notyf.success("Workout updated");
      } else {
        setWorkouts((prev) => [...prev, result]);
        notyf.success("Workout added");
      }
      setModalShow(false);
      setEditWorkout(null);
    } catch (err) {
      notyf.error(err.message);
    }
  }

  // Delete workout handler
  async function handleDeleteWorkout(id) {
    if (!window.confirm("Are you sure you want to delete this workout?")) return;

    try {
      const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/workouts/deleteWorkout/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to delete workout");
      }
      setWorkouts((prev) => prev.filter((w) => w._id !== id));
      notyf.success("Workout deleted");
    } catch (err) {
      notyf.error(err.message);
    }
  }

  // Toggle complete/done status handler
  async function handleToggleComplete(id, toComplete) {
    // If toComplete = true, patch status to completed, else reset to pending (assumption)
    try {
      let res;
      if (toComplete) {
        res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/workouts/completeWorkoutStatus/${id}`, {
          method: "PATCH",
          headers: { Authorization: `Bearer ${token}` },
        });
      } else {
        // If user toggles off, reset status to 'pending'
        res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/workouts/updateWorkout/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ status: "pending" }),
        });
      }

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to update status");
      }
      const result = await res.json();
      const updatedWorkout = result.updatedWorkout || result.updatedworkout || result;

      setWorkouts((prev) =>
        prev.map((w) => (w._id === id ? updatedWorkout : w))
      );
      notyf.success("Status updated");
    } catch (err) {
      notyf.error(err.message);
    }
  }

  return (
    <Container className="py-4">
      <h2 className="mb-4">My Workouts</h2>

      <Button
        id="addWorkout"
        variant="dark"
        className="mb-3"
        onClick={() => {
          setEditWorkout(null);
          setModalShow(true);
        }}
      >
        Add Workout
      </Button>

      {loading ? (
        <div className="text-center my-5">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : workouts.length === 0 ? (
        <p>You have no workouts yet.</p>
      ) : (
        <Row className="g-4">
		  {workouts.map((workout) => (
		    <Col key={workout._id} xs={12} sm={6} md={4} lg={3}>
		      <WorkoutCard
		        workout={workout}
		        onEdit={(w) => {
		          setEditWorkout(w);
		          setModalShow(true);
		        }}
		        onDelete={handleDeleteWorkout}
		        onToggleComplete={handleToggleComplete}
		      />
		    </Col>
		  ))}
		</Row>
      )}

      <WorkoutModal
        show={modalShow}
        onHide={() => {
          setModalShow(false);
          setEditWorkout(null);
        }}
        onSubmit={handleSubmitWorkout}
        initialData={editWorkout}
      />
    </Container>
  );
}
