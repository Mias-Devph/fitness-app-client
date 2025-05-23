import React from "react";
import { FaRunning, FaFireAlt, FaHeartbeat, FaMedal, FaPlus, FaTint, FaDumbbell } from "react-icons/fa";

const Dashboard = () => {
  // Sample fitness data
  const fitnessData = {
    steps: 8432,
    calories: 1245,
    heartRate: 72,
    activeMinutes: 45,
    weeklyGoal: 75,
    waterIntake: 5,
    workoutsThisWeek: 4,
    lastWorkout: {
      type: "Morning Run",
      time: "Today, 7:30 AM",
      details: "5.2 km • 32 min • 420 kcal"
    }
  };

  return (
    <div className="bg-light min-vh-100">
      {/* Your existing Navbar will be inserted here automatically */}

      {/* Main Content */}
      <main className="container py-4">
        {/* Welcome Banner */}
        <div className="alert alert-info mb-4">
          <h2 className="h4 mb-0">Welcome back! Ready for your next workout?</h2>
        </div>

        {/* Daily Stats */}
        <section className="mb-5">
          <h2 className="h4 mb-3">Today's Activity</h2>
          <div className="row g-4">
            {/* Steps */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-start border-primary border-4">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h3 className="card-title h6 text-muted">Steps</h3>
                      <p className="h2 mb-0">{fitnessData.steps.toLocaleString()}</p>
                      <small className="text-muted">Goal: 10,000</small>
                    </div>
                    <FaRunning className="text-primary fs-3" />
                  </div>
                  <div className="progress mt-3" style={{ height: "8px" }}>
                    <div 
                      className="progress-bar bg-primary" 
                      role="progressbar" 
                      style={{ width: `${Math.min(100, (fitnessData.steps/10000)*100)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Calories */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-start border-danger border-4">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h3 className="card-title h6 text-muted">Calories</h3>
                      <p className="h2 mb-0">{fitnessData.calories}</p>
                      <small className="text-muted">Burned today</small>
                    </div>
                    <FaFireAlt className="text-danger fs-3" />
                  </div>
                </div>
              </div>
            </div>

            {/* Heart Rate */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-start border-success border-4">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h3 className="card-title h6 text-muted">Heart Rate</h3>
                      <p className="h2 mb-0">{fitnessData.heartRate}</p>
                      <small className="text-muted">bpm (resting)</small>
                    </div>
                    <FaHeartbeat className="text-success fs-3" />
                  </div>
                </div>
              </div>
            </div>

            {/* Active Minutes */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-start border-warning border-4">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h3 className="card-title h6 text-muted">Active Minutes</h3>
                      <p className="h2 mb-0">{fitnessData.activeMinutes}</p>
                      <small className="text-muted">Goal: 60 min</small>
                    </div>
                    <FaMedal className="text-warning fs-3" />
                  </div>
                  <div className="progress mt-3" style={{ height: "8px" }}>
                    <div 
                      className="progress-bar bg-warning" 
                      role="progressbar" 
                      style={{ width: `${Math.min(100, (fitnessData.activeMinutes/60)*100)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Weekly Progress and Quick Actions */}
        <div className="row">
          {/* Weekly Progress */}
          <div className="col-lg-8 mb-4">
            <div className="card">
              <div className="card-body">
                <h2 className="h4 mb-3">Weekly Progress</h2>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <p className="mb-0">You've completed {fitnessData.weeklyGoal}% of your weekly goal</p>
                  <button className="btn btn-sm btn-outline-primary">View Details</button>
                </div>
                <div className="progress" style={{ height: "10px" }}>
                  <div 
                    className="progress-bar progress-bar-striped bg-success" 
                    role="progressbar" 
                    style={{ width: `${fitnessData.weeklyGoal}%` }}
                  ></div>
                </div>
                
                <div className="row mt-4 g-3">
                  <div className="col-md-6">
                    <div className="p-3 bg-light rounded">
                      <h3 className="h6 text-muted">Water Intake</h3>
                      <p className="h4 mb-0">{fitnessData.waterIntake} <small className="text-muted">glasses</small></p>
                      <FaTint className="text-info mt-2" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="p-3 bg-light rounded">
                      <h3 className="h6 text-muted">Workouts This Week</h3>
                      <p className="h4 mb-0">{fitnessData.workoutsThisWeek} <small className="text-muted">sessions</small></p>
                      <FaDumbbell className="text-primary mt-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="col-lg-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h2 className="h4 mb-3">Quick Actions</h2>
                <div className="d-grid gap-2">
                  <button className="btn btn-outline-primary text-start d-flex align-items-center">
                    <FaPlus className="me-2" /> Start New Workout
                  </button>
                  <button className="btn btn-outline-success text-start d-flex align-items-center">
                    <FaPlus className="me-2" /> Log Meal
                  </button>
                  <button className="btn btn-outline-info text-start d-flex align-items-center">
                    <FaPlus className="me-2" /> Track Water
                  </button>
                  <button className="btn btn-outline-warning text-start d-flex align-items-center">
                    <FaPlus className="me-2" /> Add Measurement
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Last Workout */}
        <section className="card">
          <div className="card-body">
            <h2 className="h4 mb-3">Last Workout</h2>
            <div className="list-group">
              <div className="list-group-item">
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">{fitnessData.lastWorkout.type}</h5>
                  <small>{fitnessData.lastWorkout.time}</small>
                </div>
                <p className="mb-1">{fitnessData.lastWorkout.details}</p>
                <button className="btn btn-sm btn-outline-primary mt-2">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white py-3 mt-4">
        <div className="container text-center">
          <p className="mb-0 small">&copy; {new Date().getFullYear()} FitTrack Fitness App</p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;