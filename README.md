
# ELEVATOR DISPATCH


## Overview

The Elevator Dispatch application enables users to test and analyze different elevator dispatch algorithms under various traffic conditions. It simulates passenger requests, elevator routing, and performance metrics to help evaluate algorithm efficiency and optimization strategies.

## Main Components and Functionalities
###  1. Traffic Configuration
  Allows users to select the elevator’s traffic pattern to define request frequency and density.

**Elements:**
  
Traffic Pattern:
  - Light Traffic
  - Normal  Traffic 
  - Heavy Traffic
  - Peak Hours

**Functionality:**
- Determines the number of passengers and how frequently requests appear.
- Affects simulation complexity and elevator movement.
		
### 2. Passenger Request 
  Displays the queue of passengers waiting for the elevator.

**Elements:**
- Passenger ID (P1, P2, etc.)
- Requested Floor – Floor the passenger wishes to go to.
- Request Time(s) – Timestamp (in seconds) showing when the passenger requested service.

**Functionality:**
- Updates dynamically based on the selected traffic pattern.
- Displays all active requests before simulation starts.
		
### 3. Algorithm Configuration
Allows users to configure the elevator’s dispatch algorithm and starting position.

**Elements:** 

Dispatch Algorithm: 
- FCFS (First Come First Served)
- SSTF (Shortest Seek Time First)
- SCAN (Elevator Algorithm)
- C - SCAN
- LOOK
- C - LOOK

Starting Floor: 
- Defines where the elevator begins operation ranging from 1-12.
    
**Functionality:**
- Determines how the elevator prioritizes and processes requests.
- The starting floor affects the total distance and wait time during simulation.

### 4. Run Simulation
Executes the elevator dispatch simulation.
	
**Elements:** 
- Run Simulation Button

**Functionality:**

When Click:
1. The simulation starts from the defined starting floor.
2. Requests are processed in the order determined by the selected algorithm.
3. The elevator moves between requested floors, updating total distance and time.
4. The Simulation Results and Floor Sequence Graph are generated.

### 5. Simulation Results Visualization
Displays the elevator’s movement pattern and calculated performance after the simulation run.
	
**Elements:**
Floor Sequence Chart:
- Shows the elevator’s movement trajectory across floors.
- Example path: Floor 1 → Floor 3 → Floor 2 → Floor 9 → Floor 5.
	
**Functionality:**
- Visually represents the elevator travel path.
- Provides a quick overview of algorithm behavior and movement order.

### 6. Simulation Results Metrics
Summarizes the results of the elevator dispatch algorithm.
	
**Elements:**
- Total Distance - Total number of floors travelled during the simulation.
- Average Wait Time - Average time passengers waited for the elevator.
- Throughput - Number of passengers served per time unit.
      
**Functionality:**
- Updates automatically after each simulation run.
- Used to compare efficiency between algorithms and configurations.
- “Simulation Complete” indicator confirms successful execution.

## Algorithm 
### 1. Selected Algorithm: FCFS (First Come, First Served)
Processes elevator requests in the order they arrive, the simplest and most intuitive scheduling policy.

**Fit World Scenario:**
- Low-traffic buildings for residential or small offices.
- Evenly distributed requests with minimal overlap.
- Works effectively in simple elevator systems with a single elevator serving a limited number of floors.
	
**Pros:**
- Ease of implementation, fairness, and predictability.
- Every request is served strictly in arrival order without any prioritization or complexity.

**Cons:** 
- May not minimize average waiting time.
- Inefficient for widely spaced floors
- Can cause long travel distances if requests alternate between far floors
 
 ### 2. Comparison: FCFS vs. SSTF (Shortest Seek Time First)

| **Criteria** | **FCFS (First Come First Serve)** | **SSTF (Shortest Seek Time First)** |
|--------------|-----------------------------------|-------------------------------------|
| **Logic**              | Serve requests by arrival order | Serve nearest request next |
| **Fairness**           | High — no starvation | Medium — possible starvation |
| **Average Wait Time**  | Higher | Lower |
| **Total Distance**     | Larger | Smaller |
| **Implementation Complexity** | Low | Moderate |
| **Risk of Starvation** | None | Possible for distant requests |


**Trade-offs:**
- FCFS(First Come First Serve) ensures fairness but may increase travel distance and average waiting time.
- SSTF(Shortest Seek Time First) reduces total distance and improves speed but may starve passengers whose requests are far from current elevator position.

	Therefore, for light traffic, FCFS(First Come First Serve) provides fairness and simplicity, while for heavy traffic, SSTF(Shortest Seek Time First) yields better efficiency but needs starvation control mechanisms.

### Conclusion
  The results show that the First Come, First Served (FCFS) algorithm is best suited for simple, low-traffic environments where fairness and predictability are prioritized. On the other hand, the Shortest Seek Time First (SSTF) algorithm demonstrates superior efficiency and reduced average waiting time, making it more fit for high-demand settings such as busy buildings with frequent elevator requests. The main trade-off between these two scheduling policies lies in balancing fairness and performance, while FCFS ensures that every request is handled in the order received, SSTF prioritizes efficiency, potentially leading to less fair service for some requests. For real-world applications, adopting a hybrid approach that combines the fairness of FCFS with the strengths of SSTF could provide a more balanced and effective elevator scheduling solution.
