import { useState } from 'react';

export default function OrderForm() {
  return (
    <>
      <div className="h-full w-full border-lockplus-blue border-2 rounded-lg">
        <input
          type="text"
          className="h-12 w-64 bg-lockplus-opacGray bg-opacity-50 ml-4 mt-4 border-2 border-lockplus-blue rounded-xl pl-4 placeholder-lockplus-placeholderGray font-light font-lockplus"
          placeholder="First Name"
        />
      </div>
    </>
  );
}
