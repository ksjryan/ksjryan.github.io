---
layout: default
title: Air Click
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
    width: 150%;
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

<h2>Air Click</h2>
<img src="{{ '/images/Air Click.gif' | relative_url }}" class="img-shadow">
<p>The Air Click project aims to develop a system that maximizes mid-air interaction. This system is designed to improve targeting accuracy and speed by aligning the user's eye and fingertip in a straight line. As a result, users can achieve precise and rapid control in various interactions such as virtual keyboards and web surfing. Air Click utilizes Leap Motion sensors to accurately track the fingertips and OpenCV-based vision technology to track facial markers, thereby determining the position of the eyes. This allows for real-time tracking of both the fingertip and eye positions, enabling precise targeting along the straight line connecting these two points.</p>

<p>Air Click focuses particularly on enhancing touchless interaction in public spaces. In environments using large screens, users can easily manipulate desired positions without physically reaching out. This approach provides an intuitive and user-friendly interface, offering a natural and efficient experience for the user. By significantly improving the accuracy and speed of touchless interaction, Air Click has the potential to become a future-oriented solution for public space interactions.</p>
</div>
