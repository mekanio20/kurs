<template>
    <div class="min-h-screen bg-black text-white p-8">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold text-center mb-8" style="color: #FFC300;">
          Terms of Reference for the Online Course Project
        </h1>
        <br><br>
        <p class="mb-4">
          <strong>General Description of the Functionality:</strong>
        </p>
        
        <h2 class="text-2xl font-semibold mb-4" style="color: #FFC300;">1. “Buy Course” Button</h2>
        <ul class="list-disc ml-6 mb-4">
          <li>When clicking on the “Buy Course” button, the page redirects the user to WhatsApp (to the link to the manager).</li>
        </ul>
  
        <h2 class="text-2xl font-semibold mb-4" style="color: #FFC300;">2. Access Control in Admin Panel</h2>
        <ul class="list-disc ml-6 mb-4">
          <li>Manager through admin panel assigns the user access to the course.</li>
        </ul>
  
        <h2 class="text-2xl font-semibold mb-4" style="color: #FFC300;">3. Definitions</h2>
        <p class="mb-4">The following definitions apply:</p>
        <ul class="list-disc ml-6 mb-4">
          <li><strong>Course:</strong> consists of modules.</li>
          <li><strong>Module:</strong> consists of lessons.</li>
          <li><strong>Lesson:</strong> contains study material (video, text, etc.) and homework.</li>
        </ul>
  
        <h2 class="text-2xl font-semibold mb-4" style="color: #FFC300;">4. Homework</h2>
        <p class="mb-4">Types of homework:</p>
        <ul class="list-disc ml-6 mb-4">
          <li><strong>Text-based:</strong> Answer questions.</li>
          <li><strong>Files:</strong> Maximum file size is 10 MB.</li>
        </ul>
        <p class="mb-4">When the user clicks “Do Homework”, a window opens with fields to enter text or upload a file. Once submitted, the assignment goes to the teacher.</p>
  
        <h2 class="text-2xl font-semibold mb-4" style="color: #FFC300;">Chat for the Student</h2>
        <h3 class="text-xl font-semibold mb-2" style="color: #FFC300;">1. Chat Structure</h3>
        <ul class="list-disc ml-6 mb-4">
          <li><strong>Individual chat with mentor:</strong> It is intended for communication with the teacher on personal issues.</li>
          <li><strong>Homework chat:</strong> Separate tab for discussion and tracking of homework status.</li>
        </ul>
  
        <h3 class="text-xl font-semibold mb-2" style="color: #FFC300;">2. Auto-Message from the Teacher after Purchasing the Course</h3>
        <p class="mb-4">“I am your mentor. Write here if you have individual questions or if you don't understand something.”</p>
  
        <h2 class="text-2xl font-semibold mb-4" style="color: #FFC300;">Chat for the Teacher</h2>
        <h3 class="text-xl font-semibold mb-2" style="color: #FFC300;">1. Chat Structure</h3>
        <ul class="list-disc ml-6 mb-4">
          <li><strong>Individual chats with students:</strong> To answer questions or clarify material.</li>
          <li><strong>Homework Chat:</strong> To display homework assignments from students and allow them to check them.</li>
        </ul>
  
        <h3 class="text-xl font-semibold mb-2" style="color: #FFC300;">2. Homework Answers</h3>
        <ul class="list-disc ml-6 mb-4">
          <li><strong>Accepted:</strong> The assignment is credited.</li>
          <li><strong>Rejected:</strong> With a reason (added to the rejected assignment).</li>
        </ul>
  
        <h3 class="text-xl font-semibold mb-2" style="color: #FFC300;">3. Process after Rejection</h3>
        <ul class="list-disc ml-6 mb-4">
          <li>A message with the reason for rejection is sent to the student in the “Homework” chat.</li>
          <li>The student gets the option to submit the corrected assignment through the same interface.</li>
        </ul>
  
        <h2 class="text-2xl font-semibold mb-4" style="color: #FFC300;">Notifications</h2>
        <ul class="list-disc ml-6 mb-4">
          <li>The teacher receives a notification when the student submits a new or corrected assignment.</li>
          <li>The student is notified about the status of the assignment (“Accepted” or “Rejected”).</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TermsOfReferencePage',
  }
  </script>
  
  <style scoped>
  /* Add any custom styles here if necessary */
  </style>
  