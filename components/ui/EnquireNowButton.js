"use client";

import { useEnquiryModal } from "./EnquiryModal";

export default function EnquireNowButton({ className, title, children }) {
  const { openModal } = useEnquiryModal();

  return (
    <button type="button" onClick={() => openModal(title)} className={className}>
      {children}
    </button>
  );
}
