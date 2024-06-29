---
layout: default
title: Reinforcement Learning Based Redirected Walking
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

<h2>Reinforcement Learning Based Redirected Walking</h2>
<img src="{{ '/images/6 gain.gif' | relative_url }}" class="img-shadow">
<p>The Reinforcement Learning Based Redirected Walking project focuses on optimizing user navigation within virtual environments (VEs) to seamlessly fit within the physical constraints of real-world (RW) spaces. This project addresses the challenge of limited physical space that often restricts natural movement in VR by employing redirected walking techniques. These techniques subtly alter the user's path in the VE to keep them within the boundaries of the RW space without them noticing the adjustments, thereby enhancing the VR experience's immersion and naturalness.</p>

<p>The project utilizes reinforcement learning (RL) to train a system that adjusts translation and curvature gains to guide users effectively. Two methods are employed: the first leverages universal human behaviors, such as avoiding inaccessible areas, to predefine accessible paths and provide appropriate gain values, while the second incorporates random human gait patterns and the artificial potential field (APF) algorithm to simulate repulsion forces from walls. Training was conducted using the Proximal Policy Optimization (PPO) algorithm on the Unity platform, with hyperparameters tuned for efficient learning. The results demonstrated that the system could dynamically adjust user paths, ensuring smooth navigation and collision avoidance within a 10m x 10m RW space, although further refinement and human factor experiments are necessary to fully validate the system's usability and immersion benefits.</p>

</div>
