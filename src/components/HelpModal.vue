<!-- src/components/HelpModal.vue -->
<template>
    <div class="modal fade" id="helpModal" tabindex="-1" role="dialog" aria-labelledby="helpModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="helpModalLabel">How to Use the App</h5>
            <button type="button" class="close d-none" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <ul>
              <li>Select travel tips by clicking on the icons.</li>
              <li>See your sustainability score at the progress bar.</li>
              <li>Enter your email and date to receive the selected tips.</li>
              <li>Click "Send" to receive a confirmation message.</li>
            </ul>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  </script>
  
  <style scoped>
  .modal-header {
    background-color: #f8f9fa;
    border-bottom: 1px solid #e0e0e0;
  }

  .modal-title {
    font-weight: bold;
  }
  
  ul {
    list-style: disc;
    margin-left: 20px;
  }
  
  li {
    margin-bottom: 10px;
  }
  </style>
  