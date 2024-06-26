"use client";

import { useEffect, useState } from "react";
import WorkspaceModal from "../modals/workspace-modal";
import ShortenerModal from "../modals/shortener-modal";
import { DeleteModal } from "../modals/delete-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);
  if (!isMounted) return null;
  return (
    <>
      <WorkspaceModal />
      <ShortenerModal />
      <DeleteModal />
    </>
  );
};
