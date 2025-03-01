'use client';

import React from 'react';
import { toast } from 'sonner';

export default function Loading() {
  return (
    <button
      className="toast-button"
      onClick={() => {
        toast.loading('Loading…');
      }}
    >
      {/* Render toast */}
    </button>
  );
}