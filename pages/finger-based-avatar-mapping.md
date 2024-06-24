---
layout: default
title: Finger-based Miniature Avatar Mapping
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
</style>


<a href="{{ '/' | relative_url }}" class="back-button">← Back to Main Page</a>

<div class="content">

<h2>Finger-based Miniature Avatar Mapping</h2>
<img src="{{ '/images/Finger-based miniature avatar mapping.gif' | relative_url }}" class="img-shadow">

<p>The Finger-based Miniature Avatar Mapping project aims to develop a novel natural user interface (NUI) for navigation in the metaverse using finger gestures. This system, termed the "Finger Avatar," leverages monocular and stereo vision-based skeletal tracking to detect and map 21 finger joint landmarks. Implemented in a Unity environment, the system utilizes Python's OpenCV Hand Tracking Module to perform real-time tracking, with data transmitted via socket communication. Enhancements such as proportional-derivative (PD) control and the use of multiple cameras improve tracking accuracy, allowing for more precise 3D joint localization compared to single webcam setups. The integration of these advancements enables seamless interaction and control within the metaverse, with realistic avatar movements driven by inverse kinematics.</p>

<p>Furthermore, the project explores additional interface modalities, including touch-based inputs on mobile devices and full-hand motion tracking using VR HMD-integrated cameras and VR gloves. These interfaces provide diverse interaction methods, accommodating various user preferences and enhancing the overall experience. The project also includes a testbed for industrial scenarios, creating metaverse environments using point cloud data (PCD) captured by depth cameras. This comprehensive approach ensures a versatile and immersive user experience, bridging the gap between physical and virtual worlds.</p>

</div>
