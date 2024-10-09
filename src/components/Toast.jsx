// Toast.js
import React from 'react';
import classNames from 'classnames';

const Toast = ({ type, message }) => {
  const toastClasses = classNames(
    'px-4 py-3 rounded-lg shadow-lg text-black flex items-center space-x-2',
    {
      'bg-green-500': type === 'success',
      'bg-red-500': type === 'error',
      'bg-blue-500': type === 'info',
      'bg-yellow-500': type === 'warning',
      'bg-gray-500': !type, // Default style if no type is provided
    }
  );

  return (
    <div className={toastClasses}>
      <span>{message}</span>
    </div>
  );
};

export default Toast;
