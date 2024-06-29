---
layout: default
title: Food Delivery Turtlebot
---

<style>
  .back-button {
    font-size: 1em;
    display: inline-block;
    margin-bottom: 20px;
    text-decoration: none;
    color: #000;
    background-color: #f1f1f1;
    padding: 10px 20px;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .content {
    width: 120%;
  }

  .img-shadow {
    width: 500px; /* Adjust the width as needed */
    height: auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

    /* Mobile Styles */
  @media (max-width: 768px) {
    .content {
      width: 100%; /* 모바일 화면에서는 100%로 변경 */
    }

    .img-shadow {
      width: 100%; /* 이미지도 모바일 화면에 맞게 100%로 변경 */
    }
  }
</style>

<a href="{{ '/' | relative_url }}" class="back-button">← Back to Main Page</a>

<div class="content">
  <h2>Food Delivery Turtlebot</h2>
  <img src="{{ '/images/automatic food delivery robot.gif' | relative_url }}" class="img-shadow">
  <p>This project aims to develop an automatic food delivery robot using the Turtlebot 3 Waffle Pi and Open Manipulator X. The robot navigates to a locker using SLAM (Simultaneous Localization and Mapping) and LiDAR sensors, and identifies the exact location of the locker’s button and the food item using AR markers. The robot opens the locker door and picks up the item, then uses global localization to determine its position and returns to the original location to place the item down.</p>

  <p>The project is divided into four main parts. First, the robot creates a map of its environment using LiDAR and SLAM, and navigates to the locker using the navigation module. Second, the robot uses camera calibration and AR marker recognition to accurately detect and move to the positions of the locker button and the food item. Third, the MoveIt library is utilized to control the robotic arm for opening the door and picking up the item. Lastly, the robot performs global localization to verify its position and returns to the starting point.</p>
</div>
