import { useState } from 'react';
import { useRouter } from 'next/router';
import HomeSidebar from './HomeSidebar';

function HistoryForm() {
  return (
    <div class="relative container h-screen w-screen p-6 bg-lockplus-backgroundBlue visible text-lockplus-textGray">
        <div class="text-md">
            Lock History 
        </div>
        <div class="text-md">
            Upload photos for each user to add them to your lock. 
        </div>
    </div>
  );
}
export default HistoryForm;
