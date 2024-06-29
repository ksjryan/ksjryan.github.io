---
layout: default
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

<h2>Virtual Arm Visualization to Reduce In-Car VR Motion Sickness</h2>
<img src="{{ '/images/Virtual Arm Visualization to Reduce In-Car VR Motion Sickness.gif' | relative_url }}" class="img-shadow">

<p>The Virtual Arm Visualization to Reduce In-Car VR Motion Sickness project addresses the challenge of mitigating motion sickness experienced by passengers using VR content in moving vehicles. This study aims to resolve the visual and somatosensory mismatch that causes discomfort by developing a system where a virtual arm, extending from the user's shoulder position, is visualized through a VR head-mounted display (HMD). Unlike drivers who receive ample visual and somatosensory cues through vehicle control, passengers often lack these references, leading to motion sickness.</p>

<p>The core hypothesis of this research is that combining visual representation and somatosensory stimulation of a virtual arm will induce a sense of ownership over the virtual arm in users, thereby reducing motion sickness. The virtual arm receives real-time data from the vehicle's steering wheel movements, simulating the act of steering in the virtual environment. Additionally, the system employs Electrical Muscle Stimulation (EMS) to provide synchronized stimuli to the user's actual arm muscles, enhancing the realism and integration of the virtual experience. This approach aims to bridge the sensory gap for passengers, offering a more comfortable and immersive VR experience within moving vehicles.</p>

</div>
