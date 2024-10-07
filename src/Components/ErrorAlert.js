import React from 'react'

const ErrorAlert = (error, searchTerm) => {
  return (
    <div class="alert alert-dismissible alert-danger">
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
      <strong>Oh snap!</strong>`{searchTerm}`
      <a href="#" class="alert-link">
        Change a few things up
      </a>
      `{error}` and try submitting again.
    </div>
  )
}

export default ErrorAlert
