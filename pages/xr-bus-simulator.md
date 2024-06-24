---
layout: default
title: XR Screen Bus Simulator
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

<h2>XR Screen Bus Simulator</h2>
<img src="{{ '/images/Bus Simulator.gif' | relative_url }}" class="img-shadow">
<p>The XR Screen Bus Simulator project aims to create a sophisticated simulation environment that integrates depth data and 2D RGB imagery to enhance the realism and accuracy of mixed reality (MR) content. This system employs Intel RealSense D435 cameras to capture depth data and 360-degree cameras for comprehensive environmental coverage. By combining these data sources, the simulator can produce a seamless visual representation where distant objects are rendered using 2D RGB imagery, while closer objects are rendered with depth-enhanced 3D data. This approach addresses common issues of pixel voids and ensures high fidelity in visual simulations.</p>

<p>To achieve precise vehicle movement tracking, the project utilizes a fusion of IMU and GPS data processed through a Kalman filter. This fusion compensates for the inherent inaccuracies of individual sensors, providing accurate real-time tracking of the vehicle's trajectory. The simulator's integration within Unity allows for dynamic rendering of MR content based on these data inputs, enabling realistic and interactive experiences. This project not only enhances the accuracy and realism of MR simulations but also provides a scalable framework for future applications in public transportation and interactive display systems.</p>

</div>




