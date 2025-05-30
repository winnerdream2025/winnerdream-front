import React from 'react';

function NotificationItem({ message, date }) {
  return (
    <div className="p-2 border-b">
      <p className="text-sm">{message}</p>
      <span className="text-xs text-gray-500">{new Date(date).toLocaleString()}</span>
    </div>
  );
}

export default NotificationItem;


