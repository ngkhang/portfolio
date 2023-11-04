import React from 'react';
// 👇import sharing component

function DefaultLayout({ children } : { children: React.ReactElement }) {
  return (
    <div className="">
      {/* Header */}
      {children}
      {/* Footer */}
    </div>
  );
}

export default DefaultLayout;
