import React from "react";

const WorkoutSessions = () => {
  return (
    <section
      className="workout_session"
      style={{
        padding: "40px",
        backgroundColor: "#000",
        textAlign: "center",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        className="wrapper"
        style={{
          marginBottom: "50px",
          padding: "20px",
          backgroundColor: "#1c1c1c",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
        }}
      >
        <h1 style={{ fontSize: "2em", color: "#0095ff", marginBottom: "10px" }}>
          TOP WORKOUT SESSION
        </h1>
        <p style={{ fontSize: "1em", lineHeight: "1.6", marginBottom: "20px" }}>
          Join us for an intense, full-body workout designed to increase
          strength, endurance, and flexibility. Our trainers focus on helping
          you reach your fitness goals, whether you're looking to burn fat,
          build muscle, or improve overall fitness.
        </p>
        <img
          src="/img5.jpg"
          alt="workout"
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
      </div>
      <div
        className="wrapper"
        style={{
          padding: "20px",
          backgroundColor: "#1c1c1c",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
        }}
      >
        <h1 style={{ fontSize: "2em", color: "#0095ff", marginBottom: "10px" }}>
          FEATURED BOOTCAMPS
        </h1>
        <p style={{ fontSize: "1em", lineHeight: "1.6", marginBottom: "20px" }}>
          Discover our high-energy bootcamps tailored for all fitness levels.
          Each bootcamp is uniquely designed to challenge your body and push you
          toward achieving your fitness goals in a supportive, motivating
          environment.
        </p>
        <div
          className="bootcamps"
          style={{
            display: "grid",
            gap: "20px",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          <div
            style={{
              padding: "20px",
              
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h4 style={{ fontSize: "1.2em", color: "#0095ff", marginBottom: "10px" }}>
              Strength and Conditioning Bootcamp
            </h4>
            <p style={{ fontSize: "0.9em", lineHeight: "1.6" }}>
              This bootcamp combines weightlifting, resistance training, and
              cardiovascular exercises to build strength, increase endurance,
              and burn calories. Perfect for all levels, from beginner to
              advanced.
            </p>
          </div>
          <div
            style={{
              padding: "20px",
             
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h4 style={{ fontSize: "1.2em", color: "#0095ff", marginBottom: "10px" }}>
              HIIT (High-Intensity Interval Training) Bootcamp
            </h4>
            <p style={{ fontSize: "0.9em", lineHeight: "1.6" }}>
              Get your heart pumping with our HIIT sessions that alternate
              between intense bursts of activity and rest periods. HIIT is
              perfect for improving cardiovascular health and burning fat in a
              shorter workout time.
            </p>
          </div>
          <div
            style={{
              padding: "20px",
             
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h4 style={{ fontSize: "1.2em", color: "#0095ff", marginBottom: "10px" }}>
              Core and Stability Bootcamp
            </h4>
            <p style={{ fontSize: "0.9em", lineHeight: "1.6" }}>
              This bootcamp focuses on strengthening your core muscles, which
              improves posture, balance, and stability. Ideal for those wanting
              to enhance their core strength and overall body control.
            </p>
          </div>
          <div
            style={{
              padding: "20px",
              
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h4 style={{ fontSize: "1.2em", color: "#0095ff", marginBottom: "10px" }}>
              Functional Fitness Bootcamp
            </h4>
            <p style={{ fontSize: "0.9em", lineHeight: "1.6" }}>
              Work on movements that mimic real-life activities to improve
              functional strength. This bootcamp includes compound exercises
              that enhance mobility, coordination, and muscle balance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;

